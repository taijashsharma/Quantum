import "./App.css";
import { Footer } from "./component/layout/Footer";
import { Navbar } from "./component/layout/Navbar";
import AppRoutes from "./route/AppRoutes";

function App() {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <AppRoutes />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
