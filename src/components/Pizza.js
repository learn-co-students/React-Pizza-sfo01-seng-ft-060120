import React from "react"

const Pizza = (props) => {

  const {id, topping, size, vegetarian} = props.pizza
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian === true ? "Yes" : "No" }</td>
      <td><button type="button" className="btn btn-primary" onClick={(event) => props.fillEditPizzaForm(id, event)}>Edit Pizza</button></td>
    </tr>
  )
  
}

export default Pizza
