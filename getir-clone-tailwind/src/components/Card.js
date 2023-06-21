import React from "react"

const Card = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg p-5 rounded-xl">
      <div className="w-36 h-36 rounded-full bg-red-400"></div>
      <div className="flex flex-col text-center space-y-4 w-[22rem]">
        <h1 className="text-purple-800 font-bold text-xl pt-4">
          A promotion for every order
        </h1>
        <p className="text-gray-500">At Getir, you can find a promotion for every order.</p>
      </div>
    </div>
  )
}

export default Card
