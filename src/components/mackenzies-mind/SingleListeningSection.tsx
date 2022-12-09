import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Typography, useTheme} from '@material-ui/core'
import {urlFor} from '../block-content-ui/static-pages/cmsStaticPagesClient'
import {MmSongAdSectionType} from "../BlockContentTypes";
import clsx from "clsx";
import {draper, raleway} from "../../theme/MackenziesMindTheme";
import PageContext from "../page-context/PageContext";
import useCustomStyles from "./pages/Styles";
import AppleMusicBadgeButton from "./AppleMusicBadgeButton";
// @ts-ignore
import Embed from 'react-music-embed'
// import featuredAudio from "../../assets/music/i-dont-wanna-miss-you/I dont wanna miss you (Master) V3_03.wav";
import SuccintMusicPlayer from "./music-player/SuccintMusicPlayer";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";


interface IProps {
    sectionData: MmSongAdSectionType
}

interface CSSProps {
    heroBaseImageUrl: string,
    heroOverlay?: string | null
}

export const useStyles = makeStyles((theme: Theme) => ({
    marketingBackground: (props: CSSProps) => ({
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${props.heroBaseImageUrl}'), url('${props.heroOverlay}')`,
        backgroundSize: 'cover, contain',
        backgroundPosition: "right",
        // minHeight: '700px',
        backgroundColor: 'transparent',
        position: "relative",
        padding: theme.spacing(12,0,12,0),
    }),
    contentSection: {
        // minHeight: '510px',
        // marginTop: '16px',
        backgroundColor: 'transparent',
    },
    contentBullets: {
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        paddingLeft: '26px',
    }
}))

const SingleListeningSection: FunctionComponent<IProps> = (props) => {
    let classParameters: CSSProps = {
        heroBaseImageUrl: urlFor(props.sectionData.heroImage).url() ?? '',
    }

    if (props.sectionData.heroImageBackground) {
        classParameters = {
            ...classParameters,
            heroOverlay: urlFor(props.sectionData.heroImageBackground).url()
        }
    }

    const pageContext = useContext(PageContext)
    const [isPlaying, setIsPlaying] = React.useState<boolean>(false)
    const [playProgress, setPlayProgress] = React.useState<number>(0)

    const theme = useTheme()
    // React.useEffect(() => {
    //     console.log(Player.getWaveSurferInstance().isPlaying)
    //     setIsPlaying(Player.getWaveSurferInstance().isPlaying)
    //
    //     }, [Player.getWaveSurferInstance().isPlaying])
    const mediaQContext = useContext(MediaQueriesContext)
    const mdUp = mediaQContext.mdUp
    const classes = useStyles(classParameters)
    const globalClasses = useCustomStyles({})
    return (
        <Grid container item className={classes.marketingBackground}>
            <Grid container item style={{
                backdropFilter: 'blur(10px)',
                margin: theme.spacing(-12,0,-12,0),
            }}
                  className={clsx(globalClasses.fullSection, globalClasses.fullSectionOverlay)}>
            </Grid>
            <Grid container item spacing={2} direction={props.sectionData.reverseContent?'row-reverse':'row'}>
                <Grid item xs={12} md={6} style={{color: "white", zIndex: 2}} container
                      alignItems={mdUp? "center":"flex-start"}
                      alignContent={mdUp? "center":"flex-start"}
                      justifyContent='center'
                >
                    <Grid container item justifyContent='center' alignContent='center' alignItems='center'>
                        {/*<Grid item container justifyContent='center'>*/}
                        {/*    <img src={albumCover}/>*/}
                        {/*</Grid>*/}
                        <Grid container item xs={11} sm={11} alignContent={'center'} alignItems='center' >
                            {/*    <Grid item>*/}
                            {/*{props.sectionData?.featuredSongFile}*/}
                            {/*{props.sectionData?.featuredSongFile.toString()}*/}
                            <SuccintMusicPlayer src={props.sectionData?.featuredSongFile} waveColor={"white"} songCover={urlFor(props.sectionData.coverImage).url()}/>

                            {/*<Player*/}
                            {/*    imageUrl={null}*/}
                            {/*    audioUrl={featuredAudio}*/}
                            {/*    getWaveSurferInstance={(wavesurfer:any)=>{*/}
                            {/*        console.log("Wavesurfer", wavesurfer)*/}
                            {/*        setIsPlaying(wavesurfer.isPlaying)*/}
                            {/*        // if(wavesurfer.isPlaying){*/}
                            {/*        // }*/}
                            {/*    }}*/}
                            {/*    // waveStyles={{*/}
                            {/*    //     cursorWidth: 2,*/}
                            {/*    //     progressColor: COLORS.TRANSPARENTLIGHTBLUE,*/}
                            {/*    //     responsive: true,*/}
                            {/*    //     waveColor: "white",*/}
                            {/*    //     cursorColor: "transparent",*/}
                            {/*    //     // barWidth: 1,*/}
                            {/*    //     width: "100%",*/}
                            {/*    //     barHeight: .45*/}
                            {/*    //     // height: "370px"*/}
                            {/*    // }}*/}
                            {/*    zoom={0}*/}
                            {/*    playBackSpeedOptions={["1"]}*/}
                            {/*    // events={{*/}
                            {/*    //     'loading': (progress: number) => {*/}
                            {/*    //         console.log(progress)*/}
                            {/*    //         setPlayProgress(progress)*/}
                            {/*    //     },*/}
                            {/*    //     'pause': () => {*/}
                            {/*    //         setIsPlaying(false)*/}
                            {/*    //     },*/}
                            {/*    //     'play': () => {*/}
                            {/*    //         setIsPlaying(true)*/}
                            {/*    //     }*/}
                            {/*    // }}*/}
                            {/*    // waveJson*/}
                            {/*    hideImage="true"*/}
                            {/*    hideWave="true"*/}
                            {/*    containerStyles={{maxWidth: "100%", width: "100%"}}*/}
                            {/*/>*/}
                        </Grid>
                        {/*</Grid>*/}

                    </Grid>
                </Grid>
                <Grid item md={6} container  style={{color: "white", zIndex: 2}} justifyContent='center' alignContent='center'>
                    <Grid container item xs={11} sm={11} alignContent={'flex-start'}>
                        <Grid item container>
                            <Grid item container justifyContent='flex-start'  spacing={1} >
                                <Grid item>
                                    <Typography variant='subtitle1'
                                                color='inherit'
                                                style={{
                                                    ...raleway,
                                                    fontWeight: 350
                                                }}>{props.sectionData.contentWelcomeMessage}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='subtitle1'
                                                color='inherit'
                                                style={{
                                                    ...raleway,
                                                    fontWeight: 350
                                                }}>|</Typography>
                                </Grid>
                                 <Grid item>
                                     <Typography variant='subtitle1'
                                                 color='inherit'
                                                 style={{
                                                     ...raleway,
                                                     fontWeight: 350
                                                 }}>{props.sectionData.year}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='subtitle1'
                                                color='inherit'
                                                style={{
                                                    ...raleway,
                                                    fontWeight: 350
                                                }}>|</Typography>
                                </Grid>
                                 <Grid item>
                                     <Typography variant='subtitle1'
                                                 color='inherit'
                                                 style={{
                                                     ...raleway,
                                                     fontWeight: 350
                                                 }}>{props.sectionData.genre}</Typography>
                                </Grid>
                            </Grid>
                            <Grid item md={6}>
                                <Typography variant='h4'
                                            color='inherit'
                                            style={{...draper}}>Now Playing</Typography>
                                <Typography variant='h4'
                                            color='inherit'
                                            style={{...draper}}>{props.sectionData.contentTitle}</Typography>
                            </Grid>
                            <Grid container item>
                                <Grid item className={classes.contentBullets}>

                                    <Typography variant='body1'
                                                color='inherit'
                                                style={{...raleway}}>{props.sectionData.contentText}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container item>
                                <Grid item xs={5} sm={3} md={4} lg={3} xl={3}>
                                    <AppleMusicBadgeButton
                                        contentLink={props.sectionData.appleMusicLink}/>
                                </Grid>
                                <Grid item xs={6}>
                                    {/*    spotify badge*/}

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </Grid>
    )
}

export default SingleListeningSection