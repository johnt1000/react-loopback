import React, { Component } from "react";
import axios from 'axios';
import CardReview from './CardReview';

class CoffeShop extends Component {
    
    constructor(){
        super();
        this.state = {
            shops: []
        }
    }

    componentWillMount(){
        this.getReviews();
    }

    getReviews(){
        axios.get('http://localhost:3000/api/CoffeeShops?filter[include][reviews]')
        .then(response => {
            this.setState({shops: response.data}, () => {});
        })
        .catch(err => console.log(err));
    }

    render() {
        
        const shopsItem = this.state.shops.map((shop, i)=> {
            return( <CardReview key={shop.id} item={shop} /> )
        });

        return (
            <div>
                {shopsItem}
            </div>
        )
    }
}

export default CoffeShop;