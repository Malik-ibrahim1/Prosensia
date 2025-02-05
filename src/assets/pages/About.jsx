"use client"

import { useEffect, useRef, useState } from "react"
import { Headphones, Shield, Search, ChevronLeft, ChevronRight, Twitter, Linkedin, Github } from "lucide-react"

const Section = ({ children, className = "" }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className={`opacity-0 transition-all duration-1000 ease-out ${className}`}>
      {children}
    </section>
  )
}

const TeamCard = ({ image, role, name }) => (
  <div className="flex flex-col items-center group">
    <div className="relative overflow-hidden rounded-lg mb-4">
      <img
        src={image || "/placeholder.svg"}
        alt={name}
        className="w-64 h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex gap-4">
          <a href="#" className="text-white hover:text-yellow-400 transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-white hover:text-yellow-400 transition-colors">
            <Github size={24} />
          </a>
        </div>
      </div>
    </div>
    <span className="text-yellow-400 font-medium text-sm mb-2">{role}</span>
    <h3 className="text-xl font-bold mb-4">{name}</h3>
  </div>
)

const TeamSection = () => {
  const [activeSection, setActiveSection] = useState("founders")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [teamMembers, setTeamMembers] = useState([])

  useEffect(() => {
    const founders = [
      { name: "John Smith", role: "CEO & Founder" },
      { name: "Sarah Johnson", role: "CTO & Co-Founder" },
    ]

    const team = [
      { name: "Mike Brown", role: "Lead Developer" },
      { name: "Emma Wilson", role: "UX Designer" },
      { name: "David Lee", role: "Product Manager" },
      { name: "Lisa Chen", role: "Software Engineer" },
      { name: "James Taylor", role: "DevOps Engineer" },
      { name: "Anna Kim", role: "UI Designer" },
      { name: "Tom Harris", role: "Backend Developer" },
      { name: "Maria Garcia", role: "Frontend Developer" },
      { name: "Alex Wong", role: "QA Engineer" },
      { name: "Rachel Green", role: "Product Designer" },
    ]

    const advisors = [
      { name: "Dr. Robert Clark", role: "Technical Advisor" },
      { name: "Jane Martinez", role: "Business Advisor" },
      { name: "William Chang", role: "Industry Advisor" },
    ]

    const generateImageUrl = () => `https://picsum.photos/400/400?random=${Math.random()}`

    setTeamMembers({
      founders: founders.map((member) => ({ ...member, image: generateImageUrl() })),
      team: team.map((member) => ({ ...member, image: generateImageUrl() })),
      advisors: advisors.map((member) => ({ ...member, image: generateImageUrl() })),
    })
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (teamMembers.team.length - 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (teamMembers.team.length - 2)) % (teamMembers.team.length - 2))
  }

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-yellow-400 font-medium mb-4">OUR TEAM</h2>
        <h3 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-6">Meet These Fine Folks.</h3>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
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
          {activeSection === "founders" && teamMembers.founders && (
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.founders.map((member) => (
                <TeamCard key={member.name} {...member} />
              ))}
            </div>
          )}

          {/* Team Section with Slider */}
          {activeSection === "team" && teamMembers.team && (
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
                >
                  {teamMembers.team.map((member, index) => (
                    <div key={member.name} className="w-full md:w-1/3 flex-shrink-0 px-4">
                      <TeamCard {...member} />
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-yellow-50 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-yellow-400" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-yellow-50 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-yellow-400" />
              </button>
            </div>
          )}

          {/* Advisors Section */}
          {activeSection === "advisors" && teamMembers.advisors && (
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.advisors.map((member) => (
                <TeamCard key={member.name} {...member} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s forwards;
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.5s forwards;
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s forwards;
        }

        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-zoom-in {
          animation: zoom-in 0.5s forwards;
        }
      `}</style>

      <div className="min-h-screen">
        {/* Hero Section */}
        <Section className="relative py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-black font-medium mb-4">ABOUT PROSENSIA</h2>
                <h1 className="text-4xl lg:text-6xl font-bold text-yellow-400 mb-6">We are a modern design agency.</h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  At ProSensia, we blend creativity with technology to deliver cutting-edge HVAC solutions. Our team of
                  experts is dedicated to revolutionizing the way buildings manage their climate, ensuring optimal
                  comfort and energy efficiency.
                </p>
              </div>
              <div className="relative animate-slide-in-right">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern HVAC system"
                  className="rounded-lg shadow-xl w-full object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Vision Section */}
        <Section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-slide-in-left">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Smart building control system"
                  className="rounded-lg shadow-xl w-full object-cover h-[400px]"
                />
              </div>
              <div className="order-1 lg:order-2 animate-slide-in-right">
                <h2 className="text-yellow-400 font-medium mb-4">OUR VISION</h2>
                <h3 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-6">
                  We aim to disrupt the HVAC space.
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our vision is to lead the transformation of HVAC systems worldwide. We're committed to developing
                  intelligent, energy-efficient solutions that not only provide superior climate control but also
                  contribute to a sustainable future. By leveraging cutting-edge technology and data-driven insights,
                  we're redefining comfort in both residential and commercial spaces.
                </p>
                <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* Values Section */}
        <Section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-yellow-400 font-medium mb-4">OUR VALUES</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-6">We follow these.</h3>
              <p className="text-gray-600 text-lg">
                Our core values guide every decision we make and every solution we deliver. They're the foundation of
                our commitment to excellence in HVAC innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center bg-white p-6 rounded-lg shadow-lg animate-zoom-in">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">24/7 Support</h4>
                <p className="text-gray-600">
                  We're always here for our clients. Our round-the-clock support ensures that your HVAC systems run
                  smoothly, no matter the time or day.
                </p>
              </div>

              <div
                className="text-center bg-white p-6 rounded-lg shadow-lg animate-zoom-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Strong Teams</h4>
                <p className="text-gray-600">
                  Our strength lies in our people. We foster a culture of collaboration, innovation, and continuous
                  learning to deliver the best HVAC solutions.
                </p>
              </div>

              <div
                className="text-center bg-white p-6 rounded-lg shadow-lg animate-zoom-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Customer Satisfaction</h4>
                <p className="text-gray-600">
                  Your comfort is our priority. We go above and beyond to ensure that our HVAC solutions meet and exceed
                  your expectations, creating optimal indoor environments.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Team Section */}
        <Section className="py-20 lg:py-32">
          <TeamSection />
        </Section>
      </div>
    </>
  )
}

