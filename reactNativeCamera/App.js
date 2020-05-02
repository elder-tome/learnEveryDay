import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Modal,
  PermissionsAndroid
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from "@react-native-community/cameraroll";
import Icon from 'react-native-vector-icons/MaterialIcons';

function App() {

  const [image, setImage] = useState(null);
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const [flash, setFlash] = useState({
    flashMode: RNCamera.Constants.FlashMode.off,
    flashIcon: 'flash-off'
  });

  const cameraRef = useRef(null);

  function handleType() {
    if (type === RNCamera.Constants.Type.back) {
      setType(RNCamera.Constants.Type.front);
    }
    else if (type === RNCamera.Constants.Type.front) {
      setType(RNCamera.Constants.Type.back);
    }
  }

  function handleFlashMode() {
    if (flash.flashMode === RNCamera.Constants.FlashMode.off) {
      setFlash({ flashMode: RNCamera.Constants.FlashMode.on, flashIcon: 'flash-on' });
    }
    else if (flash.flashMode === RNCamera.Constants.FlashMode.on) {
      setFlash({ flashMode: RNCamera.Constants.FlashMode.off, flashIcon: 'flash-off' });
    }
  }

  async function savePicture() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          "title": "Permission to use Storage",
          "message": "We need your permission to use your Storage for the pictures"
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await CameraRoll.save(image, { type: 'photo', album: 'reactNativeCamera' });
      } else {
        console.log("Permissao de camera negada.");
      }
    } catch (err) {
      console.warn(err);
    }
    setImage(null);
  }

  async function takePicture() {
    if (cameraRef) {
      const options = {
        quality: 0.5,
        base64: true,
      };
      const { uri } = await cameraRef.current.takePictureAsync(options);
      setImage(uri);
    }
  };

  function handleClear() {
    setImage(null);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <View style={styles.container}>
        {
          image ?
            <Modal
              animationType='none'
            >
              <View style={styles.previw}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.containerModal}>
                  <TouchableOpacity onPress={handleClear} style={styles.touchable}>
                    <Icon name="clear" size={60} color="#fff" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={savePicture} style={styles.touchable}>
                    <Icon name="done" size={60} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            :
            <RNCamera
              ref={cameraRef}
              style={styles.camera}
              type={type}
              flashMode={flash.flashMode}
              autoFocus={RNCamera.Constants.AutoFocus.on}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
              }}
            />
        }
        <View style={styles.containerCapture}>
          <TouchableOpacity onPress={handleType}>
            <Icon name="autorenew" size={35} color="#fff" style={styles.touchable} />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePicture} style={styles.capture} />
          <TouchableOpacity onPress={handleFlashMode}>
            <Icon name={flash.flashIcon} size={35} color="#fff" style={styles.touchable} />
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
  },
  camera: {
    flex: 1
  },
  previw: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1
  },
  touchable: {
    padding: 10
  },
  containerModal: {
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 60
  },
  containerCapture: {
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 60
  },
  capture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
  },
});

export default App;
