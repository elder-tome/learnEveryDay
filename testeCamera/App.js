import React, { useState, useRef } from 'react';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';

function App() {

  const [ image, setImage ] = useState(null);
  const [ type, setType ] = useState(RNCamera.Constants.Type.back);
  const [ flashMode, setFlashMode ] = useState([RNCamera.Constants.FlashMode.off,'flash-off']);
  
  const cameraRef = useRef(null);

  function handleType(){
    if(type === RNCamera.Constants.Type.back){
      setType(RNCamera.Constants.Type.front);
    }
    else if(type === RNCamera.Constants.Type.front){
      setType(RNCamera.Constants.Type.back);
    }
  }
  
  function handleFlashMode(){
    if(flashMode[0] === RNCamera.Constants.FlashMode.off){
      setFlashMode([RNCamera.Constants.FlashMode.on, 'flash-on']);
    }
    else if(flashMode[0] === RNCamera.Constants.FlashMode.on){
      setFlashMode([RNCamera.Constants.FlashMode.off, 'flash-off']);
    }
  }

  async function takePicture(){
    if (cameraRef) {
      const options = { 
        quality: 0.5, 
        base64: true,
      };
      const { uri } = await cameraRef.current.takePictureAsync(options);
      setImage(uri);
    }
  };

  function handleClear(){
    setImage(null);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <View style={styles.container}>
        {
          image ? <View style={styles.preview}>
            <Image source={{ uri: image }} style={{ flex: 1 }} />
            <TouchableOpacity onPress={handleClear} style={styles.clear}>
              <Icon name="clear" size={40} color="#000" />
            </TouchableOpacity>
          </View>
          :
          <RNCamera
            ref={cameraRef}
            style={styles.preview}
            type={type}
            flashMode={flashMode[0]}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
            }}
          />
        }
        <View style={styles.containerCapture}>
          <TouchableOpacity onPress={handleType}>
            <Icon name="autorenew" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture} style={styles.capture} />
          <TouchableOpacity onPress={handleFlashMode}>
            <Icon name={flashMode[1]} size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
  },
  clear:{
    position: 'absolute',
    top:8,
    left:8,
  },
  containerCapture:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
    paddingHorizontal: 60
  },
  capture: {
    width: 80,
    height: 80,
    borderRadius:40,
    backgroundColor: '#fff',
  },
});

export default App;
