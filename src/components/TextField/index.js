import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';

class TextField extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    const { secureTextEntry, onBlur, onChangeText, keyboardType } = this.props;
    return (
      <View style={this.props.textInputContainerStyle}>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>{this.props.title}</Text>
        <TextInput
          secureTextEntry={secureTextEntry}
          style={{ 
            height: 40,
            paddingLeft: 8,
            fontSize: 16,
            backgroundColor: '#ecf0f1',
            color: 'black',
            borderRadius: 5 
          }}
          spellCheck={false}
          keyboardType={keyboardType}
          autoCorrect={false}
          onChangeText={onChangeText}
          value={this.state.text}
          placeholder={this.props.placeholder}
          onBlur={onBlur}
        />
      </View>
    );
  }
}

export default TextField;