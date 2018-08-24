import React from 'react';
import 'typeface-roboto';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { fetchPosts } from "../action/postAction";


class EventFormComponent extends React.Component {

    date = new Date();

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    componentWillMount(){
        this.props.fetchPosts();
    }

    render() {
        return(
            <h3>{ this.props.newPost1 }</h3>

            /*<Card>
                <CardContent>
                    <Typography component="h2">Please provide following information</Typography>
                    <form noValidate>
                        <TextField
                            id="firstname"
                            label="First Name"
                            value={this.props.firstname}
                            onChange={this.handleChange('firstname')}
                            margin="normal"
                        />
                        <TextField
                            id="lastname"
                            label="Last Name"
                            value={this.props.firstname}
                            onChange={this.handleChange('lastname')}
                            margin="normal"
                        />
                        <TextField
                            id="email"
                            label="Email"
                            value={this.props.firstname}
                            onChange={this.handleChange('email')}
                            margin="normal"
                        />
                        <TextField
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue={this.date.getFullYear() + '-' + ('0' + (this.date.getMonth()+1)).slice(-2) +
                            '-' + ('0' + this.date.getDate()).slice(-2) }
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary">Save</Button>
                </CardActions>
            </Card>*/
        );
    }
}

EventFormComponent.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(EventFormComponent);