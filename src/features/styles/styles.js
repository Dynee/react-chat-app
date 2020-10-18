import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: "500px"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    conversations: {
      height: "500px",
    },
    chatWindow: {
      height: "500px"
    },
    messagesList: {
      height: "500px",
      overflow: 'auto'
    },
}));