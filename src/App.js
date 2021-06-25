import "./App.css";
import { PET } from "./API/API";
import SelectPatient from "./components/SelectPatient";

function App() {
  return (
    <>
      <SelectPatient PET={PET} />
    </>
  );
}

export default App;
