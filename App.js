import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, StatusBar, Dimensions, Alert } from 'react-native';
import TextField from './src/components/TextField/index';
import Button from './src/components/Button/index';

const PAGE = Dimensions.get('window');
class App extends Component {
  constructor() {
    super();
    this.state = {
      username: 'vanalfred@liquiddatasolutions.com',
      password: '123123',
      inputPassword: '',
      inputUsername: '',
    }
  }
  render() {
    const { username, password, inputPassword, inputUsername } = this.state;
    return(
      <View style={{ flex: 1, backgroundColor: '#1abc9c' }}>
        <StatusBar
          barStyle="dark-content"
        />
          <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>LOGIN PAR</Text>
          <KeyboardAvoidingView
            style={{ width: PAGE.width - 20, alignSelf: 'center' }}
            behavior="padding"
          >              
            <TextField
              textInputContainerStyle={{ paddingTop: 10 }}
              title={"Username or Email"}
              keyboardType={'email-address'}
              placeholder={"Enter your username or email"}
              onChangeText={(value) => {
                this.setState({ inputUsername: value });
              }}
            />
            <TextField
              textInputContainerStyle={{ paddingTop: 10 }}
              secureTextEntry={true}
              title={"Password"}
              placeholder={"Enter your password"}
              onChangeText={(value) => {
                this.setState({ inputPassword: value  });
              }}
            />
            <Button
              buttonContainerStyle={{ paddingTop: 20 }}
              onPress={() => {
                if(!inputPassword && !inputUsername){
                  Alert.alert(
                    'Ooops !',
                    'You need to have a username and password to proceed',
                    [
                      { text: 'OKAY', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    ],
                    { cancelable: false }
                  )
                }
                if (!inputPassword && inputUsername) {
                  Alert.alert(
                    'Ooops !',
                    'You need to put your password on the required field',
                    [
                      { text: 'OKAY', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    ],
                    { cancelable: false }
                  )
                }
                if (inputPassword && !inputUsername) {
                  Alert.alert(
                    'Ooops !',
                    'You need to put your email address or username on the required field',
                    [
                      { text: 'OKAY', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    ],
                    { cancelable: false }
                  )
                }
                if (inputPassword.length > 0 && inputUsername.length > 0) {
                  if (inputPassword === password && inputUsername === username) {
                    console.log('asd');
                    Alert.alert(
                      'Success !',
                      'You have login successfully',
                      [
                        { text: 'PROCEED', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                      ],
                      { cancelable: false }
                    )
                  } else if (inputPassword !== password || inputUsername !== username) {
                    Alert.alert(
                      'Oops! !',
                      'Your password and username did not match please try again',
                      [
                        { text: 'OKAY', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                      ],
                      { cancelable: false }
                    )
                  }
                }
              }}
            />
            <View style={{ height: 50 }} />
            </KeyboardAvoidingView>
          </View>
        <Text style={{ textAlign: 'center', marginBottom: 10 }}>© Van Alfred 2017</Text>
        </View>
    );
  }
}

export default App;