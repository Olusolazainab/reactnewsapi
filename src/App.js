import "./index.css"
import NewsData from "./components/NewsData";



function App() {

  return (

   <>
     
    <nav fixed="top" className="bg-dark text-light p-1 position-fixed w-100" >
    <p className="text-center display-6 fw-bold pt-1 "> World News</p>
  </nav>

 <NewsData />
   </>
  );
}

export default App;
