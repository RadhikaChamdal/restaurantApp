import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    loginPage: {
        backgroundColor: '#ffbc8b',
        borderColor: '#ffbc8b',
        height: '100%',
        width: '100%',
        textTransform: 'none',
        fontSize: '1em',
        color: 'white',

    },

    loginContainer:{
        justifyContent:'center',
        textAlign:'center',
        marginTop: '13em'
    },

   loginHeader:{
       fontSize: '3em',

   }, 
    loginButton:{
        backgroundColor: '#ffbc8b',
        textTransform: 'none', 
        color: 'white',
        fontWeight: 'bold',
        width: "10em",
        height:'4em',
        borderRadius: '3px',
        fontSize: '1em',
    },
    logOutButton:{
        backgroundColor: '#ffbc8b',
        textTransform: 'none', 
        color: 'white',
        width: "8em",
        height:'4em',
        borderRadius: '3px',
        fontSize: '1em',
    },

    buttonContainer:{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4em',
    }

}))

export default useStyles