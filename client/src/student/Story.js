import React from 'react';
import BionicReader from './BionicReader';

function Story({ showImages, textSize, showBionicReader, activeStory }) {

    // NEED TO SET LOADING STATE IN PARENT TO DEAL WITH REFRESH ISSUE -OR- JUST FETCH THIS STORY LOL

  return (
    <div className="container mx-auto p-2 sm:p-4 md:p-6 max-h-screen flex flex-col">

    {showImages &&
        <div>
            <h1 className="text-2xl mb-4 border p-4 rounded-3xl bg-ctaGreen text-center flex-shrink-0">{activeStory.title}</h1>
        </div>
    }

        <div className={`border rounded p-4 mx-auto max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl overflow-y-auto flex-grow ${textSize}`}>
            {showImages &&
                <img 
                    className="mx-auto w-full max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl object-contain object-center h-auto"
                    src={activeStory.image} 
                    alt="The Lion and the Mouse"
                />
            }
        
            {showBionicReader ? <BionicReader text={activeStory.text} /> : <div style={{ whiteSpace: 'pre-line' }}>{activeStory.text}</div>}
        </div>
    
</div>




  );
}

export default Story;