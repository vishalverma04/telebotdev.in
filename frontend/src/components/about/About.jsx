import React from 'react';

function AboutPage() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto p-5 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-center">
          
          {/* Left: Image */}
          <div className="md:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/500x300"
              alt="About TeleBotDev"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Right: Content */}
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center md:text-left">
              Welcome to TeleBotDev
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At <span className="font-semibold">TeleBotDev</span>, we empower developers and businesses to create fully functional Telegram bots effortlessly. Whether you're looking to automate tasks, manage communities, or handle payments, our platform makes it simple to build and deploy custom bots in minutes.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Join us today and discover how easy it is to create a bot that suits your needs. With <span className="font-semibold">TeleBotDev</span>, you have all the tools at your fingertips to bring your ideas to life.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">Why Choose TeleBotDev?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/100"
                alt="Easy to Use"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Create and deploy bots with an intuitive interface and minimal coding.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/100"
                alt="Scalable Solutions"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">
                Handle everything from small tasks to large-scale automation effortlessly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/100"
                alt="Customizable"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
              <p className="text-gray-600">
                Tailor bots to your exact requirements with flexible customization options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
