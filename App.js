import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {

  const [grocery, setGrocery] = useState('');
  const [groceryList, setGroceryList] = useState([]);

  const handleAdd = () => {
    console.log('Adding grocery:', grocery);
    setGroceryList((prevData) => [...prevData, { key: grocery }]);
    setGrocery('')
  }

  const handleClear = () => {
    setGroceryList([]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={grocery => setGrocery(grocery)} value={grocery}>
      </TextInput>
    <View style={{display: 'flex', flexDirection: 'row', marginTop: 40}}>
      <Button title='ADD' onPress={handleAdd}></Button>
      <Button title='CLEAR' onPress={handleClear}></Button>
    </View>
    <Text style={{fontSize:25, fontWeight: 'bold'}}>Shoppinglist</Text>
    <FlatList 
      style={styles.listItem}
      data={groceryList}
      renderItem={({item}) => <Text>{item.key}</Text>}
      keyExtractor={(item, index) => index.toString()} 
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100
  },

  input: {
    width:100,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listItem:{
    width: 100,
  }
});
