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


class EventFormComponent extends React.Component {

    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    date = new Date();

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    render() {
        return(
            <Card>
                <CardContent>
                    <Typography component="h2">Please provide following information</Typography>
                    <form noValidate>
                        <TextField
                            id="firstname"
                            label="First Name"
                            value={this.state.firstname}
                            onChange={this.handleChange('firstname')}
                            margin="normal"
                        />
                        <TextField
                            id="lastname"
                            label="Last Name"
                            value={this.state.lastname}
                            onChange={this.handleChange('lastname')}
                            margin="normal"
                        />
                        <TextField
                            id="email"
                            label="Email"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            margin="normal"
                        />
                        <TextField
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue={this.date.getFullYear()+'-'+this.date.getMonth()+'-'+this.date.getDate()}
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


export default EventFormComponent;