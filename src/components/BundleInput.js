import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

import LineTextView from './LineTextView'

export default class BundleInput extends Component {
    
    
    
    render() {



        console.log('check data '+ JSON.stringify(this.props.valuePassed))
        return (

            <FlatList
                style={{margin:5,}}
                data={this.props.valuePassed}
                

                renderItem={ (info)=>(
                    
                    
                    <LineTextView
                    textDisplay={info.item.text}
                    imagePassed={info.item.image}
                    keyPassed={info.item.key}
                    //pressedHere={()=>{this.props.clickParamPassed(info.item.key)}} //we pressed here , this item. 

                    //pressedHere={()=>alert('check')}
                    customPressed={()=>{this.props.clickParamPassed(info.item.key)}}
                    
                    
                    />

                    

                    
                    
                    )}
            >
                
            
            


            // />    


            // </FlatList>
        )
    }
}
