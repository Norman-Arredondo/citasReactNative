/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const App = () => {
  return (

    <View style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

    </View>

  );
};

/**método .create para crear la hoja de estilos, dentro un objeto con todas las instrucciones CSS*/
const styles = StyleSheet.create({

  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  titulo: {
    textAlign:'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  }
});

export default App;
