import React from 'react';
import { StyleSheet, Text, Image, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';

import vector from './src/assets/vector.png'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#595757' />
      <Image style={ styles.imageHeader } source={ vector } />
      <Text style={styles.welcome}>Welcome</Text>
      <View style={styles.containerLogin}>
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          placeholderTextColor='#999'
          autoCapitalize='words'
          autoCorrect={false}
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          placeholderTextColor='#999'
          autoCapitalize='words'
          autoCorrect={false}
          secureTextEntry={true}
          textContentType='password'
        />
        <TouchableOpacity style={styles.button} onPress={() => { }}>
          <Text style={styles.textButton}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.containerLinks}>
          <TouchableOpacity onPress={() => { }}>
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
    paddingHorizontal: 40
  },
  imageHeader:{
    position: 'absolute',
    left: 0,
    top: 0,
  },
  welcome: {
    marginTop: 90,
    marginBottom: 80,
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
    marginBottom: 65
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
