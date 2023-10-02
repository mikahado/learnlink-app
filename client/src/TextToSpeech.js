import React, { useState } from "react";
import axios from "axios";
import stories from "./ReadingsTest";

const TextToSpeech = ({ teacher_name, teacher_voice_id }) => {
  const [audioInstance, setAudioInstance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // pass down the voiceID of teacher. if it's null, then use default voiceID
  console.log("teachervoiceid:", teacher_voice_id);
  // const voiceId = teacher_voice_id ? teacher_voice_id : "flq6f7yk4E4fJM5XTYuZ";
  const voiceId = teacher_voice_id ? teacher_voice_id : "EXAVITQu4vr4xnSDxMaL";

  // this variable MUST be named 'text' for the API to work
  const text = "The Hare and the Tortoise";
  // const text = stories[0];
  const apiKey = process.env.REACT_APP_ELEVENLABS_API_KEY;

  const voiceSettings = {
    stability: 0.7,
    similarity_boost: 0.8,
  };

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
        const newAudio = new Audio(URL.createObjectURL(response.data));
        setAudioInstance(newAudio);
        newAudio.play();
      } else {
        setError("Uh oh! Ask your teacher for help.");
      }
    } catch (error) {
      setError("Uh oh! Ask your teacher for help.");
    } finally {
      setLoading(false);
    }
  };

  const pauseAudio = () => {
    if (audioInstance) {
      audioInstance.pause(); // Pause the audio playback
    }
  };

  return (
    <div>
      <p>Teacher ID: {voiceId.slice(0, 5).toUpperCase()}</p>
      <button onClick={startStreaming} disabled={loading}>
        Read to Me 🗣️
      </button>
      <button onClick={pauseAudio}>Pause</button> {/* Add a pause button */}
      {error && <p>{error}</p>}
    </div>
  );
};

export default TextToSpeech;
