import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material"
import { Checkbox, Collapse, FormControlLabel, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { useState } from "react";

export const Sidebar = () => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 250, bgcolor: '#e4edff' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Filters
                </ListSubheader>
            }
        >
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Ahuenost'" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} disableRipple>
                        <FormControlLabel control={<Checkbox />} label="Chuchut ahueni"/> 
                        <FormControlLabel control={<Checkbox />} label="Zaebis'"/> 
                    </ListItemButton>
                </List>
            </Collapse>
        </List>

    )
}