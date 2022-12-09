import React, {FunctionComponent} from 'react'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {Grid, Typography, useTheme} from '@material-ui/core'
import {urlFor} from '../block-content-ui/static-pages/cmsStaticPagesClient'
import {ThwHeroContentSectionType} from "../BlockContentTypes";
import clsx from "clsx";
import {rainbow, raleway} from "../../theme/MackenziesMindTheme";
import useCustomStyles from "./pages/Styles";
import AppleMusicBadgeButton from "./AppleMusicBadgeButton";
// @ts-ignore
import MusicPlayer from "./music-player/MusicPlayer";
import featuredAudio from "../../assets/music/i-dont-wanna-miss-you/I dont wanna miss you (Master) V3_03.wav";


interface IProps {
    sectionData: ThwHeroContentSectionType
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
        // minHeight: 'calc(100vh - 80px)',
        backgroundPosition:"center",
        backgroundColor: 'transparent',
        position: "relative"
    }),
    contentSection: {
        height: 'calc(100vh)',
        // marginTop: theme.spacing(10),
        backgroundColor: 'transparent',
    },
    contentBullets: {
        borderLeft: `4px solid ${theme.palette.primary.main}`,
        paddingLeft: '26px',
    }
}))


const MMHeroContentSection: FunctionComponent<IProps> = (props) => {
    let classParameters: CSSProps = {
        heroBaseImageUrl: urlFor(props.sectionData.heroImage).url() ?? '',
    }
    const theme = useTheme()

    if (props.sectionData.heroImageBackground) {
        classParameters = {
            ...classParameters,
            heroOverlay: urlFor(props.sectionData.heroImageBackground).url()
        }
    }




    const classes = useStyles(classParameters)
    const globalClasses = useCustomStyles({})
    // @ts-ignore
    return (
        <Grid container item className={classes.marketingBackground} alignItems='center' alignContent='center'>
            <Grid container item
                  className={clsx(globalClasses.fullSection, globalClasses.fullSectionOverlay)}>
            </Grid>
            <Grid container item>
                <Grid container className={classes.contentSection} item xs={12}>
                    <Grid container style={{position: "relative", zIndex: 2}} alignItems='center'
                          alignContent='center'>
                        <Grid container item style={{maxHeight: "100%",}}
                              justifyContent='space-around'>
                            <Grid item container style={{height: "150px"}} justifyContent='center'>
                                <Grid container item justifyContent='center' xs={12}>
                                    <Typography variant='body1'
                                                color='textSecondary'
                                                style={{
                                                    color: theme.palette.primary.main,
                                                    ...raleway
                                                }}>{props.sectionData.contentText}</Typography>
                                </Grid>

                                <Grid item container xs={12} md={6}
                                      style={{color: theme.palette.primary.main, position: "relative", zIndex:2}}
                                      justifyContent='center'>
                                    <Grid container item justifyContent='center' style={{position: "absolute"}}>
                                        <Grid item>
                                            <Typography variant='h1'
                                                        noWrap
                                                        color={'textSecondary'}
                                                        style={{...rainbow,}}>{props.sectionData.contentTitle}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item style={{position: "absolute", top: 32}}>
                                        <MusicPlayer src={featuredAudio}/>
                                    </Grid>
                                    {/*<Player*/}
                                    {/*    imageUrl={null}*/}
                                    {/*    audioUrl={featuredAudio}*/}
                                    {/*    waveStyles={{*/}
                                    {/*        cursorWidth: 2,*/}
                                    {/*        progressColor: "rgba(238,62,201,0.58)",*/}
                                    {/*        responsive: true,*/}
                                    {/*        waveColor: COLORS.TRANSPARENTLIGHTBLUE,*/}
                                    {/*        cursorColor: "transparent",*/}
                                    {/*        // barWidth: 1,*/}
                                    {/*        width: "100vw",*/}
                                    {/*        barHeight: .45*/}
                                    {/*        // height: "370px"*/}
                                    {/*    }}*/}
                                    {/*    zoom={0}*/}
                                    {/*    playBackSpeedOptions={["1"]}*/}
                                    {/*    // waveJson*/}
                                    {/*    hideImage="true"*/}
                                    {/*    // hideWave="true"*/}
                                    {/*    containerStyles={{maxWidth: "100%", width: "100%"}}*/}
                                    {/*/>*/}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container justifyContent='flex-end' alignItems='center' alignContent='center'
                              style={{position: "absolute", bottom: 24, right: 32}}>
                            {/*<Button color='primary'*/}
                            {/*        style={{padding:theme.spacing(2,5)}}*/}
                            {/*        onClick={() => {*/}
                            {/*            firebaseAnalyticsClient.ctaClick("hero-section", props.sectionData.ctaButtonTitle, pageContext.analyticsId,)*/}
                            {/*        }}*/}
                            {/*        href={props.sectionData.ctaButtonLink ?? ""} >*/}
                            {/*    <Grid container alignItems='center' spacing={1}>*/}
                            {/*        <Grid item>*/}
                            {/*            <Speaker fontSize='large'/>*/}
                            {/*        </Grid>*/}
                            {/*        <Grid item>*/}
                            {/*            <Typography variant='button'*/}
                            {/*                        color='inherit'>{props.sectionData.ctaButtonTitle}</Typography>*/}
                            {/*        </Grid>*/}
                            {/*    </Grid>*/}
                            {/*</Button>*/}

                            <Grid item xs={4} sm={3} md={2} lg={2} xl={1}>
                                {/*<Button color='primary'*/}
                                {/*    // style={{padding:theme.spacing(2,5)}}*/}
                                {/*        onClick={() => {*/}
                                {/*            firebaseAnalyticsClient.ctaClick("hero-section", props.sectionData.ctaButtonTitle, pageContext.analyticsId,)*/}
                                {/*        }}*/}
                                {/*        href={props.sectionData.ctaButtonLink ?? ""}>*/}
                                <AppleMusicBadgeButton
                                    contentLink={'https://geo.music.apple.com/us/album/i-dont-wanna-miss-you/1606929169?i=1606929172&itsct=music_box_link&itscg=30200&ls=1&app=music'}/>
                                {/*</Button>*/}

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default MMHeroContentSection