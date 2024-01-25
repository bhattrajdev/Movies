import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 m4-r p-4 bg-gray-800 rounded-md">
        <div className="flex flex-row gap-4 bg-gray-700 p-4 rounded-md">
          {/* Content for the first section */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white mb-4">Section 1</h2>
            {/* Your content for Section 1 goes here */}
            <p className="text-gray-300">
              Some information or charts can go here.
            </p>
          </div>

          {/* Content for the second section */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white mb-4">Section 2</h2>
            {/* Your content for Section 2 goes here */}
            <p className="text-gray-300">
              More details or data can be placed here.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-4 bg-gray-700 p-4 rounded-md">
          {/* Content for the third section */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white mb-4">Section 3</h2>
            {/* Your content for Section 3 goes here */}
            <p className="text-gray-300">Additional content or features.</p>
          </div>

          {/* Content for the fourth section */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white mb-4">Section 4</h2>
            {/* Your content for Section 4 goes here */}
            <p className="text-gray-300">
              Include whatever is relevant for this section.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard