import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'



export default class LineTextView extends Component {
    render() {
        return (

            
            <TouchableOpacity style={{flexDirection:'row', padding:5, backgroundColor:'#e8f3fd', margin:2}}
            
            //onPress={this.props.pressedHere}
            onPress={this.props.customPressed}
            //onPress={()=>alert('wait')}
            >

                <View style={{flexDirection:'column', flex:3}}>
                <Text>{this.props.textDisplay}</Text>
                <View style={{margin:5}}></View>
                <Text>{this.props.keyPassed}</Text>
                </View>
                <Image style={{flex:1, width:80, height:50}} source={this.props.imagePassed}></Image>
                
            </TouchableOpacity>
            
        )
    }
}
