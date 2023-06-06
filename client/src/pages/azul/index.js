import  React from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, ScrollView, TextInput,
         Text, FlatList, Alert} from 'react-native';
import { FontAwesome,  } from '@expo/vector-icons';
import  {useState} from 'react';


export default function Azul({navigation}) {
  
  const [nomeb, setNomeb]  = useState();
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
        color={"#00BFFF"}
        onPress ={clicarBotao}>
        </Button>
         <Button 
          
         title="Azul"        
         color={"blue"}
         onPress ={() => Alert.alert (
         'O bluetooth é azul')}></Button>
        <View style={styles.emotiazul}>
         <FontAwesome name="bluetooth" size={24} color="blue" />
         <FontAwesome name="bluetooth" size={24} color="blue" />
         <FontAwesome name="bluetooth" size={24} color="blue" />
         <FontAwesome name="bluetooth" size={24} color="blue" />
         <FontAwesome name="bluetooth" size={24} color="blue" />
         <FontAwesome name="bluetooth" size={24} color="blue" />
         <FontAwesome name="bluetooth" size={24} color="blue" />
         </View>

         <View style={styles.listazul}> 
         <FlatList
         data={[
          {key:'Os tipos de azul usados aqui foram'},
          {key: 'azul claro'},
          {key: 'azul escuro'},
          {key: 'azul normal'},
         
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      </View>
      <TextInput style = {styles.inputazul}
         onChangeText={setNomeb}
         placeholder='Deixe seu nome azul'         
         ></TextInput>
         <Text style={styles.seuazul}>{nomeb}</Text> 
         
         <TextInput 
         style = {styles.inputazul}
         selectTextOnFocus
         keyboardType="numeric" 
         placeholder='Nota para cor azul'
         ></TextInput>
         

         <FontAwesome style = {styles.sendazul} name="send" size={24} color="blue"
          />
       

         <ScrollView style={styles.scrollViewazul}>
          <Text style={styles.textazul}> 
          A cor azul significa tranquilidade, serenidade, harmonia e espiritualidade, 
          mas também está associada à frieza, monotonia e depressão.

      </Text>    


         </ScrollView> 
         <Text/>
         <Button 
         
      title='Ir para cor verde'
      onPress={ () => navigation.navigate('Verde')}/>
      <Button 
         
         title='Voltar ao inicio'
         color={"#00BFFF"}
         onPress={ () => navigation.navigate('Home')}/>
        
         
      <StatusBar style='auto' />
      </ScrollView>
     
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
  emotiazul:{
    flexDirection:"row",
    justifyContent:"center",
    backgroundColor:"#00BFFF",
  },  
  listazul:{
    backgroundColor:"blue", 
    
  },
  inputazul:{
    borderColor:"blue",
    borderWidth: 1.5,
    margin:5,
  },
  scrollViewazul:{
    backgroundColor: '#00008B',
    marginHorizontal: 20,
    maxHeight:200, 
  },
  sendazul:{
    textAlign:"right",
  },
  textazul:{
    fontSize: 30,
    color: "#87CEFA",
    textAlign:"center", 
  },
  seuazul:{
    fontSize:30,
    color:"blue"
  }

});