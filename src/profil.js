import React from 'react'
import {View,Text,StyleSheet,Alert,Modal,ActivityIndicator,ScrollView,AsyncStorage,Button,Image,FlatList,PermissionsAndroid,Platform,TouchableOpacity} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import MenuIcon from '../componen/menuicon'
import Edit from './editprofile'




export default class Akun extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      name: "",
      email:"",
      telp:'',
      modalVisible :false
    };
  }
  
  componentDidMount(){
    AsyncStorage.getItem('name')
    .then(value => {
      if(value != null){
        this.setState({name : value })}
      }
    )
    AsyncStorage.getItem('email').then
    (value => {
      if (value != null) {
        this.setState({email: value})
      }
    })
    }
     


  chooseFile = () => {
    var options = {
      title: 'pilih gambar',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };


 render() {
  let {image} = this.state
      return (
        <View style={{flex:1}}>
            <View style={style.Search}>
            <Text style={{color:'#fff'}}>
            profil kamu
            </Text>
            <View style={{paddingLeft:190}}>
            <MenuIcon
          //Menu Text
          menutext="ubah profil"
          //Menu View Style
          menustyle={{
            flexDirection: 'row',
           
          }}
          //Menu Text Style
          textStyle={{
            color: 'white',
          }}
          //Click functions for the menu items
          option1Click={() => { 
                       (this.setState({modalVisible :true})) }}
          option2Click={() => {}}
          option3Click={() => {}}
          option4Click={() => {
            alert('Option 4');
          }}
        />
        </View>
            </View>
            <ScrollView>
            <View style={style.container}>
         <View style={{flex:1}}>   
      <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:20,borderWidth:4,borderRadius:94,borderColor:'#633689',width: 205, height: 205}}>
          {/*<Image 
          source={{ uri: this.state.filePath.path}} 
          style={{width: 100, height: 100}} />*/}
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }}
            style={{ width: 200, height: 200 ,borderRadius:90}}
          />
          {/* <Image
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 250, height: 250 }}
          /> */}
          </View>
          {/* <Text style={{ alignItems: 'center' }}>
            {this.state.filePath.uri}
          </Text> */}
          <View style={{paddingTop:50}}>
            <View style={{paddingTop:50}}>
            <Text>nama : {this.state.name}</Text>
            <View style={{paddingTop:10}}>
            <Text>email : {this.state.email}</Text>
            </View>
            <View style={{paddingTop:10}}>
            <Text>info : pengguna harus mengikuti</Text>
            <Text>         kebijakan operator</Text>
            </View>
            <View style={{paddingTop:10}}>
            <Text>telp : </Text>
            </View>
            </View>
            
            </View>
            
     
         
             </View>
      </View>
      <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                  >
                    <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>

                    <View style={{height:'90%',width:'90%',alignItems:'center',justifyContent:'center',backgroundColor:'#00ff00'}}>
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:20,borderWidth:4,borderRadius:94,borderColor:'#633689',width: 205, height: 205}}>
                    <Image
                          source={{
                            uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                          }}
                          style={{ width: 200, height: 200 ,borderRadius:90}}
                        />
                        </View>
                    <View style={{}}>
                        <Button title="Choose File" onPress={this.chooseFile.bind(this)} />
                    </View>
                    <TouchableOpacity onPress={() => { 
                       (this.setState({modalVisible :false})) }}
                                                    style={{width: '70%',
                                                    padding: 10,
                                                    backgroundColor: '#f06292',
                                                    marginBottom: 10,
                                                    marginTop: 30,}}>
                                <Text style={{textAlign:'center',fontSize:20}}>OK</Text>

                    </TouchableOpacity>
                    </View>
                    </View>
                </Modal>
      </ScrollView>
        </View>
      );
    
  }


}
const style = StyleSheet.create({
  Search:{
    flexDirection:'row',height:50,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#633689',
    elevation:20,
    
  },
 
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 })
