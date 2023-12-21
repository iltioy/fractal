import { Routes, Route } from "react-router-dom";
import InfoPage from "./pages/InfoPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<InfoPage />} />
            </Routes>
        </div>
    );
}

export default App;
