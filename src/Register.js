import React from 'react'
import { View , TextInput , Text ,Image, Button,Modal,ActivityIndicator,AsyncStorage,ImageBackground,TouchableOpacity,StyleSheet,} from 'react-native'


class Register extends React.Component{
    state={
        
        name:"",
        email:"",
        password:"",
        telp:"",
        modalVisible :false,

    }
    register = (name, email, password,telp) => {
            this.setState({modalVisible:true})
        fetch('https://aqueous-hollows-28311.herokuapp.com/register', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            telp:telp,
          })
        })
          .then(response => response.json())
          .then(response => {
            if (response.access_token) {
            
            } 
          
            AsyncStorage.setItem('access_token',response.access_token)
            this.props.navigation.navigate('First')
            this.setState({ modalVisible: false })
          })
          .catch(error => {
            console.log(error)
            alert('error')
            this.setState({ modalVisible: false })
          })
      }

       
 
    render(){
        let  {name,email,password,telp} = this.state
        return (
            <ImageBackground source={require('../gambar/2069453d-2577-4a7e-bf98-8260c23e2599.png')} style={{height:'100%',width:'100%',backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View style={{flex:1}}>
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
                <Text style={Styles.TextHeader}> REGISTER </Text>
                </View> */}
                <View style={{justifyContent:'center',alignItems:'center',paddingTop:30}}>
                <Image source={require('../gambar/a-transparent.png')} style={{height:110,width:110}}/>
                </View>
                <View style={{paddingTop:50,justifyContent:"center",alignItems:"center"}}>
                <TextInput
                style={Styles.TextInputDisplay}
                value={this.state.name}
                placeholder="name"
                onChangeText={(teks)=>this.setState({name:teks})}
                />
                <TextInput
                style={Styles.TextInputDisplay}
                value={this.state.email}
                placeholder="email"
                onChangeText={(teks)=>this.setState({email:teks})}
                />
                <TextInput
                style={Styles.TextInputDisplay}
                value={this.state.password}
                placeholder="password"
                onChangeText={(teks)=>this.setState({password:teks})}
                />
                 <TextInput
                style={Styles.TextInputDisplay}
                value={this.state.telp}
                placeholder="telp"
                onChangeText={(teks)=>this.setState({telp:teks})}
                />
                </View>
                <View style={{paddingTop:20,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
                <TouchableOpacity
                 onPress={() => this.register(name,email,password,telp)}
                 style={Styles.TouchableDisplay}>

                 <Text
                 style={Styles.TextUnderTouchDisplay}>REGISTER</Text>

               
                </TouchableOpacity>
                <Text>. </Text>
                <TouchableOpacity
                  onPress={()=> this.props.navigation.navigate('Login')}
                  style={Styles.TouchableDisplay}>

                  <Text style={Styles.TextUnderTouchDisplay}>LOGIN</Text>
              
                
                </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        )
    }
}
export default Register

const Styles=StyleSheet.create({
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
      TextInputDisplay: {
        textAlign: 'center',
        width: '90%',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#075e54',
        borderRadius: 50 ,
        backgroundColor:'#fff'
        
    },
})