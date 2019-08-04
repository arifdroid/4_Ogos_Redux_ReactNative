/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Input from './src/components/Input'

import BundleInput from './src/components/BundleInput'

import OurModal from './src/components/OurModal'

class App extends React.Component{

  constructor(){
    super()
    this.state={

      arrayOfObject:[],
      selectedObject :null,


    }
  }

  /// function

  _inputReceived =(paramReceived)=>{

    this.setState((prevState)=>({

        //arrayOfObject:[...prevState.arrayOfObject,paramReceived]

        arrayOfObject: prevState.arrayOfObject.concat({ //concate with object

            text:paramReceived,
            key:Math.random(),
            image:{
              uri:'https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg'
            }

        })

    }))

  }

  //function handle key 

  _handleReceivedKey= (keyPassed)=>alert('picked here '+ keyPassed)

  // handle received key, and active modal selected

  _handleKeyAndSelectModal = (keyPassed)=>{

    this.state.arrayOfObject.forEach((each)=>{

      if(each.key===keyPassed){

    //        selectedObject= each

        this.setState({

          selectedObject:each

        })

      }


    })
  }

  ///////////

  _functionDeleteThisModal = ()=>{


      this.setState( (prevState)=>({

        arrayOfObject:prevState.arrayOfObject.filter( (x)=>{

            return x.key !== prevState.selectedObject.key; //return every element, than key is not same as selectedobject key

        }),

        selectedObject:null,

        

      }))

      // this.state.arrayOfObject.forEach((each)=>{

      //   if(each.key===this.state.selectedObject.key){


      //       this.setState( ()=>{


      //       })

      //   }


      // })


  }
  
  //////////

  _functionCloseThisModal= ()=>{

    this.setState({


        selectedObject:null

    })



  }

  ///  end function

  render(){
  return (
   <View>
    <Text style={{alignSelf:'center', margin:10}}> REDUX TEST </Text>

    <OurModal
    
    selected={this.state.selectedObject}
    deleteThisModal={this._functionDeleteThisModal}
    closeThisModal={this._functionCloseThisModal}

    />

    <Input

      inputPassed={this._inputReceived}
    
    />

    <View>

    <BundleInput
     
      valuePassed={this.state.arrayOfObject}
      //clickParamPassed={this._handleReceivedKey}
      clickParamPassed={this._handleKeyAndSelectModal}
    
    />
    
    
    </View>
    

   
   </View>
  );
  }
};

const styles = StyleSheet.create({
 
});

export default App;
