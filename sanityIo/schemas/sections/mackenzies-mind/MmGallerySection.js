export default {
    name: 'MmGallerySection',
    title: "MM Image Gallery Section",
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'contentPreTitle',
            title: 'Pre Title',
            type: 'string',
        },
        {
            name: 'contentTitle',
            title: 'Large Title',
            type: 'string',
        },
        {
            name: 'isVideoView',
            title: 'Large Title',
            type: 'string',
        },
        {
            name: 'contentTexts',
            title: 'Content Text',
            type: 'array',
            of: [{type: 'text'}]
        },
        {
            name: 'galleryList',
            title: 'Gallery Items',
            type: 'array',
            of: [{type:"reference", to:[{type: 'MmGalleryItem'}]}]
        }
    ]
}



