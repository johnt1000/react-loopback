import React, { Component } from "react";
import axios from 'axios';
import ListReview from './ListReview';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Review extends Component {
    
    constructor(){
        super();
        this.state = {
            reviews: []
        }
    }

    componentWillMount(){
        this.getReviews();
    }

    getReviews(){
        let url = 'http://localhost:3000/api/CoffeeShops/' + this.props.match.params.id + '/reviews';
        console.log(url);
        axios.get(url)
        .then(response => {
            this.setState({reviews: response.data}, () => {});
        })
        .catch(err => console.log(err));
    }

    render() {
        
        const reviewsItem = this.state.reviews.map((review, i)=> {
            return( <ListReview key={review.id} item={review} /> )
        });

        return (
            <Paper elevation={1}>
                <Typography variant="h5" component="h3">
                    Reviews
                </Typography>
                <Typography component="p">
                    <List className="list-review">
                        {reviewsItem}
                    </List>
                </Typography>
            </Paper>
        )
    }
}

export default Review;