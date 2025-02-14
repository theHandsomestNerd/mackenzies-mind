import {createTheme} from '@material-ui/core'
// import GrotescoLight from '../common/fonts/Grotesco/Grotesco-Web-Font/Grotesco-Light.ttf'
// import Feixen from '../common/fonts/Studio Feixen Sans Writer/Web/StudioFeixenSansWriter-Regular.ttf'
import Phonk from './common/fonts/Phonk/Phonk Regular.otf'
import SingaSerif from './common/fonts/Singa/Singa Serif Regular.ttf'
import Raleway from './common/fonts/Raleway/variable/TTF/Raleway-VF.ttf'
import Rainbow from './common/fonts/rainbow/Rainbow.ttf'
import DrapperWoff from './common/fonts/Draper/Draper.ttf.woff'
import DrapperWEOT from './common/fonts/Draper/Draper.ttf.eot'
import DrapperSVG from './common/fonts/Draper/Draper.ttf.svg'
// import PoppinsBold from '../common/fonts/Poppins/Poppins-Bold.ttf'
import PoppinsXBold from './common/fonts/Poppins/Poppins-ExtraBold.ttf'
// import PlexSans from '../common/fonts/IBM Plex/OpenType/IBM-Plex-Sans/IBMPlexSans-Regular.otf'

type FontFace = {
    fontDisplay?: any
    fontFamily?: any
    fontStyle?: any
    fontWeight?: number
    src?: string
}

// const poppins: FontFace = {
//     fontFamily: 'Poppins',
//     fontStyle: 'normal',
//     fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
//     fontWeight: 400,
//     src: `
//     local('Poppins'),
//     url(${Poppins}) format('opentype')
//   `
// }

export const raleway: FontFace = {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
    fontWeight: 400,
    src: `
    local('Raleway Bold'),
    url(${Raleway}) format('truetype')
  `
}

export const rainbow: FontFace = {
    fontFamily: 'Rainbow',
    fontStyle: 'normal',
    fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
    fontWeight: 400,
    src: `
    local('Rainbow Regular'),
    url(${Rainbow}) format('truetype')
  `
}

export const draper: FontFace = {
    fontFamily: 'Draper',
    fontStyle: 'normal',
    fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
    fontWeight: 400,
    src: `
        url(${DrapperWoff}) format('woff'),
        url('${DrapperSVG}#Draper') format('svg'),
        url(${DrapperWEOT}),
        url('${DrapperWoff}?#iefix') format('embedded-opentype')
  `
}
// export const poppinsXBold: FontFace = {
//     fontFamily: 'Poppins',
//     fontStyle: 'normal',
//     fontDisplay: 'swap', // uses the fallback font to display the text until the custom font has fully downloaded. This is also known as a “flash of unstyled text” or FOUT.
//     fontWeight: 900,
//     src: `
//     local('Poppins'),
//     url(${PoppinsXBold}) format('opentype')
//   `
// }

const fonts = ['Draper', 'Raleway', 'Rainbow'].join(',')

export enum COLORS {
    DARKBLUE = 'rgba(0,0,53,1)',
    TRANSPARENT_DARKBLUE = 'rgba(0,0,53,.85)',
    BLUE = 'rgba(16, 43, 136, 1)',
    DARK_GRAY = '#A8A9AC',
    GRAY = 'rgba(207, 207, 207, 1)',
    LIGHT_GRAY = '#E3E3E3',
    TRANSPARENTWHITE = 'rgba(255,255,255,0.75)',
    LIGHTBLUE = '#2CC4D7',
    TRANSPARENTLIGHTBLUE = 'rgba(44,196,215,0.85)',
    TRANSPARENTLIGHTPINK = 'rgba(44,196,215,0.85)',
    ALMOSTPURPLE = "#331BAD",
    LIGHTGRAY = "#F4F3F5",
    MEDIUMGRAY = "#BCB9B0",
    DARKGRAY = "#43424A"
}

const MackenziesMindTheme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 980,
            lg: 1160,
            xl: 1320,
        }
    },
// @ts-ignore
    palette: {
        background: {
            default: COLORS.LIGHTGRAY,
            paper: COLORS.DARKBLUE
        },
        primary: {
            main: COLORS.LIGHTBLUE,
        },
        secondary: {
            main: COLORS.ALMOSTPURPLE,
        },
        error: {
            main: '#840E0E',
            light: '#D79393',
            dark: '#640E0E'
        },
        success: {
            main: '#27AE60',
            light: '#93D7B0',
            dark: '#0E8433'
        },
        warning: {
            main: '#E2AB1F',
            light: '#F1D58F',
            dark: '#CF800A'
        },
        text: {
            primary: COLORS.DARKBLUE,
            secondary: "#FFFFFF",
            disabled: COLORS.LIGHT_GRAY
        }
    },
    typography: {
        fontFamily: fonts,
        h1: {
            // Title1
            fontSize: '120px',
            fontStyle: 'normal',
            fontWeight: "bold",
            lineHeight: 1.3,
            letterSpacing: '-0.03em'
        },
        h2: {
            // Title2
            fontSize: '53px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.03em'
        },
        h3: {
            // Title3
            fontSize: '44px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: '-0.03em'
        },
        h4: {
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: '34px',
            lineHeight: 1.25
        },
        h6: {
            fontWeight: 'bold',
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: 1.1
        },
        body1: {
            // Body
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 350,
            lineHeight: 1.5,
            letterSpacing: '-0.03em'
        },
        body2: {
            // Large
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: '-0.03em'
        },
        button: {
            // Button
            fontSize: '19px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            textTransform: 'none'
        },
        subtitle1: {
            // Small
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-0.03em'
        },
        subtitle2: {
            // Micro
            fontSize: '11px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: 1.45,
            letterSpacing: '-0.03em'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [draper, rainbow, raleway]
            },
        },
        MuiInputBase: {
            root: {
                color: "#FAFAFA",
                "&:focus": {
                    borderBottom: 0
                }
            },
            input: {
                // borderBottom: "4px solid " + COLORS.MAIN,
                "& :before": {
                    // borderBottom: "1px solid "+ COLORS.MAIN,
                }
            }
        },
        MuiTooltip: {
            tooltip: {
                // backgroundColor: 'rgba(16, 43, 136, .9)'
            }
        },
        MuiSnackbarContent: {
            root: {
                marginTop: "100px",
                border: "3px solid white",
                backgroundColor: 'rgba(16, 43, 136, .95) !important'
            }
        },
        MuiFilledInput: {
            root: {
                backgroundColor: "rgba(0,0,0,.3)",
                // borderBottom: "1px solid "+ COLORS.MAIN,
                "& .Mui-focused": {
                    borderBottomWidth: '0px solid black'
                }
            },
            // notchedOutline: {
            //     "& :after":{
            //             borderColor: "red"
            //     }
            //     // "& :after": {
            //     //     borderBottom: "2px solid red",
            //     //     borderColor:  COLORS.MAIN,
            //     // }
            // },
        },
        MuiInputLabel: {
            root: {
                // color:"black",
            }
        },
        MuiButton: {
            root: {
                // color: '#FFFFFF',
                // height: '35px',
                // padding: '8px 16px 8px 16px',
                borderRadius: '5px',
                paddingTop: "16px",
                paddingBottom: "16px"
            },
            contained: {
                boxShadow: "none",
            },
            containedPrimary: {
                border: '1px solid white',
                // backgroundColor: "rgba(207, 207, 207, .8)",
                // color: '#FCE3CC',
                // backgroundColor: '#FF4122',
                // '&:hover': {
                //   backgroundColor: '#BD1A00',
                //   color: '#FCE3CC'
                // },
                '&$disabled': {
                    // backgroundColor: '#79582d',
                    color: '#969284'
                },
                // '&:focus': {
                //   color: '#FCE3CC',
                //   backgroundColor: '#FF4122'
                // }
            },
            containedSecondary: {
                border: '1px solid whitesmoke',
                // color: '#FEF1E6',
                // backgroundColor: 'rgba(16, 43, 136, .7)',
                // '&:hover': {
                //   backgroundColor: '#2412AE',
                //   color: '#FCE3CC'
                // },
                '&$disabled': {
                    color: 'rgba(207, 207, 207, .5)',
                    // backgroundColor: 'rgba(16, 43, 136, .5)'
                },
                // '&:focus': {
                //   color: '#FCE3CC',
                //   backgroundColor: '#4C2FCD'
                // }
            },
            outlinedPrimary: {
                borderWidth: '3px',
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "64px",
                paddingRight: "64px"
                // color: '#FF4122',
                // borderColor: '#FF4122',
                // '&:hover': {
                //   backgroundColor: '#FF4122',
                //   color: '#FCE3CC'
                // },
                // '&:disabled': {
                //   borderColor: '#FFA091',
                //   color: '#FFA091'
                // },
                // '&:focus': {
                //   backgroundColor: 'transparent',
                //   borderColor: '#FF4122',
                //   color: '#FF4122'
                // }
            },
            outlinedSecondary: {
                borderWidth: '3px',
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "64px",
                paddingRight: "64px",
            }
        },
        MuiCircularProgress: {
            // colorPrimary: {
            //   color: '#A697E6'
            // }
        }
    }
})

export default MackenziesMindTheme
