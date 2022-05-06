import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
