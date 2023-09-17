import { debounce } from "lodash";
import { recordsTotal } from "./selectors";

export const cost = (price, quantity) => {
  return price * quantity;
};

export const textToSpeech = (text, rate = 1, voice = 1) => {
  // console.log(rows);

  // Create a new SpeechSynthesisUtterance object
  let utterance = new SpeechSynthesisUtterance();

  // Set the text and voice of the utterance
  utterance.text = text;
  utterance.rate = 0.9;
  utterance.voice = window.speechSynthesis.getVoices()[1];

  // Speak the utterance
  window.speechSynthesis.speak(utterance);
};

// export const debounceTextToSpeech = debounce(
//   textToSpeech.bind(null,recordsTotal.innerText, 0.9, 1),
//   1000
// );

// export const config = () => {

// }
