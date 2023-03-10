import React from 'react'
const units = {
    source:"",
    destination:"",
    weight:"grams",
    length:"cm",
    width:"cm",
    height:"cm",
    value:"INR",
    objectType:"",
    serviceType:"Delivery",
  }

const CustomRow = ({idx,attribute,val}) =>{
    return <tr>
        <th scope="row">{idx+1}</th>
        <td>{attribute}</td>
        <td>{`${val} ${units[attribute]}`}</td>
    </tr>
}

export default CustomRow;
