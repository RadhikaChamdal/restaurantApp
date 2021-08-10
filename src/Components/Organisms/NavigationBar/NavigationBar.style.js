import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    navigationText: {
    color:'white',
    textTransform: 'none',
    fontSize: '1.3em',
    textDecoration: 'none'


  },
  navigationText2:{
    color:'white',
    textTransform: 'none',
    fontSize: '1.3em',
    marginLeft:'2em',
    textDecoration: 'none'

  },

  button:{
      color:"white",
      fontSize: '1em',
      textTransform: 'none', 
      backgroundColor: '#ffbc8b',
      textDecoration: 'none',
      underline: 'none',
  },
  button2 :{
    color:"white",
    fontSize: '1em',
    textTransform: 'none', 
    backgroundColor: '#ffbc8b',
    textDecoration: 'none',
    underline: 'none',
    marginLeft: '3em',
    width: '9em',
    marginTop: '0em',
},

button3 :{
  color:"white",
  fontSize: '1em',
  textTransform: 'none', 
  backgroundColor: '#ffbc8b',
  textDecoration: 'none',
  underline: 'none',
  marginLeft: '3em',
  width: '9em',
  marginTop: '0em',
},
  
loginButton:{
  marginRight: '1em',
  marginLeft: '26em',
  marginTop: '1em'
},

buttonContainer:{
  marginLeft: '-4em',
  marginTop: '0.3em'
}

  }));
  
  export default useStyles