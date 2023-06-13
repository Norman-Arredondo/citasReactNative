import React, {useState} from 'react'
import { Modal, Text, SafeAreaView, StyleSheet, TextInput, View, ScrollView } from 'react-native'

export const Formulario = ({ modalVisible }) => {

    const [paciente, setPaciente] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [sintomas, setSintomas] = useState('');


    return (
        <Modal animationType='slide' visible={modalVisible}>
            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <Text style={styles.titulo}>Nueva {''}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre del Paciente</Text>
                        <TextInput style={styles.input} placeholder='Nombre del Paciente' placeholderTextColor={'#666'} value={paciente}
                                    onChangeText={setPaciente}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre del Propietario</Text>
                        <TextInput style={styles.input} placeholder='Nombre del Propietario' placeholderTextColor={'#666'} value={propietario}
                                    onChangeText={setPropietario} />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email del Propietario</Text>
                        <TextInput style={styles.input} placeholder='Email' placeholderTextColor={'#666'} keyboardType='email-address' value={email}
                                    onChangeText={setEmail}/>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono del Propietario</Text>
                        <TextInput style={styles.input} placeholder='Teléfono' placeholderTextColor={'#666'} keyboardType='phone-pad' value={telefono}
                                    onChangeText={setTelefono} maxLength={10}/>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Síntomas</Text>
                        <TextInput style={[styles.input, styles.sintomasInput]} placeholder='Síntomas del paciente' placeholderTextColor={'#666'} value={sintomas}
                                    onChangeText={setSintomas} multiline={true} numberOfLines={4}/>
                    </View>


                </ScrollView>
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
        borderRadius: 10

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
    },
    sintomasInput: {
        height: 100
    }
});
