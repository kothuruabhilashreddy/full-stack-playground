import guide1 from "@/assets/images/guide1.png";
import guide2 from "@/assets/images/guide2.png";

export const images = {
  guide1,
  guide2,
};

export const guidelines = [
  {
    id: 1,
    title: "Stay close to the camera",
    overview:
      "Position yourself close enough so that you face is fully visible in the frame",
    instructions:
      "Ensure only the face should be visible in the image, avoid capturing shoulders and other backgrounds",
    image: images.guide1,
  },
  {
    id: 2,
    title: "Ensure you are looking straight at the camera",
    overview: "Avoid side profiles or looking away",
    instructions:
      "There should be no blockings(like hands, glasses, or hats) on your face",
    image: images.guide2,
  },
];
