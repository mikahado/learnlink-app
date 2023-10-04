import React, { useState, useContext } from "react";
import { UserContext } from "./context/user"; 
import TextToSpeech from "./TextToSpeech";


import TextToSpeechTeacher from "./teacher/TextToSpeechTeach";
import TextToSpeechAdd from "./TextToSpeechAdd";

function ParentComponent() {

  const [voiceId, setVoiceId] = useState(null);

  const { user, handleVoiceIdChange } = useContext(UserContext);

  // const handleVoiceIdChange = (newVoiceId) => {
  //   console.log("newVoiceId", newVoiceId);

  //   // Send a PATCH request to update the teacher's table with the newVoiceId
  //   const apiUrl = `/teachers/${user?.id}`


  //   fetch(apiUrl, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ newVoiceId }),
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log("Voice ID updated successfully");
  //         setVoiceId(newVoiceId);
  //       } else {
  //         console.error("Error updating Voice ID:", response.status, response.statusText);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  return (
    <div className="font-inter text-center content-around w-100 bg-primaryPurple h-screen">
      {/* Render TextToSpeech component and pass the voiceId */}
      {/* <TextToSpeechTeacher teacher_name="Teacher Name" teacher_voice_id={voiceId} text={"hi"} /> */}
      {/* <TextToSpeech teacher_name="Teacher Name" teacher_voice_id={voiceId} /> */}

      {/* Render TextToSpeechAdd component and pass the callback function */}
      <TextToSpeechAdd onVoiceIdChange={handleVoiceIdChange} />
    </div>
  );
}

export default ParentComponent;
