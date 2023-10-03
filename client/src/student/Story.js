import React from 'react';
import BionicReader from './BionicReader';

function Story({ showImages, textSize, showBionicReader, story }) {

  return (
    <div className="container mx-auto p-2 sm:p-4 md:p-6 max-h-screen flex flex-col">

    {showImages &&
        <div>
            <h1 className="text-2xl mb-4 border p-4 rounded-3xl bg-ctaGreen text-center flex-shrink-0">The Lion and the Mouse</h1>
        </div>
    }

        <div className={`border rounded p-4 mx-auto max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl overflow-y-auto flex-grow ${textSize}`}>
            {showImages &&
                <img 
                    className="mx-auto w-full max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl object-contain object-center h-auto"
                    src="https://media.licdn.com/dms/image/C4E12AQG8r1rVVjVzJA/article-cover_image-shrink_600_2000/0/1520155512382?e=2147483647&v=beta&t=vELe9ECIW5mtJE_RGgQ5F2tnocKXsiUfUs8G1E0vQFc" 
                    alt="The Lion and the Mouse"
                />
            }
        
            {showBionicReader ? <BionicReader text={"hi"} /> : <div style={{ whiteSpace: 'pre-line' }}>{"hi"}</div>}
        </div>
    
</div>




  );
}

export default Story;