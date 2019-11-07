import React from 'react'
import {View,Text,Image,TouchableOpacity,Button,TextInput,StyleSheet,AsyncStorage,FlatList,ActivityIndicator,StatusBar} from 'react-native'
import ActionButton from 'react-native-action-button';
import call from 'react-native-phone-call'
// import Home from '../React-Native-Redux-master/test/Route/index'
// import {Provider} from 'react-redux'
// import {createStore, applyMiddleware} from 'redux'
// import reducer from '../React-Native-Redux-master/test/Redux/reducer'
// import thunk from 'redux-thunk'
import axios from 'axios'


export default class Chat extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      coba: "",
      cabo:"",
      username: '',
      isLoading:false,
      data:'',
      id:""
    };
  }
  



  call = () => {
    //handler to make a call
    const args = {
      number: '+62',
      prompt: false,
    };
    call(args).catch(console.error);
  };


  // componentDidMount() {
    
  //   axios.get(`https://aqueous-hollows-28311.herokuapp.com/tampil/45` )
  //     .then(res => {
  //       console.log(res.data);
  //       const data = res.data;
  //       this.setState({data});
  //     })
  //     .catch(err => console.log(err))
  // }






  out =() =>
  {
      AsyncStorage.removeItem('access_token')
      AsyncStorage.removeItem('id')
      AsyncStorage.removeItem('name')
      AsyncStorage.removeItem('email')
      AsyncStorage.removeItem('telp')
      AsyncStorage.removeItem('avatar')
      this.props.navigation.navigate('Login')
    }


  
  
  //   renderItems = ({ item, index }) => {
  //     const {name,email,avatar}=item
  //     return(
  //      <View style={{flex:1}}>
       

  //    <TouchableOpacity onPress={() => this.props.navigation.navigate('Screenchat')}>
          
  //                    <View style={{alignItems:'center',paddingTop:5,paddingBottom:20}}> 
  //                                <View style={{backgroundColor:'#fff',borderRadius:40,borderWidth:1,width:330,height:70,justifyContent:'center',elevation:10,borderColor:'#9b59b6',}}>
                                 
  //                                 <View style={{flexDirection:'row'}}>
  //                                 <Image style={{height:50,width:50,marginLeft:20,borderRadius:25,borderWidth:1,borderColor:'#9b59b6'}} />
  //                                  <Text style={{paddingLeft:30,paddingTop:10,color:'#000'}}>{name}</Text>
                                
  //                                  </View>
                                  
  //                                  </View>
  //                     </View>
  //     </TouchableOpacity>
  //          </View>
       
  //     )
  // }


  render(){
  
   return(
     <View style={{flex:1}}>
   
      <View style={{ flex: 1, }}>
          
            <View>
             
            </View>
            {/* <FlatList
                   data={this.state.data}
                   keyExtractor={item => item.toString()}
                   renderItem={this.renderItems} /> */}
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


