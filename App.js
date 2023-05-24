/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';

const App = () => {
  return (

    <SafeAreaView>
      <Text style={styles.titulo}>Administrador de Citas {''}
        <Text>Veterinaria</Text>
      </Text>

    </SafeAreaView>

  );
};

/**método .create para crear la hoja de estilos, dentro un objeto con todas las instrucciones CSS*/
const styles = StyleSheet.create({
  titulo: {
    textAlign:'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  }
});

export default App;
