import React from "react"
import getir from "../images/getir.svg"
import getiryemek from "../images/getir-yemek.svg"
import getirbüyük from "../images/getir-büyük.png"
import getirsu from "../images/getir-su.png"
import getircarsi from "../images/getir-carsi.png"

const Navbar = () => {
  return (
    <div className="p-3 bg-[#5e3fbc] text-white text-base font-semibold">
      <div className="md:container mx-auto px-44 flex justify-between">
        <div className="flex items-center">
          <ul className="flex space-x-9 mt-2">
            <img src={getir} alt="getir" className="h-4" />
            <img src={getiryemek} alt="getiryemek" className="h-4" />
            <img src={getirbüyük} alt="getirbüyük" className="h-4" />
            <img src={getirsu} alt="getirsu" className="h-4" />
            <img src={getircarsi} alt="getircarsi" className="h-4" />
          </ul>
        </div>
        <div className="flex items-end">
          <ul className="flex space-x-8 text-sm">
            <li className="flex items-center space-x-1.5">
              <i className="pi pi-globe text-lg"></i>
              <p>English (EN)</p>
            </li>
            <li className="flex items-center space-x-1.5">
              <i className="pi pi-user"></i>
              <p>Login</p>
            </li>
            <li className="flex items-center space-x-1.5">
              <i className="pi pi-user-plus"></i>
              <p>Sign Up</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
