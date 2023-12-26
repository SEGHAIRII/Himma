import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const handleSpeaking = () => {
  const { listening, resetTranscript ,transcript} = useSpeechRecognition();

  const toggleSpeechRecognition = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      resetTranscript();
    } else {
      SpeechRecognition.startListening();
    }
  };

  return { transcript, toggleSpeechRecognition };
};

export default handleSpeaking;