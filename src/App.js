import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  constructor(){
    super()

    this.state = {
      allPizza: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        allPizza: data,
        currentPizza: null
      })
    })
  }

  editForm = (e, pizza) => {
    console.log(e.target)
    console.log(pizza)
    this.setState({
      currentPizza: pizza
    })
  }

  updatePizza = (e) => {
    let value = e.target.value
    value === 'true' ? value = true : null
    value === 'false' ? value = false : null

    let newPizza = {
      ...this.state.currentPizza,
      [e.target.name]: value
    }
    this.setState({
      currentPizza: newPizza
    })
  }

  savePizza = (e) => {
    // save pizza to list of pizzas
    e.preventDefault()
    let updatedAllPizza = this.state.allPizza.map(pizza => {
      if(pizza.id === this.state.currentPizza.id){
        return this.state.currentPizza
      }
      else{
        return pizza
      }
    })
    this.setState({
      allPizza: updatedAllPizza
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm currentPizza={this.state.currentPizza} updatePizza={this.updatePizza} savePizza={this.savePizza}/>
        <PizzaList allPizza={this.state.allPizza} editForm={this.editForm}/>
      </Fragment>
    );
  }
}

export default App;
