import React, { useState, useRef } from 'react';

function TextToSpeechAdd() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const recorder = new MediaRecorder(stream);
        mediaRecorder.current = recorder;

        recorder.ondataavailable = e => {
          audioChunks.current.push(e.data);
        };

        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunks.current, { type: 'audio/mpeg-3' });
          const url = URL.createObjectURL(audioBlob);
          setAudioURL(url);
          sendData(audioBlob);
        };

        recorder.start();
        setIsRecording(true);
      })
      .catch(error => {
        console.error('Error accessing microphone:', error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder.current && isRecording) {
      mediaRecorder.current.stop();
      setIsRecording(false);
    }
  };

  const sendData = async (data) => {
    try {
      const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
      const apiUrl = 'https://api.elevenlabs.io/v1/voices/add'; // API endpoint URL

      // Prepare the data to be sent in the request body as multipart/form-data
      const formData = new FormData();
      formData.append('name', 'Voice Name'); // Replace with the desired voice name
      formData.append('description', 'Voice Description'); // Replace with the desired description
      formData.append('files', data, 'recorded_audio.mp3'); // Add the recorded audio data

      // Define the headers, including the xi-api-key
      const headers = new Headers({
        'xi-api-key': apiKey,
      });

      // Create the POST request
      const request = new Request(apiUrl, {
        method: 'POST',
        headers,
        body: formData,
      });

      // Send the request
      const response = await fetch(request);
      if (response.ok) {
        const responseData = await response.json();
        console.log('Voice added successfully:', responseData);
        // Handle the response from the server
      } else {
        console.error('Error:', response.status, response.statusText);
        // Handle the error response from the server
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle any errors that occur during the request
    }
  };


  return (
    <>

    <h2>Voice Clone Instructions</h2>

    <p>
        Voice Clone. Stay 6 inches away from the microphone. Read the story below. Slowly. Clearly. Expressively!
    </p>
    
    <p>
        Rest assured, your voice is secure and will only be used to benefit your students.
    </p>

      <button id="record" onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button id="stopRecord" onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      {audioURL && (
        <audio controls>
          <source src={audioURL} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
        <p>
        The Crow and the Pitcher. In a spell of dry weather, -- when the Birds could find very little to drink, -- a thirsty Crow found a pitcher with a little water in it. -- But the pitcher was high and had a narrow neck, -- and no matter how he tried, the Crow could not reach the water. -- The poor thing felt as if he must die of thirst. -- Then an idea came to him. -- Picking up some small pebbles, he dropped them into the pitcher -- one by one. -- With each pebble the water rose a little higher -- until at last it was near enough so he could drink.
        </p>
    </>
  );
}

export default TextToSpeechAdd;
