import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Button, ButtonGroup, Grid, IconButton, Typography, useTheme} from '@material-ui/core'
import {
    MmGalleryItemNoRefType,
    MmGallerySectionType,
    ThwServiceItemNoRefType,
    ThwServicesSectionType
} from "../BlockContentTypes";
import MmGalleryItem from "./MmGalleryItem";
import PageContext from "../page-context/PageContext";
import {draper, raleway} from "../../theme/MackenziesMindTheme";
import {Image, Videocam} from "@material-ui/icons";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(6),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(5, 2, 5)
        },
        minHeight: 'max-content',
        backgroundColor: '#f6f6f6'
    },
    contentBottom: {
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: '20px'
    }
}))


interface IProps {
    sectionData: MmGallerySectionType
}

const MmGallerySection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles()

    const theme = useTheme()
    const [isImageView, setIsImageView] = React.useState<boolean>(false)
    return (

        <Grid container item className={classes.root} xs={12} direction='column' spacing={2} alignItems='center'>
            <Grid container item>
                <Grid item container>
                    <Typography variant='body1'
                                style={{...raleway}}>{props.sectionData.contentPreTitle} {isImageView?'Image':"Video"}</Typography>
                </Grid>
                <Grid item container>
                    <Grid item>
                        <Typography style={{...draper}} color='secondary' variant='h4' align='center'
                                    display='inline'>{props.sectionData.contentTitle}</Typography>
                    </Grid>
                    {/*<Grid item xs={4} container alignItems='center' justifyContent='flex-end'>*/}
                    {/*    <Button color='primary' onClick={() => {*/}
                    {/*        setIsImageView(state => !state)*/}
                    {/*    }}>*/}
                    {/*        <Grid item container alignItems='stretch' spacing={1}*/}
                    {/*              style={{color: theme.palette.text.primary}}  direction='column'>*/}
                    {/*            <Grid item>*/}
                    {/*                <Image color={isImageView ? 'secondary' : 'inherit'}/>*/}
                    {/*            </Grid>*/}
                    {/*            <Grid item>*/}
                    {/*                <Typography style={{...raleway}} color={isImageView ? 'secondary' : 'inherit'} variant='subtitle1'>Images</Typography>*/}
                    {/*            </Grid>*/}
                    {/*        </Grid>*/}
                    {/*    </Button>*/}
                    {/*    <Button color='primary' onClick={() => {*/}
                    {/*        setIsImageView(state => !state)*/}

                    {/*    }}>*/}
                    {/*        <Grid item container alignItems='stretch' spacing={1}*/}
                    {/*              style={{color: theme.palette.text.primary}} direction='column'>*/}
                    {/*            <Grid item>*/}
                    {/*                <Videocam*/}
                    {/*                    color={!isImageView ? 'secondary' : 'inherit'}/>*/}
                    {/*            </Grid>*/}
                    {/*            <Grid item>*/}
                    {/*                <Typography style={{...raleway}} color={!isImageView ? 'secondary' : 'inherit'} variant='subtitle1'>Videos</Typography>*/}
                    {/*            </Grid>*/}
                    {/*        </Grid>*/}
                    {/*    </Button>*/}
                    {/*</Grid>*/}
                </Grid>
            </Grid>
            <Grid item container>
                {props.sectionData?.contentTexts?.map((segment: string, index: number) => (<Grid item key={index}>
                    <Typography variant='body1' gutterBottom>{segment}</Typography>
                </Grid>))}
            </Grid>
            {
                <Grid item container spacing={4} justifyContent='center' alignItems={"stretch"}>
                    {props.sectionData.galleryList?.filter((galleryListItem)=>{

                        const isImage = !(galleryListItem.youtubeLink && galleryListItem.youtubeLink.length > 0) && !(galleryListItem.videoFile)

                        if(isImage && isImageView){
                            return true
                        } else if(!isImage && !isImageView){
                            return true
                        }
                        return  false
                            }).map((galleryItem: MmGalleryItemNoRefType, index: number) => {
                        return <MmGalleryItem key={index} galleryItem={galleryItem}/>
                    })}
                </Grid>
            }
        </Grid>
    )
}

export default MmGallerySection