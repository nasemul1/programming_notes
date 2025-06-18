function About() {
  return (
    <div>
      <div className="h-[50vh] flex flex-col items-center text-center bg-gradient-to-r from-[#83C314] via-[#83C314] to-[#1565FC]">
        <h1 className="text-4xl text-white font-[900] md:mt-16 mt-10 ">About Programming Notes</h1>
        <p className="w-[70vw] text-white text-center font-medium mt-10 md:mt-4 ">Programming Notes empowers beginners to master programming languages through structured courses, interactive playgrounds, comprehensive documentation, and AI-driven personalized support.</p>
      </div>
      <div className="flex justify-center md:flex-row flex-col md:justify-around min-h-[50vh] overflow-x-hidden">
        <div>
          <h1 className="text-2xl font-[900] ml-6 mt-16 ">Our Mission</h1>
          <p className="w-[70vw] md:w-[40vw] font-medium ml-6 mt-4 ">
          <strong><i> Programming Notes </i></strong> believe coding is for everyone. Our mission is to make learning programming languages accessible, engaging, and efficient. With structured courses, a hands-on playground, comprehensive documentation and an AI-powered assistant. we’re here to guide you every step of the way.
        </p>
        </div>
        <svg className="aspect-square h-[40vh] md:h-[50vh] hover:-translate-y-2 ease-in-out duration-300 mt-10 text-[#1471F0] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      </div>
    
        <section className="bg-gray-200 py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded shadow-md hover:shadow-lg hover:scale-105 ease-in-out duration-300 ">
          <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 0 1-2 2z"></path>
          </svg>
          <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
          <p className="text-gray-600">We provide free resources to make coding education available to all.</p>
        </div>
        
        <div className="bg-white p-6 rounded shadow-md hover:shadow-lg hover:scale-105 ease-in-out duration-300 ">
          <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5l4-5m-2-5l2-5-4 5"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-2 4h-4m-2-8h2 4"></path>
          </svg>
          <h3 className="text-xl font-semibold mb-2">Interactivity</h3>
          <p className="text-gray-600">Learn by solving with our real-time problems and AI feedback.</p>
        </div>

        <div className="bg-white p-6 rounded shadow-md hover:shadow-lg hover:scale-105 ease-in-out duration-300 ">
          <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7v5m8-5v5m-12-7a5 5 0 0010 0V7m-5-5h6M9 5H3"></path>
          </svg>
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <p className="text-gray-600">Join a supportive community of learners and mentors.</p>
        </div>
      </div>
    </div>
  </section>
      
  <section className="bg-white py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800"> Meet our passionate Team members </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className="bg-white flex flex-col items-center p-6 rounded shadow-md hover:shadow-lg hover:scale-105 ease-in-out duration-300 ">
          <img className="rounded-full flex w-[20vw] aspect-square" src="/nasemul.jpeg" alt="Backend Dev" />
          <h3 className="text-xl text-center font-semibold mb-2">Nasemul Islam</h3>
          <p className="text-gray-600 text-center">Backend Developer <br /> Love shaping the Database and server side with MERN. </p>
        </div>
        
        <div className="bg-white flex flex-col items-center p-6 rounded shadow-md hover:shadow-lg hover:scale-105 ease-in-out duration-300 ">
          <img className="rounded-full flex w-[20vw] aspect-square" src="/Rifat.jpeg" alt="Frontend Dev" />
          <h3 className="text-xl text-center font-semibold mb-2">Md Rifat</h3>
          <p className="text-gray-600 text-center">Frontend Developer <br /> Specialized in React, DaisyUI and Animations. </p>
        </div>

      </div>
    </div>
  </section>
      
      <div className="h-[50vh] flex flex-col items-center text-center bg-gradient-to-r from-[#83C314] via-[#83C314] to-[#1565FC]">
        <h1 className="text-4xl text-white font-[900] md:mt-16 mt-10 ">Ready To Start Your Coding Journey?</h1>
        <p className="w-[70vw] text-white text-center font-medium mt-10 md:mt-4 ">Join <i><strong>Programming Notes</strong></i> today and learn to code at your own pace. </p>
        <button className=" bg-yellow-500/90 mt-6 ml-6 text-lg text-white p-3 rounded-md shadow-md hover:shadow-lg hover:scale-105 ease-in-out duration-300 hover:bg-yellow-500 hover:-translate-y-0.5 hover:cursor-pointer ">Start Learning  </button>
      </div>
    </div>
  )
}

export default About

