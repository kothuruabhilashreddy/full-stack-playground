import React from "react";

import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// const CameraInstructions = () => {
//   return <View className="flex-1 border-4 justify-center items-center" style={styles.egg} />;
// };

// //style={styles.egg}
// const styles = StyleSheet.create({
//   egg: {
//     width: wp(80),
//     height: wp(100),
//     backgroundColor: "red",
//     borderTopLeftRadius: 108,
//     borderTopRightRadius: 108,
//     borderBottomLeftRadius: 95,
//     borderBottomRightRadius: 95,
//   },
// });

// const CameraInstructions = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.overlay}>
//         <View style={styles.eggCutout} />
//       </View>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1, // Make camera fill the entire screen
  },
  overlay: {
    // position: "absolute",
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark overlay
  },
  eggCutout: {
    width: 126,
    height: 180,
    borderTopLeftRadius: 108,
    borderTopRightRadius: 108,
    borderBottomLeftRadius: 95,
    borderBottomRightRadius: 95,
    borderRadius: 100, // Circular shape
    backgroundColor: "transparent", // Makes the circle itself transparent
    borderColor: "white", // Circle outline color (could be white or another color)
    borderWidth: 4, // Thickness of the circle outline
  },
});

const CameraInstructions = ({ instruction }) => {
  return (
    <View className="flex-row justify-center my-4">
      <View style={styles.overlay} className="px-4 py-2 rounded-full">
        <Text className="color-white">{instruction}</Text>
      </View>
    </View>
  );
};

export default CameraInstructions;
