import React, {Component} from "react";
import ReactDOM from "react-dom";

class LoadingData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '0'
    }
  }

  componentDidMount() {
    this.interval = setInterval(()=> {
      this.setState({
        width: this.state.width + 1
      }, ()=> {
        if(this.state.width === '100') {
          <h1>Dane załadowane</h1>
        }
      })
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let style = {
      backgroundColor: 'red',
      height: '5px',
      width: this.state.width
    }

    return (
        <div>
          <div className="progress-bar" style={style}></div>
        </div>
    )
  }
}

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App >, document.getElementById("app"));
export {
  LoadingData
}