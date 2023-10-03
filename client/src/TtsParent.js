import React, { useState } from "react";

import TextToSpeech from "./student/TextToSpeech";
import TextToSpeechAdd from "./TextToSpeechAdd";

function ParentComponent() {
  const [voiceId, setVoiceId] = useState(null);

  const handleVoiceIdChange = (newVoiceId) => {
    console.log("newVoiceId", newVoiceId)
    setVoiceId(newVoiceId);
  };

  return (
    <div>
      {/* Render TextToSpeech component and pass the voiceId */}
      <TextToSpeech teacher_name="Teacher Name" teacher_voice_id={voiceId} text={"hi"} />

      {/* Render TextToSpeechAdd component and pass the callback function */}
      <TextToSpeechAdd onVoiceIdChange={handleVoiceIdChange} />
    </div>
  );
}

export default ParentComponent;
