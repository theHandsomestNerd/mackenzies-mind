// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import menuContainer from './menuContainer'
import menuGroup from './menuGroup'
import menuItem from './menuItem'
import homePage from './homePage'
import column1BlockContent from './column1BlockContent'
import column2BlockContent from './column2BlockContent'
import contentContainer from './contentContainer'
import lineBreak from './lineBreak'
import heroContentSection from './sections/aft/HeroContentSection'
import whySwitchSection from './sections/aft/why-switch/WhySwitchSection'
import whySwitchReason from './sections/aft/why-switch/WhySwitchReason'
import aboutAndaCardSection from './sections/aft/AboutAndaCardSection'
import cryptoInYourPocketSection from './sections/aft/CryptoInYourPocketSection'
import structuredDataProduct from './sections/aft/structured-data/StructuredDataProduct'
import structuredDataOffer from './sections/aft/structured-data/StructuredDataOffer'
import structuredDataSeller from './sections/aft/structured-data/StructuredDataSeller'
import structuredDataEvent from './sections/aft/structured-data/StructuredDataEvent'
import coldLead from "./coldLead";
import ThwHeroContentSection from "./sections/transform-hw/ThwHeroContentSection";
import ThwPositivePsychology from "./sections/transform-hw/ThwPositivePsychology";
import ThwMottoSection from "./sections/transform-hw/ThwMottoSection";
import ThwAboutProprietor from "./sections/transform-hw/ThwAboutProprietor";
import ThwServicesSection from "./sections/transform-hw/services/ThwServicesSection";
import transformServiceItem from "./sections/transform-hw/services/transformServiceItem";
import ThwWhyChooseUsSection from "./sections/transform-hw/why-choose-us/ThwWhyChooseUsSection";
import transformWhyChooseUsItem from "./sections/transform-hw/why-choose-us/transformWhyChooseUsItem";
import ThwContactUs from "./sections/transform-hw/ThwContactUsSection";
import ThwUnderConstructionPage from "./sections/transform-hw/ThwUnderConstructionPage";
import serviceAmenity from "./sections/transform-hw/services/serviceAmenity";
import proprietorService from "./sections/transform-hw/proprietorService";
import modal from "./modal/Modal";
import faq from "./modal/faq";
import MmHeroContentSection from "./sections/mackenzies-mind/MmHeroContentSection";
import MmSongAdSection from "./sections/mackenzies-mind/MmSongAdSection";
import MmGallerySection from "./sections/mackenzies-mind/MmGallerySection";
import MmGalleryItem from "./sections/mackenzies-mind/MmGalleryItem";
import MmAboutTheArtistSection from "./sections/mackenzies-mind/MmAboutTheArtist";
import artistAtAGlance from "./sections/mackenzies-mind/artistAtAGlance";
import videoFile from "./sections/mackenzies-mind/videoFile";
import MmContactUsSection from "./sections/mackenzies-mind/MmContactUsSection";
import songFile from "./sections/mackenzies-mind/songFile";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // The following are document types which will appear
        // in the studio.
        // When added to this list, object types can be used as
        // { type: 'typename' } in other document schemas
        menuContainer,
        menuGroup,
        menuItem,
        homePage,
        blockContent,
        contentContainer,
        lineBreak,
        column1BlockContent,
        column2BlockContent,
        // HomePageSections
        heroContentSection,
        whySwitchSection,
        whySwitchReason,
        aboutAndaCardSection,
        cryptoInYourPocketSection,
        // structured Data
        structuredDataProduct,
        structuredDataOffer,
        structuredDataSeller,
        structuredDataEvent,
        coldLead,
        // transform hw sections
        ThwHeroContentSection,
        ThwPositivePsychology,
        ThwMottoSection,
        ThwAboutProprietor,
        ThwServicesSection,
        transformServiceItem,
        ThwWhyChooseUsSection,
        transformWhyChooseUsItem,
        ThwContactUs,
        ThwUnderConstructionPage,
        serviceAmenity,
        proprietorService,
        modal,
        faq,
        MmHeroContentSection,
        MmSongAdSection,
        MmGallerySection,
        MmGalleryItem,
        MmAboutTheArtistSection,
        artistAtAGlance,
        videoFile,
        MmContactUsSection,
        songFile
    ]),
})
