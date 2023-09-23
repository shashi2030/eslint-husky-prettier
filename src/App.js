import "./App.css"
import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"

function App() {
    return (
        <div className="App">
            <Header heading="This is a header heading" nav={["nav1", "nav2"]} />
            <Footer />
        </div>
    )
}

export default App
