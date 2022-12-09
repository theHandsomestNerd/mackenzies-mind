import React, {FunctionComponent, useContext} from 'react'
import {Button, Typography} from '@material-ui/core'
import MackenziesMindTheme, {COLORS, raleway} from "../../theme/MackenziesMindTheme";
import {SanityMenuItem} from "../../common/sanityIo/Types";
import {makeStyles, Theme} from "@material-ui/core/styles";
import ModalContext from "../snackbar-context/ModalContext";

const useStyles = makeStyles((theme: Theme) => ({
    hover: {
        "&:hover":{
            backgroundColor: 'rgba(16,43,136, 0.04)',
            "& .MuiTypography-root": {
            color: "#2828d3"
            }
        }
    }
}))

interface HeaderMenuItemButtonProps {
    menuItem: SanityMenuItem
}

const HeaderMenuItemButton: FunctionComponent<HeaderMenuItemButtonProps> = ({menuItem}) => {
    const classes = useStyles(MackenziesMindTheme)

    const modalContext = useContext(ModalContext)
    return (<Button href={menuItem.url ?? ""}
                    color={menuItem.isOutlinedButton || menuItem.isContainedButton ? 'secondary' : "primary"}
                    style={{
                        borderRadius: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? MackenziesMindTheme.shape.borderRadius : 0,
                        paddingLeft: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? MackenziesMindTheme.spacing(3.25) : MackenziesMindTheme.spacing(1),
                        paddingRight: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? MackenziesMindTheme.spacing(3.25) : MackenziesMindTheme.spacing(1),
                        marginTop: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? MackenziesMindTheme.spacing(3) : 0,
                        marginBottom: (menuItem.isOutlinedButton || menuItem.isContainedButton) ? MackenziesMindTheme.spacing(2) : 0,
                        height: menuItem.isOutlinedButton || menuItem.isContainedButton ? "48px" : "100%",
                    }}
                    className={classes.hover}
                    onClick={ (e:any)=>{
                        if(menuItem.isModalButton) {
                            modalContext.openModal && modalContext.openModal(menuItem.modalRef)
                        }
                    }}
                    variant={menuItem.isContainedButton ? 'contained' : (menuItem.isOutlinedButton ? 'outlined' : 'text')}>
        <Typography noWrap
                    color={menuItem.isOutlinedButton || menuItem.isContainedButton ? 'textSecondary' : 'textPrimary'}
                    variant={menuItem.isOutlinedButton || menuItem.isContainedButton ? "button" : 'h6'}
                    style={{...raleway,fontWeight: 800}}>{menuItem.displayText}</Typography>
    </Button>)
}

export default HeaderMenuItemButton