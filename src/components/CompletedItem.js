import React, { Component } from 'react'

export class CompletedItem extends Component {
    deleteItemHandler =(event)=>{
        var item = event.target.parentElement.parentElement.childNodes[1].innerText
        // console.log(item)
        this.props.toDeleteItem(item)
    }
    moveToIncompleteHandler = (event)=>{
        event.preventDefault();
        var item = event.target.parentElement.childNodes[1].innerText
        this.props.toMoveItem(item)
    }
    editItemHandler = (event)=>{
        var item = event.target.parentElement.parentElement.childNodes[1].innerText
        this.props.toEditItem(item)
    }
  render() {
    return (
      <div>
        <input type='checkbox' defaultChecked={true} onClick={this.moveToIncompleteHandler}/>
        <div style={{textDecorationLine: 'line-through'}}>{this.props.itemName}</div>
        <div>
            <button onClick={this.editItemHandler}>Edit</button>
            <button onClick={this.deleteItemHandler}>Delete</button>
        </div>
      </div>
    )
  }
}

export default CompletedItem