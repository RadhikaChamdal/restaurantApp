import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#ffbc8b',
        borderColor: '#ffbc8b',
        height: '4em',
        width: '22em',
        marginLeft: '50em',

    },

    buttonPos: {
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
        left: '40%',
        position: 'left',
    }

}))

export default useStyles