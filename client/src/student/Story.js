import React from 'react';
import BionicReader from './BionicReader';

function Story({ showImages, textSize, showBionicReader }) {

    const story1 = `A Lion lay asleep in the forest, his great head resting on his paws. A timid little Mouse came upon him unexpectedly, and in her fright and haste to get away, ran across the Lion's nose. Roused from his nap, the Lion laid his huge paw angrily on the tiny creature to kill her.

    "Spare me!" begged the poor Mouse. "Please let me go and some day I will surely repay you."
    
    The Lion was much amused to think that a Mouse could ever help him. But he was generous and finally let the Mouse go.
    
    Some days later, while stalking his prey in the forest, the Lion was caught in the toils of a hunter's net. Unable to free himself, he filled the forest with his angry roaring. The Mouse knew the voice and quickly found the Lion struggling in the net. Running to one of the great ropes that bound him, she gnawed it until it parted, and soon the Lion was free.
    
    "You laughed when I said I would repay you," said the Mouse. "Now you see that even a Mouse can help a Lion."`;

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
        
            {showBionicReader ? <BionicReader text={story1} /> : story1}
        </div>
    
</div>




  );
}

export default Story;