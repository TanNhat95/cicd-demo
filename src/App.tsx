import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">React TypeScript Project</div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Welcome to My CICD Demo</h1>
            <p className="mt-2 text-gray-500">
              This is a modern React application built with TypeScript and Tailwind CSS,
              featuring continuous integration and deployment with GitHub Actions.
            </p>
            <div className="mt-4">
              <a
                href="https://github.com/TanNhat95"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Visit GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
