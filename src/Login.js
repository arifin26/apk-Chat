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
    fetch('https://memoria.serveo.net/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        name: name,
        password: password
      })
    })
      .then(response => response.json())
      .then(response => {
        if(response.access_token){
          AsyncStorage.setItem('name',response.user.name)
          AsyncStorage.setItem('email',response.user.email)
          AsyncStorage.setItem('telp',response.user.telp) 
          AsyncStorage.setItem('avatar',response.user.avatar)   
          AsyncStorage.setItem('access_token',response.access_token)
          // AsyncStorage.setItem('name',response.user.name)
          
            
          this.props.navigation.navigate('First')
        }
        else if(response.user.email){
         console.log(response.user.email)
        }
     
       
        
        
        
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
      
      
      <ImageBackground source={require('../gambar/lawa.jpeg')} style={{height:'100%',width:'100%'}}>
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
        <View style={{justifyContent:'center',alignItems:'center',paddingTop:15}}>
          <Image source={require('../gambar/deviantart.png')} style={{height:110,width:110}}/>
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
        
          
          
          <Text style={{ fontSize: 14 }}>Belum punya akun ? </Text>
          
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
    marginTop:60
    
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
      borderColor: '#075e54',
      borderRadius: 50 ,
     
      
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