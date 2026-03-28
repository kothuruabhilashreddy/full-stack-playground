import { CameraView, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CameraRoomHeader from "../../components/CameraRoomHeader";
import { Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import RetakeScreen from "../../components/RetakeScreen";
import CameraInstructions from "./CameraInstructions";

const CameraScreen = ({ inst, handleCapturedImage }) => {
  const [facing, setFacing] = useState("front");
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync({ base64: true });
      handleCapturedImage(photo);
    }
  };

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <CameraRoomHeader />
      <CameraView
        style={styles.camera}
        facing={facing}
        ref={(ref) => setCameraRef(ref)}
      >
        {/* <Image
          // style={{ height: hp(25) }}
          style={{ width: "100%", height: "100%" }}
          resizeModel="contain"
          source={require("../../assets/images/face_mask_bg.png")}
        /> */}
        <CameraInstructions instruction={inst} />
      </CameraView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <MaterialCommunityIcons
            name="camera-flip-outline"
            size={35}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <MaterialCommunityIcons name="camera-iris" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    padding: 30,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default CameraScreen;

// const sendPhotoToBackend = async (photo) => {
// try {
//   const response = await fetch('http://your-backend-api-url/process-image', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       image: photo.base64,  // Send the base64 of the image
//     }),
//   });

//   const result = await response.json(); // Assuming the backend sends back a JSON response
//   if (result.status === true) {
//     alert('Image is valid');
//   } else {
//     alert('Image is not valid');
//   }
// } catch (error) {
//   console.error('Error sending image to backend', error);
// }
//   console.log('photo send')
// };
