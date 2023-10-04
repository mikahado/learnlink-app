import React from 'react';
import { Link } from 'react-router-dom';

function StudentNotebook({ stories }) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-center mx-auto p-2 sm:p-4 md:p-6">

    {/* Div containing 5 large empty circles */}
    <div className="flex md:flex-col space-y-4 md:space-y-4 md:space-x-0 space-x-4 mb-4 md:mb-0 md:mr-6 px-8 py-4 border rounded-full bg-ctaGreen">
        <div>Great Work!</div>
        <div className="w-20 h-20 border-2 border-gray-400 rounded-full">
            <img src="https://i.etsystatic.com/16458179/r/il/407f8e/4334905895/il_794xN.4334905895_43ze.jpg" alt="Lesson 1" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="w-20 h-20 border-2 border-gray-400 rounded-full">
            <img src="https://i.etsystatic.com/16458179/r/il/407f8e/4334905895/il_794xN.4334905895_43ze.jpg" alt="Lesson 2" className="w-full h-full object-cover rounded-full grayscale" />
        </div>
        <div className="w-20 h-20 border-2 border-gray-400 rounded-full">
            <img src="https://i.etsystatic.com/16458179/r/il/407f8e/4334905895/il_794xN.4334905895_43ze.jpg" alt="Lesson 3" className="w-full h-full object-cover rounded-full grayscale" />
        </div>
        <div className="w-20 h-20 border-2 border-gray-400 rounded-full">
            <img src="https://i.etsystatic.com/16458179/r/il/407f8e/4334905895/il_794xN.4334905895_43ze.jpg" alt="Lesson 4" className="w-full h-full object-cover rounded-full grayscale" />
        </div>
        <div className="w-20 h-20 border-2 border-gray-400 rounded-full">
            <img src="https://i.etsystatic.com/16458179/r/il/407f8e/4334905895/il_794xN.4334905895_43ze.jpg" alt="Lesson 5" className="w-full h-full object-cover rounded-full grayscale" />
        </div>
    </div>

    {/* Rest of your existing content */}
    <div className="container md:w-3/4 flex flex-col">
        {/* Tabs - Map through subjects */}
        <div className="flex flex-col sm:flex-row">
            <div className="tab w-full sm:w-1/4 text-center py-2 bg-textGround sm:rounded-t-3xl border border-b-0">Reading</div>
            <div className="tab w-full sm:w-1/4 text-center py-2 bg-inactiveGray sm:rounded-t-3xl border border-gray-300">Math</div>
            <div className="tab w-full sm:w-1/4 text-center py-2 bg-inactiveGray sm:rounded-t-3xl border border-gray-300">Science</div>
            <div className="tab w-full sm:w-1/4 text-center py-2 bg-inactiveGray sm:rounded-t-3xl border border-gray-300">History</div>
        </div>

        {/* Tab Content */}
        <div className="content bg-textGround p-2 sm:p-4 md:p-6 rounded-b-lg border border-t-0 overflow-y-auto">
            {stories && stories.map(story => 
                <Link to={`/students/1/lessons/${story.id}`} key={story.id}>
                    <div className="flex justify-center items-center border rounded-lg">
                        <img className="w-full h-full object-cover" src={story.image} alt={story.title} />
                    </div>
                </Link>
            )}
        </div>

        {/* Style */}
        <style jsx>{`
            .tab:hover {
                cursor: pointer;
                background-color: #FBFBEE;
            }

            .content {
                max-height: 87vh;
            }
        `}</style>
    </div>
</div>


  );
}

export default StudentNotebook;