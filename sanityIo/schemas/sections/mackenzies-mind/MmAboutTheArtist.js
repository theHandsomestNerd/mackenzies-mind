
export default {
  name: 'MmAboutTheArtistSection',
  title: 'MM THW 1/3 Image + 2/3 Content',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'artistImage',
      title: 'Artist Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'artistName',
      title: 'Artist Name',
      type: 'string',
    },
    {
      name: 'artistGenre',
      title: 'Artist Genre',
      type: 'string',
    },
    {
      name: 'artistDetails',
      title: 'Artist Details',
      type: 'artistAtAGlance',
    },
    {
      name: 'contentTitle',
      title: 'Content Title',
      type: 'string',
    },
    {
      name: 'contentText',
      title: 'Content Text',
      type: 'array',
      of:[{type: 'text'}]
    },
    {
      name: 'artistImageAltText',
      title: 'Artist Image Alt Text',
      type: 'string'
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string'
    },
    {
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'artistImage',
    },
  },
}



