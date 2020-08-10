import React from "react"

const Pizza = (props) => {
  let {topping, size, vegetarian } = props.pizza
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={(e) => props.editForm(e, props.pizza)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
