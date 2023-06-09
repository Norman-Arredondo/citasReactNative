import React, { useState, useEffect} from 'react'
import { Modal, Text, SafeAreaView, StyleSheet, TextInput, View, ScrollView, Pressable, Alert } from 'react-native'
import DatePicker from 'react-native-date-picker'

export const Formulario = ({ modalVisible, setModalVisible, setPacientes, pacientes, paciente: pacienteObj}) => {

    const [paciente, setPaciente] = useState('');
    const [id, setId] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fecha, setFecha] = useState(new Date());
    const [sintomas, setSintomas] = useState('');

    useEffect(() => {

        if(Object.keys(pacienteObj).length > 0) {
            setId(pacienteObj.id);
            setPaciente(pacienteObj.paciente);
            setPropietario(pacienteObj.propietario);
            setEmail(pacienteObj.email);
            setTelefono(pacienteObj.telefono);
            setFecha(pacienteObj.fecha);
            setSintomas(pacienteObj.sintomas);
        } 
        
    }, [pacienteObj]);

    

    const handleCita = () => {
        //Validación

        if ([paciente, propietario, email, fecha, sintomas].includes('')) {
            Alert.alert('Error', 'Todos los campos son obligatorios', [{text: 'OK'}]); //Toma 3 argumentos. encabezado, cuerpo y mensaje

            return;
        }

        const nuevoPaciente = {
            id: Date.now(),
            paciente,
            propietario,
            email,
            fecha,
            sintomas
        };

        setPacientes([...pacientes, nuevoPaciente]);
        setModalVisible(!modalVisible);

        setPaciente('');
        setPropietario('');
        setEmail('');
        setTelefono('');
        setFecha(new Date());
        setSintomas('');
    }

    return (
        <Modal animationType='slide' visible={modalVisible}>
            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <Text style={styles.titulo}>Nueva {''}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>

                    <Pressable style= {styles.btnCancelar} onPress={() => setModalVisible(!modalVisible)} >
                        <Text style= {styles.btnCancelarTexto}> X Cancelar</Text>
                    </Pressable>


                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre del Paciente:*</Text>
                        <TextInput style={styles.input} placeholder='Nombre del Paciente' placeholderTextColor={'#666'} value={paciente}
                            onChangeText={setPaciente}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre del Propietario:*</Text>
                        <TextInput style={styles.input} placeholder='Nombre del Propietario' placeholderTextColor={'#666'} value={propietario}
                            onChangeText={setPropietario} />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email del Propietario:*</Text>
                        <TextInput style={styles.input} placeholder='Email' placeholderTextColor={'#666'} keyboardType='email-address' value={email}
                            onChangeText={setEmail} />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Teléfono del Propietario:</Text>
                        <TextInput style={styles.input} placeholder='Teléfono' placeholderTextColor={'#666'} keyboardType='phone-pad' value={telefono}
                            onChangeText={setTelefono} maxLength={10} />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Fecha de Alta:*</Text>
                        <View style={styles.fechaContenedor}>
                            <DatePicker date={fecha} locale='es'  onDateChange={(date) => setFecha(date)} />
                        </View>

                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Síntomas:*</Text>
                        <TextInput style={[styles.input, styles.sintomasInput]} placeholder='Síntomas del paciente' placeholderTextColor={'#666'} value={sintomas}
                            onChangeText={setSintomas} multiline={true} numberOfLines={4} />
                    </View>

                    <Pressable style={styles.btnNuevaCita} onPress= {handleCita}>
                        <Text style= {styles.btnNuevaCitaTexto}>Agregar Paciente</Text>
                    </Pressable>


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
    btnCancelar: {
        
        marginVertical: 20,
        backgroundColor: 'red',
        marginHorizontal: 30,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF'
    },
    btnCancelarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 15,
        textTransform: 'uppercase'
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
    },
    fechaContenedor: {
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    btnNuevaCita: {
        marginVertical: 20,
        backgroundColor: 'green',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10
    },
    btnNuevaCitaTexto: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 16
        
    }
});
