import React from 'react'
import CustomRow from './customRow.component';
import './FormEntryPreview.component.css';


const FormEntryPreview = ({searchQuery}) => {

    return (
    <div>

<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Attribute</th>
      <th scope="col">Provided</th>
    </tr>
  </thead>
  <tbody>

    { 

       Object.entries(searchQuery).map(([key, val], i) => (
            <CustomRow key={i} idx={i} attribute={key} val={val}/>            
        ))
    }

  </tbody>
</table>

    </div>
  )
}

export default FormEntryPreview;