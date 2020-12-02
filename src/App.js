import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import FilteredList from "./FilteredList";
import oolong from "./images/oolong.png";
import taro from "./images/taro.jpg";
import thai from "./images/thai.jpg";
import matcha from "./images/matcha.jpg";
import passion from "./images/passion.jpg";
import peach from "./images/peach.jpg";
import mango from "./images/mango.jpg";
import almond from "./images/almond.jpg";
import lychee from "./images/lychee.jpg";
import chocolate from "./images/chocolate.jpg";
import jasmine from "./images/jasmine.jpg";
import boba from "./images/boba.jpg";
import cheesecake from "./images/cheesecake.jpg";

/* A list of all available products */
const productList = [
  {name: "Oolong Milk Tea", type: "Milk Tea", tea: 'Black', price: 4, image: oolong},
  {name: "Taro Milk Tea", type: "Milk Tea", tea: 'Other', price: 5.5, image: taro},
  {name: "Thai Milk Tea", type: "Milk Tea", tea: 'Other', price: 5, image: thai},
  {name: "Matcha Milk Tea", type: "Milk Tea", tea: 'Green', price: 6.5, image: matcha},
  {name: "Passion Fruit Tea", type: "Fruit Tea", tea: 'Black', price: 4.5, image: passion},
  {name: "Peach Black Tea", type: "Fruit Tea", tea: 'Black', price: 4.5, image: peach},
  {name: "Mango Green Tea", type: "Fruit Tea", tea: 'Green', price: 4.5, image: mango},
  {name: "Almond Milk Tea", type: "Milk Tea", tea: 'Other', price: 5, image: almond},
  {name: "Lychee Black Tea", type: "Fruit Tea", tea: 'Black', price: 5.5, image: lychee},
  {name: "Chocolate Milk Tea", type: "Milk Tea", tea: 'Other', price: 5, image: chocolate},
  {name: "Jasmine Milk Tea", type: "Milk Tea", tea: 'Green', price: 6, image: jasmine},
  {name: "Boba Cake", type: "Dessert", tea: 'Other', price: 7, image: boba},
  {name: "Matcha Cheesecake", type: "Dessert", tea: 'Other', price: 7.5, image: cheesecake},
];

class App extends Component {
  render() {
    /* return a filtered list component */
    return (
      <div>
      <FilteredList list={productList}/>
      </div>
    )
  }

}

export default App;
