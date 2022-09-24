import Alert from "@mui/material/Alert/Alert";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import React from "react";


const AlertMassage= ({ message }: {message: string}) => {
    const [open, setOpen] = React.useState(true);
  
    return (
      <div>
         <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={2000}
      >
          <Alert  severity="error" sx={{ width: '100%' }}> {message} </Alert>
      </Snackbar>
      </div>
    );
  }

  export default AlertMassage;