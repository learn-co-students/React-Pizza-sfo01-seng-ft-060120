import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    editedPizza: {
      id: "",
      topping: "",
      size: "",
      vegetarian: ""
    }
  }

  componentDidMount () {
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then((json) => {
      this.setState ({
        pizzas: json
      })
    })
  }

  fillEditPizzaForm = (id, event) => {
    let editedPizza = this.state.pizzas.filter ((pizza) => {
      return pizza.id === id
    })
    this.setState ({
      editedPizza: {
        id: editedPizza[0].id,
        topping: editedPizza[0].topping,
        size: editedPizza[0].size,
        vegetarian: editedPizza[0].vegetarian
      }
    })
  }

  handleChangeInEditFormData = (event) => {
    event.preventDefault()
    if (event.target.name === "vegetarian") {
      event.target.value === "Not Vegetarian"
      ?
      this.setState ({ editedPizza: {...this.state.editedPizza, [event.target.name]: false }})
      :
      this.setState ({ editedPizza: {...this.state.editedPizza, [event.target.name]: true }})
    } else {
      this.setState ({
        editedPizza: {
          ...this.state.editedPizza,
          [event.target.name]: event.target.value
        }
      })
    }
  }

  updatePizza = (event) => {
    event.preventDefault()
    console.log(this.editedPizza)
    // debugger

    let data = {
      id: this.state.editedPizza.id,
      topping: this.state.editedPizza.topping,
      size: this.state.editedPizza.size,
      vegetarian: this.state.editedPizza.vegetarian
    }

    fetch(`http://localhost:3000/pizzas/${this.state.editedPizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      let updatedPizzas = this.state.pizzas.map ((pizza) => {
        return pizza.id === this.state.editedPizza.id ? this.state.editedPizza : pizza
      })

      this.setState ({
        pizzas: updatedPizzas,
        editedPizza: {
          id: "",
          topping: "",
          size: "",
          vegetarian: ""
        }
      })
    })
}

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm editedPizza={this.state.editedPizza} handleChangeInEditFormData={this.handleChangeInEditFormData} updatePizza={this.updatePizza}/>
        <PizzaList pizzas={this.state.pizzas} fillEditPizzaForm={this.fillEditPizzaForm}/>
      </Fragment>
    );
  }

}

export default App;
