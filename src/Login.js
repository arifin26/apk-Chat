import React from 'react'
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
  Modal,
  ScrollView,
  Image,
  ImageBackground,
  
} from 'react-native'



const { width: WIDTH } = Dimensions.get('window')

class Login extends React.Component {
  state = {
  
    isLoading:false,
    name: '',
    nama:'',
    email:'',
    password: '',
    modalVisible:false,
  }
  componentDidMount () {
    AsyncStorage.getItem('access_token').then(value => {
      if (value != null) {
        this.props.navigation.navigate('First')
      }
    })
  }
  
  
  Login = (name, password) => {
    this.setState({modalVisible : true})
    fetch('https://aqueous-hollows-28311.herokuapp.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, 
      params: JSON.stringify({
        name: name,
        password: password
      })
    })
      .then(response => response.json())
      .then(response => {
        if(response.access_token){
          AsyncStorage.setItem('id',JSON.stringify(response.login.id))
          AsyncStorage.setItem('name',response.login.name)
          AsyncStorage.setItem('email',response.login.email)
          AsyncStorage.setItem('telp',JSON.stringify(response.login.telp)) 
          AsyncStorage.setItem('avatar',response.login.avatar)   
          AsyncStorage.setItem('access_token',response.access_token)
          
        }
        // else if(response.login.email){
        //  console.log(response.login.email)
        // }
     
        this.props.navigation.navigate('First')
        
        
        
       this.setState({modalVisible : false})
      })
      .catch(error => {
        console.log(error)
        alert('error')
        this.setState({modalVisible : false})
      })
  }
  render () {
    let { name, password } = this.state
    return (
      
      
      <ImageBackground source={require('../gambar/2069453d-2577-4a7e-bf98-8260c23e2599.png')} style={{height:'100%',width:'100%',backgroundColor: 'rgba(0,0,0,0.5)',}}>

      <View style={{ flex: 1 }}>
      <ScrollView>

     
      
                <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}>
                    <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <View style={{height:300,width:300,borderRadius:15,alignItems:'center',justifyContent:'center'}}>
                            <ActivityIndicator size='large'/>
                    </View>
                    </View>
                </Modal>
      
        {/* <View style={Styles.ViewHeader}>
          <Text style={Styles.TextHeader}> LOGIN </Text>
        </View> */}
        <View style={{justifyContent:'center',alignItems:'center',paddingTop:80}}>
          <Image source={require('../gambar/a-transparent.png')} style={{height:110,width:110}}/>
        </View>
        <View style={Styles.ViewDisplay}>
          
          <TextInput
            style={Styles.TextInputDisplay}
            value={this.state.name}
            placeholder='name'
            onChangeText={teks => this.setState({ name: teks })}
          />

          <TextInput
            style={Styles.TextInputDisplay}
            value={this.state.password}
            placeholder='password'
            onChangeText={teks => this.setState({ password: teks })}
            secureTextEntry
          />

        
          </View>
          
          
        
          
         
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity
            style={Styles.TouchableDisplay}
            loading={true}
            onPress={() => this.Login(name, password)}

          >
            <Text
             
              style={Styles.TextUnderTouchDisplay}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
        
          
          
          <Text style={{ fontSize: 14 }}>.</Text>
          
            <TouchableOpacity
            style={Styles.TouchableDisplay}
            onPress={() => this.props.navigation.navigate('Register')}
          >
            <Text
              
              style={Styles.TextUnderTouchDisplay}
            >
            REGISTER
            </Text>
          </TouchableOpacity>
          </View>
          
        
          

      </ScrollView>
      </View>
      </ImageBackground>
   
    
    )
  }
}
export default Login

const Styles = StyleSheet.create({
  ViewHeader: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#633689',
    elevation: 10
  },
  TextHeader: {
    fontSize: 18,
    color: '#fff',
    textAlign:'center',
    fontWeight: 'bold',
    
  },
  ViewDisplay: {
    
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15%',
    marginTop:60,
   
    
  },
  TextDisplay: {
    marginBottom: '10%',
    fontSize: 19,
    fontStyle: 'italic',
    fontWeight: 'bold',
    width: WIDTH - 35
  },
  TextInputDisplay: {
      textAlign: 'center',
      width: '90%',
      marginBottom: 7,
      height: 40,
      borderWidth: 1,
      borderColor: '#633689',
      borderRadius: 50 ,
      backgroundColor:'#fff'
     
      
  },
  TextUnderTextInput: {
    width: WIDTH - 30,
    paddingLeft:23,
    fontSize: 11,
    fontStyle: 'italic',
    color: '#778899',
    textAlign:'center'
  },
  TouchableDisplay: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: '80%',
    backgroundColor: '#633689',
    marginTop: 20,
    borderRadius:50
  },
  TextUnderTouchDisplay: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  TextMaker:
{
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: '2%',
    marginLeft: '55%',
    color: '#a9a9a9'
  }
})