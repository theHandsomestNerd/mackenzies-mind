import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import {Grid, IconButton, Typography} from '@material-ui/core'
import {FastForward, FastRewind, Pause, PlayArrow} from "@material-ui/icons";
import PageContext from "../../page-context/PageContext";
import {COLORS, raleway} from "../../../theme/MackenziesMindTheme";
// @ts-ignore
import WaveSurfer from 'wavesurfer.js';
import {v4 as uuidv4} from 'uuid'


export const useStyles = makeStyles((theme: Theme) => ({
    root: {},
}))

interface IProps {
    src: any
    progressColor?: string,
    waveColor?: string,
}

const MusicPlayer: FunctionComponent<IProps> = (props: IProps) => {
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
                progressColor: props.progressColor?props.progressColor:"rgba(238,62,201,0.58)",
                // responsive: true,
                waveColor: props.waveColor?props.waveColor:COLORS.TRANSPARENTLIGHTBLUE,
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
        }

        // return ()=>{
        //     waveSurfer.destroy()
        // }

    }, [waveSurfer, myId])

    const [isPlaying, setIsPlaying] = React.useState<boolean>()
    const [currentTime, setCurrentTime] = React.useState<string>()
    React.useEffect(() => {

        const removeThis = setInterval(() => {

            if(waveSurfer){

            const timeCalc = new Date(waveSurfer?.getCurrentTime() * 1000).toISOString().substring(14, 19)
                setCurrentTime(timeCalc)
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

    return (<Grid item container>
        <Grid item xs={12}>
            <div id={'waveform-' + myId} style={{minWidth: "100%", width: "100%"}}/>
        </Grid>

        <Grid item container justifyContent='center'>
            <Grid item style={{color: "white"}}>
                <IconButton onClick={handleRestart} color='inherit'>
                    <FastRewind fontSize='large'/>
                </IconButton>
                <IconButton onClick={handlePlay}
                            color={waveSurfer?.isPlaying() ? 'primary' : 'inherit'}>
                    {isPlaying === true || isPlaying === undefined ? <PlayArrow fontSize='large'/> :
                        <Pause fontSize='large'/>}
                </IconButton>
                <IconButton onClick={handleSkip5Seconds} color='inherit'>
                    <FastForward fontSize='large'/>
                </IconButton>
            </Grid>
        </Grid>
        <Grid item container spacing={2} justifyContent='center'>
            <Grid item>

                <Typography style={{...raleway}} display='inline'>{currentTime}</Typography>
            </Grid>
            {/*<Grid item container xs={6}>*/}
            {/*    <Typography style={{...raleway}}*/}
            {/*                display='inline'>{waveSurfer && new Date(waveSurfer?.getDuration() * 1000).toISOString().substring(14, 19)}</Typography>*/}
            {/*</Grid>*/}
        </Grid>
        <audio id={'track-' + myId} src={props.src}/>
    </Grid>)
}

export default MusicPlayer