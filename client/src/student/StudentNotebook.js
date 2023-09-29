import React from 'react';

function StudentNotebook() {
  return (
    <div className="container mx-auto p-2 sm:p-4 md:p-6 border border-gray-300 mt-10 rounded-lg bg-textGround">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row">
        <div className="tab w-full sm:w-1/4 text-center py-2 bg-white rounded-t-lg sm:rounded-l-t-lg sm:rounded-r-none border border-b-0">Reading</div>
        <div className="tab w-full sm:w-1/4 text-center py-2 bg-inactiveGray sm:rounded-none border border-gray-300">Math</div>
        <div className="tab w-full sm:w-1/4 text-center py-2 bg-inactiveGray sm:rounded-none border border-gray-300">Science</div>
        <div className="tab w-full sm:w-1/4 text-center py-2 bg-inactiveGray rounded-t-lg sm:rounded-r-t-lg sm:rounded-l-none border border-gray-300">History</div>
      </div>

      {/* Tab Content */}
      <div className="bg-white p-2 sm:p-4 md:p-6 rounded-b-lg border border-t-0">
        This is the content for Tab 1.
      </div>

      {/* Style */}
      <style jsx>{`
        .tab:hover {
          cursor: pointer;
          color: blue;
        }
      `}</style>
    </div>
  );
}

export default StudentNotebook;