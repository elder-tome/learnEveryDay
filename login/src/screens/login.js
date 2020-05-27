import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

function login() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Svg width="414" height="293" viewBox="0 0 414 293" style={ styles.svg }>
        <Path d="M415 293C398.982 231.469 260.823 212.588 222.715 162.772C184.608 112.955 265.516 74.1014 265.516 74.1014C265.516 74.1014 312.342 44.1529 330.701 36.5195C349.059 28.8862 387.064 18.0924 415 23.4268V293Z" fill="#72B5A4"/>
        <Path d="M0 0H415V21.7225C415 21.7225 410.063 32.7542 333.279 46.528C256.494 60.3018 265 114.635 214.5 149.634C164 184.633 55.5 167.387 0 135.938V0Z" fill="#595757"/>
        <Path d="M0 3.39095e-06H232.862C232.862 3.39095e-06 250.786 -0.499993 251.5 4.5C252.214 9.5 247 16.5 193 14.5C139 12.5 46.5 14.5 68.5 38.5C90.5 62.5 47.7666 81.5077 0 76.6278V3.39095e-06Z" fill="#F2CEAB"/>
      </Svg>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.containerLogin}>
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          placeholderTextColor='#999'
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor='#999'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          textContentType='password'
        />
        <TouchableOpacity style={styles.button} onPress={() => { }}> 
          <Text style={styles.textButton}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.containerLinks}>
          <TouchableOpacity onPress={() => navigation.navigate('createLogin') }>
            <Text style={styles.text}>Sing out</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.text} >Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 40
  },
  svg:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  title: {
    marginTop: 50,
    marginBottom: 85,
    fontSize: 33,
    color: '#fff'
  },
  containerLogin: {
    width: '100%',
  },
  containerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    marginBottom: 18,
    fontSize: 20,
    backgroundColor: '#fff',
    borderRadius: 25
  },
  button: {
    height: 50,
    backgroundColor: '#595757',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 47
  },
  textButton: {
    fontSize: 20,
    color: '#fff'
  },
  text: {
    textDecorationLine: 'underline',
    fontSize: 20,
    color: '#595757'
  }
});

export default login;