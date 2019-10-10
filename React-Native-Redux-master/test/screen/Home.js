import React from 'react'
import {View, Text, TextInput} from 'react-native'
import {connect} from 'react-redux'
import {rubahNama, rubahUmur, rubahAlamat} from '../Redux/actions/changeActions'
class Input extends React.Component{
 
    render(){
        return(
            <View>
                <Text>{this.props.name}</Text>
                <Text>{this.props.umur}</Text>
                <Text>{this.props.alamat}</Text>
                
                <Text onPress={()=>this.props.navigation.navigate('Input')}>Home</Text>
            </View>
        )
    }
}

const mapStateToProps = (state)=>{
    const {name, umur, alamat} = state.HomeReducer
    return{name, umur, alamat}
}
export default connect(mapStateToProps,{rubahNama, rubahUmur, rubahAlamat})(Input)