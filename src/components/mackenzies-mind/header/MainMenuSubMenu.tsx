import React, {FunctionComponent, useContext} from 'react'
import {
    Button,
    Collapse,
    createStyles,
    Divider, Grid,
    List,
    ListItem,
    ListItemText,
    MenuItemTypeMap,
    Typography
} from '@material-ui/core'
import {makeStyles, Theme} from "@material-ui/core/styles";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import MackenziesMindTheme, {rainbow} from "../../../theme/MackenziesMindTheme";
import {SanityMenuGroup} from "../../../common/sanityIo/Types";
import ModalContext from "../../snackbar-context/ModalContext";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        listItem: {
            "&.MuiListItem-gutters" :{
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0
            }
        }
    }),
);


interface MainMenuSubMenuProps {
    menuGroup: SanityMenuGroup
}

const MainMenuSubMenu: FunctionComponent<MainMenuSubMenuProps> = ({menuGroup}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = (e: any) => {
        e.stopPropagation()
        setOpen(!open);
    };

    const modalContext = useContext(ModalContext)
    return (
        <List
            style={{padding: 0}}
            key={menuGroup.menuGroupTitle}
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <ListItem button style={{
                paddingTop: MackenziesMindTheme.spacing(2.25),
                paddingBottom: MackenziesMindTheme.spacing(2.25),
                color: "white",
            }} onClick={handleClick}>
                <Grid container alignContent='center' alignItems='center' justifyContent='space-between'>
                <Typography style={{...rainbow, fontSize: 50}}>{menuGroup.menuGroupTitle}</Typography>
                {open ? <ExpandLess color='inherit'/> : <ExpandMore color='inherit'/>}

                </Grid>
                {/*<ListItemText style={{...rainbow}} primary={menuGroup.menuGroupTitle}/>*/}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        menuGroup.links?.map((menuLink: any, index: number) => (
                            <ListItem href={menuLink.url} key={index} button className={ classes.listItem} style={{

                            }}>
                                <Button variant='text' href={menuLink.url}
                                        onClick={menuLink.isModalButton?()=>{
                                            console.log()
                                            if(menuLink.isModalButton) {
                                                modalContext.openModal && modalContext.openModal(menuLink.modalRef)
                                            }
                                        }:undefined}
                                        style={{
                                paddingTop: MackenziesMindTheme.spacing(2.25),
                                paddingLeft: MackenziesMindTheme.spacing(6),
                                paddingBottom: MackenziesMindTheme.spacing(2.25),
                                    height: "100%",
                                    margin:0,color: "white"
                                }} fullWidth>
                                    <ListItemText>{<Typography align='left' color='inherit'>{menuLink.displayText}</Typography>}</ListItemText>
                                </Button>
                            </ListItem>
                        ))
                    }
                </List>
            </Collapse>
            <Divider/>
        </List>
    );
}

export default MainMenuSubMenu