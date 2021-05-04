import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';

export default class About extends React.Component {
 constructor(props) {
   super(props);
   this.state = {};
 }

 componentDidMount() {

 }

 render() {
   return (
      <div className="About">
      <h1>Pet Inventory App</h1>
        <p>This is a pet iventory app that can be used to store data about pets from a pre-defined backend database and front-end of reactJS. The database is made up of a single table that stores entries describing pets based on their animal, classification, age, and price.</p>
        <img src="./images/pet2.jpg" width="35%" />
        <img src="./images/pet.jpg" width="40%" />
        <p>Use the <Link to="/Search">Search</Link> page to find all pets.</p>
        <p>Use the <Link to="/Edit">Edit</Link> page to add new pets, edit existing pet attributes, or remove pets that have found an owner.</p>
      </div>
    );
 }
}