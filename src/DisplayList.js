import React, { Component } from 'react';
import {Button} from 'react-bootstrap';


class DisplayList extends Component {
  render() {
    return(
    <div>
      {this.props.list.map(item =>
        <div className="product-component">
          <img className="img-product" src={item.image}/>
          <div className="item-text">
            <p className="item-name">{item.name}</p>
            <p>{item.type}, {item.tea} Tea</p>
            <p>${item.price}</p>
          </div>
          <Button className="product-button" variant="primary" value="hi" onClick = {() => this.props.onAddSelect(item)}>Add to cart</Button>
        </div>)}
    </div>
  )
  }
}

export default DisplayList;
