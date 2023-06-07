import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    const { firstName, lastName ,age, hairColor } = this.props;
    return <section>
      <h1> {lastName}, {firstName} </h1>
      <p> Age: {age} </p>
      <p> Hair Color : {hairColor}</p>
    </section>;
  }
}

export default PersonCard;
