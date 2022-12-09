import React, {FunctionComponent, useContext} from 'react'
import {Divider, Grid, IconButton, Link, Typography} from '@material-ui/core'
import FooterMenuGroup from './FooterMenuGroup'
import {makeStyles, Theme} from '@material-ui/core/styles'
import {SanityTransformHwHomePage} from "../../../common/sanityIo/Types";
import MackenziesMindTheme, {COLORS, rainbow} from "../../../theme/MackenziesMindTheme";
import PageContext from "../../page-context/PageContext";
import MediaQueriesContext from "../../media-queries-context/MediaQueriesContext";
import MailTo from "../../mail-to/MailTo";
import Logo from "../../transform-hw/logo/Logo";
import {Email, Facebook, Instagram, Twitter, YouTube, YoutubeSearchedFor} from "@material-ui/icons";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        color: theme.palette.text.secondary,
    }
}))


interface IProps {
    menuContainerSlug?: string
    homePage: SanityTransformHwHomePage
    updateIsLoading?: (value: boolean) => void
}

const FooterMenuContainer: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles(MackenziesMindTheme)

    const pageContext = useContext(PageContext)
    const mediaQueriesContext = useContext(MediaQueriesContext)


    return (
        <Grid container item className={classes.root} spacing={5}>
            <Grid container item xs={12} md={4} style={mediaQueriesContext.smDown ? {
                borderLeft: `4px solid ${MackenziesMindTheme.palette.primary.main}`,
                backgroundColor: "rgba(117,117,117,.5)",
                borderRight: `4px solid ${MackenziesMindTheme.palette.primary.main}`,
            } : {}}>
                {
                    pageContext.pageFooter?.subMenus?.map((menuGroup: any, index: number) => {
                        return (
                            <Grid key={index} item xs={6}>
                                <FooterMenuGroup menuGroup={menuGroup}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Grid item container xs={12} md={4} justifyContent='center'>
                {pageContext.pageFooter?.logoImageSrc &&
                    <Logo isCenter logoImageSrc={pageContext.pageFooter.logoImageSrc} height={108}/>}
                {!pageContext.pageFooter?.logoImageSrc &&
                    <Typography variant='h2' style={{...rainbow}}>MacKenzie's Mind</Typography>}
                <Grid item container justifyContent='center' style={{
                    paddingBottom: "16px",
                    marginTop: "12px",
                }}>

                    <Grid item>
                        <Divider style={{
                            width: "70px",
                            backgroundColor: "white"
                        }}/>
                    </Grid>

                </Grid>
                <Grid item container>
                    <Grid container item
                          justifyContent='center'
                          spacing={1}>
                        {pageContext.page?.facebook && <Grid item>
                            <IconButton>
                                <Typography>
                                    <Link
                                        href={"http://facebook.com/" + pageContext.page?.facebook}><Facebook
                                        style={{color:"white"}}/></Link>
                                </Typography>
                            </IconButton>
                        </Grid>}
                        {pageContext.page?.twitter && <Grid item>
                            <IconButton>

                                <Typography>
                                    <Link href={"http://twitter.com/" + pageContext.page?.twitter}><Twitter color='inherit'
                                                                                                            style={{color:"white"}}/></Link>
                                </Typography>
                            </IconButton>
                        </Grid>}
                        {pageContext.page?.instagram && <Grid item>
                            <IconButton>
                                <Typography>
                                    <Link href={"http://instagram.com/" + pageContext.page?.instagram}><Instagram color='inherit' style={{color:"white"}}/></Link>
                                </Typography>
                            </IconButton>
                        </Grid>}
                        {pageContext.page?.youtubeChannelLink && <Grid item>
                            <IconButton>
                                <Typography>
                                    <Link href={pageContext.page?.youtubeChannelLink}><YouTube color='inherit' style={{color:"white"}}/></Link>
                                </Typography>
                            </IconButton>
                        </Grid>}
                        {/*{pageContext.page?.youTube && <Grid item>*/}
                        {/*    <Typography>*/}
                        {/*        <Link href={"http://youtube.com/" + pageContext.page?.youtube}><YouTube*/}
                        {/*            fontSize="large"/></Link>*/}
                        {/*    </Typography>*/}
                        {/*</Grid>}*/}
                    </Grid>
                </Grid>
                <Grid item container>
                    <Grid container item spacing={1} justifyContent='center'>
                        <Grid item>
                            <Typography color='inherit' style={{width: "180px"}} align='center' variant='subtitle1'
                                        gutterBottom>{props.homePage.address}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} justifyContent='center'>
                    {pageContext.page?.email && <Grid item>
                        <IconButton>
                            <Typography>
                                <MailTo email={pageContext.page?.email} subject={'Booking Request'} body={'I am interested in speaking with your booking manager.'} color={'white'}><Email color='inherit' style={{color:"white"}}/></MailTo>
                            </Typography>
                        </IconButton>
                    </Grid>}
                    </Grid>
                    <Grid container item spacing={1} justifyContent='center'>
                        <Grid item>
                            <Typography color='inherit' align='center'
                                        variant='subtitle1'>{props.homePage.phone}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} justifyContent='center'>
                        {<Grid item>
                            <MailTo color={COLORS.DARK_GRAY} email={props.homePage.email??""} subject={"Information Request"} body={""}/>
                        </Grid>}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} md={4} alignContent='flex-start' spacing={2}>

            </Grid>
        </Grid>
    )
}

export default FooterMenuContainer