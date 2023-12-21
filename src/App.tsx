import { Routes, Route } from "react-router-dom";
import InfoPage from "./pages/Info/InfoPage";
import FormPage from "./pages/Form/FormPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<InfoPage />} />
                <Route path="/form" element={<FormPage />} />
            </Routes>
        </div>
    );
}

export default App;
