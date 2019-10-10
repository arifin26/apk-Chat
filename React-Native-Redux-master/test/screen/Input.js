import React from 'react'
import { View, Text, TextInput ,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { rubahNama, rubahUmur, rubahAlamat } from '../Redux/actions/changeActions'
class Input extends React.Component {
  render () {
    return (
      <View>
      
        <Text >{this.props.name}</Text>
        <Text>{this.props.umur}</Text>
        <Text>{this.props.alamat}</Text>
        <TextInput
          value={this.props.name}
          placeholder='ketik name'
          onChangeText={(text) => this.props.rubahNama(text)}
        />
        <TextInput
          value={this.props.umur}
          placeholder='ketik name'
          onChangeText={(text) => this.props.rubahUmur(text)}
        />
        <TextInput
          value={this.props.alamat}
          placeholder='ketik name'
          onChangeText={(text) => this.props.rubahAlamat(text)}
        />

        <Text onPress={() => this.props.navigation.navigate('Home')}>Home</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  let { name, umur, alamat } = state.HomeReducer
  return { name, umur, alamat   }
}
export default connect(mapStateToProps,{ rubahNama, rubahUmur, rubahAlamat })(Input)
