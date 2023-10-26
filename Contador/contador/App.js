import React, { useState } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const aumetar = () => {
    setContador(contador + 1);
  };

  const disminuir = () => {
    setContador(contador - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{contador}</Text>
      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.btn} onPress={disminuir}>
          <Text style={styles.textBoton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={aumetar}>
          <Text style={styles.textBoton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo:{
    fontSize:50,
    color:'#fff',
    alignItems:'center',
    margin: 20,
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000',

  },
  subcontainer:{
    height: 50,
    weight: '100%',
    padding:10,
    flexDirection:'row'
  },
  btn:{
    flex: 1,
    height:100,
    width:100,
    padding:30,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#EA005E',
    margin: 20,
    borderRadius: 10,
  },
  textBoton:{
    fontSize:40,
    color: '#fff',
    fontWeight:'bold'
  },
  count:{
    flex1:1,
    justifyContent:'center',
    alignItems:'center',

  }

});