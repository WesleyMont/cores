import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Axios from "axios";
import Cabecalho from "../../components/cabecalho";
import Novascores from "../../components/novascores";
import Adicionarcor from "../../components/adicionarcor";
export default function Lista(navigation){
    
    const[lista, setLista] = useState([
        {texto: "rosa", key: '1'},
        {texto: "branco", key: '2'}
    ]);
    //delete
    const deletarItem = (key) => {
        Axios.delete(`http://192.168.0.101:3001/item/${key}`,
        )
    }


    //read
    useEffect(() => {
    Axios.get("http://192.168.0.101:3001/itens").then(
        (response) => {
            setLista(response.data)
        }
    )
  },[lista])

    //create
    const submeterInfomacao = (texto) => {
        Axios.post("http://192.168.0.101:3001/item", {item:texto})       
    }
    const apertarItem = (key) => {
        setLista(
            (prevLista) =>{
                return prevLista.filter(texto => texto.key != key);
            }
        )
    }

    return (
        <View style={styles.container}>
            <Cabecalho/>    
            <View style={styles.conteudo}>
                <Adicionarcor funcao={submeterInfomacao} />
                <View style={styles.estiloLista}>
                    <FlatList
                    data={lista}
                    renderItem={({item}) => (
                        <Novascores props={item} funcao={apertarItem}/>,
                        <Novascores props={item} funcao={deletarItem}/>
                        
                    )}
                    />
                </View>
                </View>        
        </View>

    );
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#e0e5e5",

    },
    conteudo:{
        padding:40,
    }

});