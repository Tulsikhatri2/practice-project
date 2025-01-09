"use client"

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ChildModal from "./ChildModal"

const ParentModal = ({ handleClose, isParent,setIsParent }) => {
  const [isChild, setIsChild] = useState(false);
  const [closeParentAfterChildOpen, setCloseParentAfterChildOpen] = useState(false);

  useEffect(() => {
    if (isChild) {
      setCloseParentAfterChildOpen(true);
    }
  }, [isChild]);

  const handleChildPopupOpen = () => {
    setIsChild(true);
    // handleClose()
  };

  const handleChildPopupClose = () => {
    setIsChild(false);
    
  };

  const handleParentClose = () => {
    if (!closeParentAfterChildOpen) {
      handleClose();
    }
  };
  return (
    <>
      <Dialog
        open={isParent && !closeParentAfterChildOpen}
        onClose={handleParentClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleChildPopupOpen();
              // handleClose();
            }}
          >
            Details
          </Button>
          <Button onClick={handleParentClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      
      {isChild && (
        <ChildModal
          isChild={isChild}
          handleChildPopupClose={handleChildPopupClose}
          
        />
      )}
    </>
  );
};

export default ParentModal;
