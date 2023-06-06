import { StatusBar } from 'expo-status-bar';
import  React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <Button 
         
         title='Ir para cor verde'
         color={"#006400"}
         onPress={ () => navigation.navigate('Verde')}/>

        <Button 
         
         title='Ir para cor Azul'
         color={"#00BFFF"}
         onPress={ () => navigation.navigate('Azul')}/>
         <Button 
         
         title='Ir para sua lista'
         color={"coral"}
         onPress={ () => navigation.navigate('Lista')}/>
        

     <StatusBar style='auto' />       
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 23,
    marginTop: 50,
    flex: 1,      
    alignItems:"center",
  },  
});
