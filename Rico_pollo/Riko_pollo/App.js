import React from "react";
import { Text, View, StyleSheet, Image, TextInput, Button} from "react-native";
import  image  from "assets/fallproune.jpg";

const App=()=>{
  return(
    <View style={style.container}>
      <Image style={style.image} source={image}></Image>
      <View style={style.div}>
        <Text style={style.title}>Nombre:</Text>
        <TextInput style={style.input}></TextInput>
      </View>
      <View style={style.div}>
        <Text style={style.title}>Password:</Text>
        <TextInput style={style.input}></TextInput>
      </View>
      <Button style={style.button} title="Iniciar sesión" onPress={()=> console.log("Sirve")}></Button>
    </View>
  );
};

const style=StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center', 
      alignItems:'center',
      backgroundColor: 'blue'},
    title:{fontSize: 30, 
      color:'white', 
      fontFamily: 'Times New Roman'
    },
    image:{height:300, width:300, margin: 20},
    input: {
      height: 40,
      margin: 12,
      color: 'white',
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 10,
      padding: 10,
    },
    div: {
      display: 'block'
    },
    button: {
      margin: 40
    }
});

export default App;
