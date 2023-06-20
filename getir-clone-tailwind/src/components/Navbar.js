import React from "react"

const Navbar = () => {
  return (
    <div className="p-3 bg-red-400">
      <div className="md:container mx-auto px-44 flex justify-between">
        <div>
          <ul className="flex space-x-3">
            <li>getir</li>
            <li>getiryemek</li>
            <li>getirbüyük</li>
            <li>getirsu</li>
            <li>getircarsi</li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-3">
            <li>Türkçe</li>
            <li>Giriş Yap</li>
            <li>Kaydol</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
