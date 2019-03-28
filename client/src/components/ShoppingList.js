import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import {connect} from 'react-redux';
// getItems: COMES FROM THE itemActions file.
import {getItems, deleteItem} from '../actions/itemActions';
import propTypes from 'prop-types';

class ShoppingList extends Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     items: [
  //       {id: uuid(),name: 'Eggs'},
  //       {id: uuid(),name: 'Bean'},
  //       {id: uuid(),name: 'Potatos'},
  //       {id: uuid(),name: 'Turkey'},
  //     ]
  //   }
  // }

  componentDidMount(){
    this.props.getItems();
  }

  onDeleteClick = (id) =>{
    this.props.deleteItem(id);
  }

  render(){
    const {items} = this.props.item;

    return(
      <Container>
        <ListGroup>
          <div>
            {items.map(({_id, name}) =>(
              <CSSTransition key = {_id} timeout={500}>
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </div>
        </ListGroup>

      </Container>
    )
  }
}

ShoppingList.propTypes = {
  getItems: propTypes.func.isRequired,
  item: propTypes.object.isRequired
}

const mapStateToProps = (state) =>({
  // item come from the rootReducer
  item: state.item
})

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);
