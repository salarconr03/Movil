import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';

export default function App() {
  const [operacion, setOperacion] = useState('');

  const agregarTexto = (texto) => {
    setOperacion(operacion + texto);
  };

  return (
    <View style={styles.container}>
      <View style={styles.div_texto}>
        <Text id='operacion' style={styles.text}>{operacion}</Text>
      </View>
      <View style={styles.div_texto_2}>
        <Text style={styles.text_2}></Text>
      </View>
      <View style={styles.div_botones}>
        <View style={styles.div_fila}>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('ln')}>
            <Text style={styles.buttonText}>ln</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('^')}>
            <Text style={styles.buttonText}>^</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('√')}>
            <Text style={styles.buttonText}>√</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('(')}>
            <Text style={styles.buttonText}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto(')')}>
            <Text style={styles.buttonText}>)</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.div_fila}>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton}>
            <Text style={styles.buttonText}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton}>
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.div_fila}>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('×')}>
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('÷')}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.div_fila}>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.div_fila}>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={() => agregarTexto('%')}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton}>
            <Text style={styles.buttonText}>Ans</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 70, 
    margin: 50,
  },
  text_2: {
    color: '#fff',
    fontSize: 20, 
    margin: 35
  },
  div_texto: {
    //backgroundColor: 'red',
    flex: 2,
  },
  div_texto_2: {
    //backgroundColor: 'blue',
    flex: 1,
    alignItems: 'flex-end', 
  },
  div_botones: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3
  },
  div_fila: {
    flex: 1,
    flexDirection: 'row',
  },
  boton: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    margin: 6,
    borderBlockColor: '#fff'

  },
  buttonText: {
    color: '#000',
    fontSize: 25,
  },
});

