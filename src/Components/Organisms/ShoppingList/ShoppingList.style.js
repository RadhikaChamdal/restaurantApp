import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    listContainer: {
        borderColor: '#ffbc8b',
        height: '12em',
        width: '15em',
        textTransform: 'none',
        fontSize: '1em',
        marginRight: '9em', 
        float: 'right',

    },

    listItemContainer:{
        width:'15em',
        flexDirection:'column',
    },

    listItem:{
        textAlign: 'left',
        color:'#ffbc8b',
        width: '13em',
        marginRight: '-1em'
    },

    updateButtonContainer:{
        top:"80%",
        right: '-4em',
        position:'absolute',
    },

    



}))

export default useStyles