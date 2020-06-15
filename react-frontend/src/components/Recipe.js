import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addShipping } from './actions/cartActions'
import PurchaseButton from '../purchase'
import { Card, Button } from 'antd';

class Recipe extends Component{
    
    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }
    handleBuy = () => {
        const { product, handleAddToCart } = this.props;
        handleAddToCart(product);
      };
      
    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} </b></li>
                    </div>
                    <PurchaseButton price={this.props.total}>
            <Button style={{ width: '100%', marginTop: 20 }}>Checkout</Button>
          </PurchaseButton>
          
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)