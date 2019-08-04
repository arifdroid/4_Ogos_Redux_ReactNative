import React, { Component } from 'react'
import { Text, View,Modal,Button,Image } from 'react-native'
import { tsThisType } from '@babel/types';

export default class OurModal extends Component {

    

    render() {

    if(this.props.selected){    

    var OurModalContainer = (
        
        <View>
         
        
        <Text style={{alignSelf:'center', margin:5}}>This is our Modal</Text>
        <Image source={this.props.selected.image} style={{height:80,width:120, alignSelf:'center'}} />

        <Text style={{margin:2, color:'skyblue', alignSelf:'center'}}>{this.props.selected.text}</Text>
        <Text style={{margin:2, color:'black', alignSelf:'center'}}>{this.props.selected.key}</Text>

        
        </View>
        )  

    }
        
        return (
            <Modal
            visible={this.props.selected!==null} //check for true and false.// by default it must always null, so dont overlay our data  
            animationType="slide"
            >
                <Text style={{margin:10}}></Text>
                <View style={{margin:5}}>{OurModalContainer}</View>



                <View style={{flexDirection:'column'}}>

                    <Button title='delete' onPress={this.props.deleteThisModal} style={{width:100}}></Button>
                    <View style={{margin:5}}></View>
                    <Button title='close' onPress={this.props.closeThisModal} style={{width:100}}></Button>
                
                </View>
        

            </Modal>
        )
    }
}
