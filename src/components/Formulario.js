import React from 'react'
import { Modal, Text, Button, SafeAreaView } from 'react-native'

export const Formulario = ({ modalVisible, nuevaCitaHandler }) => {
    return (
        <Modal animationType='slide' visible={modalVisible}>
            <SafeAreaView>
                <Text>Desde Modal</Text>

                <Button title='Presiona aquí' onPress={nuevaCitaHandler}></Button>
            </SafeAreaView>
        </Modal>
    )
}
