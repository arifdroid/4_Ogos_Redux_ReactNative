import React, { Component } from 'react'
import { Text, View, TextInput, Button  } from 'react-native'

export default class Input extends Component {
    
    constructor(){
        super()

        this.state = {

            textEntered:'',
        }

    }


    _textInputRead=(text)=>{

         this.setState({

            textEntered:text,

         })   


    }


    _inputPassed = ()=>{

        this.props.inputPassed(this.state.textEntered)
    }



    render() {
        
        return (
            <View style={{flexDirection:'row', marginHorizontal:10}}>
                <TextInput
                    style={{width:'75%', backgroundColor:'#e8f3fd', marginRight:10}} 
                    value={this.state.textEntered}
                    onChangeText={this._textInputRead}                
                />

                <Button onPress={this._inputPassed} title="Add Input"></Button>
            </View>
        )
    }
}
