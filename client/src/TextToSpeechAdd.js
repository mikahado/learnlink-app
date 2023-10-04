import React, { useState, useRef, useEffect } from "react";
import Pause from "./teacher/pause.png";
import Play from "./teacher/play.png";
import Record from "./teacher/record.png";
import Return from "./teacher/return.png";
import NotRecord from "./teacher/recording stoped .png";
import { Link, useNavigate } from "react-router-dom";

const TextToSpeechAdd = ({ onVoiceIdChange }) => {

  const navigate = useNavigate();

  const instruParagraph = (
    <>
      <p>1. Stay 6 inches away from the microphone.</p>
      <p>2. Read clearly. Slower is better.</p>
      <p>
        3. When you're done with the instructions, click on the button "Got It!"
        and the story will show up.{" "}
      </p>
      <p>
        4. Ready to read? Click on the "Record" button and in your best
        storyteller voice, read the story!
      </p>
      <p>
        5. After you're done reading, click on the record button to stop the
        recording, and listen to your recording.{" "}
      </p>
      <p>
        If you like if, you can submit, or re-record by clicking the rewind
        arrow!
      </p>
    </>
  );
  const [isRecording, setIsRecording] = useState(false);
  const [displayOfIns, setDisplayOfIns] = useState(instruParagraph);
  const [instructions, setInstructions] = useState(true);
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

  const story = (
    <>
      <h3 className="text-center">The Lion and the Mouse.</h3>
      <p className="text-center">
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
    </>
  );
  
  const sendData = async (apiKey) => {
    const data = currentRecording;
    console.log("data", data);
    try {
      const apiKey = process.env.REACT_APP_ELEVENLABS_API_KEY; 
      const apiUrl = "https://api.elevenlabs.io/v1/voices/add"; 


      const formData = new FormData();
      formData.append("name", "Voice Name"); 
      formData.append("description", "Voice Description"); 
      formData.append("files", data, "recorded_audio.mp3"); 

      const headers = new Headers({
        Accept: "application/json",
        "xi-api-key": apiKey,
      });


      console.log("formData", formData);
      const request = new Request(apiUrl, {
        method: "POST",
        headers,
        body: formData,
      });

   
      const response = await fetch(request);
      if (response.ok) {
        const responseData = await response.json();
        console.log("Voice added successfully:", responseData);
        onVoiceIdChange(responseData);
        navigate('/classpage');
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

  function handleClick(e) {
    setInstructions(!instructions);
    setDisplayOfIns(e.target.innerHTML === "Got It!" ? story : instruParagraph);
    console.log(e.target.innerHTML);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-5xl font-bold pt-20">Voice Clone Instructions</h2>
      <div className="container mx-auto mt-10 font-thin bg-white rounded-3xl py-20 xsm:w-4/5 xsm:h-5/6 text-center">
        {displayOfIns}
      </div>
      {isRecording && (
        <em>
          <h3>Recording....</h3>
        </em>
      )}
      <div className="">
        <button
          onClick={handleClick}
          className="mt-8 border rounded-2xl text-sm  text-white h-[36px] border-white lg:w-48 md:w-40 sm:w-24 px-3"
        >
          {instructions ? "Got It!" : "See Instructions"}
        </button>
        <div className="flex justify-center gap-8">
          <div
            className="w-20 h-20 mt-8 rounded-2xl bg-secondaryPurple flex justify-center"
            onClick={isRecording ? stopRecording : startRecording}
            disabled={isRecording}
          >
            <img src={isRecording? Record : NotRecord} className="object-scale-down" alt="Record" />
          </div>
          <div
            className="w-20 h-20 mt-8 rounded-2xl bg-secondaryPurple flex justify-center"
            id="reload"
            onClick={() => window.location.reload()}
          >
            <img src={Return} className="object-scale-down" alt="Reload" />
          </div>
          {/* <TextToSpeechTeach /> */}
        </div>

        <div className="flex flex-col items-center my-4 space-y-8">
          {audioURL && (
            <audio controls>
              <source src={audioURL} type="audio/mpeg" />
              Your browser does not support the audio. Try a different browser.
            </audio>
          )}

          <button
            id="send"
            onClick={() => sendData(currentRecording)}
            disabled={!blobFlag}
            className="block m-4 text-sm rounded-2xl bg-ctaGreen h-[36px] lg:w-48 md:w-40 sm:w-24 px-3"
          >
            Submit
          </button>

          <Link to="/classpage">
            <button className="block text-sm rounded-2xl bg-ctaGreen h-[36px] lg:w-48 md:w-40 sm:w-24 px-3">
              Skip
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeechAdd;
