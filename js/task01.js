import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return (
            <>
                <h1>Hello World</h1>
                <span>Ostatni egzamin</span>
            </>
        )
    }
}



/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));

export default App;