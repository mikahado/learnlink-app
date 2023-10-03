import React, { useState, useRef, useEffect } from "react";

const TextToSpeechAdd = ({ onVoiceIdChange }) => {
  const [isRecording, setIsRecording] = useState(false);
  // const [voiceId, setVoiceId] = useState(null);
  const [blobFlag, setBlobFlag] = useState(false);
  const [currentRecording, setCurrentRecording] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);

  // const handleVoiceIdChange = (voiceId) => {
  //   onVoiceIdChange(voiceId);
  // }

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        mediaRecorder.current = recorder;

        recorder.ondataavailable = (e) => {
          audioChunks.current.push(e.data);
        };

        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunks.current, {
            type: "audio/mpeg-3",
          });
          setCurrentRecording(audioBlob);
          const url = URL.createObjectURL(audioBlob);
          setAudioURL(url);
          setBlobFlag(true);
        };

        recorder.start();
        setIsRecording(true);
      })
      .catch((error) => {
        console.error("Error accessing microphone:", error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder.current && isRecording) {
      mediaRecorder.current.stop();
      setIsRecording(false);
      setBlobFlag(true);
    }
  };

  const sendData = async (apiKey) => {
    const data = currentRecording;
    console.log("data", data);
    try {
      const apiKey = process.env.REACT_APP_ELEVENLABS_API_KEY; // Replace with your actual API key
      const apiUrl = "https://api.elevenlabs.io/v1/voices/add"; // API endpoint URL

      // Prepare the data to be sent in the request body as multipart/form-data
      const formData = new FormData();
      formData.append("name", "Voice Name"); // Replace with the desired voice name
      formData.append("description", "Voice Description"); // Replace with the desired description
      formData.append("files", data, "recorded_audio.mp3"); // Add the recorded audio data as 'files'
      // Define the headers, including the xi-api-key
      const headers = new Headers({
        Accept: "application/json",
        "xi-api-key": apiKey,
      });

      // Create the POST request
      console.log("formData", formData);
      const request = new Request(apiUrl, {
        method: "POST",
        headers,
        body: formData,
      });

      // Send the request
      const response = await fetch(request);
      if (response.ok) {
        const responseData = await response.json();
        console.log("Voice added successfully:", responseData);
        onVoiceIdChange(responseData.voice_id);
        // setVoiceId(responseData.voice_id);
        // handleVoiceIdChange(responseData.voice_id)
      } else {
        console.error("Error:", response.status, response.statusText);
        // Handle the error response from the server
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle any errors that occur during the request
    }
  };

  return (
    <div>
      <h2 className="text-5xl font-bold pt-20">Voice Clone Instructions</h2>
      <div className="container mx-auto px-4 mt-10 font-thin bg-white rounded-3xl py-20 xsm:w-4/5 xsm:h-5/6">
        <p>1. Stay 6 inches away from the microphone.</p>
        <p>2. In your best storyteller voice, read the story below. </p>
        <p>3. Read clearly. Slower is better.</p>
      </div>
      <em>{isRecording ? <h3>Recording....</h3> : null}</em>
      <div className="flex flex-row items-center justify-center">
        <div class="w-20 h-20 mt-14 ml-8 rounded-2xl bg-secondaryPurple"></div>
        <div class="w-20 h-20 mt-14 ml-8 rounded-2xl bg-secondaryPurple"></div>
        <div class="w-20 h-20 mt-14 ml-8 rounded-2xl bg-secondaryPurple"></div>
        <div class="w-20 h-20 mt-14 ml-8 rounded-2xl bg-secondaryPurple"></div>
      </div>
      <button
        id="record"
        onClick={startRecording}
        disabled={isRecording}
        className=""
      >
        Start Recording
      </button>
      <button id="stopRecord" onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      <button id="reload" onClick={() => window.location.reload()}>
        Refresh
      </button>
      <button
        id="send"
        onClick={() => sendData(currentRecording)}
        disabled={!blobFlag}
      >
        Submit
      </button>
      <br />
      <br />
      {audioURL && (
        <audio controls>
          <source src={audioURL} type="audio/mpeg" />
          Your browser does not support the audio. Try a different browser.
        </audio>
      )}
      <h3>The Lion and the Mouse.</h3>{" "}
      <p>
        {" "}
        The lion lay asleep in the forest, his great head resting on his paws.
        -- A timid little Mouse came upon him unexpectedly, and in her fright
        and haste to get away, ran across the Lion's nose. -- Roused from his
        nap, the Lion laid his huge paw angrily on the tiny creature to kill
        her. -- "Spare me!" begged the poor Mouse. "Please let me go and some
        day I will surely repay you." -- The Lion was much amused to think that
        a Mouse could ever help him. But he was generous and finally let the
        Mouse go. -- Some days later, while stalking his prey in the forest, the
        Lion was caught in the toils of a hunter's net. -- Unable to free
        himself, he filled the forest with his angry roaring. -- The Mouse knew
        the voice and quickly found the Lion struggling in the net. -- Running
        to one of the great ropes that bound him, she gnawed it until it parted,
        and soon the Lion was free. -- "You laughed when I said I would repay
        you," said the Mouse. "Now you see that even a Mouse can help a Lion.
      </p>
    </div>
  );
};

export default TextToSpeechAdd;
