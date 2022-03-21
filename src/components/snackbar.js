import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    direction: 'ltr',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  alertText: {
    fontFamily: 'Tajwal',
  }
}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar open={props.open} autoHideDuration={6000} onClose={props.close}>
        <Alert className={classes.alertText} onClose={props.close} severity="error">
          الرجاء ادخال الاسم لاضافته على البطاقة
        </Alert>
      </Snackbar>
    </div>
  );
}
