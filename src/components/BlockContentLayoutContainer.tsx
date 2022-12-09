import React, {FunctionComponent} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import {Card, Grid, Link} from '@material-ui/core'
import sanityClient from '../sanityClient'
import {blockSerializers} from '../common/sanityIo/BlockContentRenderer'
import {
    AboutArtistSectionType, MmContactUsSectionType,
    MmGallerySectionType,
    MmSongAdSectionType,
    ThwAboutProprietorSectionType,
    ThwContactUsSectionType,
    ThwHeroContentSectionType,
    ThwMottoSectionType,
    ThwPositivePsychologySectionType,
    ThwServiceItemType,
    ThwServicesSectionType,
    ThwWhyChooseUsSectionType,
} from "./BlockContentTypes";
import MackenziesMindTheme from "../theme/MackenziesMindTheme";
import useThwCommonStyles from "../common/sanityIo/ThwCommonStyles";
import ThwHeroContentSection from "./transform-hw/ThwHeroContentSection";
import ThwPositivePsychology from "./transform-hw/ThwPositivePsychology";
import ThwMottoSection from "./transform-hw/ThwMottoSection";
import AboutTheProprietorSection from "./transform-hw/AboutTheProprietorSection";
import ThwServicesSection from "./transform-hw/ThwServicesSection";
import ThwWhyChooseUsSection from "./transform-hw/ThwWhyChooseUsSection";
import ThwContactUsSection from "./transform-hw/ThwContactUsSection";
import {SanityHomePage} from "./block-content-ui/static-pages/cmsStaticPagesClient";
import ThwServicesEducationPage from "./transform-hw/service-education-page/ThwServiceEducationPage";
import MMHeroContentSection from "./mackenzies-mind/MMHeroContentSection";
import SingleListeningSection from "./mackenzies-mind/SingleListeningSection";
import MmGallerySection from "./mackenzies-mind/MmGallerySection";
import AboutTheArtistSection from "./mackenzies-mind/AboutTheArtistSection";
import MmContactUs from "./mackenzies-mind/MmContactUsSection";

export type BlockContentLayoutContainerProps = {
    content?: any,
    homePage: SanityHomePage
}

const BlockContentLayoutContainer: FunctionComponent<BlockContentLayoutContainerProps> = (props) => {
    const classes = useThwCommonStyles()

    return <Grid container item>
        {props?.content?.map((columnLayoutContainer: any, index: number) => {
            switch (columnLayoutContainer?._type) {
                case 'column1BlockContent':
                    return <Grid key={'column1BlockContent'} container justifyContent='center' alignItems='stretch'>
                        <Grid item>
                            <Card className={classes.root} style={{paddingTop: '80px'}}>
                                <Grid container item xs={12} className={classes.layoutContainer}>
                                    <Grid item xs={12}>
                                        <BlockContent
                                            blocks={columnLayoutContainer.content}
                                            serializers={blockSerializers}
                                            projectId={sanityClient.config().projectId}
                                            dataset={sanityClient.config().dataset}
                                        />
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                case 'column2BlockContent':
                    return <Grid key={'column2BlockContent'} container justifyContent='center' alignItems='stretch'>
                        <Grid item>
                            <Card className={classes.root} style={{paddingTop: '80px'}}>
                                <Grid container item xs={12} className={classes.layoutContainer}>
                                    <Grid item xs={6}>
                                        <BlockContent
                                            blocks={columnLayoutContainer.column1.content}
                                            serializers={blockSerializers}
                                            projectId={sanityClient.config().projectId}
                                            dataset={sanityClient.config().dataset}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <BlockContent
                                            blocks={columnLayoutContainer.column2.content}
                                            serializers={blockSerializers}
                                            projectId={sanityClient.config().projectId}
                                            dataset={sanityClient.config().dataset}
                                        />
                                    </Grid>
                                </Grid>
                            </Card></Grid>
                    </Grid>
                case 'transformHeroContentSection':
                    const thwHeroSection: ThwHeroContentSectionType = columnLayoutContainer

                    return <Grid key={'transformHeroContentSection'} container item xs={12}>
                        <Link id={"TOP_OF_PAGE"}><></>
                        </Link>
                        <ThwHeroContentSection
                            sectionData={thwHeroSection}
                        />
                    </Grid>
                case 'transformServiceItem':
                    const thwServiceEducationPage: ThwServiceItemType = columnLayoutContainer

                    // const fetchedServiceItem =

                    return <Grid key={'transformServiceItem'} container item xs={12}>
                        <Link id={"TOP_OF_PAGE"}><></>
                        </Link>
                        <ThwServicesEducationPage
                            serviceData={thwServiceEducationPage}
                        />
                    </Grid>
                case 'transformPositivePsychologySection':
                    const thwPositivePsychologySection: ThwPositivePsychologySectionType = columnLayoutContainer

                    return <Grid key={'transformPositivePsychologySection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MackenziesMindTheme.palette.background.paper}}>
                        <Link id={"ABOUT_US"} style={{position: "relative", top: -80}}><></>
                        </Link>
                        <ThwPositivePsychology
                            sectionData={thwPositivePsychologySection}
                        />
                    </Grid>
                case 'transformMottoSection':
                    const thwMottoSection: ThwMottoSectionType = columnLayoutContainer

                    return <Grid key={'transformMottoSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MackenziesMindTheme.palette.background.paper}}>
                        <ThwMottoSection
                            sectionData={thwMottoSection}
                        />
                    </Grid>
                case 'transformAboutProprietorSection':
                    const thwProprietorSection: ThwAboutProprietorSectionType = columnLayoutContainer

                    return <Grid key={'transformAboutProprietorSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MackenziesMindTheme.palette.background.paper}}>
                        <Link id={"ABOUT_PROPRIETOR"} style={{position: "relative", top: -80}}><></>
                        </Link>
                        <AboutTheProprietorSection
                            sectionData={thwProprietorSection}
                        />
                    </Grid>
                case 'transformServicesSection':
                    const thwServicesSection: ThwServicesSectionType = columnLayoutContainer

                    return <Grid key={'transformServicesSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MackenziesMindTheme.palette.background.paper}}>
                        <Link id={"SERVICES"} style={{position: "relative", top: -80}}><></>
                        </Link>
                        <ThwServicesSection
                            sectionData={thwServicesSection}
                        />
                    </Grid>
                case 'transformWhyChooseUsSection':
                    const thwWCUSection: ThwWhyChooseUsSectionType = columnLayoutContainer

                    return <Grid key={'transformWhyChooseUsSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MackenziesMindTheme.palette.background.paper}}>
                        <ThwWhyChooseUsSection
                            sectionData={thwWCUSection}
                        />
                    </Grid>
                case 'transformContactUsSection':
                    const thwCUSection: ThwContactUsSectionType = columnLayoutContainer

                    return <Grid key={'transformContactUsSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MackenziesMindTheme.palette.background.paper}}>
                        <ThwContactUsSection
                            sectionData={thwCUSection}
                        />
                    </Grid>
                case 'MmHeroContentSection':
                    const mmHeroSection: ThwHeroContentSectionType = columnLayoutContainer

                    return <Grid key={'MMHeroContentSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MackenziesMindTheme.palette.background.paper}}>
                        <MMHeroContentSection
                            sectionData={mmHeroSection}
                        />
                    </Grid>
                case 'MmSongAdSection':
                    const mmSongAdSection: MmSongAdSectionType = columnLayoutContainer

                    return <Grid key={'MMSongAdSection' + index} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MackenziesMindTheme.palette.background.paper}}>
                        <Link id={mmSongAdSection.anchor} style={{position: "relative", top: -50}}><></>
                        </Link>
                            <SingleListeningSection
                            sectionData={mmSongAdSection}
                        />
                    </Grid>
                case 'MmGallerySection':
                    const mmGallerySection: MmGallerySectionType = columnLayoutContainer

                    return <Grid key={'MMGallerySection'+ index} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MackenziesMindTheme.palette.background.paper}}>
                        <Link id={"GALLERY"} style={{position: "relative", top: -50}}><></>
                        </Link>
                        <MmGallerySection
                            sectionData={mmGallerySection}
                        />
                    </Grid>
                case 'MmAboutTheArtistSection':
                    const aboutTheArtistSection: AboutArtistSectionType = columnLayoutContainer

                    return <Grid key={'MMAboutTheArtistSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MackenziesMindTheme.palette.background.paper}}>
                        <Link id={"ABOUT"} style={{position: "relative", top: -50}}><></>
                        </Link>
                            <AboutTheArtistSection
                            sectionData={aboutTheArtistSection}
                        />
                    </Grid>
                case 'MmContactUsSection':
                    const mmCUSection: MmContactUsSectionType = columnLayoutContainer

                    return <Grid key={'mmContactUsSection'} container item xs={12} justifyContent='center'
                                 style={{backgroundColor: MackenziesMindTheme.palette.background.paper}}>
                        <Link id={"CONTACT_US"} style={{position: "relative", top: -50}}><></>
                        </Link>
                            <MmContactUs
                            sectionData={mmCUSection}
                        />
                    </Grid>
                // case 'menuContainer':
                //     if (columnLayoutContainer.slug.current.includes('header')) {
                //         const pageHeader: SanityMenuContainer = columnLayoutContainer
                //         return <Grid container item xs={12} key='transform-hw-header'>
                //             <ThwHeader menuSlug={pageHeader.slug?.current}/>
                //         </Grid>
                //     } else {
                //         const pageFooter: SanityMenuContainer = columnLayoutContainer
                //         return <Grid container item xs={12} key='transform-hw-footer'>
                //             <ThwFooter footerMenuSlug={pageFooter.slug?.current} homePage={props.homePage}/>
                //         </Grid>
                //     }
                default:
                    return <Grid container item></Grid>
                    // return <span key={index}>Undefined section {columnLayoutContainer._type}</span>
            }
        }) ?? <></>
        }

    </Grid>
}

export default BlockContentLayoutContainer
