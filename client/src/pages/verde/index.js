import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, ScrollView, TextInput,
         Text, FlatList, Alert} from 'react-native';
import { FontAwesome,  Entypo,  } from '@expo/vector-icons';
import {useState} from 'react';


export default function Verde({navigation}) {

  const [nome, setNome]  = useState();  
  const [ligar, setligar] = useState(false);
  const clicarBotao = () =>{
    setligar(!ligar);  
  }
  return (
   
    <View style={styles.container}>     
    
     
    <ScrollView>

       {
        ligar ?
        <Text>       
        </Text>
        :
        <Text style ={styles.titulo}>Cores</Text>
      }   
      <Button  
        title="Aperte"        
        color={"#006400"}
        onPress ={clicarBotao}>
        </Button>
      
             
        <Button 
        
        title="Verde"
        
        color={"green"}
        onPress ={() => Alert.alert (
         'A folha é verde'
         )}>          
         </Button>         
        <View style={styles.teste}>
         <Entypo name="leaf" size={24} color="green" />
         <Entypo name="leaf" size={24} color="green" /> 
         <Entypo name="leaf" size={24} color="green" /> 
         <Entypo name="leaf" size={24} color="green" /> 
         <Entypo name="leaf" size={24} color="green" /> 
         <Entypo name="leaf" size={24} color="green" />
         <Entypo name="leaf" size={24} color="green" /> 
         <Entypo name="leaf" size={24} color="green" />
         </View>
         
         <View style={styles.listverde}> 
         <FlatList
         data={[
          {key:'Os tipos de verde usados aqui foram'},
          {key: 'verde claro'},
          {key: 'verde escuro'},
          {key: 'verde normal'},
          {key: 'verde neon'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />

         </View>
         <Text></Text>

         <TextInput style = {styles.inputverde}
         onChangeText={setNome}
         placeholder='Deixe seu nome verde'         
         > 
                             
         </TextInput>
         

         <Text style={styles.seuverde}>{nome}</Text>         

         <Text></Text>

         <TextInput 
         style = {styles.inputverde}
         selectTextOnFocus
         keyboardType="numeric" 
         placeholder=' Qual nota você da pra cor verde ?' 
        ></TextInput>
         
         

         <FontAwesome style = {styles.sendverde} name="send" size={24} color="green"
          />
       

         <ScrollView style={styles.scrollViewverde}>
          <Text style={styles.textverde}> 
          A cor verde significa esperança, liberdade, saúde e vitalidade. 
          O verde simboliza a natureza, 
          o dinheiro e a juventude. 
          É cor da natureza viva. Está associada ao crescimento, à renovação e à plenitude.
      </Text>    
         </ScrollView>
         </ScrollView> 

    
      <Button 
      title='Ir para cor Azul'
      color={"green"}
      onPress={ () => navigation.navigate('Azul')}/>
      <Button 
         
         title='Voltar ao inicio'
         color={"#006400"}
         onPress={ () => navigation.navigate('Home')}/>
      <StatusBar style='auto' />     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#fff',
    marginTop:10,  
  },
  titulo:{    
   
   fontSize:60,
   textAlign:"center",

  },
  scrollViewverde: {
    backgroundColor: '#00FF7F',
    marginHorizontal: 20,
    maxHeight:200, 
  },
  textverde: {
    fontSize: 30,
    color: "#006400",
    textAlign:"center", 
  },
  inputverde:
  {
    borderColor:"green",
    borderWidth: 1.5,
    margin:5,
  },
  seuverde:{
    color:"green",
    fontSize:30
  },
  sendverde:{
    textAlign:"right",
    margin:10

  },
  teste:{
    textAlign:"center",
    flexDirection:"row",
    justifyContent:"center",
    backgroundColor:"#006400",
  },
  listverde:{
    backgroundColor:"green",
  },
});