import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Chip, Grid, Typography} from '@material-ui/core'
import {urlFor} from '../block-content-ui/static-pages/cmsStaticPagesClient'
import {
    AboutArtistSectionType,
    ArtistAtAGlanceType, MmGalleryItemNoRefType, MmSongAdSectionType,
    ProprietorAtAGlanceType,
    ThwAboutProprietorSectionType
} from "../BlockContentTypes";
import MackenziesMindTheme, {raleway} from "../../theme/MackenziesMindTheme";
import ImageWIthButtonOverlay from "../image-with-button-overlay/ImageWithButtonOverlay";
import LoadingButton from "../loading-button/LoadingButton";
import ResponsiveBullet from "../ResponsiveBullet";
import {FiberManualRecord} from "@material-ui/icons";
import ColoredPng from "../colored-png/ColoredPng";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import firebaseAnalyticsClient from "../../utils/firebase/FirebaseAnalyticsClient";
import PageContext from "../page-context/PageContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        minHeight: '521px',
        // width: "100vw",
        // backgroundColor: theme.palette.secondary.main,
        // paddingLeft: -theme.spacing(-5),
    },
    contentBullets: {
        // border: "1px solid black"
        marginBottom: theme.spacing(5)
    }
}))


interface IProps {
    sectionData: AboutArtistSectionType
}

const ArtistAtAGlance = (props: { sectionData: ArtistAtAGlanceType, source: string, genre: string }) => {
    const mediaQueriesContext = useContext(MediaQueriesContext)
    const pageContext = useContext(PageContext)
    return <Grid item container
                 justifyContent='center'
                 style={{
                     // backgroundColor: MackenziesMindTheme.palette.secondary.dark,
                     // border: mediaQueriesContext.smDown ? "0px solid transparent" : "1px solid white",
                     // margin: mediaQueriesContext.smDown ? MackenziesMindTheme.spacing(0, 0, 0, 0) : MackenziesMindTheme.spacing(2, 0, 0, 0),
                     // padding: MackenziesMindTheme.spacing(2, 0, mediaQueriesContext.smDown ? 6 : 2, 0)
                 }}
        // spacing={6}
                 xs={12}
    >
        <Grid container item xs={11} direction='column'>

        </Grid>
        {/*<Grid item container justifyContent='center'>*/}
        {/*    <LoadingButton*/}
        {/*        clickHandler={(e: any) => {*/}
        {/*            firebaseAnalyticsClient.ctaClick(props.source, props.sectionData?.ctaButtonText, pageContext.analyticsId,)*/}
        {/*        }}*/}
        {/*        href={props.sectionData?.ctaButtonLink}*/}
        {/*        color={"primary"}*/}
        {/*        variant='outlined'>*/}
        {/*        {props.sectionData?.ctaButtonText}*/}
        {/*    </LoadingButton>*/}
        {/*</Grid>*/}
    </Grid>
}


const AboutTheArtistSection: FunctionComponent<IProps> = (props) => {
    const classes = useStyles(MackenziesMindTheme)
    const mediaQueriesContext = useContext(MediaQueriesContext)

    return (
        <Grid container item className={classes.root} xs={mediaQueriesContext.xsOnly ? 12 : 11}
              style={mediaQueriesContext.xsOnly ? {paddingBottom: 0, paddingTop: 0} : {
                  paddingBottom: MackenziesMindTheme.spacing(10),
                  paddingTop: MackenziesMindTheme.spacing(10),
              }}>
            <Grid container item justifyContent='space-around'
            >
                <Grid
                    item
                    xs={12}
                    md={5}
                    lg={4}
                    container
                    justifyContent='center'
                    alignContent='flex-start'
                    alignItems='flex-start'
                    style={{
                        minWidth: "min-content"
                    }}
                >
                    <Grid item style={{
                        overflow: "hidden",
                        position: "relative",
                        backgroundColor: "white",
                        marginBottom: MackenziesMindTheme.spacing(3)
                    }} container
                          sm={8} md={12}
                          justifyContent='center'>
                        <ImageWIthButtonOverlay variant='contained' ctaButtonText={props.sectionData?.ctaButtonText}
                                                ctaButtonLink={props.sectionData?.ctaButtonLink}
                            // toColor={"rgb(19,35,35)"}
                                                imageSrc={props.sectionData?.artistImage} height={545}
                            // direction={CssFadeToColorDirectionEnum.RIGHT}
                                                isResponsive
                        />
                    </Grid>
                    {!mediaQueriesContext.smDown && <Grid container item><ArtistAtAGlance source={'about-the-artist'}
                                                                                          genre={props.sectionData.artistGenre}
                                                                                          sectionData={props.sectionData.artistDetails}/></Grid>}
                </Grid>
                <Grid item xs={12} md={6} lg={7} container direction='column' alignContent='space-between' spacing={2}>
                    <Grid container item style={{minHeight: "549px"}} direction='column' spacing={4}>
                        <Grid container item direction='column'>
                            <Grid item container>
                                <Grid item>

                                    <Typography variant='h4'
                                                color='textSecondary'
                                                noWrap
                                                style={{fontWeight: 550}}>{props.sectionData?.artistName}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item>

                                <Typography variant='subtitle1' color='primary'
                                >{props.sectionData?.artistGenre}</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container spacing={2} justifyContent='flex-end'>
                            <Grid item container>
                                <Typography variant='body2' color='textSecondary'
                                >{props.sectionData?.contentTitle}</Typography>

                            </Grid>
                            {props.sectionData?.contentText.map((text, index: number) => {
                                return <Grid item container key={index}>
                                    <Typography variant='body1'
                                                color='textSecondary' style={{...raleway}}
                                                gutterBottom>{text}</Typography>
                                </Grid>
                            })}
                            <Grid container item>
                                    <Grid item xs={5}>
                                        <Typography variant='body1' color='textSecondary'
                                                    style={{...raleway, fontWeight: "bold"}}>Discography:</Typography>
                                    </Grid>
                                    <Grid item>
                                        {props.sectionData?.artistDetails?.artistSongList?.map((song:MmSongAdSectionType) => (
                                            <Typography color='textSecondary' variant='body1'
                                                        style={{...raleway}}>{song.title}</Typography>))}
                                    </Grid>
                            </Grid>
                            <Grid container item>
                                <Grid item xs={5}>
                                    <Typography variant='body1' color='textSecondary'
                                                style={{...raleway, fontWeight: "bold"}}>Videography:</Typography>
                                </Grid>
                                <Grid item>
                                    {props.sectionData?.artistDetails?.videography?.map((song:MmGalleryItemNoRefType) => (
                                        <Typography color='textSecondary' variant='body1'
                                                    style={{...raleway}}>{song.contentTitle}</Typography>))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {
                    mediaQueriesContext.smDown &&
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={5}
                        lg={4}
                        container
                        justifyContent='center'
                        alignContent='flex-start'
                        alignItems='flex-start'
                        style={{
                            paddingTop: MackenziesMindTheme.spacing(3),
                            minWidth: "min-content"
                        }}
                    >

                        <ArtistAtAGlance genre={props.sectionData.artistGenre ?? ""} source={'about-the-artist'}
                                         sectionData={props.sectionData?.artistDetails}/>
                    </Grid>
                }
            </Grid>
        </Grid>
    )
}

export default AboutTheArtistSection