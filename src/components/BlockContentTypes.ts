import {SanityFileAsset, SanityImageSource} from "@sanity/asset-utils";
import {SanityRef, SanitySlug} from "../common/sanityIo/Types";

export type HeroContentSectionType = {
    name: string
    title: string
    heroImage: SanityImageAsset
    heroImageAltText: string
    heroImageBackground: SanityImageAsset
    contentTitle: string
    contentBullets: string[]
    ctaButtonTitle: string
    ctaButtonLink: string
}


export type AboutAndaCardSectionType = {
    name: string
    title: string
    cardImage: SanityImageAsset
    cardImageAltText: string
    cardImageBackground: SanityImageAsset
    contentTitle: string
    contentLeft: string
    contentRight: string
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type WhySwitchReasonType = {
    icon: SanityImageAsset
    iconAlt: string
    text: string
}

export type WhySwitchSectionType = {
    _id:string
    imageSrc: SanityImageAsset
    imageAlt: string
    reasons: WhySwitchReasonType[]
}

export type CryptoInYourPocketSectionType = {
    name: string
    title: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    bullets: WhySwitchReasonType[]
    ctaHeader1: string
    ctaText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type SanityImageAsset = SanityImageSource | {
    _type:string,
    asset: {
        _ref:string,
        _type:"reference"
    }
}

// Transform Types
export type ThwHeroContentSectionType = {
    name: string
    title: string
    heroImage: SanityImageAsset
    heroImageAltText: string
    heroImageBackground?: SanityImageAsset
    contentWelcomeMessage: string
    contentTitle: string
    contentText: string
    ctaButtonTitle: string
    ctaButtonLink: string
}

export type MmSongAdSectionType = {
    name: string
    anchor: string
    title: string
    heroImage: SanityImageAsset
    heroImageAltText: string
    heroImageBackground?: SanityImageAsset
    contentWelcomeMessage: string
    contentTitle: string
    contentText: string
    appleMusicLink: string
    coverImage: SanityImageAsset
    genre: string
    year: string
    artist: string
    contentLink: string
    shortLink:string
    qrCode: SanityImageAsset
    reverseContent:boolean
}

// {
//     name: 'coverImage',
//         title: 'Cover Image',
//     type: 'image',
//     options: {
//     hotspot: true,
// },
// },
// {
//     name: 'genre',
//         title: 'R&B/SOUL',
//     type: 'string'
// },
// {
//     name: 'year',
//         title: 'Year',
//     type: 'string',
// },
// {
//     name: 'artist',
//         title: 'Artist',
//     type: 'string',
// },
// {
//     name: 'contentLink',
//         title: 'Content Link',
//     type: 'string',
// },
// {
//     name: 'shortLink',
//         title: 'Short Link',
//     type: 'string',
// },
// {
//     name: 'qrCode',
//         title: 'Qr Code',
//     type: 'image',
//     options: {
//     hotspot: true,
// },
// },

export type ServiceAmenityTypeRef = SanityRef
export type ServiceAmenityType = {
    name: string
    imageSrc: SanityImageAsset
    title: string
    description: string
}


export type ThwPositivePsychologySectionType = {
    name: string
    superTitle:string
    contentTitle: string
    contentText: string
    contentBullets: string[]
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type ProprietorAtAGlanceType = {
    serviceName: string
    serviceTitle:string
    sessionList: string[]
    dividerImage: SanityImageAsset
    amenitiesSectionTitle: string
    amenities: string[]
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwAboutProprietorSectionType = {
    name: string
    proprietorImage: SanityImageAsset
    proprietorName:string
    proprietorTitle: string
    proprietorServices: ProprietorAtAGlanceType
    contentTitle: string
    contentText: string[]
    proprietorImageAltText: string
    proprietorSignatureImage: SanityImageAsset
    proprietorSignatureImageAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}
export type ArtistAtAGlanceType = {
    bornName: string
    artistName: string
    artistGenre: string
    birthName: Date
    birthDate: Date
    birthLocation: string
    otherNames: string[]
    occupations: string[]
    labels: string[]
    instruments: string[]
    fromActiveDate: Date
    toActiveDate: Date
    artistSongList: MmSongAdSectionType[]
    artistWorks: string[]
    videography: MmGalleryItemNoRefType[]
    ctaButtonText: string
    ctaButtonLink: string
}

export type AboutArtistSectionType = {
    name: string
    artistImage: SanityImageAsset
    artistName:string
    artistGenre: string
    artistDetails: ArtistAtAGlanceType
    contentTitle: string
    contentText: string[]
    artistImageAltText: string
    artistSignatureImage: SanityImageAsset
    artistSignatureImageAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwMottoSectionType = {
    name: string
    contentText: string
    parallaxImage: SanityImageAsset
    contentSuperTitle:string
}

export type ThwServiceItemType = {
    name: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
    learnMoreLink: string
    learnMoreText: string
    educationPageTitle: string
    educationPageSlimHeroImage: SanityImageAsset
    extendedDescriptions: string[]
    benefitsOfServiceTitle:string
    benefitsOfServiceContents:string[]
    benefitsOfServiceBullets:string[]
    serviceAmenities: ServiceAmenityType[]
    slug: SanitySlug
}

export type ThwServiceItemNoRefType = {
    name: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
    ctaButtonText: string
    ctaButtonLink: string
    learnMoreLink: string
    learnMoreText: string
    educationPageTitle: string
    educationPageSlimHeroImage: SanityImageAsset
    extendedDescriptions: string[]
    benefitsOfServiceTitle:string
    benefitsOfServiceContents:string[]
    benefitsOfServiceBullets:string[]
    serviceAmenities: ServiceAmenityType[]
    slug: SanitySlug
}


export type ThwServicesSectionType = {
    name: string
    contentTitle: string
    contentPreTitle: string
    contentText: string
    contentTexts: string[]
    servicesList: ThwServiceItemNoRefType[]
}
export type ThwWhyChooseUsSectionType = {
    name: string
    sectionTitle: string
    prosList: SanityRef[]
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    ctaButtonText: string
    ctaButtonLink: string
}

export type ThwWhyChooseUsItemType = {
    name: string
    imageSrc: SanityImageAsset
    imageSrcAltText: string
    contentTitle: string
    contentText: string
}

export type ThwContactUsSectionType = {
    name: string
    bgImageSrc: SanityImageAsset
    lhsTitle: string
    lhsContentText: string
    phone?: string
    email?: string,
    facebook?: string,
    twitter?: string,
    linkedIn?: string,
    youtube?: string,
    rhsTitle:string,
    formSubmitButtonText: string
}

export type MmContactUsSectionType = {
    name: string
    bgImageSrc: SanityImageAsset
    lhsTitle: string
    lhsContentText: string
    // phone?: string
    // email?: string,
    // facebook?: string,
    // twitter?: string,
    // linkedIn?: string,
    // youtube?: string,
    rhsTitle:string,
    formSubmitButtonText: string
}

export type MmGalleryItemNoRefType = {
    name: string
    isFeatured:boolean
    imageSrc: SanityImageAsset
    videoFile: SanityFileAsset
    youtubeLink:string
    imageSrcAltText: string
    contentTitle: string
    contentType: string
    slug: SanitySlug
}


export type MmGallerySectionType = {
    name: string
    contentTitle: string
    contentPreTitle: string
    contentText: string
    contentTexts: string[]
    isVideoView: boolean
    galleryList: MmGalleryItemNoRefType[]
}