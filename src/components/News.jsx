import React from 'react'
import {replacement} from './Data'
import dayjs from "dayjs"

const News = ({item}) => {
  const date = new Date();
  return (
    <div className="news-items card card-body">
            
            <img src={item.image_url? item.image_url : replacement } alt="pic" />           
            <div className='news-details'> 
                <small className='d-flex justify-content-end mt-2'>{dayjs(date).format("ddd DD MMMM, YYYY")}</small>
                <p className='text-primary fw-bold'>{item.title}</p>
                <p>{item.description}</p>
                <p className='secondary fs-6'> <span className='secondary fw-bolder'>Author(s): </span>{item.creator}</p>
                <p className='bd-secondary'><span className='fw-bolder'>Country:</span>{item.country}</p>
               <span className='secondary fw-bolder'>keywords:</span> <p className='keywords'>{item.keywords}</p>
                </div>
             
              </div>
  )
}

export default News
