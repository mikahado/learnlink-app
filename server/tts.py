import os
import elevenlabs
from elevenlabs import set_api_key, clone, generate, stream, play
from dotenv import load_dotenv
from readings_test import stories

from elevenlabs import voices

print(voices())

# load_dotenv()
# # Get the API key from the environment
# ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")
# set_api_key(ELEVENLABS_API_KEY)

# # Change this index to select a different story
# selected_story_index = 1

# if selected_story_index >= 0 and selected_story_index < len(stories):
#     selected_story = stories[selected_story_index]

#     # Generate and play the audio for the selected story
#     audio = elevenlabs.generate(text=selected_story, voice="Bella")
#     elevenlabs.play(audio)

# else:
#     print("Invalid story selection!", len(stories) - 1)

# # audio = generate(text="Some very long text to be read by the voice", voice=voice)

# # play(audio)

# # to save it as an mp3:
# # elevenlabs.save(audio, "audio.mp3")