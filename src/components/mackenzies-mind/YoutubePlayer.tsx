import React, {FunctionComponent, useContext} from 'react'
import {makeStyles, Theme} from "@material-ui/core/styles"
import YouTube, {YouTubeProps} from "react-youtube";
import MediaQueriesContext from "../media-queries-context/MediaQueriesContext";

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
    },
}))

interface IProps {
    youtubeId: string
}

const YoutubePlayer: FunctionComponent<IProps> = (props:IProps) => {
    const classes = useStyles()

    React.useEffect(()=>{
    }, [])

    const mqContext = useContext(MediaQueriesContext)
    const xsOnly = mqContext.xsOnly

    const opts:YouTubeProps['opts'] = {
        height: xsOnly?"360px":'600px',
        width: xsOnly?"360px":'600px',
        maxWidth: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return <YouTube videoId={props.youtubeId} opts={opts} />;

}

export default YoutubePlayer