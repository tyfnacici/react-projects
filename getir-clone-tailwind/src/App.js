import Navbar from "./components/Navbar"
import Favorites from "./pages/Favorites"
import Card from "./components/Card"
import Footer from "./pages/Footer"
import Categories from "./pages/Categories"

function App() {
  return (
    <div className="w-min-full flex flex-col h-screen bg-white">
      {/* <Navbar></Navbar> */}
      <Favorites/>
      {/* <Card></Card> */}
      {/* <Categories/> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
