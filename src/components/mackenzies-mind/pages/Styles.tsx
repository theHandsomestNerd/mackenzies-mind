import {makeStyles} from "@material-ui/core";
import MackenziesMindTheme from "../../../theme/MackenziesMindTheme";

const useCustomStyles = makeStyles({
    fullscreen: {
        width: 'calc(100vw)',
        height: 'calc(100vh)',
        position: "relative"
    },
    fullscreenPlus: {
        width: 'calc(100vw)',
        height: 'calc(100vh)',
        position: "relative"
    },
    endAdornedInput: {
        "& .MuiFilledInput-adornedEnd": {
            border: "1px solid white",
            paddingRight: 0,
            borderTopRightRadius: MackenziesMindTheme.shape.borderRadius,
            borderBottomRightRadius: MackenziesMindTheme.shape.borderRadius
        },
        "& .MuiOutlinedInput-adornedEnd": {
            border: "1px solid white",
            paddingRight: 0,
            borderTopRightRadius: MackenziesMindTheme.shape.borderRadius,
            borderBottomRightRadius: MackenziesMindTheme.shape.borderRadius
        },
        "& .MuiInputBase-input": {
            borderRightWidth: 0,
            "&:hover": {
                borderBottomColor: "white"
            },
        },
        "& .MuiButton-containedSecondary":{
            border: 0,
            borderLeft: '1px solid white'
        }
    },
    spacer: {
        marginBottom: "40px"
    },
    fullscreenOverlay: {
        position: "absolute",
        backgroundColor: `rgba(0, 0, 0, .5)`,
        // backdropFilter: 'blur(10px)'
    },
    fullScreenImage: {
        position: "relative",
        backgroundImage: (props: any) => `url(${props.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: MackenziesMindTheme.palette.background.default
    },
    fullSection: {
        width: 'calc(100vw)',
        height: '100%',
        position: "relative",
        zIndex: 0
    },
    fullSectionOverlay: {
        position: "absolute",
        backgroundColor: `rgba(0, 0, 0, .4)`,
        minHeight: '512px',
        height: '100%',
        width: "100%",
        zIndex: 1,
    },
    fullContainer: {
        width: '100%',
        height: '100%'
    }
})

export default useCustomStyles