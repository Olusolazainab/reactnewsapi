import {useState, useEffect} from "react"
import News from "./News"
import { Form } from "react-bootstrap";

const NewsData = () => {
    const [container, setContainer] = useState([])
    const [bussiness, setBussiness] = useState("")
    const [entertainment, setEntertainment] = useState("")
    const [environment, setEnvironment] = useState("")

     useEffect(()=>{
        fetch('https://newsdata.io/api/1/news?apikey=pub_765246a28ae9ce017d0aa5caa967b8158630&language=en&category=sports,food,health,science')
        .then(res =>{
            return res.json()
        .then(data =>{
            setContainer(data.results)
        .catch(err=>{
            console.log(err)
        })
        })
        })
    },[])

    const handleChange =(e)=>{
     const bussiness = setBussiness(e.target.value)

     if(bussiness){
      fetch('https://newsdata.io/api/1/news?apikey=pub_765246a28ae9ce017d0aa5caa967b8158630&language=en&category=bussiness')
      .then(res =>{
          return res.json()
      .then(data =>{
          setBussiness(data.results)
      .catch(err=>{
          console.log(err)
      })
      })
      })
     }
    
     const handleChange =(e)=>{
      const entertainment = setEntertainment(e.target.value)
 
      if(entertainment){
       fetch('https://newsdata.io/api/1/news?apikey=pub_765246a28ae9ce017d0aa5caa967b8158630&language=en&category=entertainment')
       .then(res =>{
           return res.json()
       .then(data =>{
           setEntertainment(data.results)
       .catch(err=>{
           console.log(err)
       })
       })
       })
      }

     const handleChange =(e)=>{
      const environment = setEnvironment(e.target.value)
 
      if(environment){
       fetch('https://newsdata.io/api/1/news?apikey=pub_765246a28ae9ce017d0aa5caa967b8158630&language=en&category=environment')
       .then(res =>{
           return res.json()
       .then(data =>{
           setEnvironment(data.results)
       .catch(err=>{
           console.log(err)
       })
       })
       })
      }

      
    

    }
    
  return (
    <div className="container news-container d-flex mt-5 pt-2">

    <Form.Select aria-label="Default select example" className="mt-5 d-flex  justify-content-center select-form" onchange={handleChange}>
  <option>Open this select menu</option>
  <option value={bussiness}>bussiness</option>
    <option value={entertainment}>entertainment</option>
    <option value={environment}>environment</option>
    <option value="food">food</option>
    <option value="health">health</option>
    <option value="politics">politics</option>
    <option value="science">science</option>
    <option value="sports">sports</option>
    <option value="technology">technology</option>
    <option value="top">top</option>
    <option value="world">world</option>
</Form.Select>
    
      {container.map((item)=>{
          return(
              <News   key={item.id} item={item} />
          )
      })}
     
    </div>
    
  )
}
    
export default NewsData;
