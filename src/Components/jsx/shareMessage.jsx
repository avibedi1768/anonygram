import {generateImageFromText} from "./generateImageFromText"

// shareMessage.js
// import { generateImageFromText } from './generateImageFromText';

export const shareMessage = async (message) => {
  try {
    const image = await generateImageFromText(message);
    const link = document.createElement('a');
    link.href = image;
    link.download = 'message.png';
    link.click();
  } catch (error) {
    console.error('Error generating image:', error);
  }
};
