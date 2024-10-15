import React from 'react';

const Documentation = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Introduction */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Welcome to TeleBotDev Documentation</h1>
          <p className="text-lg text-gray-700 mb-6">
            TeleBotDev allows you to quickly and easily launch your own Telegram bot by connecting it to the Telegram API.
            Follow the steps below to configure and launch your bot in just a few minutes.
          </p>
          <img
            src="https://example.com/telebotdev-hero-image.png" // Replace with actual image URL
            alt="TeleBotDev"
            className="w-full h-auto shadow-lg rounded-md"
          />
        </section>

        {/* How to Get a Bot Token from BotFather */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">How to Get a Bot Token from BotFather</h2>
          <p className="text-lg text-gray-700 mb-6">
            To start using TeleBotDev, you will need a Telegram bot token. Follow these steps to get it from BotFather:
          </p>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
            <li>Open Telegram and search for "BotFather".</li>
            <li>Start a chat with BotFather and type <code>/newbot</code>.</li>
            <li>Follow the instructions to name your bot and create a unique username for it.</li>
            <li>Once the bot is created, you will receive a token. Copy this token as you will need it to configure your bot on TeleBotDev.</li>
          </ol>
          <img
            src="https://example.com/botfather-example.png" // Replace with actual image URL
            alt="BotFather Example"
            className="w-full h-auto shadow-lg rounded-md mt-6"
          />
        </section>

        {/* Configuring Your Bot */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Configuring Your Bot</h2>
          <p className="text-lg text-gray-700 mb-6">
            After receiving your bot token, you can easily configure your bot by following these steps:
          </p>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
            <li>Go to the <strong>Configure Bot</strong> section on TeleBotDev.</li>
            <li>Enter the bot token that you received from BotFather.</li>
            <li>Click the <strong>Launch Bot</strong> button to start your bot.</li>
            <li>Monitor your bot’s activity and interact with it on Telegram!</li>
          </ol>
        </section>

        {/* Selecting a Plan */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Selecting a Plan</h2>
          <p className="text-lg text-gray-700 mb-6">
            TeleBotDev offers several plans to choose from. You can opt for a free plan or select a paid one depending on your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-yellow-500 mb-2">Free Plan</h3>
              <p className="text-gray-700">Access to basic bot features, suitable for testing and small-scale use.</p>
              <p className="text-xl font-bold text-gray-800 mt-4">₹0/month</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-yellow-500 mb-2">Basic Plan</h3>
              <p className="text-gray-700">Advanced bot features for medium-scale use and improved performance.</p>
              <p className="text-xl font-bold text-gray-800 mt-4">₹500/month</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-yellow-500 mb-2">Pro Plan</h3>
              <p className="text-gray-700">All features unlocked for enterprise-level usage with dedicated support.</p>
              <p className="text-xl font-bold text-gray-800 mt-4">₹1000/month</p>
            </div>
          </div>
        </section>

        {/* Payment Instructions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Payment Instructions</h2>
          <p className="text-lg text-gray-700 mb-6">
            For paid plans, payments are securely processed through Razorpay. Here’s how to make the payment:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            <li>Select your desired plan from the options above.</li>
            <li>Click the <strong>Pay Now</strong> button and you will be redirected to the Razorpay payment gateway.</li>
            <li>Complete the payment by entering your card or UPI details.</li>
            <li>After payment confirmation, your bot will be automatically upgraded to the selected plan.</li>
          </ul>
          <img
            src="https://example.com/razorpay-example.png" // Replace with actual image URL
            alt="Razorpay Payment"
            className="w-full h-auto shadow-lg rounded-md mt-6"
          />
        </section>

        {/* Launching Your Bot */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Launching Your Bot</h2>
          <p className="text-lg text-gray-700 mb-6">
            After completing the configuration and payment steps, you are ready to launch your bot:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            <li>Click the <strong>Launch Bot</strong> button on the dashboard.</li>
            <li>Your bot will now be live and can interact with users on Telegram.</li>
            <li>Monitor bot activity, respond to user queries, and more from the TeleBotDev dashboard.</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Need Help?</h2>
          <p className="text-lg text-gray-700 mb-6">
            If you need further assistance, feel free to contact our support team or refer to our FAQ section.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Documentation;



// import React from 'react';
// import botFatherImage from './assets/botfather.png'; // Example image
// import telebotDevDashboardImage from './assets/telebotdev-dashboard.png'; // Example image

// const Documentation = () => {
//   return (
//     <div className="container mx-auto py-12 px-6">
//       <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">TeleBotDev Documentation</h1>
//       <p className="text-center text-gray-600 mb-6 text-xl">
//         Follow the steps below to configure your Telegram bot and start using TeleBotDev.
//       </p>

//       {/* Section 1: Introduction */}
//       <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
//         <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Introduction</h2>
//         <p className="text-gray-700 mb-4">
//           TeleBotDev allows you to easily configure and manage your Telegram bots. In this documentation, we’ll walk you through the steps to:
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-4">
//           <li>Create a new bot using BotFather</li>
//           <li>Obtain the bot token</li>
//           <li>Configure the bot on TeleBotDev</li>
//           <li>Start and manage your bot</li>
//         </ul>
//         <p className="text-gray-700">
//           Let's get started!
//         </p>
//       </section>

//       {/* Section 2: Creating a Bot with BotFather */}
//       <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
//         <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Step 1: Create Your Bot with BotFather</h2>
//         <p className="text-gray-700 mb-4">
//           To create a new bot, you’ll need to interact with Telegram’s official **BotFather**. Here’s how you can do it:
//         </p>
//         <ol className="list-decimal list-inside text-gray-700 mb-4">
//           <li>
//             Open Telegram and search for **BotFather** or click{' '}
//             <a href="https://t.me/BotFather" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">here</a>.
//           </li>
//           <li>Start a conversation with **BotFather** and send the `/newbot` command.</li>
//           <li>Provide a unique name and username for your bot.</li>
//           <li>
//             Once the bot is created, **BotFather** will provide you with a **Bot Token**. This token is crucial for configuring your bot in TeleBotDev.
//           </li>
//         </ol>
//         <img src={botFatherImage} alt="BotFather" className="w-full h-auto mb-4 shadow-md rounded-lg" />
//         <p className="text-gray-700">
//           Make sure to copy the **Bot Token** and keep it secure. You’ll use this token to configure your bot in the next step.
//         </p>
//       </section>

//       {/* Section 3: Configuring Your Bot on TeleBotDev */}
//       <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
//         <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Step 2: Configure Your Bot on TeleBotDev</h2>
//         <p className="text-gray-700 mb-4">
//           Now that you have your bot token, head over to TeleBotDev to configure and launch your bot. Follow these steps:
//         </p>
//         <ol className="list-decimal list-inside text-gray-700 mb-4">
//           <li>
//             Log in to your TeleBotDev account.
//           </li>
//           <li>
//             Navigate to the **Configure Bot** section.
//           </li>
//           <li>
//             Enter the **Bot Token** you obtained from BotFather.
//           </li>
//           <li>
//             Select the plan that fits your needs, such as **Free**, **500 INR/month**, or **1000 INR/month**.
//           </li>
//           <li>
//             Click the **Launch Bot** button to start your bot.
//           </li>
//         </ol>
//         <img src={telebotDevDashboardImage} alt="TeleBotDev Dashboard" className="w-full h-auto mb-4 shadow-md rounded-lg" />
//         <p className="text-gray-700">
//           Your bot will now be live, and you can start interacting with it on Telegram. You can manage and monitor your bot from the TeleBotDev dashboard.
//         </p>
//       </section>

//       {/* Section 4: Payment Process */}
//       <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
//         <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Step 3: Payment for Premium Plans</h2>
//         <p className="text-gray-700 mb-4">
//           If you choose one of the premium plans, you will be required to complete the payment via Razorpay. Here’s how:
//         </p>
//         <ol className="list-decimal list-inside text-gray-700 mb-4">
//           <li>Select the **500 INR/month** or **1000 INR/month** plan.</li>
//           <li>Click on the **Pay Now** button, which will redirect you to Razorpay’s secure payment gateway.</li>
//           <li>Complete the payment using your preferred payment method.</li>
//           <li>Once the payment is successful, your bot will be configured with the premium plan.</li>
//         </ol>
//       </section>

//       {/* Section 5: Managing Your Bot */}
//       <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
//         <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Step 4: Managing Your Bot</h2>
//         <p className="text-gray-700 mb-4">
//           Once your bot is live, you can manage it from the **TeleBotDev** dashboard. From here, you can:
//         </p>
//         <ul className="list-disc list-inside text-gray-700 mb-4">
//           <li>View bot statistics and performance metrics.</li>
//           <li>Update the bot token or settings.</li>
//           <li>Pause or stop the bot at any time.</li>
//           <li>Upgrade or downgrade your plan.</li>
//         </ul>
//       </section>

//       {/* Footer */}
//       <footer className="text-center text-gray-500 text-sm py-4">
//         <p>TeleBotDev &copy; 2024. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Documentation;
