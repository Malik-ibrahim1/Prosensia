import React, { useState } from "react"
import { assets } from "../assets/assets"

const features = [
    {
        title: "Smart Control",
        description: "Advanced AI-driven control for optimal HVAC performance.",
        icon: assets.smart_control,
    },
    {
        title: "Real-time Monitoring",
        description: "Continuous system monitoring for instant insights and adjustments.",
        icon: assets.admin_control,
    },
    {
        title: "Predictive Maintenance",
        description: "AI-powered predictions to prevent issues before they occur.",
        icon: assets.custom_built,
    },
    {
        title: "Harmful Gas Protection",
        description: "Advanced sensors to detect and protect against harmful gases.",
        icon: assets.hvac,
    },
    {
        title: "Energy Savings",
        description: "Optimize energy consumption for significant cost reductions.",
        icon: assets.smart_control,
    },
    {
        title: "Bill Savings",
        description: "Reduce your energy bills through intelligent HVAC management.",
        icon: assets.admin_control,
    },
    {
        title: "Save CO2",
        description: "Reduce the release of C02, which can be harmful for the enviornment",
        icon: assets.admin_control,
    },
]

const FeatureCard = ({ title, description, icon }) => (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
        <img src={icon || "/placeholder.svg"} alt={title} className="w-12 h-12 mb-4" />
        <h3 className="text-lg font-bold mb-2 text-center">{title}</h3>
        <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
)

const FeatureCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length)
    }

    return (
        <div className="relative w-full max-w-5xl mx-auto">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                >
                    {features.map((feature, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-2">
                            <FeatureCard {...feature} />
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}

export default FeatureCarousel

