import React, { useState } from 'react';
import { ReactMic } from 'react-mic';

function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const onData = (recordedData) => {
    // Handle data if needed
  };

  const onStop = (recordedBlob) => {
    if (recordedBlob.blob) {
      const formData = new FormData();
      formData.append('files', recordedBlob.blob, 'recorded_audio.wav');
      formData.append('name', 'Voice name');
      formData.append('labels', JSON.stringify({ accent: 'American' }));
      formData.append('description', 'Voice description');

      const url = 'https://api.elevenlabs.io/v1/voices/add';

      fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          'xi-api-key': 'ELEVENLABS_API_KEY',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Handle the server response
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div>
      <button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      <ReactMic
        record={isRecording}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
      />
    </div>
  );
}

export default AudioRecorder;