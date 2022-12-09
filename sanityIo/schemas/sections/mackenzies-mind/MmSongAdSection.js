export default {
  name: 'MmSongAdSection',
  title: 'MM 1/2 Music Player + Content section',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'anchor',
      title: '#Anchor',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroImageAltText',
      title: 'Hero Image Alt Text',
      type: 'string'
    },
    {
      name: 'heroImageBackground',
      title: 'Hero Image Background',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'contentWelcomeMessage',
      title: 'Content Welcome Message',
      type: 'string',
    },
    {
      name: 'contentTitle',
      title: 'Content Title',
      type: 'string',
    },
    {
      name: 'contentText',
      title: 'Content Text',
      type: 'text',
    },
    {
      name: 'appleMusicLink',
      title: 'Apple Music Link',
      type: 'string'
    },
    {
      name: 'featuredSongFile',
      title: 'Song File',
      type: 'songFile'
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'genre',
      title: 'Genre',
      type: 'string'
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'string',
    },
    {
      name: 'contentLink',
      title: 'Content Link',
      type: 'string',
    },
    {
      name: 'shortLink',
      title: 'Short Link',
      type: 'string',
    },
   {
      name: 'reverseContent',
      title: 'Reverse content and player',
      type: 'boolean',
    },

    {
      name: 'qrCode',
      title: 'Qr Code',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'heroImage',
    },
  },
}



