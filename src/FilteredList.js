import React, { Component } from 'react';
import {Navbar, Nav, Dropdown, DropdownButton, Button} from 'react-bootstrap';
import DisplayList from './DisplayList';

class FilteredList extends Component {
  constructor(props) {
      super(props);

      this.state = {
        type: "All",
        tea: "All",
        sort: "No Sorting",
        cart: [],
        total: 0
      };
  }

  onAddSelect = (item) => {
    const newItem = {
      name: item.name,
      type: item.type,
      tea: item.tea,
      price: item.price,
      image: item.image,
      key: Date.now()
    }
    const newCart = [...this.state.cart, newItem];
    const newTotal = this.state.total + newItem.price;
    this.setState({
      cart: newCart,
      total: newTotal
    });
    /*alert("hello"+ item.name+newItem.name);*/
  }

  onSelectFilterType = (event) => {
    this.setState({
      type: event
    });
  }

  onSelectFilterTea = (event) => {
    this.setState({
      tea: event
    });
  }

  matchesFilterType = item => {
    if((this.state.type !== "All"&&this.state.type !== item.type)||(this.state.tea !== "All"&&this.state.tea !== item.tea)) {
      return false;
    }
    return true;
  }

  onSelectSortPrice = (event) => {
    this.setState({
      sort: event
    });
  }

  sortByPrice = (order="No Sorting") => {
    return (x,y) => {
      if(order==="No Sorting"){
        return 0;
      }
      if (order==="Low to High"){
        if (x.price>y.price){
          return 1;
        }
        return -1;
      }
      if (order==="High to Low"){
        if (x.price>y.price){
          return -1;
        }
        return 1;
      }

    }
  }

  onRemoveClick = (item) => {
    const newCart = this.state.cart.filter(x=> (x.key !== item.key));
    const newTotal = this.state.total - item.price;
    this.setState({
      cart:newCart,
      total: newTotal
    });
    /*alert("hi"+ item.key);*/
  }

  createCart = (item) => {
    return
    <div>
    hi
    </div>
  }

  render() {
    return (
      <div className="page">
      <div className = "menu">
      <div className="menu-wrapper">

        <p id="type-label">Product Type</p>

        <Nav id="type-control" variant="pills" defaultActiveKey="All">
          <Nav.Item>
            <Nav.Link eventKey = "All" onSelect={this.onSelectFilterType}>All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey = "Milk Tea" onSelect={this.onSelectFilterType}>Milk Tea</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey = "Fruit Tea" onSelect={this.onSelectFilterType}>Fruit Tea</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey = "Dessert" onSelect={this.onSelectFilterType}>Dessert</Nav.Link>
          </Nav.Item>
        </Nav>



        <p id="tea-label">Tea Type</p>
        <div className="tea-control">
        <Nav variant="pills" defaultActiveKey="All">
          <Nav.Item>
            <Nav.Link eventKey = "All" onSelect={this.onSelectFilterTea}>All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey = "Black" onSelect={this.onSelectFilterTea}>Black Tea</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey = "Green" onSelect={this.onSelectFilterTea}>Green Tea</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey = "Other" onSelect={this.onSelectFilterTea}>Other</Nav.Link>
          </Nav.Item>
        </Nav>
        </div>



        <p className="sort-label">Sort by price</p>
        <div className="sort-control">
        <DropdownButton id="dropdown-basic-button" title={this.state.sort}>
          <Dropdown.Item eventKey="No Sorting" onSelect={this.onSelectSortPrice}>No sorting</Dropdown.Item>
          <Dropdown.Item eventKey="Low to High" onSelect={this.onSelectSortPrice}>Low to High</Dropdown.Item>
          <Dropdown.Item eventKey="High to Low" onSelect={this.onSelectSortPrice}>High to Low</Dropdown.Item>
        </DropdownButton>
        </div>

      </div>
      </div>

      <div className="products">
        <DisplayList list={this.props.list.filter(this.matchesFilterType).sort(this.sortByPrice(this.state.sort))} onAddSelect={this.onAddSelect}/>
      </div>


      <div className="cart">
      <div className="cart-top">
        <p id="cart-title"> My Cart</p>
        <p>Total price: {this.state.total} </p>
      </div>
      <div className="cart-list">
        {this.state.cart.map(item =>
        <div className="cart-item">
          <img className="img-cart" src={item.image}/>
          <div className="text-cart">
            <p className="name-cart">{item.name}</p>
            <p>{item.type}, {item.tea} Tea </p>
            <p>${item.price}</p>
          </div>
          <Button className="remove-button" variant="primary" onClick={() => this.onRemoveClick(item)}> Remove </Button>
        </div>
        )}
      </div>
      </div>



      </div>
    )
  }
}

export default FilteredList;
