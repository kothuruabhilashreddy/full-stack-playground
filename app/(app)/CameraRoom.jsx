import React, { useState, useEffect } from "react";
import CameraScreen from "./CameraScreen";
import ReviewScreen from "./ReviewScreen";
import { Alert } from "react-native";
import { useRouter } from "expo-router";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";

export default function CameraRoom() {
  const [showReviewScreen, setShowReviewScreen] = useState(false);
  const [userImages, setUserImages] = useState([]);
  const router = useRouter();
  const [inst, setInst] = useState("Keep face closer to the camera");

  useEffect(() => {
    if (userImages.length >= 2) setShowReviewScreen(true);
    // return () => {
    //   setShowReviewScreen(false);
    //   setUserImages([]);
    // };
    if (userImages.length === 1) setInst("Now smile and take another image");
  }, [userImages]);

  const handleCapturedImage = (newImage) => {
    setUserImages([...userImages, newImage]);
  };

  const handleRetakeImage = () => {
    setUserImages([]);
    setShowReviewScreen(false);
  };

  const saveImage = async (base64Image, filename) => {
    try {
      const filename = `userImage_${new Date().getTime()}`;
      const imageUri = `${FileSystem.documentDirectory}${filename}.jpg`;

      // Write the image data to the filesystem
      await FileSystem.writeAsStringAsync(imageUri, base64Image, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Save the image to the media library (optional)
      await MediaLibrary.createAssetAsync(imageUri);
      //   return imageUri; // Return the image URI if needed
    } catch (error) {
      console.error("Error saving image:", error);
      Alert.alert("Error", "Could not save the image.");
    }
  };

  //   const saveImage = async (image) => {
  //     console.log("this is to check:", image);
  //     try {
  //       const { status } = await MediaLibrary.requestPermissionsAsync();
  //       if (status === "granted") {
  //         await MediaLibrary.saveToLibraryAsync(image.uri);
  //         console.log("Image successfully saved");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleSubmitRequest = async () => {
    try {
      const response = await fetch("http://172.24.25.132:5000/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          images: userImages.map((image) => image.base64),
        }),
      });

      const data = await response.json();

      if (response.ok && data.result) {
        // Update the database
        Alert.alert("Task Completed", "Thank you for uploading images", [
          {
            text: "Ok",
            onPress: () => {
              router.push("/home");
            },
          },
          //   {
          //     text: "Download",
          //     onPress: () => {
          //       userImages.map(async (image) => await saveImage(image.base64));
          //       router.push("/home");
          //     },
          //   },
        ]);
        userImages.map(async (image) => await saveImage(image.base64));
      } else {
        Alert.alert(
          "Images not accepted",
          "Please read the instructions and try uploading the images again",
          [
            {
              text: "OK",
              onPress: () => {
                router.push("/welcome");
              },
            },
          ],
        );
      }
    } catch (error) {
      //   console.error("Error:", error);
      Alert.alert("Error", "App not working", [
        {
          text: "Retry",
          onPress: () => {
            router.push("/home");
          },
        },
      ]);
    }
  };

  return showReviewScreen ? (
    <ReviewScreen
      userImages={userImages}
      handleRetakeImage={handleRetakeImage}
      handleSubmitRequest={handleSubmitRequest}
    />
  ) : (
    <CameraScreen inst={inst} handleCapturedImage={handleCapturedImage} />
  );
}
