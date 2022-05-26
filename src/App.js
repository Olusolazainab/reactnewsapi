import "./index.css"
import NewsData from "./components/NewsData";
import { Navbar } from "react-bootstrap";



function App() {

  return (

   <div className="wrapper">
     
    <Navbar bg="dark" variant="dark" fixed="top">
    <h1 className="text-light d-flex justify-content-end">World News</h1>
  </Navbar>

 <NewsData />
   </div>
  );
}

export default App;
