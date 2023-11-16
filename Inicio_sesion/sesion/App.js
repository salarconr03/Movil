import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Sharing from 'expo-sharing';
import  imagen  from "./assets/perfil_icono.png";

function Inicio({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = () => {
    if (!usuario || !contraseña) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }
    if (/\d/.test(usuario)) {
      Alert.alert('Error', 'El nombre de usuario no puede contener números');
      return;
    }
    const userLength = usuario.length;
    const passLength = contraseña.length;

    if (userLength > 10 || passLength > 12 || 4>userLength || 8 > passLength) {
      Alert.alert('Error', 'El nombre de usuario debe contaener mímimo 4 Caracteres y la contraseña 8');
      return;
    }

    navigation.push('Perfil', { usuario, contraseña });

    console.log('Usuario:', usuario);
    console.log('Contraseña:', contraseña);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        placeholderTextColor="#fff"
        value={usuario}
        onChangeText={setUsuario}
        maxLength={10} 
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#fff"
        value={contraseña}
        onChangeText={setContraseña}
        secureTextEntry
        maxLength={12}
      />
      <TouchableOpacity style={styles.button}  onPress={handleSubmit}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

function Perfil({ route, navigation }) {
  const { usuario, contraseña } = route.params;
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleTakePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleShare = async () => {
    if (!image) {
      // Si no hay imagen seleccionada, no hay nada que compartir
      return;
    }

    try {
      const shared = await Sharing.shareAsync(image);
      if (shared) {
        console.log('¡Imagen compartida exitosamente!');
      } else {
        console.log('El compartido fue cancelado.');
      }
    } catch (error) {
      console.log('Ocurrió un error al compartir:', error.message);
    }
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.boton_perfil}>
      <Image source={image ? { uri: image } : imagen} style={styles.img}></Image>
      </View>
      <TouchableOpacity style={styles.button_imagen} onPress={pickImage}>
        <Text style={styles.buttonText_imagen}>Subir imagen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_imagen} onPress={handleTakePhoto}>
        <Text style={styles.buttonText_imagen}>Tomar foto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_imagen} onPress={handleShare}>
        <Text style={styles.buttonText_imagen}>Compartir imagen</Text>
      </TouchableOpacity>
      <Text style={styles.title_perfil}>Usuario: {usuario}</Text>
      <Text style={styles.title_perfil}>Contraseña: {contraseña}</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio de sesión" component={Inicio} options={{headerShown:false}}/>
        <Stack.Screen name="Perfil" component={Perfil} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#ffffff', 
  },
  title_perfil: {
    fontSize: 24,
    marginBottom: 16,
    color: '#ffffff', 
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#fff', 
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    color: '#fff',
    backgroundColor: '#000', 
    borderRadius: 5,
  },
  button_imagen: {
    backgroundColor: '#000', 
    padding: 10,
    borderRadius: 20,
    width: '80%',
    borderColor: '#EA005E',
    borderStyle:'solid',
    borderWidth: 2,
    margin: 10
  },
  button: {
    backgroundColor: '#EA005E', 
    padding: 10,
    borderRadius: 20,
    width: '80%',
    borderColor: '#EA005E',
    borderStyle:'solid',
    borderWidth: 2,
    margin: 10
  },
  boton_perfil: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  img: {
    height: 200,
    width: 200, 
    borderRadius: 100,
  },
  buttonText_imagen: {
    color: '#EA005E',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  imageButton: {
    backgroundColor: '#2980b9',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  imageButtonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;