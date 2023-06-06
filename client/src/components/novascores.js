import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Novascores({props,funcao}){
    return(
        <TouchableOpacity onPress={() => funcao(props.id)}>
        <View style={styles.postagem}>
            <SimpleLineIcons name="trash" size={18} color="black" />
            <Text style={styles.texto}>{props.itens}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    postagem: {
        padding:16,
        marginTop:16,
        borderColor:"#bbb",
        borderWidth:1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
    },
    texto:{
        marginLeft:30,
    }
})