/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Pressable
} from 'react-native';

import { Formulario } from './src/components/Formulario';


const App = () => {

  //Los Hooks se colocan en la parte superior
  const [modalVisible, setModalVisible ] = useState(false);

  const nuevaCitaHandler = () =>{
    console.log('Diste Click');
  }
  return (

    <View style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable onPress={ () => setModalVisible(true)} style ={styles.btnNuevaCita}>

        <Text style= {styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>
      {/*<Button title='Nueva Cita' onPress={() => { console.log('Presionaste en el botón')}}></Button>*/}

      <Formulario /> 
     
    </View>

  );
};

/**método .create para crear la hoja de estilos, dentro un objeto con todas las instrucciones CSS*/
const styles = StyleSheet.create({

  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
    
  },
  titulo: {
    textAlign:'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
    marginTop: 20
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita:{
    backgroundColor: '#6D28D9',
    padding:15,
    marginTop: 30,
    //marginLeft: 20,
    //marginRight: 20,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF', //Color blanco
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
});

export default App;
