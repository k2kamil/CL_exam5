import React from "react";
import ReactDOM from "react-dom";

class UserCard extends React.Component {
  render() {
    const {name, surname, adress, postcode, city} = this.props;

        return (
    if (name.length > 0 && surname.length > 0 && adress.length > 0 && postcode.length => 5 && postcode.length <= 6) {
      return (
          <div className="card">
            <div>
              <h5>{name} {surname}</h5>
              <div>{adress}</div>
              <div>{postcode} {city}</div>
            </div>
          </div>
      )
    } else {
      return (
          <div className="alert alert-danger">
            Dane są nieprawidłowe!
          </div>

      )
    }
        )

  }
}

function App {
  return <UserCard name="Jan" surname="Kowalski" adress="Zielna" postcode="00-000" city="Warszawa"/>
}


/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  UserCard
};