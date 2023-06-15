import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'


export const Paciente = ({ item }) => {

    const { paciente, fecha } = item
    const formatearFecha = fecha => {
        const nuevaFecha = new Date(fecha);
        const opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }
        return nuevaFecha.toLocaleDateString('es-ES', opciones);
    }



    return (
        <View style={styles.contenedor}>
            <Text style={styles.label}> Paciente: </Text>
            <Text style={styles.texto}> {paciente} </Text>
            <Text style={styles.fecha}> {formatearFecha(fecha)} </Text>

            <View style={styles.contenedorBotones}>
                <Pressable style={[styles.btn, styles.btnEditar]}>
                    <Text style={styles.btnTexto}>Editar</Text>
                </Pressable>

                <Pressable style={[styles.btn, styles.btnEliminar]}>
                    <Text style={styles.btnTexto}>Eliminar</Text>
                </Pressable>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: '#94A3B8',
        borderWidth: 1
    },
    label: {
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700',
        marginBottom: 10
    },
    texto: {
        color: '#6D28D9',
        fontSize: 20,
        fontWeight: '700',

    },
    fecha: {
        color: '#374151',

    }, 
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    btn:{
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    btnEditar:{
        backgroundColor: '#F59E0B'
    },
    btnEliminar: {
        backgroundColor: '#EF4444'
    },
    btnTexto: {
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 12,
        color: '#FFF'
    }


});
