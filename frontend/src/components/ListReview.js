import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';
import Divider from '@material-ui/core/Divider';

class ListReview extends Component {

    constructor(props){
        super(props);
        this.state = {
            item: props.item,
            key: props.key
        }
    }

    render() {
        return (
            <div>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={this.state.item.comments}
                        secondary={
                            <React.Fragment>
                                <Typography component="span" className="typo" color="textPrimary">
                                    <Moment format="DD/MM/YYYY HH:mm">
                                        {this.state.item.date}
                                    </Moment>
                                </Typography>
                                {this.state.item.rating + " stars"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="middle" />
            </div>
        )
    }
}

export default ListReview;
