import Navbar from "./components/Navbar"
import Category from "./components/Category"
import Favorites from "./components/Favorites"
import Card from "./components/Card"
import Footer from "./pages/Footer"

function App() {
  return (
    <div className="w-min-full flex flex-col h-screen bg-slate-300">
      <Navbar></Navbar>
      {/* <Favorites></Favorites> */}
      {/* <Card></Card> */}
      <Footer />
    </div>
  )
}

export default App
