import { Avatar, Button, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const ChildModal = ({handleChildPopupClose,isChild}) => {
    const emails = ['username@gmail.com', 'user02@gmail.com'];
  return (
    <Dialog onClose={handleChildPopupClose} open={isChild}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disablePadding key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor:"blue[100]", color: "blue[600]" }}>
                  {/* <PersonIcon /> */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemAvatar>
              <Avatar>
                {/* <AddIcon /> */}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
        <Button onClick={handleChildPopupClose}>Close</Button>
      </List>
    </Dialog>
  )
}

export default ChildModal