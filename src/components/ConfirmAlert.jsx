import React from 'react'

function ConfirmAlert() {
  return (
    <>
          <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 max-w-full sm:max-w-md lg:max-w-lg w-full mx-4 lg:mx-8">
        <div className="flex justify-center lg:justify-between items-center mb-8">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-4">
            
            <div className="flex items-center">
              <div className="p-2 bg-gray-200 rounded-full">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zM6 21v-2c0-1.105.895-2 2-2h8c1.105 0 2 .895 2 2v2H6z"
                  />
                </svg>
              </div>
              <span className="ml-2 text-sm text-gray-700">Account</span>
            </div>
           
            <svg
              className="w-6 h-6 text-gray-400 hidden sm:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6" />
            </svg>
          
            <div className="flex items-center">
              <div className="p-2 bg-gray-200 rounded-full">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zM6 21v-2c0-1.105.895-2 2-2h8c1.105 0 2 .895 2 2v2H6z"
                  />
                </svg>
              </div>
              <span className="ml-2 text-sm text-gray-700">Profile</span>
            </div>
           
            <svg
              className="w-6 h-6 text-gray-400 hidden sm:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6" />
            </svg>
           
            <div className="flex items-center">
              <div className="p-2 bg-gray-200 rounded-full">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3zM6 21v-2c0-1.105.895-2 2-2h8c1.105 0 2 .895 2 2v2H6z"
                  />
                </svg>
              </div>
              <span className="ml-2 text-sm text-gray-700">Confirmation</span>
            </div>
          </div>
        </div>
       
        <div className="text-center mb-8">
          <div className="p-4 rounded-full bg-green-200 inline-block">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mt-4">All done!</h2>
          <p className="text-gray-600 mt-2">Your account verification has been successfully completed.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default ConfirmAlert
