import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Button, Grid, Tooltip, Typography} from '@material-ui/core'
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import {ImageWithButtonOverlayAligmentEnum} from "../image-with-button-overlay/ImageWithButtonOverlayAligmentEnum";
import {v4 as uuidv4} from "uuid";
import MackenziesMindTheme, {raleway} from "../../theme/MackenziesMindTheme";
import PageContext from "../page-context/PageContext";
import {MmGalleryItemNoRefType} from "../BlockContentTypes";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import YoutubePlayer from "./YoutubePlayer";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    galleryItem: MmGalleryItemNoRefType
    source?: string
}

const MmGalleryItem: FunctionComponent<IProps> = (props: IProps) => {
    const pageContext = useContext(PageContext)
    const mediaQueriesContext = useContext(MediaQueriesContext)


    return (
        <Grid key={uuidv4()} container item xs={props.galleryItem.isFeatured ? 12 :8} sm={props.galleryItem.isFeatured ? 12 :8} md={props.galleryItem.isFeatured ? 12 : 6}
              lg={props.galleryItem.isFeatured ? 12 : 4}
              style={{marginBottom: MackenziesMindTheme.spacing(4)}}>
            <Grid container item direction='column' justifyContent='space-between' alignContent='center'
                  alignItems='center'>
                <Grid container item direction={"column"}>
                    {!(props.galleryItem.youtubeLink && props.galleryItem.youtubeLink.length > 0) ?
                        <Grid item container>
                            <ImageWIthButtonOverlay
                                // source={props.galleryItem?.slug.current}
                                // hideCtaButton={prop.hideCtaButton}
                                tooltip={'Click to Learn More'}
                                buttonAlignment={mediaQueriesContext.mdDown ? ImageWithButtonOverlayAligmentEnum.CENTER : ImageWithButtonOverlayAligmentEnum.RIGHT}
                                imageAltText={props.galleryItem?.imageSrcAltText}
                                variant='contained'
                                imageSrc={props.galleryItem?.imageSrc} height={352}
                                // ctaButtonLink={!props.hideCtaButton ? props.service.ctaButtonLink : undefined}
                            />
                        </Grid> : <Grid container item justifyContent='center'>
                            {
                                props.galleryItem?.youtubeLink && !props.galleryItem.youtubeLink.includes("http") ?
                                    <Grid item container justifyContent='center'>
                                        <YoutubePlayer youtubeId={props.galleryItem?.youtubeLink}/>
                                    </Grid> :
                                    <Grid item container justifyContent='center'><ImageWIthButtonOverlay
                                        isContain
                                        learnMoreLink={props.galleryItem.youtubeLink}
                                        // source={props.galleryItem?.slug.current}
                                        // hideCtaButton={prop.hideCtaButton}
                                        tooltip={''}
                                        // buttonAlignment={mediaQueriesContext.mdDown ? ImageWithButtonOverlayAligmentEnum.CENTER : ImageWithButtonOverlayAligmentEnum.RIGHT}
                                        imageAltText={props.galleryItem?.imageSrcAltText}
                                        variant='contained'
                                        imageSrc={props.galleryItem?.imageSrc} height={150}
                                        // ctaButtonLink={!props.hideCtaButton ? props.service.ctaButtonLink : undefined}
                                    />
                                    </Grid>
                            }
                        </Grid>
                    }
                    <Grid item>
                        <Typography variant='body2' align='center' style={{...raleway}}>{props.galleryItem.contentTitle}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1' align='center' style={{...raleway}}>{props.galleryItem.contentType}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>)
}

export default MmGalleryItem