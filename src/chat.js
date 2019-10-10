import React from 'react'
import {View,Text,Image,TouchableOpacity,Button,TextInput,StyleSheet,AsyncStorage} from 'react-native'
import ActionButton from 'react-native-action-button';
import call from 'react-native-phone-call'
// import Home from '../React-Native-Redux-master/test/Route/index'
// import {Provider} from 'react-redux'
// import {createStore, applyMiddleware} from 'redux'
// import reducer from '../React-Native-Redux-master/test/Redux/reducer'
// import thunk from 'redux-thunk'



export default class Chat extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      coba: "",
      cabo:"",
      username: '',
    };
  }
  saveData(){  
    let name = "rifin";  
    AsyncStorage.setItem('user',name);  
  }  
  displayData = async ()=>{  
    try{  
      let user = await AsyncStorage.getItem('user')
      alert(user);  
      this.props.navigation.navigate('Riwayat');  
    }  
    catch(error){  
      alert(error)  
    }  
  }  


  call = () => {
    //handler to make a call
    const args = {
      number: '0000000000',
      prompt: false,
    };
    call(args).catch(console.error);
  };



  out =() =>
  {
      AsyncStorage.removeItem('access_token')
      this.props.navigation.navigate('Login')
    }



  
     toogle= () => {
       this.setState({drawer : true})
     }
 render(){
  const { navigate } = this.props.navigation;
   return(
     <View style={{flex:1}}>
       {/* <Provider store={createStore(reducer,{},applyMiddleware(thunk))}>
        <Home/>
      </Provider> */}
      <View style={{flex:1}}>
      <TouchableOpacity onPress ={this.saveData}>  
          <Text>Click to save data</Text>  
        </TouchableOpacity>    
        <TouchableOpacity onPress ={this.displayData}>  
          <Text>Click to display data</Text>  
        </TouchableOpacity> 
      </View>
     
     
       <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="chat baru" onPress={() => this.props.navigation.navigate('Editeprofile')}>
            <Image source={require('../gambar/pencil.png')} style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="panggilan baru" onPress={this.call}>
            <Image source={require('../gambar/call.png')} style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="log out"  onPress={() =>this.out()}>
            <Image source={require('../gambar/logout.png')} style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
     </View>
   )
 }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    width:22,
    color: 'white',
  },
});


