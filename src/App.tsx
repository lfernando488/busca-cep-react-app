import { CepForm } from "./Forms/CepForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 
  return (
    <>
      <h1>Consulta de CEP</h1>
      <CepForm />
      <ToastContainer />
    </>
  )
}

export default App
