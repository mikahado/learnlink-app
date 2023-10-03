import React, { useState } from "react";

import TextToSpeechTeacher from "./teacher/TextToSpeechTeach";
import TextToSpeechAdd from "./TextToSpeechAdd";

function ParentComponent() {
  const [voiceId, setVoiceId] = useState(null);

  const handleVoiceIdChange = (newVoiceId) => {
    console.log("newVoiceId", newVoiceId)
    setVoiceId(newVoiceId);
  };

  return (
    <div className="font-inter text-center content-around w-100 bg-primaryPurple h-screen">
      {/* Render TextToSpeech component and pass the voiceId */}
      <TextToSpeechTeacher teacher_name="Teacher Name" teacher_voice_id={voiceId} text={"hi"} />

      {/* Render TextToSpeechAdd component and pass the callback function */}
      <TextToSpeechAdd onVoiceIdChange={handleVoiceIdChange} />
    </div>
  );
}

export default ParentComponent;
