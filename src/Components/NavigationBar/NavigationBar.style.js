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
}
  

  }));
  
  export default useStyles