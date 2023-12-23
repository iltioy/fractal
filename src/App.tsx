import { Routes, Route } from "react-router-dom";
import InfoPage from "./pages/Info/InfoPage";
import FormPage from "./pages/Form/FormPage";
import Modal from "./components/Modal/Modal";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
    const { errorModalOpen, successModalOpen } = useSelector((store: RootState) => store.modals);

    return (
        <>
            {successModalOpen && (
                <Modal
                    title="Форма успешно отправлена"
                    status="success"
                    alignTitle="center"
                    alignButton="center"
                />
            )}

            {errorModalOpen && (
                <Modal title="Ошибка" status="error" alignTitle="left" alignButton="right" />
            )}

            <div className="App">
                <Routes>
                    <Route path="/" element={<InfoPage />} />
                    <Route path="/form" element={<FormPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
