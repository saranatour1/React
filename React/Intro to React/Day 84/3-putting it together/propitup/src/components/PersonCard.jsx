import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      // turned the number from string to number
      // now age is ran by this.age instead of this.props.age
      age: parseInt(this.props.age, 10),
    };
  }
  state = {
    age: this.props.age,
  }


  increaseByOne = () => {
    this.setState((prevState) => ({
      age: prevState.age += 1,
    }));
  };

  render() {
    const { firstName, lastName, hairColor } = this.props;
    // destructor for age from this.state 
    const { age } = this.state;

    return (
      <section className="mt-5 mx-auto">
        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
          {lastName}, {firstName}
        </h1>
        <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Age: {age}</p>
        <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Hair Color: {hairColor}</p>
        <button type="button" className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded mb-4" onClick={this.increaseByOne}>
          Birthday Button for {firstName} {lastName}.
        </button>
      </section>
    );
  }
}

export default PersonCard;
