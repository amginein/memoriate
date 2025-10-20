// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>ChronoTask - Think, plan, and track all in one place</title>
        <meta name="description" content="Efficiently manage your tasks and boost productivity with ChronoTask." />
      </Head>

      <main className="min-h-screen bg-[#F7F7F8] relative font-sans flex flex-col">
        {/* Container with subtle dotted background */}
        <div className="max-w-7xl mx-auto flex-grow px-6 py-12 relative rounded-[2rem] bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] overflow-hidden" style={{backgroundImage: 'radial-gradient(#ddd 1px, transparent 1px)', backgroundSize: '16px 16px'}}>
          
          {/* Navbar */}
          <nav className="flex justify-between items-center mb-12">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              {/* Logo shape: 4 dots grid with one in blue */}
              <div className="grid grid-cols-2 gap-1 w-6 h-6">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-black/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-black/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-black/60" />
              </div>
              <span className="font-semibold text-lg">ChronoTask</span>
            </div>

            {/* Nav links */}
            <ul className="flex items-center space-x-8 text-gray-700">
              <li><a href="#features" className="hover:text-black transition">Features</a></li>
              <li><a href="#solutions" className="hover:text-black transition">Solutions</a></li>
              <li><a href="#resources" className="hover:text-black transition">Resources</a></li>
              <li><a href="#pricing" className="hover:text-black transition">Pricing</a></li>
              <li><a href="#signin" className="hover:text-black transition">Sign in</a></li>
              <li>
                <a href="#get-demo" className="rounded-md border border-gray-300 px-4 py-1 text-gray-700 hover:bg-blue-50 hover:border-blue-500 transition font-medium">
                  Get demo
                </a>
              </li>
            </ul>
          </nav>

          {/* Central content */}
          <section className="relative z-10 max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold text-black leading-snug">
              Think, plan, and track
              <br />
              <span className="text-gray-400">all in one place</span>
            </h1>
            <p className="mt-4 text-sm text-gray-600">Efficiently manage your tasks and boost productivity.</p>
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition">
              Get free demo
            </button>
          </section>

          {/* Decorative elements (positioned roughly as in the image) */}

          {/* Sticky note top left */}
          <div className="absolute top-16 left-8 w-36 h-32 rounded-xl bg-yellow-200 shadow-md p-3"
           style={{ transform: 'rotate(-6deg)', fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>
            <p className="text-xs leading-tight text-[#1A212E]">
              Take notes to keep <br />
              track of crucial details, <br />
              and accomplish more <br />
              tasks with ease.
            </p>
            {/* white check icon box over sticky note */}
            <div className="absolute bottom-[-10px] left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Reminders card top right */}
          <div className="absolute top-16 right-12 w-48 rounded-xl bg-white p-4 shadow-lg">
            <h3 className="font-semibold text-gray-800 mb-1">Reminders</h3>
            <p className="text-xs text-gray-500 mb-1">Today's Meeting</p>
            <p className="text-xs text-gray-400 mb-2">Call with marketing team</p>
            <div className="flex items-center space-x-2">
              {/* Clock icon */}
              <div className="w-8 h-8 rounded-lg bg-white shadow flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="text-xs bg-blue-50 rounded px-2 py-1 text-blue-600 font-mono">
                13:00 - 13:45
              </div>
            </div>
          </div>

          {/* Today's tasks card bottom left */}
          <div className="absolute bottom-16 left-12 w-72 bg-white rounded-xl p-4 shadow-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Today's tasks</h3>
            <div className="space-y-3">
              {/* Item 1 */}
              <div>
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>New Ideas for campaign</span>
                  <span>60%</span>
                </div>
                <progress value="60" max="100" className="w-full h-2 rounded" style={{appearance: 'none'}}>
                  60%
                </progress>
                <div className="text-[10px] text-gray-400">Sep 10</div>
              </div>
              {/* Item 2 */}
              <div>
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Design PPT #4</span>
                  <span>112%</span>
                </div>
                <progress value="100" max="100" className="w-full h-2 rounded" style={{appearance: 'none'}}>
                  100%
                </progress>
                <div className="text-[10px] text-gray-400">Sep 18</div>
              </div>
            </div>
          </div>

          {/* Integrations card bottom right */}
          <div className="absolute bottom-12 right-12 w-56 bg-white rounded-xl p-4 shadow-lg">
            <h3 className="font-semibold text-gray-900 mb-2">100+ Integrations</h3>
            <div className="flex space-x-3">
              {/* Gmail */}
              <div className="w-10 h-10 rounded-lg bg-white shadow flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.svg" alt="Gmail" className="w-6 h-6" />
              </div>
              {/* Slack */}
              <div className="w-10 h-10 rounded-lg bg-white shadow flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png" alt="Slack" className="w-6 h-6" />
              </div>
              {/* Google Calendar */}
              <div className="w-10 h-10 rounded-lg bg-white shadow flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Google_Calendar_icon_%282020%29.svg" alt="Google Calendar" className="w-6 h-6" />
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}