import React, {FunctionComponent, useContext, useState} from 'react'
import {Button, Grid, List, ListItem, Typography} from '@material-ui/core'
import {v4 as uuidv4} from 'uuid'
import {SanityMenuGroup, SanityMenuItem} from "../../../common/sanityIo/Types";
import MackenziesMindTheme, {raleway} from "../../../theme/MackenziesMindTheme";
import ModalContext from "../../snackbar-context/ModalContext";


interface SubMenuProps {
    subMenu: SanityMenuGroup
    handleClose?: (e: any) => void
}

const SubMenu: FunctionComponent<SubMenuProps> = (props) => {
    const modalContext = useContext(ModalContext)
    return (<Grid item container key={uuidv4()}>
        <List style={{padding: 0}}>
            {
                props.subMenu?.links?.map((theLink: SanityMenuItem, index: number) => {
                    return <ListItem onClick={theLink.url && theLink.url.length > 0 ? undefined : props.handleClose}
                                     key={uuidv4() + index} button style={{height: "48px",padding: 0}}>
                        <Button variant='text' href={((theLink.url && (theLink.url.length > 0) && theLink.url)) ? theLink.url:undefined}
                                onClick={theLink.isModalButton?()=>{
                                    if(theLink.isModalButton) {
                                        modalContext.openModal && modalContext.openModal(theLink.modalRef)
                                    }
                                }:undefined}
                                style={{margin: 0, height: "100%", width: "100%", borderRadius:0, padding: MackenziesMindTheme.spacing(0,3,0)}}>
                            <Grid container>

                                <Typography variant='body1' style={{
                                    color: "#1a1a1a",
                                    fontSize: "18px",
                                        ...raleway
                                }}>{theLink.displayText}</Typography>
                            </Grid>
                        </Button>
                    </ListItem>
                })
            }
        </List>
    </Grid>)
}

export default SubMenu