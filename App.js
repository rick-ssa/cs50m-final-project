import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './assets/colors'

import Pill from './components/Pill';


export default function App() {
  
  const [arr, setArr] = useState(['Italian','Mexican','African','Japanese','Brasilian','Gluten Free', 'Vegetarian','Vegan'])
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
      { arr.map((pillText,i) => {
        return <Pill onClose = {()=>handleCloseClick(i)} key = {i} text = {pillText} />
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT,
    alignItems: 'center',
    justifyContent:'space-around',
  },
});
