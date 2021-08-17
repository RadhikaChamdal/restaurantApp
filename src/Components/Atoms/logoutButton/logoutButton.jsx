import React from 'react';
import {useAuth0} from '@auth0/auth0-react'
import Button from "@material-ui/core/Button";
import useStyles from './logoutButton.style'


const LogOut = () => {
    const {logout} = useAuth0();
    const classes = useStyles()
    return(
        <Button className={classes.logOutButton} onClick={logout}>Logout</Button>
    )
}

export default LogOut