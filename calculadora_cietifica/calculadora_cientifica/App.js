import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

export default function App() {
  const [operacion, setOperacion] = useState('');
  const [resultado, setResultado] = useState('');
  const [ans, setAns] = useState('');


  const agregarTexto = (texto) => {
    if (texto === 'Ans') {
      setOperacion(operacion + ans);
    }else if(texto === '1/x' && operacion.length > 0){
      setOperacion('1/('+ operacion + ')');
    }else if(texto === '1/x' && operacion.length <= 0){
      setOperacion('');
    }else if(texto === '|x|'){
      setOperacion('|' + operacion + '|');
    }else if(texto === '|x|' && operacion.length <= 0){
      setOperacion('');
    }else {
      setOperacion(operacion + texto);
    }
  };

  function calcularResultado() {
    try {
      let expresion = operacion;
      let absoluto = false;
      let invtrig = false;

      if (expresion.startsWith("|") && expresion.endsWith("|")) {
        expresion = expresion.slice(1, -1);
        absoluto = true;
      }

      if (expresion.includes("arcsin(")||expresion.includes("arccs(")||expresion.includes("arctng(")){
        invtrig = true;
      }
      console.log(invtrig);
      expresion = expresion.replace(/\^/g, '**');
      expresion = expresion.replace(/÷/g, '/'); 
      expresion = expresion.replace(/√/g, 'Math.sqrt(');
      expresion = expresion.replace(/×/g, '*');
      expresion = expresion.replace(/π/g, 'Math.PI');
      expresion = expresion.replace(/log\(/g, 'Math.log10(');
      expresion = expresion.replace(/ln\(/g, 'Math.log(');
      expresion = expresion.replace(/sen\(/g, 'Math.sin((Math.PI/180)*');
      expresion = expresion.replace(/cos\(/g, 'Math.cos((Math.PI/180)*');
      expresion = expresion.replace(/tan\(/g, 'Math.tan((Math.PI/180)*');
      expresion = expresion.replace(/arcsin\(/g, 'Math.asin(');
      expresion = expresion.replace(/arccs\(/g, 'Math.acos(');
      expresion = expresion.replace(/arctng\(/g, 'Math.atan(');
      console.log(expresion);
  
      if (expresion.includes('Math.sqrt(')) {
        expresion += ')';
      }

      let res = eval(expresion);
      console.log(res);
  
      if (absoluto) {
        res = Math.abs(res); 
      }
  
      setResultado(res.toString());
      setAns(res.toString());
    } catch (error) {
      setResultado('Error');
    }
  }
  
  
  function borrarUltimoCaracter() {
    if (operacion.length > 0) {
      const nuevaOperacion = operacion.slice(0, -1);
      if (nuevaOperacion.startsWith("1/(")) {
        const contenidoDentroParentesis = nuevaOperacion.slice(3);
        setOperacion(contenidoDentroParentesis);
      }else if(nuevaOperacion.startsWith("|")){
        const valorabsoluto = nuevaOperacion.slice(1);
        setOperacion(valorabsoluto);
      }else if(nuevaOperacion.endsWith("ln")){
        setOperacion(nuevaOperacion.slice(0, -2));
      }else if(nuevaOperacion.endsWith("log")||nuevaOperacion.endsWith("sen")||nuevaOperacion.endsWith("cos")||nuevaOperacion.endsWith("tan")){
        setOperacion(nuevaOperacion.slice(0, -3));
      }else if(nuevaOperacion.endsWith("arcsin")||nuevaOperacion.endsWith("arctng")){
        setOperacion(nuevaOperacion.slice(0, -6));
      } else if(nuevaOperacion.endsWith("arccs")){
        setOperacion(nuevaOperacion.slice(0, -5));
      }else {
        setOperacion(nuevaOperacion);
      }
    }
  }

  function clear() {
    setOperacion('');
    setResultado('');
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.div_texto}>
        <Text id='operacion' style={styles.text}>{operacion}</Text>
      </View>
      <View style={styles.div_texto_2}>
        <Text style={styles.text_2}>{resultado}</Text>
      </View>
      <View style={styles.div_botones}>
        <View style={styles.div_fila}>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('log(')}>
            <Text style={styles.buttonText}>log</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('ln(')}>
            <Text style={styles.buttonText}>ln</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('Ans')}>
            <Text style={styles.buttonText}>Ans</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_operaciones} onPress={clear}>
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_operaciones} onPress={borrarUltimoCaracter}>
            <Text style={styles.buttonText}>DEL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.div_fila}>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('arctng(')}>
            <Text style={styles.buttonText}>arctan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('1/x')}>
            <Text style={styles.buttonText}>1/x</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('|x|')}>
            <Text style={styles.buttonText}>|x|</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('(')}>
            <Text style={styles.buttonText}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto(')')}>
            <Text style={styles.buttonText}>)</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.div_fila}>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('arccs(')}>
            <Text style={styles.buttonText}>arccos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('%')}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('^')}>
            <Text style={styles.buttonText}>^</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('√')}>
            <Text style={styles.buttonText}>√</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('÷')}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.div_fila}>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('arcsin(')}>
            <Text style={styles.buttonText}>arcsin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_numeros} onPress={() => agregarTexto('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_numeros} onPress={() => agregarTexto('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_numeros} onPress={() => agregarTexto('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('×')}>
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.div_fila}>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('tan(')}>
            <Text style={styles.buttonText}>tan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_numeros} onPress={() => agregarTexto('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_numeros} onPress={() => agregarTexto('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_numeros} onPress={() => agregarTexto('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.div_fila}>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('cos(')}>
            <Text style={styles.buttonText}>cos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_numeros} onPress={() => agregarTexto('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_numeros} onPress={() => agregarTexto('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_numeros} onPress={() => agregarTexto('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.div_fila}>
          <TouchableOpacity style={styles.boton_operaciones} onPress={() => agregarTexto('sen(')}>
            <Text style={styles.buttonText}>sen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_numeros} onPress={() => agregarTexto('π')}>
            <Text style={styles.buttonText}>π</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_numeros} onPress={() => agregarTexto('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_numeros} onPress={() => agregarTexto('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton_igual} onPress={calcularResultado}>
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
    backgroundColor: '#1F1F1F',
  },
  text: {
    color: '#fff',
    fontSize: 70, 
    margin: 50,
  },
  text_2: {
    color: '#fff',
    fontSize: 40, 
    margin: 35
  },
  div_texto: {
    flex: 2,
  },
  div_texto_2: {
    flex: 1,
    alignItems: 'flex-end', 
  },
  div_botones: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 3,
  },
  div_fila: {
    flex: 1,
    flexDirection: 'row',
  },
  boton_numeros: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderBlockColor: '#fff'
  },
  boton_operaciones: {
    backgroundColor: '#131313',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderBlockColor: '#fff'
  },
  boton_igual: {
    backgroundColor: '#701338',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderBlockColor: '#fff'
  },
  buttonText: {
    color: '#fff',
    fontSize: 23,
  },
  

});


