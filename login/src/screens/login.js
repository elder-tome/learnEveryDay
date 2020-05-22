import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';

import vector from '../assets/vector.png';

function login() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={ styles.imageHeader } source={ vector } />
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
  imageHeader:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  title: {
    marginTop: 50,
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
    marginBottom: 57
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