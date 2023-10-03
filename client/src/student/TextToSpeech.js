import React, { useState } from "react";
import axios from "axios";
//import stories from './ReadingsTest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';


function TextToSpeech({ teacher_name, teacher_voice_id, text, onSetAudioPlayer, showPlayer }) {

  // pass down the voiceID of teacher. if it's null, then use default voiceID
  // console.log("teachervoiceid:", teacher_voice_id)
  const voiceId = teacher_voice_id ? teacher_voice_id : "flq6f7yk4E4fJM5XTYuZ";
  //const voiceId = teacher_voice_id ? teacher_voice_id : "EXAVITQu4vr4xnSDxMaL";
   
  const apiKey = process.env.REACT_APP_ELEVENLABS_API_KEY;
   
    const voiceSettings = {
      stability: 0.7,
      similarity_boost: 0.8,
    };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadAudio = async () => {

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
        onSetAudioPlayer(audio);
        
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
      {/* <p>Teacher ID: {voiceId.slice(0,5).toUpperCase()}</p> */}
      <button 
        className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-textGround text-buttonTextGreen"
        onClick={loadAudio} 
        disabled={loading}
      >
        {showPlayer ? "Close" : <FontAwesomeIcon icon={faVolumeUp} size="lg" />}
        {showPlayer ? "" : <span>Read Aloud</span>}
      </button>
      
      {error && <p>{error}</p>}
    </div>
  )
}

export default TextToSpeech;