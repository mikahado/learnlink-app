import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";
import axios from "axios";
//import stories from './ReadingsTest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';


function TextToSpeech({ text, onSetAudioPlayer, showPlayer, onError }) {

  const { teacherData } = useContext(UserContext);

  const voiceId = teacherData?.voice_id ? teacherData?.voice_id : "flq6f7yk4E4fJM5XTYuZ";
   
  const apiKey = process.env.REACT_APP_ELEVENLABS_API_KEY;
   
    const voiceSettings = {
      stability: 0.7,
      similarity_boost: 0.8,
    };

  const [loading, setLoading] = useState(false);

  const loadAudio = async () => {

    setLoading(true);
    onError("");

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
        onError("Uh oh! Ask your teacher for help.");
      }
    } catch (error) {
      onError("Uh oh! Ask your teacher for help.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* <p>Teacher ID: {voiceId.slice(0,5).toUpperCase()}</p> */}
      
      <button 
        className="w-24 h-24 flex flex-col justify-center items-center rounded-lg bg-textGround text-buttonTextGreen p-4 pb-2 text-sm"
        onClick={loadAudio}
      

        disabled={loading}
      >
        {showPlayer ? "Close Player" : <img src="/listen.png" alt="Show Images" className="w-full h-full object-cover pb-1"/>}
        {showPlayer ? "" : <span>Listen</span>}
      </button>
      
      
    </div>
  )
}

export default TextToSpeech;