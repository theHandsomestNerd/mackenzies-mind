
export default {
  name: 'MmGalleryItem',
  title: 'MM Gallery Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'imageSrc',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'videoFile',
      title: 'VideoFile',
      type: 'videoFile'
    },
    {
      name: 'imageSrcAltText',
      title: 'Image Alt Text',
      type: 'string',
    },
    {
      name: 'youtubeLink',
      title: 'YoutubeLink',
      type: 'string',
    },
    {
      name: 'contentTitle',
      title: 'Content Title',
      type: 'string',
    },
    {
      name: 'isFeatured',
      title: 'Is this the featured',
      type: 'boolean',
    },
    {
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
    },
    {
      name: 'shortContentText',
      title: 'Short Content Text',
      type: 'text'
    },
    {
      name: 'contentText',
      title: 'Content Text',
      type: 'text'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'imageSrc',
    },
  },
}



