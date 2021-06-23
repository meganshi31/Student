import React from 'react'
import { View, Text ,StyleSheet,TextInput, ScrollView, ImageBackground ,Image} from 'react-native'
import { EvilIcons } from '@expo/vector-icons'; 
import {Card,Appbar, Divider} from 'react-native-paper'

export default function HomeWork() {
    return (
        <View style = {{flex:1}}>
            <View style={{height:100,width:360,backgroundColor:'#45628E'}}>
        <Image source ={require('../assets/soft.jpg')}
        style={{width:50,height:50,borderRadius:360,marginLeft:10,marginTop:40}} />
        <Text style={{marginLeft:70,fontSize:23,marginTop:-39,color:'white'}}>Learning Material</Text>
        </View>
        <Card style = {styles.card}>
             <EvilIcons name="search" size={24} color="black" style={{marginLeft:5,marginTop:7}}/>   
          <TextInput style = {{textAlign:'auto',marginLeft:30,marginTop:-24}}  placeholder = {'Search Here'}>   
           </TextInput>
         
        </Card>  

           <ScrollView>
        
             <Card style = {styles.card1}>
                 <Text style = {{fontSize:24,color:'black'}}>  Subject Notes </Text>
             </Card>
<Divider style={{marginTop:20}}/>
             <Card style = {styles.card1}>
             <Text style = {{fontSize:24}}>  Subject Videos </Text>
             </Card>
             <Divider style={{marginTop:20}}/>
            <Card style = {styles.card1}>
            <Text style = {{fontSize:24}}>  Assignments </Text>
             </Card>
             <Divider style={{marginTop:20}}/>
            <Card style = {styles.card1}>
            <Text style = {{fontSize:24}}>  Lab-Manuals </Text>
            </Card>
            <Divider style={{marginTop:20}}/>
             <Card style = {styles.card1}>
             <Text style = {{fontSize:24}}> Solution of old Question Papers </Text>
            </Card>

           </ScrollView>

           
       </View>
    )
}
const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        height:35,
        width:320,
       
        backgroundColor:'white',
        
     //   alignContent:'center',
     //   alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },
    card1:{
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#b0c4de',
        marginTop:20,
        marginLeft:10,
        marginRight:20,
        height:90,
        width:340,   
        shadowOffset:{width:100,height:100},
        shadowColor:'black',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },
})