import React from "react"

const PizzaForm = (props) => {
  
  const {topping, size, vegetarian} = props.editedPizza

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={topping} name="topping" onChange={props.handleChangeInEditFormData}/>
        </div>
        <div className="col">
          <select value={size} className="form-control" name="size" onChange={props.handleChangeInEditFormData}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian} name="vegetarian" onChange={props.handleChangeInEditFormData}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={vegetarian === "" ? null : !vegetarian} name="vegetarian" onChange={props.handleChangeInEditFormData}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(event) => props.updatePizza(event)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
