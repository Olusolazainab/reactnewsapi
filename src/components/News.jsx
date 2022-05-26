import React from 'react'

const News = ({item}) => {
  return (
    <div className="movie-container card card-body">
            
            <img src={item.image_url} alt="pic" onError="src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCasHELVIop292NBWdwKcce4FDhho5CFxng&usqp=CAU'" />           
            <div className='news-details'> 
                <p className='d-flex justify-content-end mt-2'>{item.pubDate}</p>
                <h6 className='primary fw-bold'>{item.title}</h6>
                <p>{item.description}</p>
                <p className='secondary fs-6'> <span className='secondary fw-bolder'>Author(s): </span>{item.creator}</p>
                <p className='bd-secondary'><span className='fw-bolder'>Keyboard:</span>{item.keywords}</p>
               
                </div>
             
              </div>
  )
}

export default News
