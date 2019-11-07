import React from 'react'
import {View,Text,Image,ActivityIndicator} from 'react-native'
import {Bars} from 'react-native-loader'
import First_2_Tabs from './navigation'



export default class App extends React.Component{
    state={
        role:true
}
   
render(){
        setTimeout(()=>{
      this.setState({
          role:false
      })
  },2000)
    if (this.state.role) {
      return (
        <View style={{alignItems:'center',paddingTop:70}}>
          <Image
                source={require('../gambar/a-transparent.png')}
                style={{height:150,width:150}}
          />
         
        
          <View style={{alignItems:'center',paddingTop:30}} >
                <Text style={{color:'#633689'}}>WELCOME</Text>
                <Text style={{color:'#633689'}}>TO ALPHA</Text>
                
          </View>
          <View style={{paddingTop:90}}>
          <Bars size={30} color="#633689" />
          </View>
        </View>
      );
      
    }

    return(
        <First_2_Tabs/>
    )
}


}
