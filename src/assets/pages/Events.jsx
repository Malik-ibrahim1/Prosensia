"use client"
import { Search, Users, PartyPopper, Network, Presentation, Target } from "lucide-react"
import { assets } from "../assets/assets"

// Since we don't have access to the custom UI components, let's create simple versions
const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded ${className}`} {...props}>
    {children}
  </button>
)

const Card = ({ children, className, ...props }) => (
  <div className={`rounded-lg shadow ${className}`} {...props}>
    {children}
  </div>
)

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="p-6 transition-all hover:shadow-lg bg-white">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
      <Icon className="h-6 w-6 text-yellow-400" />
    </div>
    <h3 className="mb-2 text-xl font-semibold text-black">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Card>
)

const Features = () => {
  const features = [
    {
      icon: Presentation,
      title: "Great Speakers",
      description: "Dolor sit amet consectetur elit sed do eiusmod tempor incd.",
    },
    {
      icon: Target,
      title: "Experience",
      description: "Dolor sit amet consectetur elit sed do eiusmod tempor incd.",
    },
    {
      icon: Network,
      title: "Networking",
      description: "Dolor sit amet consectetur elit sed do eiusmod tempor incd.",
    },
    {
      icon: PartyPopper,
      title: "Party",
      description: "Dolor sit amet consectetur elit sed do eiusmod tempor incd.",
    },
    {
      icon: Users,
      title: "New People",
      description: "Dolor sit amet consectetur elit sed do eiusmod tempor incd.",
    },
    {
      icon: Search,
      title: "Discover",
      description: "Dolor sit amet consectetur elit sed do eiusmod tempor incd.",
    },
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://source.unsplash.com/random/1920x1080/?technology,conference"
          alt="Abstract digital background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold uppercase tracking-wide text-yellow-400">Features</h2>
          <h3 className="mt-2 text-4xl font-bold text-white">Our Feature</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

const HeroSection = () => (
  <section className="relative overflow-hidden bg-black py-20">
    {/* Decorative elements */}
    <div className="absolute left-0 top-0 h-64 w-64 opacity-20">
      <div className="absolute h-32 w-32 rotate-45 transform rounded-full border-8 border-yellow-400"></div>
      <div className="absolute left-20 top-20 h-32 w-32 rotate-45 transform rounded-full border-8 border-yellow-400"></div>
    </div>

    <div className="container mx-auto px-6 relative">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-lg font-semibold uppercase tracking-wide text-yellow-400">About Event</h2>
          <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
            Welcome to the ProSensia National Editing Event
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna aliqua enim ad minim
            veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.
          </p>
          <ul className="mb-8 space-y-4">
            {[
              "Multiple Announcements during the event.",
              "Logo & company details on the WordCamp.",
              "Dedicated blog post thanking each Gold.",
              "Acknowledgment and opening and closing.",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400">
                  <svg
                    className="h-3 w-3 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button
            className="register-now-btn text-black px-6 py-3 text-lg font-semibold"
            style={{
              background: "linear-gradient(90deg, #ffde59, #ff914d)",
              backgroundSize: "200% 200%",
              animation: "gradient-animation 3s ease infinite",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              marginRight: "20px",
            }}
          >
            Register Now
          </Button>
        </div>
        <div className="relative">
          <div className="relative mx-auto aspect-square max-w-lg overflow-hidden rounded-full border-4 border-yellow-400">
            <img
              src={assets.editing}
              alt="Conference speaker"
              className="w-full h-full object-cover"
            />
            {/* Decorative elements */}
            <div className="absolute -right-4 bottom-12 h-24 w-24 rotate-45 transform rounded-lg bg-yellow-400 opacity-20"></div>
            <div className="absolute -right-8 bottom-24 h-24 w-24 rotate-45 transform rounded-lg bg-yellow-400 opacity-20"></div>
          </div>
          <div className="absolute -right-6 top-1/2 grid h-12 w-12 -translate-y-1/2 transform grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-2 w-2 rounded-full bg-yellow-400"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Events = () => {
  return (
    <main className="min-h-screen bg-black">
      <style jsx global>{`
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
      `}</style>
      <HeroSection />
      <Features />
    </main>
  )
}

export default Events

