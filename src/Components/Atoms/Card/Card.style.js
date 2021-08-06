import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    flexWrap: "wrap",
        flexDirection: 'row',
        width: '22em',
      height: '18em',
      marginBottom: '3em',
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(10),
        height: theme.spacing(16),
      },
     
    },

    title: {
        fontSize: '1.5em',
        color: 'grey',
        width: '13em',
    },
    titles: {
        marginBottom: '3em',
        fontSize: '1em',
        fontWeight: 600,
        color: '#ffbc8b',
    },

  container: {
    display: 'inlineGrid',
    width: "17em",
    marginLeft: '3em',  
    },

    updateButton: {
      backgroundColor: '#ffbc8b',
      textTransform: 'none',
      '&: hover':{
        backgroundColor:'#ffbc8b',
      },
  },
  cardContainer: {
    display: 'grid',
    justifyContent: 'space-between',
    maxWidth:"98%",
    marginLeft:"7em",
    gridTemplateColumns: "1fr 1fr 1fr",
},

shoppingCart:{
marginLeft: "5em",
},

cartButton:{
  marginLeft:'7em',
  marginBottom: '1em'
},

cartBtn:{
  backgroundColor: '#ffbc8b',
},

backBtn:{
  backgroundColor: '#ffbc8b',
  marginLeft:'8em',
  marginBottom:'3em',
}



}));
  
export default useStyles