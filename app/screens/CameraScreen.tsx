import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import { Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../config/colors';

const width = Dimensions.get('window').width;

const CameraScreen: React.FC = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  if (hasCameraPermission === null) {
    return <View />;
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.container} type={type}>
        <View style={styles.cameraView}>
          <TouchableOpacity
            style={styles.flipButton}
            onPress={() => {
              setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
            }}
          >
            <Ionicons name="ios-reverse-camera" style={styles.flipIcon} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  flipButton: {
    flex: 0.9,
    width: width,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  flipIcon: {
    fontSize: 50,
    color: colors.white,
  },
  cameraView: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
  },
});

export default CameraScreen;
