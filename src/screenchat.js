import React, { Component } from 'react';
import { View, Text,FlatList,StyleSheet,ActivityIndicator,Image,StatusBar ,ScrollView,Linking,TouchableOpacity,TextInput, AsyncStorage} from 'react-native';






export default class Screenchat extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading:false,
        dataSource:[],
        id:"",

    };
  }
    
  componentWillMount(){
    AsyncStorage.getItem('id')
    .then(value =>{
      if(value != null){
        this.setState({id : value})
      }
    })
  }
  

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const dataPesan = {
  //     sender_id: this.state.id,
  //     receiver_id: this.state.idUser,
  //     text: this.state.text
  //   };

  //   console.log("sender", this.state.user);
  //   console.log("receiver", this.state.idUser);
  //   // -------------------- API mengirim pesan ------------------
  //   axios
  //     .post(
  //       "https://aqueous-hollows-28311.herokuapp.com/message/send",
  //       dataPesan
  //     )
  //     .then(res => {
  //       console.log("pesan terkirim", res);
  //       this.setState({
  //         text: ""
  //       });
  //       this.handleChangeChat();
  //     });
  // };
  




_fetchItem = async ()=>{
    this.setState({ isLoading: true });
    try {
        let response = await fetch('https://aqueous-hollows-28311.herokuapp.com/message/1/2');
        let responseJson = await response.json();
        await this.setState({
                isLoading: false,
                dataSource: responseJson.message,
        });
     
    } catch (error) {
        console.error(error);
    }
}







_separatorComponent=()=>{
    return(
        <View style={{backgroundColor:'grey'}} />
    )
}


_itemComponent = ({ item })=>{
    let inpesan = item.sender_id === 2 
    let itemstyle = inpesan ? styles.inpesan :styles.outpesan 
    return(
        <View style={[styles.home,itemstyle]}>
       
     
            <View style={{flexDirection:'column',paddingTop:10}}>
           
            <View style={{paddingTop:5}}>
                <Text style={{textAlign:'center'}}>{item.text}</Text>
                <View style={{paddingTop:5}}>
                    <Text style={{textAlign:'center'}}>
                        {item.sender_id}
                    </Text>
                </View>
            </View>
            </View>
         
        
        </View>
    )
}







componentDidMount() {
    this._fetchItem()
 }





 

 render() {
    if (this.state.isLoading) {
        return (
            <View style={{ alignItems:'center' }}>
                <ActivityIndicator size={'large'} />
                
               
            </View>
        )
    }
    return (
        <View style={{ flex: 1,}}>
             <View style={styles.Search}>
            <Text style={{color:'#fff'}}>
            chating
            </Text>
            </View>
            
            <FlatList
                data={this.state.dataSource}
                renderItem={this._itemComponent}
                keyExtractor={(item, index) => index.toString()}
                onRefresh={this._fetchItem}
                refreshing={this.state.isLoading}
                ItemSeparatorComponent={this._separatorComponent}
            />

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                onChangeText={(name_address) => this.setState({name_address})}/>
          </View>

            <TouchableOpacity style={styles.btnSend}>
              <Image source={require('../gambar/icons8-email-send-96.png')} style={styles.iconSend}  />
            </TouchableOpacity>
        </View>
        </View>
    )
}}

const styles = StyleSheet.create({
  Search:{
    flexDirection:'row',height:50,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#633689',
    elevation:20
  },
    footer:{
        flexDirection: 'row',
        height:60,
        paddingHorizontal:10,
        padding:5,
      },
      inputContainer: {
        borderWidth:1,
        borderColor:'#9b59b6',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        height:40,
        flexDirection: 'row',
        alignItems:'center',
        flex:1,
        marginRight:10,
      },
      inputs:{
        height:40,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
        
      },
      btnSend:{
        elevation:10,
        borderWidth:1,
        borderColor:'#9b59b6',
        backgroundColor:"#FFF",
        width:40,
        height:40,
        borderRadius:360,
        alignItems:'center',
        justifyContent:'center',
      },
      iconSend:{
    
        width:30,
        height:30,
        alignSelf:'center',
      },
      home:{
        justifyContent:'center',
        marginBottom:10,
        paddingBottom:20,
        borderRadius:30,
        height:60,
        width:300,
        borderWidth:1,
        borderColor:'#9b59b6'
      },
      inpesan:{
         alignSelf:'flex-start' 
      },
      outpesan:{
        alignSelf:'flex-end' 
     }
})