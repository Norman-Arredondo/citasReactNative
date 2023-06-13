import React from 'react'
import { Modal, Text, SafeAreaView, StyleSheet, TextInput, View} from 'react-native'

export const Formulario = ({ modalVisible }) => {
    return (
        <Modal animationType='slide' visible={modalVisible}>
            <SafeAreaView style = {styles.contenido}>
                <Text style = {styles.titulo}>Nueva {''}
                    <Text style = {styles.tituloBold}>Cita</Text>
                </Text>

                <View style= {styles.campo}>
                    <Text style= {styles.label}>Nombre Paciente</Text>
                    <TextInput style= {styles.input} placeholder='Nombre del Paciente' placeholderTextColor={'#666'}/>
                </View>
               

                
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#6D28D9',
        flex: 1
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#FFF'
    },
    tituloBold: {
        fontWeight: 900
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15

    },
    label: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'

    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,
        marginBottom: 10
    }
});
