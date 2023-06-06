import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Cabecalho(){
    return(
        <View style={styles.cabecalho}>
            <Text style={styles.titulo}> Sua Lista !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cabecalho:{
        height:50,
        paddingTop:10,
        backgroundColor:'coral'
    },
    titulo:{
        textAlign:'center',
        color:"#fff",
        fontSize:20,
        fontWeight:'bold',
       
    }
})