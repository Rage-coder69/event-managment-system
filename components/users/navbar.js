import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Image from "next/image";
import logo from '../../public/assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "next/link";
import DropDown from "./dropdown";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from "@mui/material/Typography";
import { motion } from 'framer-motion';
/*import { useInView } from 'react-intersection-observer';*/


const Navbar = ({ session, status }) => {
    const [state, setState] = useState(false);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const links = [
        {
            href : "/",
            text : "Home"
        },
        {
            href : "/about",
            text : "About Us"
        },
        {
            href : "/venues",
            text : "Venue"
        },
        {
            href : "/foods",
            text : "Foods"
        },
        {
            href : "/equipments",
            text : "Equipments"
        },
    ]

    const toggleDrawer = (open) => {
        setState(open);
    };

    const MobileNavBar = () => (
        <Box component={"div"} sx={{ width: "100%",}} role="presentation" >
            <List>
                {links.map((link, i) => (
                    <ListItemButton key={i} onClick={ () => toggleDrawer(false) }>
                        <Link href={link.href}><Typography variant={"subtitle1"} color={"primary"} gutterBottom>{link.text}</Typography></Link>
                    </ListItemButton>
                ))}
                {status === "unauthenticated" && <ListItemButton onClick={ () => toggleDrawer(false) }>
                    <Link href={"/login"}><Typography variant={"subtitle1"} color={"primary"}>Login</Typography></Link>
                </ListItemButton>}
                {status === "authenticated" && <ListItemButton>
                    <DropDown toggleDrawer={toggleDrawer}/>
                </ListItemButton>}
            </List>
        </Box>
    );


    return (
        <div>
            <AppBar position="sticky" elevation={1} color={"secondary"}>
                <Toolbar sx={{ display : "flex",flexDirection : "row", justifyContent : "space-between", alignItems : "center", paddingY : 2 }}>
                    <Box sx={{ cursor : "pointer" }} component={motion.div} initial={{ x : '-100vw' }} animate={{ x : 0 }} transition={{ delay : 0.6, type : 'tween', duration : 1  }}>
                        <Link href={"/"}><Image src={logo} width={"85rem"} height={"85rem"} alt={"logo"}/></Link>
                    </Box>
                    { !matches && <Box component={motion.div}  sx={{display: "flex", flexDirection: "row"}} initial={{ x : '100vw' }} animate={{ x : 0 }} transition={{ delay : 0.6, type : 'tween', duration : 1  }}>
                            {
                                links.map((link, i) => (<Link href={link.href} key={i}><Typography sx={{ cursor : "pointer", borderRadius : 1, marginX : 1, paddingX: 3, paddingY : 1, fontSize: "20px", ':hover' : { backgroundColor : "#f08a5d", color : "#fff" }}} color={"primary"}>{link.text}</Typography></Link>))
                            }
                            {status === "unauthenticated" && <Link href={"/login"}><Typography sx={{cursor : "pointer", borderRadius : 1, marginX : 1, paddingX: 3, paddingY : 1, fontSize: "20px", ':hover' : { backgroundColor : "#f08a5d", color : "#fff" }}} color={"primary"}>Login</Typography></Link>}
                            {status === "authenticated" && <DropDown/>}
                        </Box>}
                    { matches &&  <motion.div initial={{ x : '100vw' }} animate={{ x : 0 }} transition={{ delay : 0.4, type : 'tween', duration : 1 }}><Button onClick={ () => toggleDrawer(true) }><MenuIcon color={"primary"} sx={{ fontSize : "3rem" }}/></Button>
                        <Drawer anchor={"top"} open={state} onClose={ () => toggleDrawer(false) }><MobileNavBar/></Drawer>
                    </motion.div>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;