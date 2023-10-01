import React, { useState } from "react";

import TextToSpeech from "./TextToSpeech";
import TextToSpeechAdd from "./TextToSpeechAdd";

function ParentComponent() {
  const [voiceId, setVoiceId] = useState(null);

  const handleVoiceIdChange = (newVoiceId) => {
    console.log("newVoiceId", newVoiceId)
    setVoiceId(newVoiceId);
  };

  return (
    <div>
      <h1>LearnLink Teacher's Voice Synthesizer</h1>
      {/* Render TextToSpeech component and pass the voiceId */}
      <TextToSpeech teacher_name="Teacher Name" teacher_voice_id={voiceId} />

      {/* Render TextToSpeechAdd component and pass the callback function */}
      <TextToSpeechAdd onVoiceIdChange={handleVoiceIdChange} />
    </div>
  );
}

export default ParentComponent;