import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Button, Grid, Link} from '@material-ui/core'
import appleMusicBadge from "../../assets/outlet-badges/Apple-Music-Logo.png";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    contentLink:string
}

const AppleMusicBadgeButton: FunctionComponent<IProps> = (props: IProps) => {


    return (<Button
        href={props.contentLink}><img
    />
        <img style={{maxWidth: "100%",}} src={appleMusicBadge}/>
    </Button>)
}

export default AppleMusicBadgeButton