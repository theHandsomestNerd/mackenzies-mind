import React, {FunctionComponent, useContext, useState} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Button, createStyles, Divider, Drawer, Grid, List, ListItem, ListItemText, Typography} from '@material-ui/core'
import {Close, ExpandLess, ExpandMore, Menu} from "@material-ui/icons";
import MackenziesMindTheme, {rainbow, raleway} from "../../../theme/MackenziesMindTheme";
import MainMenuSubMenu from "./MainMenuSubMenu";
import {MainMenuAnchorType, SanityMenuContainer, SanityMenuGroup, SanityMenuItem} from "../../../common/sanityIo/Types";
import ModalContext from "../../snackbar-context/ModalContext";
import Logo from "../../transform-hw/logo/Logo";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listItem: {
            "&.MuiListItem-gutters": {
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            }
        }
    }),
);

interface MainMenuProps {
    menu: SanityMenuContainer
    anchor: MainMenuAnchorType
}

const MainMenu: FunctionComponent<MainMenuProps> = ({menu, anchor}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>()
    const toggleDrawer = (anchor: MainMenuAnchorType, open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsDrawerOpen(open);
    };

    const modalContext = useContext(ModalContext)
    const classes = useStyles(MackenziesMindTheme)
    const list = (anchor: MainMenuAnchorType) => (
        <Grid item
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
        >
            <Divider/>
            {menu?.subMenus?.map((subMenu: any, index: number) => {
                switch (subMenu._type) {
                    case 'menuGroup':
                        console.log(" menugroup", subMenu)
                        const menuGroup: SanityMenuGroup = subMenu
                        return <MainMenuSubMenu key={index} menuGroup={menuGroup}/>
                    case 'menuItem':
                    default:
                        const menuItem: SanityMenuItem = subMenu
                        return <List style={{padding: 0}} key={menuItem.displayText}>
                            {menuItem.displayText}
                            <ListItem href={menuItem.url ?? ""} className={classes.listItem} button>
                                <Button variant='text' href={menuItem.isModalButton?undefined:menuItem.url}
                                        onClick={menuItem.isModalButton?()=>{
                                            console.log()
                                            if(menuItem.isModalButton) {
                                                modalContext.openModal && modalContext.openModal(menuItem.modalRef)
                                            }
                                        }:undefined}
                                        style={{
                                    paddingTop: MackenziesMindTheme.spacing(2.25),
                                    paddingLeft: MackenziesMindTheme.spacing(2),
                                    paddingBottom: MackenziesMindTheme.spacing(2.25),
                                    height: "100%",
                                    margin: 0,
                                            color: "white",
                                                ...rainbow,
                                            fontSize: 50,
                                }} fullWidth>
                                    {/*<ListItemText style={{color:"white"}} secondary={menuItem.displayText}/>*/}
                                    <Grid container alignContent='center' alignItems='center'>
                                        <Typography style={{...rainbow, fontSize: 50}}>{menuItem.displayText}</Typography>
                                    </Grid>
                                </Button>

                            </ListItem>
                            <Divider/>
                        </List>
                }

            })}
        </Grid>
    );

    return (<Grid item>
            <Button onClick={toggleDrawer(anchor, true)}>
                <Menu style={{color: "#383838"}}
                      fontSize='large'/>
            </Button>
            <Drawer anchor={anchor} open={isDrawerOpen}
                    onClose={toggleDrawer(anchor, false)}
            >
                <Grid container alignItems='center' justifyContent='space-between'
                      style={{
                          paddingLeft: MackenziesMindTheme.spacing(4),
                          paddingRight: MackenziesMindTheme.spacing(6),
                      }}>

                    <Grid item xs={3}>

                        {menu.logoImageSrc && <Logo logoImageSrc={menu.logoImageSrc}/>}
                    </Grid>
                    <Grid item xs={1}><Button onClick={() => {
                        setIsDrawerOpen(false)
                    }}><Close color='primary' fontSize='large'/></Button></Grid>
                </Grid>
                {list(anchor)}
            </Drawer></Grid>
    )
}

export default MainMenu