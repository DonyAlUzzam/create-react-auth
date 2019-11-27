 <div className="login-margin">
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            {/* <Typography><h1>{'Login'}</h1></Typography> */}
                        </Paper>
                        <Paper className={classes.paper}>
                            <div>
                                <TextField label="Username"
                                 value={this.state.username}
                                 className={classes.textField}
                                 onChange={this.handleChange('username')}/>
                                 <br/><br/>
                                <TextField
                                 label="Password"
                                 autoComplete="current-password"
                                 type={this.state.showPassword ? 'text' : 'password'}
                                 className={classes.textField}
                                 value={this.state.password}
                                 onChange={this.handleChange('password')}/>
                                 <br/><br/>
                                 <Button variant="contained"
                                  color="primary" className= {classes.button}
                                  onClick={(event) => {this.login()}}>Login</Button>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
                
                <h1>Login</h1>
            </div>


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    }
});