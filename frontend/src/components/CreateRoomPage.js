import React , { Component } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'


export default class CreateRoomPage extends Component {
    defaultVotes=2;

    constructor(props) {
        super(props);
        this.state ={
            guestCanPause: true,
            voteToSkip: this.defaultVotes
        };
        this.handelRoomButtonPressed = this.handelRoomButtonPressed.bind(this);
        this.handelVoteChanged=this.handelVoteChanged.bind(this);
        this.handelGuestCanPauseChange = this.handelGuestCanPauseChange.bind(this);
    } 

    handelVoteChanged(e){
        this.setState({
            voteToSkip: e.target.value
        });
    };

    handelGuestCanPauseChange(e){
        this.setState({
            guestCanPause: e.target.value === 'true' ? true :false,
        });
    };

    handelRoomButtonPressed(){
        const requestOptions={
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                votes_to_skip: this.state.voteToSkip,
                guest_can_pause: this.state.guestCanPause
            }),
        };
        fetch('/api/create-room/',requestOptions)
        .then((response) =>response.json())
        .then((data) => this.props.history.push("/room/"+ data.code));
    };
    
    render (){
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component='h4' variant='h4'>
                        Create A Room
                    </Typography>
                    </Grid>
                    <Grid item xs={12} align="center">
                    <FormControl component="fieldset">
                        <FormHelperText>
                            <div align="center">Guest control of playback set</div>
                        </FormHelperText>
                        <RadioGroup row defaultValue="true" onChange={this.handelGuestCanPauseChange}>
                            <FormControlLabel value="true" control={<Radio color="primary" />} label="Play/Pause" labelPlacement="bottom" />
                            <FormControlLabel value="false" control={<Radio color="secondary" />} label="No Control" labelPlacement="bottom" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl>
                        <TextField required={true} type="number" onChange={this.handelVoteChanged} defaultValue={this.defaultVotes} inputProps={{min:1,style:{textAlign:"center"}}} />
                        <FormHelperText>
                            <div align="center">
                                Votes required to skip song
                            </div>
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="secondary" variant="contained" onClick={this.handelRoomButtonPressed}>Create A Room</Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="primary" variant="contained" to="/" component={Link} >Back</Button>
                </Grid>
                </Grid>
            );
    }
}