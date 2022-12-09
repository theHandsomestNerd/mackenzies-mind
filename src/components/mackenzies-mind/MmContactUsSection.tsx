import React, {FunctionComponent, useContext, useEffect, useState} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, IconButton, InputAdornment, Link, TextField, Typography, useTheme, withStyles} from "@material-ui/core";
import {
    AccountCircle,
    Email,
    Facebook,
    Instagram,
    LinkedIn,
    Message,
    Phone,
    Twitter,
    YouTube
} from "@material-ui/icons";
import MackenziesMindTheme, {raleway} from "../../theme/MackenziesMindTheme";
import {urlFor} from "../block-content-ui/static-pages/cmsStaticPagesClient";
import {MmContactUsSectionType, ThwContactUsSectionType} from "../BlockContentTypes";
import clsx from "clsx";
import useCustomStyles from "../mackenzies-mind/pages/Styles";
import isEmail from "validator/lib/isEmail";
import LoadingButton from "../loading-button/LoadingButton";
import {useQuery} from "react-query";
import {Parallax} from "react-parallax";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";
import firebaseAnalyticsClient from "../../utils/firebase/FirebaseAnalyticsClient";
import PageContext from "../page-context/PageContext";
import leadClient from "../transform-hw/pages/under-construction-page/leadClient";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100vw',
        // minHeight: '100vh',
        // backgroundColor: '#1f1f1f',
        color: "#FAFAFA",
    },
    header: {
        fontWeight: 800,
        letterSpacing: '10px',
        lineHeight: 1.4,
        fontSize: '30px',
        textTransform: 'uppercase'
    },
    headerAccent: {
        display: 'inline-block',
        marginLeft: theme.spacing(1)
    },
    formContainer: {
        // margin: 'auto',
        // height: '500px',
        // backgroundColor: '#313131',
        // boxShadow: '11px 10px 38px rgb(0 0 0 / 38%)',
        zIndex: 2
    },
    inputAdornmentContainer: {
        marginTop: theme.spacing(1),
        zIndex: 3
    },
    inputAdornmentTextBlockContainer: {
        position: "relative",
        top: -34,
        zIndex: 3
    },
    formTitle: {
        marginBottom: theme.spacing(1)
    },
    socialMediaContainer: {
        marginTop: theme.spacing(1),
        color: "white"
    },
    lhsContainer: {
        // width: "500px",
        // height: "650px"
    },
    formInput: {
        color: "white",
    },
    sectionTitle: {
        fontWeight: 800,
        color: "white !important"
    }
}))

const StyledTextField = withStyles({
    root: {
        transition: "all 0.3s ease-in-out",
        "& label": {
            // display: "inline-block",
            // fontSize: "16px",
            // fontWeight: 700,
            position: "relative",
            top: "8px",
            left: "-14px",
        },
        "& legend": {
            maxWidth: "0px"
        },
        "& input": {
            zIndex: 2
        },
        "& textarea": {
            zIndex: 2
        },
        "& fieldset": {
            backgroundColor: "#292929",
        },
        "& .MuiOutlinedInput-root": {
            borderColor: `${MackenziesMindTheme.palette.primary.main} !important`,
            "&.Mui-focused": {
                borderColor: `${MackenziesMindTheme.palette.primary.main} !important`,
                "&:hover": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: `${MackenziesMindTheme.palette.primary.main} !important`
                    }
                }
            },
            "&:hover": {
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: `#212121 !important`
                }
            }
        }
    }
})(TextField);

export type ContactUsProps = {
    sectionData: MmContactUsSectionType
}

const MmContactUs: FunctionComponent<ContactUsProps> = (props) => {
    const classes = useStyles(MackenziesMindTheme)

    const globalClasses = useCustomStyles({})
    const mediaQueriesContext = useContext(MediaQueriesContext)

    const pageContext = useContext(PageContext)


    const [leadName, setleadName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [leadPhone, setLeadPhone] = useState<string>()
    const [leadMessage, setLeadMessage] = useState<string>()
    const [alignment, setAlignment] = useState<any>('right')
    const [justifyContent, setJustifyContent] = useState<any>('flex-end')
    useEffect(() => {
        if (mediaQueriesContext.smDown) {
            setAlignment('center')
            setJustifyContent('center')
        } else {
            setAlignment('right')
            setJustifyContent('flex-end')
        }
    }, [mediaQueriesContext.smDown])

    const {isLoading, isError, data, refetch, isRefetching} = useQuery(
        ['submitContactUsForm'],
        () => {
            if (email && email.length > 0 && (!data && !isError)) {
                return leadClient.createLead({
                    email,
                    leadName,
                    leadMessage,
                    leadPhone,
                    source: "Contact Us"
                }).then((response) => {
                    return response.response
                });
            }
            return undefined
        }
    );

    useEffect(() => {
        console.log("data", data)
    }, [data])

    const getHelperText = () => {
        if (data) {
            return <Typography style={{color: MackenziesMindTheme.palette.success.main}} variant='subtitle1'>Thank you for
                your submission!</Typography>
        }
        if (isError) {
            return <Typography style={{color: MackenziesMindTheme.palette.error.main}} variant='subtitle1'>Please Try your
                submission again later or contact jgreene@transformHW.org.</Typography>
        }

        return <Typography variant='subtitle1'>&nbsp;</Typography>
    }

    const createLead = async (e: any): Promise<any> => {
        firebaseAnalyticsClient.ctaClick('contact-us', 'send-message', pageContext.analyticsId,)
        return refetch()
    }

    const theme = useTheme()

    return (
        <Parallax blur={1} bgImage={urlFor(props.sectionData.bgImageSrc).url() ?? undefined} bgImageAlt="the cat"
                  strength={600}
        >


            <Grid container item className={classes.root} style={{
                position: "relative",
                minHeight: "145px",
            }}>
                <Grid container item
                      className={clsx(globalClasses.fullSectionOverlay)}/>
                <Grid spacing={mediaQueriesContext.smDown ? 0 : 4} container item style={{
                    padding: MackenziesMindTheme.spacing(0, mediaQueriesContext.smDown ? 2 : 8, 6)
                }} justifyContent={"center"}>
                    <Grid container item md={6}>
                        <Grid container direction="column" item className={classes.lhsContainer}
                              justifyContent='center' style={{
                            zIndex: 2,
                            paddingTop: "64px",
                        }}>
                            <Grid container item justifyContent={justifyContent}>
                                <Typography variant="h2" align={alignment}> {props.sectionData.lhsTitle}</Typography>
                            </Grid>
                            <Grid container item justifyContent={justifyContent}>
                                <Typography gutterBottom variant='h4'
                                            display='inline'
                                            color='secondary'
                                            style={{
                                                letterSpacing: "-.25em",
                                                paddingBottom: "16px",
                                                lineHeight: .2
                                            }}>________</Typography>
                            </Grid>
                            <Grid container item justifyContent={justifyContent}>
                                <Grid item xs={8}>
                                    <Typography variant='body2' style={{wordWrap: "break-word", ...raleway}} align={alignment}>
                                        {props.sectionData.lhsContentText}</Typography>
                                </Grid>
                            </Grid>
                            {/*<Grid container item spacing={1}>*/}
                            {/*  <Grid item>*/}
                            {/*    <Typography ><MailOutline/></Typography>*/}
                            {/*  </Grid>*/}
                            {/*  <Grid item>*/}
                            {/*    <Typography className={classes.sectionTitle}>Address:</Typography>*/}
                            {/*    <Typography >{props.address}</Typography>*/}
                            {/*  </Grid>*/}
                            {/*</Grid>*/}
                            {/*<Grid container item spacing={1}>*/}
                            {/*  <Grid item>*/}
                            {/*    <Typography ><PhoneOutlined/></Typography>*/}
                            {/*  </Grid>*/}
                            {/*  <Grid item>*/}
                            {/*    <Typography  className={classes.sectionTitle}>Phone:</Typography>*/}
                            {/*    <Typography >{props.leadPhone}</Typography>*/}
                            {/*  </Grid>*/}
                            {/*</Grid>*/}
                            {/*<Grid item>*/}
                            {/*  <Typography ><EmailOutlined/></Typography>*/}
                            {/*</Grid>*/}
                            {/*    <Grid container item>*/}

                            {/*      <Typography  className={classes.sectionTitle}>Email:</Typography>*/}
                            {/*      <Typography >{props.email}</Typography>*/}
                            {/*    </Grid>*/}
                            <Grid container item>
                                <Grid container item justifyContent={justifyContent}
                                      className={classes.socialMediaContainer}
                                      spacing={1} alignContent='center' alignItems='center'>
                                    {pageContext.page?.facebook && <Grid item>
                                        <IconButton>
                                            <Typography>
                                                <Link
                                                    href={"http://facebook.com/" + pageContext.page?.facebook}><Facebook
                                                    fontSize="large" style={{color:"white"}}/></Link>
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
                                    {pageContext.page?.twitter && <Grid item>
                                        <IconButton>

                                        <Typography>
                                            <Link href={"http://twitter.com/" + pageContext.page?.twitter}><Twitter color='inherit'
                                                fontSize="large" style={{color:"white"}}/></Link>
                                        </Typography>
                                        </IconButton>
                                    </Grid>}
                                    {pageContext.page?.instagram && <Grid item>
                                        <IconButton>

                                        <Typography>
                                            <Link href={"http://instagram.com/" + pageContext.page?.instagram}><Instagram color='inherit'
                                                fontSize="large" style={{color:"white"}}/></Link>
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

                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={11} md={6} justifyContent="center">
                        <Grid container item className={classes.formContainer} spacing={1}>
                            {/*<Grid container item justifyContent="center" className={classes.formTitle}>*/}
                            {/*    <Typography variant="h3" className={classes.header}>*/}
                            {/*        Get in*/}
                            {/*        <Typography component="span" variant="h3"*/}
                            {/*                    className={`${classes.header} ${classes.headerAccent}`}*/}
                            {/*                    color="primary">*/}
                            {/*            Touch*/}
                            {/*        </Typography>*/}
                            {/*    </Typography>*/}
                            {/*</Grid>*/}
                            <Grid container item style={{marginTop: MackenziesMindTheme.spacing(8)}}>
                                <StyledTextField
                                    fullWidth
                                    id="contact-name-input"
                                    value={leadName}
                                    onChange={(e) => {
                                        setleadName(e.target.value)
                                    }}
                                    label={<Typography variant='body1' style={{...raleway,color: "white", marginLeft: theme.spacing(1)}}>Name</Typography>}
                                    variant="outlined"
                                    InputProps={{

                                        className: classes.formInput
                                    }}
                                />
                            </Grid>
                            <Grid container item>
                                <StyledTextField
                                    fullWidth
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    id="contact-email-input"
                                    label={<Typography variant='body1' style={{...raleway,color: "white", marginLeft: theme.spacing(1)}}>Email</Typography>}
                                    variant="outlined"
                                    InputProps={{

                                        className: classes.formInput
                                    }}
                                />
                            </Grid>
                            <Grid container item>
                                <StyledTextField
                                    fullWidth
                                    value={leadPhone}
                                    onChange={(e) => {
                                        setLeadPhone(e.target.value)
                                    }}
                                    id="contact-phone-input"
                                    label={<Typography variant='body1' style={{...raleway,color: "white", marginLeft: theme.spacing(1)}}>Phone</Typography>}
                                    variant="outlined"
                                    InputProps={{
                                        className: classes.formInput
                                    }}
                                />
                            </Grid>
                            <Grid container item>
                                <StyledTextField
                                    fullWidth
                                    id="contact-message-input"
                                    value={leadMessage}
                                    onChange={(e) => {
                                        setLeadMessage(e.target.value)
                                    }}
                                    label={<Typography variant='body1' style={{...raleway,color: "white", marginLeft: theme.spacing(1)}}>Message</Typography>}
                                    variant="outlined"
                                    multiline
                                    minRows="4"
                                    InputProps={{
                                        className: classes.formInput
                                    }}
                                />
                            </Grid>
                            <Grid container item alignItems="center" justifyContent="center"
                                  style={{marginTop: MackenziesMindTheme.spacing(4)}}>
                                {/*<Button color="primary" variant="contained"><Typography variant="button">Send*/}
                                {/*    Button</Typography></Button>*/}
                                <LoadingButton
                                    width={200}
                                    isLoading={isLoading || isRefetching}
                                    disabled={!!(data || isError || (email && (email.length > 0) && !isEmail(email)))}
                                    clickHandler={createLead}
                                    color="secondary" variant="contained">Send</LoadingButton>
                            </Grid>
                            <Grid item container justifyContent='center'>
                                {getHelperText()}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid></Parallax>
    )
}

export default MmContactUs