import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from "axios";

// Create a context for user data
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  // const [teacherData, setTeacherData] = useState(null);

  const [audioInstance, setAudioInstance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [newVoiceId, setNewVoiceId] = useState(null);
  


  useEffect(() => {
    fetch('/check_session') 
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Failed to fetch user data');
        }
      })
      .then((userData) => {
        setUser(userData);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
}, [loggedIn]);

console.log("newVoiceId", newVoiceId )

const voiceId = newVoiceId ? newVoiceId : "EXAVITQu4vr4xnSDxMaL";
// this variable MUST be named 'text' for the API to work
const text = "The Hare and the Tortoise";
const apiKey = process.env.REACT_APP_ELEVENLABS_API_KEY;

console.log(voiceId)

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




const handleVoiceIdChange = (newVoiceId) => {
 
  const apiUrl = `/teachers/${user?.id}`

  fetch(apiUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newVoiceId }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Voice ID updated successfully");
        setNewVoiceId(newVoiceId['voice_id']);
      } else {
        console.error("Error updating Voice ID:", response.status, response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};






  // Load user data when the component mounts

  // Function to log the user out
  const logout = () => {
    fetch('/logout', { method: 'DELETE' })
      .then((response) => {
        if (response.status === 204) {
          setUser(null);
        } else {
          throw new Error('Failed to log out');
        }
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <UserContext.Provider 
    value={{ 
        user, 
        logout,
        setUser,
        startStreaming,
        handleVoiceIdChange,
        setNewVoiceId,
        newVoiceId
    }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };