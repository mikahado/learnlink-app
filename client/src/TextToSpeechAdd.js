import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';

function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [mp3Blob, setMp3Blob] = useState(null);
  const [rec, setRec] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  const startRecording = () => {
    setIsRecording(true);
    const micRecorder = new MicRecorder({ bitRate: 128 });
    micRecorder.start().then(() => {
      setRec(micRecorder);
    });
  };

  const stopRecording = () => {
    if (rec) {
      setIsRecording(false);
      rec
        .stop()
        .getMp3()
        .then(([buffer, blob]) => {
          setMp3Blob(blob);
        });
    }
  };

  const onSubmit = () => {
    if (mp3Blob) {
      // Rest of your code for sending the audio to the server
      // Make sure to include the necessary form data and headers
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
      <button onClick={onSubmit} disabled={!mp3Blob}>
        Submit Recording
      </button>
    </div>
  );
}

export default AudioRecorder;
