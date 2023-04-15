import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';
import ServiceCard from '../serviceCard/serviceCard.component';
import Form from 'react-bootstrap/Form';
import useStateCallback from '../../hooks/useStateCallback';
const ServiceList = () => {
  
  const location = useLocation();
  const [data,setData] = useState(location.state.data.data);
  const [query,setQuery] = useState(location.state.query);
  const [sortType,setSortType] = useStateCallback('price');


  useEffect(() => {
    document.title='Search Results'
  })
  // console.log(location.state)
  // console.log(data)
  // console.log(query)

  const onValueChange = (e) => {

    setSortType(e.target.name,() => {
      if(sortType==='price')
      {
        
        const temp = data;
        temp.sort((a,b)=>a.price-b.price);
        setData(temp);
      }
      else
      {
        const temp = data;
        temp.sort((a,b)=>b.rating-a.rating);
        setData(temp);
      }
    
      return () => {
      }
    }
      
      )
  }

  return (
    <div className='p-5' style={{width:"70%"}}>
      <div className='filter d-flex flex-row justify-content-around' > 
          <Form>
            <div className="mb-3">
              <Form.Check
                inline
                label="sort by price"
                name="price"
                type="radio"
                checked={sortType === "price"}
                onChange={onValueChange}
              />
              <Form.Check
                inline
                label="sort by ratings"
                name="rating"
                type="radio"
                checked={sortType === "rating"}
                onChange={onValueChange}
              />
            </div>
        </Form>
      </div>
      {

        data.map((service) => {
          // console.log(service)
          return <ServiceCard key = {service.id} service = {service} query={query}/>
        })
      }
    </div>
  )
}

export default ServiceList