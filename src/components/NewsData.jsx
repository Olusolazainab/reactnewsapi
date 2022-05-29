import {useState, useEffect} from "react"
import News from "./News"


const NewsData = () => {

    const [container, setContainer] = useState([])
    const [category, setCategory] = useState("")
    const [page, setPage] = useState(1)
    const [isFetching, setIsFetching] = useState(false);
  
    const fetchData =(API)=>{
        fetch(API)
        .then(res =>{
            return res.json()
        .then(data =>{
            setContainer(data.results)
        .catch(err=>{
            console.log(err)
        })
        })
        })
        
    }

    const moreData = ()=>{
        let url = `${process.env.REACT_APP_NEWSURL}?apikey=${process.env.REACT_APP_NEWSKEY}&language=en&category=science&page=${page}`
        fetch(url)
        .then(res =>{
            return res.json()
        .then(data =>{
            setContainer([...container, ...data.results])
            setPage(page+1)
            setIsFetching(false)
        .catch(err=>{
            console.log(err)
        })
        })
        })
    }   

    const handleScroll = ()=>{ 
        if(
            window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight    
        ){
            return;
        }
       setIsFetching(true)
    };

    useEffect(()=>{
        fetchData(`${process.env.REACT_APP_NEWSURL}?apikey=${process.env.REACT_APP_NEWSKEY}&language=en&category=sports`)
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    },[])

    useEffect(()=>{
        if(isFetching){
            moreData()
        }
    },[isFetching])

    const handleSubmit =(e)=>{
     const category = setCategory(e.target.value)

     if(category){
      fetchData(`${process.env.REACT_APP_NEWSURL}?apikey=${process.env.REACT_APP_NEWSKEY}&language=en&category=+${category}`)
     }
    }  

   
    
  return (
      <>
      <div className="row">
          <div className="col-md-4"></div>
          <div  className="text-center mt-2 col-md-4">
         
      
       <form onSubmit={handleSubmit} className="mw-100">
      <div className="">   <label>filter by catrgory</label></div>
       <select className="mt-2">
    <option></option>
     <option value={category}>bussiness</option>
    <option value={category}>entertainment</option>
    <option value={category}>environment</option>
    <option value={category}>food</option>
    <option value={category}>health</option>
    <option value={category}>politics</option>
    <option value={category}>science</option>
    <option value={category}>sports</option>
    <option value={category}>technology</option>
    <option value={category}>top</option>
    <option value={category}>world</option>
</select>
</form>

</div>
<div className="col-md-4"></div>
</div>

   
        
    <div className="container news-container d-flex mt-5 pt-2 flex-wrap justify-content-center">


      {container.map((item, index)=>{
          return(
              <News   key={index} item={item} />
          )
      })}
     
    </div>
    </>
  )
}
    
   

export default NewsData;
