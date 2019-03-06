import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Field, reduxForm } from 'redux-form'
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import withStyles from '@material-ui/core/styles/withStyles';
import Header from '../App/Header';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});
const inputField = ({
  input,
  label,
  id,
  meta: { touched, error },
  ...custom }) => {
  return (<TextField
    id={id}
    label={label}
    value={input.value}
    onChange={input.onChange}
    margin="normal"
    {...custom}
  />)
}
const submit = (value) => {
  console.log(value)
}
class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showPassword: false }
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this)
  }

  handleClickShowPassword() {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props
    return (
      <div className="app login-form">
        <Header />
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
        </Typography>
            <form className={classes.form} onSubmit={this.props.handleSubmit(submit)}>
              <FormControl margin="normal" required fullWidth>
                <Field label="Username*" name="username" component={inputField} type="email" />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <Field label="Password*" InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }} id="filled-adornment-password" name="password" component={inputField} type="password" />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign in
          </Button>
            </form>
          </Paper>
        </main>
      </div>

    );
  }

}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

// const LoginForm = reduxForm({
//   form: 'LoginForm'
// })(LoginFormComponent)

export default (withStyles(styles)
  (reduxForm({
    form: 'LoginForm'
  })(LoginForm)))