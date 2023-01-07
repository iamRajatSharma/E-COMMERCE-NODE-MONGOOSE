import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
function App() {
    return (
        <>
            <BrowserRouter>
            <Navbar />
                <Sidebar />
                
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
