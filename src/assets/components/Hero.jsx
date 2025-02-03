import { assets } from "../assets/assets"
import FeatureCarousel from "./FeatureCarousel"
import Footer from "./footer"

const IconBuilding = () => (
  <svg
    xmlns={assets.admin_control}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <line x1="9" y1="22" x2="9" y2="12"></line>
    <line x1="15" y1="22" x2="15" y2="12"></line>
    <line x1="4" y1="7" x2="20" y2="7"></line>
  </svg>
)

const IconLineChart = () => (
  <svg
    xmlns={assets.custom_built}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <polyline points="3 6 12 6 21 6"></polyline>
    <polyline points="3 18 9 18 21 18"></polyline>
  </svg>
)

const IconSettings = () => (
  <svg
    xmlns={assets.hvac}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
)

const IconTrendingUp = () => (
  <svg
    xmlns={assets.smart_control}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
)

const features = [
  {
    title: "Smart City",
    Icon: IconBuilding,
    description:
      "EcoEdge AI optimizes HVAC performance, reduces energy consumption, and helps achieve goals for smart cities.",
    position: "md:top-[8.5%] md:left-1/2 md:-translate-x-1/2",
  },
  {
    title: "Advance Data Analytics",
    Icon: IconLineChart,
    description: "Machine learning maps system points and learns thermal behaviors for efficiency and cost savings.",
    position: "md:top-1/2 md:left-[-3.5%] md:-translate-y-1/3",
  },
  {
    title: "Real-time Optimization",
    Icon: IconSettings,
    description: "Our AI optimizes HVAC systems, reduces energy usage, and maintains occupant comfort.",
    position: "md:top-1/2 md:right-[-3.5%] md:-translate-y-1/3",
  },
  {
    title: "Future Prediction",
    Icon: IconTrendingUp,
    description:
      "Advanced neural networks predict building states with up to 99.6% accuracy, integrating external data.",
    position: "md:bottom-[-6%] md:left-1/2 md:-translate-x-1/2",
  },
]

const FeatureCard = ({ title, Icon, description, position }) => (
  <div className={`absolute hidden md:block ${position} text-center max-w-[200px]`}>
    <div className="mx-auto w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
      <Icon className="w-6 h-6" />
    </div>
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-gray-600 text-xs">{description}</p>
  </div>
)

const MobileFeatureCard = ({ title, Icon, description }) => (
  <div className="md:hidden bg-yellow-400 rounded-lg p-4 mb-6 shadow-lg">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
        <Icon />
      </div>
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
)

const SmartCity = () => {
  return (
    <div className="container mx-auto px-4 py-12 relative max-w-5xl">
      <div className="relative md:min-h-[700px] flex flex-col md:flex-row items-center justify-center">
        {/* Feature cards for desktop */}
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            Icon={feature.Icon}
            description={feature.description}
            position={feature.position}
          />
        ))}

        {/* Feature cards for mobile */}
        <div className="md:hidden">
          {features.map((feature) => (
            <MobileFeatureCard
              key={feature.title}
              title={feature.title}
              Icon={feature.Icon}
              description={feature.description}
            />
          ))}
        </div>

        {/* Center image */}
        <div className="absolute hidden md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-lg overflow-hidden">
          <img
            src={assets.hero_img || "/placeholder.svg"}
            alt="Smart city digital interface"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Connecting dots for desktop */}
        <div className="absolute hidden md:block inset-0">
          <div className="w-4 h-4 bg-yellow-400 rounded-full absolute top-[11%] left-[28%]" />
          <div className="w-4 h-4 bg-yellow-400 rounded-full absolute top-[11%] right-[28%]" />
          <div className="w-4 h-4 bg-yellow-400 rounded-full absolute bottom-[11%] left-[28%]" />
          <div className="w-4 h-4 bg-yellow-400 rounded-full absolute bottom-[11%] right-[28%]" />
        </div>

        {/* Dotted circle for desktop */}
        <div
          className="absolute hidden md:block border-4 border-dashed border-gray-200 rounded-full"
          style={{
            width: "calc(100% - 120px)",
            height: "calc(100% - 160px)",
            left: "60px",
            top: "80px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.7,
          }}
        />
      </div>
    </div>
  )
}

const HeroWithSmartCity = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative h-screen w-full overflow-hidden"
        style={{
          backgroundImage: `url(${assets.hero_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Driving Smarter HVAC Solutions</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            Transforming air conditioning with innovative timetable execution devices and seamless web-based control,
            enabling smarter, energy-efficient cooling solutions tailored for modern living.
          </p>
          <button
            className="px-6 py-3 text-black rounded-md font-medium shadow-lg transition duration-300"
            style={{
              background: "linear-gradient(90deg, #ffde59, #ff914d)",
              backgroundSize: "200% 200%",
              animation: "gradient-animation 3s ease infinite",
            }}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative -mt-16 z-20 flex justify-center">
        <div className="relative bg-yellow-400 w-full max-w-5xl p-6 rounded-2xl shadow-md">
          <div className="absolute inset-0 border-4 border-transparent rounded-2xl"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Section 1 */}
            <div className="text-center bg-white rounded-lg shadow-md py-6 px-4">
              <img src={assets.hvac || "/placeholder.svg"} alt="HVAC Icon" className="mx-auto mb-3 w-12" />
              <h2 className="text-lg font-bold">HVAC Solution</h2>
              <hr className="my-2 border-t border-gray-300" />
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque orci eu nunc consectetur.
              </p>
            </div>

            {/* Section 2 */}
            <div className="text-center bg-white rounded-lg shadow-md py-6 px-4">
              <img
                src={assets.smart_control || "/placeholder.svg"}
                alt="Smart Controls Icon"
                className="mx-auto mb-3 w-12"
              />
              <h2 className="text-lg font-bold">Smart Controls</h2>
              <hr className="my-2 border-t border-gray-300" />
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque orci eu nunc consectetur.
              </p>
            </div>

            {/* Section 3 */}
            <div className="text-center bg-white rounded-lg shadow-md py-6 px-4">
              <img
                src={assets.admin_control || "/placeholder.svg"}
                alt="Admin Control Icon"
                className="mx-auto mb-3 w-12"
              />
              <h2 className="text-lg font-bold">Admin Control</h2>
              <hr className="my-2 border-t border-gray-300" />
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque orci eu nunc consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How we can help you Section */}
      <div className="relative z-20 flex flex-col items-center justify-center py-12">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">How we help you?</h2>
        <div className="w-24 h-0.5 bg-yellow-400 mb-8"></div>

        {/* Cards Section */}
        <div className="relative bg-yellow-400 w-full max-w-5xl p-6 rounded-2xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="text-center bg-gray-50 rounded-lg shadow-md py-6 px-4">
              <img
                src={assets.admin_control || "/placeholder.svg"}
                alt="Admin Contract"
                className="mx-auto mb-3 w-12"
              />
              <h4 className="text-lg font-bold">Admin Contract</h4>
              <hr className="my-2 border-t border-gray-300" />
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque orci eu nunc consectetur.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center bg-gray-50 rounded-lg shadow-md py-6 px-4">
              <img
                src={assets.custom_built || "/placeholder.svg"}
                alt="Custom Built Device"
                className="mx-auto mb-3 w-12"
              />
              <h4 className="text-lg font-bold">Custom Built Device</h4>
              <hr className="my-2 border-t border-gray-300" />
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque orci eu nunc consectetur.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center bg-gray-50 rounded-lg shadow-md py-6 px-4">
              <img
                src={assets.admin_control || "/placeholder.svg"}
                alt="Energy Management"
                className="mx-auto mb-3 w-12"
              />
              <h4 className="text-lg font-bold">Energy Management</h4>
              <hr className="my-2 border-t border-gray-300" />
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque orci eu nunc consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement Section */}
      <div className="relative z-20 flex flex-col items-center justify-center py-12 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Manual monitoring of AC systems is costing you <span className="text-orange-400">time</span>,{" "}
                  <span className="text-orange-400">energy</span>, and <span className="text-orange-400">money</span>
                </h2>
                <p className="text-gray-600">
                  Traditional AC monitoring methods are inefficient and prone to human error, leading to increased costs
                  and energy waste.
                </p>
              </div>
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Inefficient AC system"
                  className="w-full h-auto rounded-lg shadow-lg object-cover aspect-4/3"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Smarter energy <span className="text-orange-400">management</span>
                  <br />
                  for smarter governance—let us help you achieve it
                </h2>
                <p className="text-gray-600">
                  Our intelligent HVAC solutions provide real-time monitoring and optimization, ensuring maximum
                  efficiency and comfort.
                </p>
              </div>
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1617526738882-1ea945ce3e56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Smart energy management"
                  className="w-full h-auto rounded-lg shadow-lg object-cover aspect-4/3"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Inefficient HVAC systems could be <span className="text-orange-400">draining</span> your{" "}
                  <span className="text-orange-400">resources</span>
                  <br />
                  without you knowing!
                </h2>
                <p className="text-gray-600">
                  Outdated HVAC systems can silently increase your energy bills and carbon footprint. Our solutions help
                  you identify and address these hidden costs.
                </p>
              </div>
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Resource drain visualization"
                  className="w-full h-auto rounded-lg shadow-lg object-cover aspect-4/3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SmartCity Component */}
      <SmartCity />

      {/* New Heading Section */}
      <div className="relative z-20 flex flex-col items-center justify-center py-12 bg-black">
        <h2 className="text-2xl sm:text-xl font-bold text-yellow-400 mb-4 text-center">How we help you?</h2>
        <p className="text-xl sm:text-2xl font-semibold text-center mb-8 text-white">
          We make HVAC systems
          <br />
          <span className="text-green-600">green</span>, <span className="text-orange-500">sustainable</span> & <span className="text-blue-800">highly effective</span> 
        </p>
      </div>

      {/* Feature Carousel Section (moved after SmartCity) */}
      <div className="relative z-20 flex flex-col items-center justify-center py-12 bg-gray-100">
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">Our Key Features</h2>
        <div className="w-24 h-0.5 bg-yellow-400 mb-8"></div>
        <FeatureCarousel />
      </div>

      {/* Footer */}
      <Footer/>

      {/* Gradient Animation CSS */}
      <style>
        {`
    @keyframes gradient-animation {
        0% {
        background-position: 0% 50%;
        }
        50% {
        background-position: 100% 50%;
        }
        100% {
        background-position: 0% 50%;
        }
    }
    `}
      </style>
    </>
  )
}

export default HeroWithSmartCity

