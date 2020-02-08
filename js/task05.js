import React, {Component} from "react";
import ReactDOM from "react-dom";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
      y: '',
      z: ''
    }
  }

  handleOnChange =e=> {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  formValidation =()=> {
    if (this.state.x.length < 2) {
      return 'Polę imię musi zawierać co najmniej 2 znaki'
    }
    if (!this.state.y.includes('@') && this.state.y.length <3) {
      return 'Pole email musi zawierać znak @ i co najmniej 3 znaki'
    }
    if (this.state.z.length < 1) {
      return 'Pole wiadomość musi zostać uzupełnione'
    }
    if (this.state.x.length > 1 && this.state.y.includes('@') && this.state.y.length > 2 && this.state.z.length > 0)

  }


  render () {
    return (
        <form action="#">
          <input type="text" id='x' value={this.state.x} onChange={this.handleOnChange}/>
          <input type="email" id='y' value={this.state.y} onChange={this.handleOnChange}/>
          <textarea name="type some text" id="z" cols="30" rows="10" value={this.state.z} onChange={this.handleOnChange}></textarea>
          <button type="submit" onClick={this.formValidation()}>Wyślij</button>
        </form>
    )
  }
}

class App extends React.Component {
  render () {
    return <ContactForm />
  }
}

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  ContactForm
};