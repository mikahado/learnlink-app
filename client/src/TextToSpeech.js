import React, { useState } from "react";
import axios from "axios";
import stories from './ReadingsTest';

const TextToSpeech = ({teacher_voice_id}) => {

  // pass down the voiceID of teacher. if it's null, then use default voiceID

    const voiceId = teacher_voice_id ? teacher_voice_id : "flq6f7yk4E4fJM5XTYuZ";

    // this variable MUST be named 'text' for the API to work
    const text = "test"
    // const text = stories[0];
   
    const apiKey = process.env.ELEVENLABS_API_KEY;
   
    const voiceSettings = {
      stability: 0.7,
      similarity_boost: 0.5,
    };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const startStreaming = async () => {
    setLoading(true);
    setError("");

    const baseUrl = "https://api.elevenlabs.io/v1/text-to-speech";
    const headers = {
      "Content-Type": "application/json",
      "xi-api-key": apiKey,
    };

    const requestBody = {
      text,
      voice_settings: voiceSettings,
    };

    try {
      const response = await axios.post(`${baseUrl}/${voiceId}`, requestBody, {
        headers,
        responseType: "blob",
      });

      if (response.status === 200) {
        const audio = new Audio(URL.createObjectURL(response.data));
        audio.play();
      } else {
        setError("Uh oh! Ask your teacher for help.");
      }
    } catch (error) {
      setError("Uh oh! Ask your teacher for help.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={startStreaming} disabled={loading}>
        Start Streaming
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default TextToSpeech;