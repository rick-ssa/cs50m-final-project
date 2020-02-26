import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './assets/colors'

import PillsContainer from './components/PillsContainer';


export default function App() {
  
  const [pills, setPills] = useState(
    [{text:'Italian',onClose: 'hi', marginAround:4},{text:'Italian',onClose: 'hi', marginAround:4},{text:'Italian',onClose: 'hi', marginAround:4},{text:'Italian',onClose: 'hi', marginAround:4},{text:'Chinese',onClose: 'hi', marginAround:4}])
  function handleCloseClick(i) {
    setArr(()=>(arr.filter((v,index)=>{
      if(index!==i) {
        return true
      }

      return false
    })))
  }
  return (
    <View style={styles.container}>
     <PillsContainer pills = {pills} title='Cuisine' onAdd = {()=>console.log('you just did it')}/>
     <PillsContainer pills = {pills.map(v=>{return v.text==='Italian'? {...v,text:'American'}:v})}title='Diet' onAdd = {()=>console.log('you just did it')}/>
     <PillsContainer title='Intolerances' onAdd = {()=>console.log('you just did it')}/>
     <PillsContainer title='Excluded Ingredients' onAdd = {()=>console.log('you just did it')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
});
