const HOMEPAGE = `
          title,
          isUnderConstruction,
          releaseDate,
          slug,
          description,
          metaImage,
          pageContent,
          structuredData,
          facebook,
          facebookIconSrc{
            asset->{
              _id,
              url,
              altText
             }
          },
          twitter,
          twitterIconSrc{
            asset->{
              _id,
              url,
              altText
             }
          },
          instagram,
          instagramIconSrc{
            asset->{
              _id,
              url,
              altText
             }
          },
          androidPlayStoreLink,
          androidPlayStoreIconSrc{
            asset->{
              _id,
              url,
              altText
             }
          },
          appStoreLink,
          appStoreIconSrc{
            asset->{
              _id,
              url,
              altText
             }
          },
          fdicImage{
            asset->{
              _id,
              url,
              altText
             }
          },
          fdicDisclaimer
`
export default {HOMEPAGE}