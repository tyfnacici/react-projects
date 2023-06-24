import React, { useEffect, useState } from "react"
import getirhero from "../images/hero-getir.svg"

// hero bg need fixing 

const Hero = () => {
  const [hero, sethero] = useState("hero1")
  let heroCss = "w-full h-full bg-center bg-cover duration-20 flex duration-200" 
  heroCss += `bg-${hero}`

  useEffect(() => {
    setInterval(() => {
      switch (hero) {
        case "hero1":
          sethero("hero2")
          break
        case "hero2":
          sethero("hero3")
          break
        case "hero3":
          sethero("hero1")
          break
        default:
          sethero("hero1")
      }
    }, 6000)
  }, [])

  return (
    <div className="flex flex-col w-min-max bg-[#fafafa] relative h-[500px]">
      <div
        className={heroCss}
      >
        <div className="p-3 md:container mx-auto px-44 flex justify-between items-center">
          <div className="flex flex-col w-64 space-y-6">
            <img className="w-44" alt="hero-getir" src={getirhero} />
            <p className="text-white text-[2.5rem]">At your door in minutes</p>
          </div>
          {/* Form */}
          <div className="flex flex-col bg-white px-8 py-6 space-y-4 rounded-lg text-center">
            <p className="text-[#5d3ebc] font-bold">Login or Register</p>
            <div className="mt-2 space-x-1 flex flex-row">
              <select className="py-3.5 px-3.5 rounded-sm border border-gray-300">
                <option value="+90">+90</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                className="py-3.5 px-3.5 rounded-sm border border-gray-300"
                type="text"
                placeholder="Mobile Phone"
              />
            </div>
            <button className="bg-[#ffd301] text-sm text-[#5d3ebc] font-semibold rounded-sm py-2 hover:bg-[#5d3ebc] hover:text-[#ffd301] duration-150">
              Continue with phone number
            </button>
          </div>
          {/* Form end */}
        </div>
      </div>
    </div>
  )
}

export default Hero
