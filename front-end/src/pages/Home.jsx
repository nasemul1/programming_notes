function Home() {
  return (
    <div>
      <div className="flex justify-center md:justify-around h-[50vh] overflow-x-hidden bg-gradient-to-r from-[#83C314] via-[#83C314] to-[#1565FC]">
        <div>
          <h1 className="text-4xl text-white font-[900] ml-6 mt-16 ">Learn to Code and Solving Problems. </h1>
          <p className="w-[70vw] text-white font-medium ml-6 mt-4 "> Master Languages in more Interactive way than you have ever before. </p>
          <button className=" bg-yellow-500/90 mt-6 ml-6 text-lg text-white p-3 rounded-md shadow-md hover:shadow-lg hover:scale-105 ease-in-out duration-300 hover:bg-yellow-500 hover:-translate-y-0.5 hover:cursor-pointer ">Start Learning  </button>
        </div>
        <img className="hidden brightness-150 md:block hover:scale-105 hover:-translate-y-2.5 ease-in-out duration-300 " src="/Panda.png" alt="Panda" srcSet="/Panda.png" />
      </div>
      <section className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 ease-in-out duration-300 ">
            <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 4.477 9.246 3 7.5 3S4.168 4.477 3 6.253v13C4.168 17.477 5.754 16 7.5 16s3.332 1.477 4.5 3.253m0-13C13.168 4.477 14.754 3 16.5 3c1.747 0 3.332 1.477 4.5 3.253v13C19.832 17.477 18.246 16 16.5 16c-1.747 0-3.332 1.477-4.5 3.253"></path>
            </svg>
            <h3 className="text-xl font-semibold mb-2">Interactive Courses</h3>
            <p className="text-gray-600">Learn and explore languages with hands-on projects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 ease-in-out duration-300 ">
            <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
            <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
            <p className="text-gray-600">Write and test your skills on realtime problem solving.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 ease-in-out duration-300 ">
            <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
            <h3 className="text-xl font-semibold mb-2">How to... </h3>
            <p className="text-gray-600">Explore our "how to..." series to learn beyond internet. </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 ease-in-out duration-300 ">
            <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
            <h3 className="text-xl font-semibold mb-2">Get Ai Assistant</h3>
            <p className="text-gray-600">Get instant help with our AI-powered assistant.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;