import React from "react"

const Favorites = () => {
  return (
    <div className="justify-center items-center flex text-center flex-col bg-slate-300 p-2">
      <div className="w-32 h-60 flex flex-col items-center">
        <div className="w-28 h-32 bg-red-300 rounded-lg"></div>
        <div className="flex flex-col text-center pt-4 space-y-1">
          <p className="text-purple-700 font-bold text-sm">₺3.95</p>
          <p className="font-bold text-sm">Kavrulmuş Siyah Ay Çekirdeği</p>
          <p className="text-gray-500 text-sm">1.5L</p>
        </div>
      </div>
    </div>
  )
}

export default Favorites
