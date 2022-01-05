import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { useStoreActions } from 'easy-peasy';


export const MessageText = ({ message }) => {
  const [open, setOpen] = useState(false);
  const hideMessage = useStoreActions((actions) => actions.hideMessage);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    hideMessage();
  }

  useEffect(()=>{
    if(message){
      setOpen(true);
    }
  },[open,message])


  const action = (
      <Button color="secondary" size="small" onClick={handleClose}>
        OK
      </Button>
  );

  return (message ?
      <Snackbar
        sx={{ width: '100%' }}
        open={open}
        autoHideDuration={60000}
        onClose={handleClose}
        message={message}
        action={action}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    : null);
}