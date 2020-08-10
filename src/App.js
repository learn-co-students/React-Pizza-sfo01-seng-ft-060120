import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    currentPizza: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(json => this.setState({
      pizzas: json
    }))
  }

  editPizza = pizza => {
    this.setState({
      currentPizza: pizza
    })
  }
    
  handlePizzaToppingChange = e => {
    this.setState({
      currentPizza: {
        ...this.state.currentPizza,
        topping: e.target.value
      }
    })
  }

  handlePizzaSizeChange = e => {
    this.setState({
      currentPizza: {
        ...this.state.currentPizza,
        size: e.target.value
      }
    })
  }

  handleVegetarianChange = e => {
    this.setState({
      currentPizza: {
        ...this.state.currentPizza,
        vegetarian: e.target.value === 'Vegetarian' ? true : false
      }
    })
  }

  handleSubmit = id => {
    let updatedPizza = { ...this.state.currentPizza }

    fetch(`http://localhost:3000/pizzas/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(updatedPizza)
    })
    .then(res => res.json())
    .then(json => this.setState({
      pizzas: this.state.pizzas.map(pizza => {
        if (pizza.id === id) {
          pizza = json
        }
        return pizza
      })
    }))
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm currentPizza={this.state.currentPizza} handlePizzaSizeChange={this.handlePizzaSizeChange} handlePizzaToppingChange={this.handlePizzaToppingChange} handleVegetarianChange={this.handleVegetarianChange} handleSubmit={this.handleSubmit}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
