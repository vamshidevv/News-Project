// components/SideNavBar.js
import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const SideNavBar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem
          button
          component={Link}
          to="/dashboard"
          style={{ borderBottom: "1px solid grey ", marginBottom: "1rem" }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button component={Link} to="/settings">
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="Create reporter / Subadmin" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideNavBar;
