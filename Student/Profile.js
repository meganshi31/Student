import React from 'react'
import { View, Text,StyleSheet,ImageBackground } from 'react-native'
import { Avatar,Button, Divider } from 'react-native-paper';
import { EvilIcons } from '@expo/vector-icons'; 


export default function Profile() {
    return (
        <View style={{flex:1,backgroundColor:'#EEEEEE'}}>
        <View style={{backgroundColor:'#EEEEEE'}}>
        <EvilIcons name="chevron-left" size={55} color="black" style={{marginLeft:-2,marginTop:15}}/>
             <Avatar.Image size={85} style={{marginTop:10,marginLeft:10}}
             source={require('../assets/soft.jpg')} />
        <EvilIcons name="pencil" size={30} style={{marginLeft:65,marginTop:-20,backgroundColor:'white',width:30,borderRadius:360}}/>
        <Text style={{marginLeft:120,fontSize:19,marginTop:-70,color:'black'}}>Enrollment ID</Text>
        <Text style={{marginLeft:120,fontSize:20,color:'#5F5B5B'}}>0291567800021</Text>

        <View style={{flexDirection:'row',marginTop:60,marginLeft:30}}>
            <Text style={{fontSize:21}}>Name</Text>
            <Text style={{color:'#5F5B5B',marginLeft:40,fontSize:16,marginTop:4}}>abcdxyzgf</Text>
        </View>

        <View style={{flexDirection:'row',marginTop:20,marginLeft:30}}>
            <Text style={{fontSize:21}}>Branch</Text>
            <Text style={{color:'#5F5B5B',marginLeft:30,fontSize:16,marginTop:4}}>Computer science</Text>
        </View>

        <View style={{flexDirection:'row',marginTop:20,marginLeft:30}}>
            <Text style={{fontSize:21}}>Class</Text>
            <Text style={{color:'#5F5B5B',marginLeft:44,fontSize:16,marginTop:4}}>3rd year</Text>
        </View>

        <View style={{flexDirection:'row',marginTop:20,marginLeft:30}}>
            <Text style={{fontSize:21}}>Email</Text>
            <Text style={{color:'#5F5B5B',marginLeft:44,fontSize:16,marginTop:4}}>x.xyzcba@gmail.com</Text>
        </View>

        <View style={{flexDirection:'row',marginTop:20,marginLeft:30}}>
            <Text style={{fontSize:21}}>Mobile</Text>
            <Text style={{color:'#5F5B5B',marginLeft:30,fontSize:16,marginTop:4}}>1234567890</Text>
        </View>

        <View style={{flexDirection:'row',marginTop:20,marginLeft:30}}>
            <Text style={{fontSize:21}}>Attendance</Text>
            <Text style={{color:'#5F5B5B',marginLeft:30,fontSize:16,marginTop:6}}>100/80</Text>
        </View>

        <View style={{flexDirection:'row',marginTop:20,marginLeft:30}}>
            <Text style={{fontSize:21}}>Address</Text>
            <Text style={{color:'#5F5B5B',marginLeft:40,fontSize:16,marginTop:4}}>xyz xyzx/hjkg</Text>
        </View>
        
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:80}}>
         <EvilIcons name="arrow-down" size={30} />   
         <Text style={{fontWeight:'bold',fontSize:16}}>Downloads</Text>
        </View>    
        <Text style={{marginLeft:120,marginTop:15}}> 2 videos , 13 notes</Text>
           
            </View>
            </View>
    )
}
const Styles= StyleSheet.create
