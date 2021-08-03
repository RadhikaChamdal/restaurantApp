import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#ffbc8b',
        borderColor: '#ffbc8b',
        height: '2em',
        width: '8em',
        textTransform: 'none',
        fontSize: '1em',
        color: 'white',

    },

    buttonPos: {
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
    }

}))

export default useStyles