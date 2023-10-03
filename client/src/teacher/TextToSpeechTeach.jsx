import React, { useState } from "react";
import axios from "axios";
//import stories from './ReadingsTest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import Play from "./play.png"


function TextToSpeech({ teacher_name, teacher_voice_id, text, onSetAudioPlayer, showPlayer }) {

  // pass down the voiceID of teacher. if it's null, then use default voiceID
  // console.log("teachervoiceid:", teacher_voice_id)
  const voiceId = teacher_voice_id ? teacher_voice_id : "flq6f7yk4E4fJM5XTYuZ";

   
  const apiKey = process.env.REACT_APP_ELEVENLABS_API_KEY;
   
    const voiceSettings = {
      stability: 0.7,
      similarity_boost: 0.8,
    };

  

  const [loading, setLoading] = useState(false);
  const [audio, setAudio] = useState(null)

  function onSetAudioPlayer(aud) {
    setAudio(aud);
  }
  

  const loadAudio = async () => {

    setLoading(true);
 

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
        alert("Oops! Please refresh the page and try again!")
      }
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    
      {/* <p>Teacher ID: {voiceId.slice(0,5).toUpperCase()}</p> */},
      <div className="w-20 h-20 mt-8 rounded-2xl bg-secondaryPurple flex justify-center" onClick={loadAudio} 
        disabled={loading}>
        <img src={Play} className="object-scale-down"/>
        </div>
      
      
      
    
  )
}

export default TextToSpeech;