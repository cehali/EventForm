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
import {  } from "../action/postAction";


class EventFormComponent extends React.Component {


    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    componentWillMount(){
    }

    render() {
        const { crr_date } = this.props;

        return(
            <Card>
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
                            value={this.props.lastname}
                            onChange={this.handleChange('lastname')}
                            margin="normal"
                        />
                        <TextField
                            id="email"
                            label="Email"
                            value={this.props.email}
                            onChange={this.handleChange('email')}
                            margin="normal"
                        />
                        <TextField
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue={crr_date}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary">Save</Button>
                </CardActions>
            </Card>
        );
    }
}

EventFormComponent.propTypes = {
    crr_date: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {crr_date: state.crr_date}
};

export default connect(mapStateToProps, {  })(EventFormComponent);