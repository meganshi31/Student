import React from 'react'
import { View,StyleSheet,ImageBackground ,ScrollView} from 'react-native'
import { Avatar,Divider, Text ,Headline,Title, Card, Paragraph,Button ,TextInput} from 'react-native-paper';
import { EvilIcons } from '@expo/vector-icons'; 



export default function StudentHome() {
    return (
        <View style={{backgroundColor:'#EEEEEE'}}>
         <View>
            <Avatar.Text size={40} label="MA" backgroundColor='#45628E' style={{marginTop:26,marginLeft:302}}/>
            <Title style={{margin:60,fontSize:25,marginTop:25,color:'black',color:'darkblue',fontWeight:'bold'}}>General Notification</Title>

           
        
                <ScrollView style={{marginBottom: 120,}}>
            <Card style={{marginTop:20,borderWidth:1,borderRadius:15,width:'95%',marginLeft: 10,}}>
                <Card.Content>
                <Title style={{marginTop:-9}}>Examination form</Title>
                <Paragraph>Date extended 23-12-2050</Paragraph>
                </Card.Content>
                <Card.Cover style={{height:150}} source={require('../assets/screenshot.png')} />
                <Card.Actions>
                <Button>Know more</Button>
                <Button>Call</Button>
                
                </Card.Actions>
            </Card>
            <Card style={{marginTop:20,borderWidth:1,borderRadius:15,width:'95%',marginLeft: 10,}}>
                <Card.Content>
                <Title style={{marginTop:-9}}>Monthly update</Title>
                <Paragraph>admission open in college</Paragraph>
                </Card.Content>
                <Card.Cover  style={{height:150}} source={require('../assets/screenshot1(39).png')} />
                <Card.Actions>
                <Button>Know more</Button>
                <Button>call</Button>
                </Card.Actions>
            </Card>
            <Card style={{marginTop:20,borderWidth:1,borderRadius:15,width:'95%',marginLeft: 10,}}>
                <Card.Content>
                <Title style={{marginTop:-9}}>Final year exams postponed or not?</Title>
                <Paragraph>in this states...</Paragraph>
                </Card.Content>
                <Card.Cover  style={{height:150}} source={require('../assets/screenshot.png')} />
                <Card.Actions>
                <Button>know more</Button>
                <Button>call</Button>
                </Card.Actions>
            </Card>

            <Card style={{marginTop:20,borderWidth:1,borderRadius:15,width:'95%',marginLeft: 10,}}>
                <Card.Content>
                <Title style={{marginTop:-9}}>Final year exams postponed or not?</Title>
                <Paragraph>governament has decided...</Paragraph>
                </Card.Content>
                <Card.Cover source={require('../assets/screenshot1(39).png')} />
                <Card.Actions>
                <Button>know more</Button>
                <Button>call</Button>
                </Card.Actions>
            </Card>
            </ScrollView>
        </View>
        </View>
       
    )
}

const style=StyleSheet.create({
    card1:{
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
        fontSize:19
    }
});
