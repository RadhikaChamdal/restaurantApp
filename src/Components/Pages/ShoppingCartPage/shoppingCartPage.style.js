import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    image: {
        height: "50em",
        width: "100%",
    },

    text1: {
        color: 'black'
    },
  
btn: {
    position: "absolute",
    top: "58%",
    left: "24%",
    marginLeft: '20em',
    alignItems: 'center',
    justifyItems: 'center',
    display: 'flex',
   backgroundColor: "#ffbc8b",
    color: "black",
    fontSize: "16px",
     padding: "12px 24px",
     cursor: "pointer",

  },
  
  text: {
    position: "absolute",
    top: "37%",
    left: "14%",
      marginLeft: '9em',
      color: "#ffbc8b",
      fontSize: '4em',
    
    },
    header: {
        textAlign: "center",
        fontSize: '3em',
        color:  "#ffbc8b",
    },
    
    formDialog: {
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        marginLeft: '13em',
    }, 
}));
  
export default useStyles