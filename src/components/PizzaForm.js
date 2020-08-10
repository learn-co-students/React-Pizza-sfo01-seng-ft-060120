import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Pizza Topping" 
              name="topping"
              value={props.currentPizza ? props.currentPizza.topping : ""}
              onChange={(e) => props.updatePizza(e)}/>
        </div>
        <div className="col">
          <select 
            value={props.currentPizza ? props.currentPizza.size : ""} 
            className="form-control"
            name="size"
            onChange={(e) => props.updatePizza(e)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value={true} name="vegetarian" checked={props.currentPizza ? props.currentPizza.vegetarian : false} onChange={(e) => props.updatePizza(e)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value={false} name="vegetarian" checked={props.currentPizza ? !props.currentPizza.vegetarian : false} onChange={(e) => props.updatePizza(e)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e) => props.savePizza(e)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
