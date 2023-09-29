import React, { useState } from 'react';
import axios from 'axios';

function TextToSpeech() {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const stories = ["hi"]; // Define your stories here

  const handlePlayAudio = async () => {
    try {
      const response = await axios.post(
        'https://api.elevenlabs.io/v1/voices/generate',
        {
          text: stories[selectedStoryIndex],
          voice: 'Bella', // Replace with the desired voice
        },
        {
          headers: {
            'xi-api-key': 'ELEVENLABS_API_KEY',
            'Content-Type': 'application/json',
          },
        }
      );

      const audioData = response.data;

      // Play the audio here using a media player library or native audio element
      // Example using the HTML5 audio element:
      const audioElement = new Audio(audioData.url);
      audioElement.play();

      setAudioPlaying(true);
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  return (
    <div>
      <button onClick={handlePlayAudio} disabled={audioPlaying}>
        Play Audio
      </button>
      {audioPlaying && <p>Audio is playing...</p>}
    </div>
  );
}

export default TextToSpeech;
