import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import image from '../assets/image.png';
import arraw from '../assets/arraw.png';

function createLogin() {

  const navigation = useNavigation();

  return (
    <View style={ styles.constaine } >
      <Image style={ styles.image } source={image}/>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={arraw}/>
      </TouchableOpacity>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder='Name'
          placeholderTextColor='#999'
          autoCapitalize='words'
          autoCorrect={false}
        />
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
          <Text style={styles.textButton}>Sign out</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  constaine:{
    flex: 1,
    backgroundColor: '#E9E9E9',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 40
  },
  image:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  title: {
    width: 136,
    marginTop: 30,
    marginBottom: 46,
    fontSize: 33,
    color: '#fff'
  },
  containerInput: {
    width: '100%',
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
  },
  textButton: {
    fontSize: 20,
    color: '#fff'
  },
});

export default createLogin;