import React from 'react';
import { Link } from 'react-router-dom';

function StudentNotebook({ stories }) {
  return (
    <div className="container mx-auto p-2 sm:p-4 md:p-6 ">
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
            <Link to={`/students/1/lessons/${story.id}`}>
                <div className="border rounded-lg" key={story.id} >
                    <img src={story.image} alt={story.title} />
                </div>
            </Link>
        )
        }
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
  );
}

export default StudentNotebook;