import React from "react"

const Footer = () => {
  return (
    <div className="w-min-max bg-white">
      <div className="flex flex-row justify-between p-3 md:container mx-auto px-44">
        <ul className="text-sm text-gray-700">
          <li className="text-purple-800 text-lg">Download Getir!</li>
          <li>App store button</li>
          <li>Google Play button</li>
          <li>App galery button</li>
        </ul>
        <ul className="text-sm text-gray-700">
          <li className="text-purple-700 text-lg">Discover Getir</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Techonology Careers</li>
          <li>Contact Us</li>
          <li>COVID-19 Announcement</li>
          <li>Social Responsibility Projects</li>
        </ul>
        <ul className="text-sm text-gray-700">
          <li className="text-purple-700 text-lg">Need help?</li>
          <li>FAQ</li>
          <li>Protecting Private Information</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Cookie Policy</li>
        </ul>
        <ul className="text-sm text-gray-700">
          <li className="text-purple-700 text-lg">Become Our Businnes Partner</li>
          <li>Become a franchise</li>
          <li>Rent Your Warehouse</li>
          <li>Become a GetirFood Restourant</li>
          <li>Becoma a GetirLocals Businnes</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
