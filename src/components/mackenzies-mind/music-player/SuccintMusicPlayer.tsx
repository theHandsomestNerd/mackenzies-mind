import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {CircularProgress, Grid, IconButton, Typography, useTheme} from '@material-ui/core'
import {FastForward, FastRewind, Pause, PlayArrow} from "@material-ui/icons";
import PageContext from "../../page-context/PageContext";
import {COLORS, draper} from "../../../theme/MackenziesMindTheme";
// @ts-ignore
import WaveSurfer from 'wavesurfer.js';
import {v4 as uuidv4} from 'uuid'
import MediaQueriesContext from "../../media-queries-context/MediaQueriesContext";


export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    src: any
    progressColor?: string,
    waveColor?: string,
    songCover?: any
}

const SuccintMusicPlayer: FunctionComponent<IProps> = (props: IProps) => {
    const classes = useStyles()

    const [myId, setMyId] = React.useState<string>('')

    React.useEffect(() => {

        setMyId(uuidv4())
    }, [])

    const [waveSurfer, setWaveSurfer] = React.useState<any>()

    const pageContext = useContext(PageContext)

    React.useLayoutEffect(() => {
        const track = document.querySelector('#track-' + myId);

        if (myId && track && !waveSurfer) {

            const ws = WaveSurfer.create({
                // barWidth: 3,
                // cursorWidth: 1,
                container: '#waveform-' + myId,
                backend: 'WebAudio',
                height: 80,
                // barHeight: 80,
                // progressColor: '#2D5BFF',
                responsive: true,
                // waveColor: '#EFEFEF',
                cursorColor: 'transparent',
                cursorWidth: 2,
                progressColor: props.progressColor ? props.progressColor : "rgba(238,62,201,0.58)",
                // responsive: true,
                waveColor: props.waveColor ? props.waveColor : COLORS.TRANSPARENTLIGHTBLUE,
                // cursorColor: "transparent",
                // // barWidth: 1,
                width: "100%",
                minWidth: "100%",
                // barHeight: .45,
                // // height: "370px"
                // container: '#waveform',
                // backend: 'WebAudio',
            })
            setWaveSurfer(ws)
        } else if (track && myId) {
            waveSurfer.load(track);
            // waveSurfer.empty()
        }

        // return ()=>{
        //     waveSurfer.destroy()
        // }

    }, [waveSurfer, myId])

    const [isPlaying, setIsPlaying] = React.useState<boolean>()
    const [currentTime, setCurrentTime] = React.useState<number>(0)
    React.useEffect(() => {

        const removeThis = setInterval(() => {
            if (myId && waveSurfer && waveSurfer?.getCurrentTime()) {
                setCurrentTime(waveSurfer?.getCurrentTime())
            }
        }, 1000)


    }, [waveSurfer?.getCurrentTime()])


    const handlePlay = () => {
        setIsPlaying(state => !state)
        waveSurfer.playPause()
        // this.setState({ playing: !this.state.playing });
        // this.waveform.playPause();
    };
    const handleRestart = () => {
        setIsPlaying(state => !state)
        waveSurfer.seekTo(0)
        // this.setState({ playing: !this.state.playing });
        // this.waveform.playPause();
    };
    const handleSkip5Seconds = () => {
        setIsPlaying(state => !state)
        waveSurfer.skip(5)
        // this.setState({ playing: !this.state.playing });
        // this.waveform.playPause();
    };
    const theme = useTheme()
    const mediaQContext = useContext(MediaQueriesContext)
    const mdUp = mediaQContext.mdUp

    return (<Grid item container style={{
        height: 400,
        minWidth: "100%",
        width: "100%",
        minHeight: 550,
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url('${props.songCover}')`,
        backgroundSize: 'contain',
        backgroundPosition: mdUp? 'center':'top',
        // minHeight: 'calc(100vh - 80px)',
        backgroundColor: 'transparent',
        position: "relative"
    }}>
        <Grid item xs={12}>
            <div id={'waveform-' + myId} style={{minWidth: "100%", width: "100%", display: "none"}}/>
        </Grid>

        <Grid container item alignItems='center' alignContent='center' direction='column'>
            <Grid item style={{backgroundColor: "rgba(54,54,54,0.32)", padding: theme.spacing(1)}}>
                <Grid item container justifyContent='center'>

                    {!!currentTime ? <Typography style={{...draper}} display='inline' variant='h6'>{
                        new Date(currentTime * 1000).toISOString().substring(14, 19)

                    }</Typography> : <Typography style={{...draper}} display='inline' variant='h5'>&nbsp;</Typography>}
                </Grid>
                <Grid item style={{color: "white"}}>
                    <IconButton onClick={handleRestart} color='inherit'>
                        <FastRewind fontSize='large'/>
                    </IconButton>
                    <IconButton onClick={handlePlay}
                                color={waveSurfer?.isPlaying() ? 'primary' : 'inherit'}
                                style={{position: "relative"}}
                    >
                        {isPlaying === true || isPlaying === undefined ?
                            <PlayArrow fontSize='large' style={{position: "absolute", fontSize: "100px"}}/> :
                            <Pause style={{position: "absolute", fontSize: "100px"}}/>}
                        {<CircularProgress value={(currentTime ?? 0 / waveSurfer?.getDuration() ?? 0)}
                                           variant='determinate'
                                           size={120}/>}
                    </IconButton>
                    <IconButton onClick={handleSkip5Seconds} color='inherit'>
                        <FastForward fontSize='large'/>
                    </IconButton>
                </Grid>
            <Grid item container justifyContent='center'>
                <Typography style={{...draper}} display='inline' variant='h5'>&nbsp;</Typography>
            </Grid>
            </Grid>
        </Grid>
        <audio id={'track-' + myId} src={props.src}/>
    </Grid>)
}

export default SuccintMusicPlayer