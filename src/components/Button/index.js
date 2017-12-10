import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert , Dimensions } from 'react-native';
const PAGE = Dimensions.get('window');

class Button extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    const { onPress } = this.props;
    return (
      <View style={this.props.buttonContainerStyle}>
        <TouchableOpacity
          style={{ backgroundColor: '#2c3e50', height: 50, justifyContent: 'center', borderRadius: 5 }}
          onPress={onPress}
        >
          <Text style={{ textAlign: 'center', fontSize: 22, color: 'white', fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Button;