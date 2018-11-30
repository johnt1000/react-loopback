import React, { Component }  from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from "react-router-dom";

class CardReview extends Component {

    constructor(props){
        super(props);
        this.state = {
            item: props.item,
            key: props.key
        }
    }
    
    goToReviews = (event, value) => {
        this.props.history.push("/review/" + this.state.item.id);
    };

    render() {
        return (
            <Card className="card">
                <CardActionArea>
                    <CardMedia
                        className="card-media"
                        image="https://untappedcities-wpengine.netdna-ssl.com/wp-content/uploads/2014/02/Combination-Coffee-Shops-Strategist-Cafe-Cobble-Hill-Brooklyn-NYC1.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.state.item.name}
                        </Typography>
                        <Typography component="p">
                            City: {this.state.item.city}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={this.goToReviews}>
                        Reviews
                    </Button>
                    <Button size="small" color="primary">
                        Add Review
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default withRouter(CardReview);
