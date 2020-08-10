import React from "react"

const PizzaForm = (props) => {
  let {id, topping, size, vegetarian} = props.currentPizza
  

  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={props.handlePizzaToppingChange} type="text" className="form-control" placeholder="Pizza Topping" value={
                topping ? topping :
                ""
              }/>
        </div>
        <div className="col">
          <select onChange={props.handlePizzaSizeChange} value={size ? size : 'Small'} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={props.handleVegetarianChange} className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian ? true : null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={props.handleVegetarianChange} className="form-check-input" type="radio" value="Not Vegetarian" checked={vegetarian === false ? true : null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={id ? () => props.handleSubmit(id) : null}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
