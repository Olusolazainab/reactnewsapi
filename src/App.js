import "./index.css"
import NewsData from "./components/NewsData";



function App() {

  return (

   <div className="wrapper">
     
    <nav fixed="top" className="bg-dark text-light p-0.5">
    <p className="text-center display-5"> World News</p>
  </nav>

 <NewsData />
   </div>
  );
}

export default App;
