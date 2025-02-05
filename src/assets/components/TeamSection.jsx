import { useState } from "react"
import { ChevronLeft, ChevronRight, Twitter, Linkedin, Github } from "lucide-react"

const TeamCard = ({ image, role, name }) => (
  <div className="flex flex-col items-center">
    <img
      src={image || "/placeholder.svg?height=400&width=400"}
      alt={name}
      className="w-64 h-64 object-cover rounded-lg mb-4"
    />
    <span className="text-yellow-400 font-medium text-sm mb-2">{role}</span>
    <h3 className="text-xl font-bold mb-4">{name}</h3>
    <div className="flex gap-4">
      <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
        <Twitter size={20} />
      </a>
      <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
        <Linkedin size={20} />
      </a>
      <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
        <Github size={20} />
      </a>
    </div>
  </div>
)

const TeamSection = () => {
  const [activeSection, setActiveSection] = useState("founders")
  const [currentSlide, setCurrentSlide] = useState(0)

  const founders = [
    { name: "John Smith", role: "CEO & Founder", image: "/placeholder.svg" },
    { name: "Sarah Johnson", role: "CTO & Co-Founder", image: "/placeholder.svg" },
  ]

  const team = [
    { name: "Mike Brown", role: "Lead Developer", image: "/placeholder.svg" },
    { name: "Emma Wilson", role: "UX Designer", image: "/placeholder.svg" },
    { name: "David Lee", role: "Product Manager", image: "/placeholder.svg" },
    { name: "Lisa Chen", role: "Software Engineer", image: "/placeholder.svg" },
    { name: "James Taylor", role: "DevOps Engineer", image: "/placeholder.svg" },
    { name: "Anna Kim", role: "UI Designer", image: "/placeholder.svg" },
    { name: "Tom Harris", role: "Backend Developer", image: "/placeholder.svg" },
    { name: "Maria Garcia", role: "Frontend Developer", image: "/placeholder.svg" },
    { name: "Alex Wong", role: "QA Engineer", image: "/placeholder.svg" },
    { name: "Rachel Green", role: "Product Designer", image: "/placeholder.svg" },
  ]

  const advisors = [
    { name: "Dr. Robert Clark", role: "Technical Advisor", image: "/placeholder.svg" },
    { name: "Jane Martinez", role: "Business Advisor", image: "/placeholder.svg" },
    { name: "William Chang", role: "Industry Advisor", image: "/placeholder.svg" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3 >= team.length ? 0 : prev + 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 3 < 0 ? team.length - 3 : prev - 3))
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-yellow-400 font-medium mb-4">OUR TEAM</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-6">Meet These Fine Folks.</h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Navigation Buttons */}
          <div className="lg:w-48 flex lg:flex-col gap-4">
            <button
              onClick={() => setActiveSection("founders")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeSection === "founders"
                  ? "bg-yellow-400 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-yellow-100"
              }`}
            >
              Founders
            </button>
            <button
              onClick={() => setActiveSection("team")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeSection === "team" ? "bg-yellow-400 text-white" : "bg-gray-100 text-gray-600 hover:bg-yellow-100"
              }`}
            >
              Team
            </button>
            <button
              onClick={() => setActiveSection("advisors")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeSection === "advisors"
                  ? "bg-yellow-400 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-yellow-100"
              }`}
            >
              Advisors
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            {/* Founders Section */}
            {activeSection === "founders" && (
              <div className="grid md:grid-cols-2 gap-8">
                {founders.map((member) => (
                  <TeamCard key={member.name} {...member} />
                ))}
              </div>
            )}

            {/* Team Section with Slider */}
            {activeSection === "team" && (
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
                  >
                    {team.map((member) => (
                      <div key={member.name} className="w-full md:w-1/3 flex-shrink-0 px-4">
                        <TeamCard {...member} />
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-yellow-50"
                >
                  <ChevronLeft className="w-6 h-6 text-yellow-400" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-yellow-50"
                >
                  <ChevronRight className="w-6 h-6 text-yellow-400" />
                </button>
              </div>
            )}

            {/* Advisors Section */}
            {activeSection === "advisors" && (
              <div className="grid md:grid-cols-3 gap-8">
                {advisors.map((member) => (
                  <TeamCard key={member.name} {...member} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection

