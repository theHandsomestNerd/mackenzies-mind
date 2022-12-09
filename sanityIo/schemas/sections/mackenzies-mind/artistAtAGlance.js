export default {
    name: 'artistAtAGlance',
    title: "MM Artist At a Glance",
    type: 'object',
    fields: [
        {
            name: 'bornName',
            title: 'Service Name',
            type: 'string',
        },
        {
            name: 'artistName',
            title: 'Artist Name',
            type: 'string',
        },
        {
            name: 'birthDate',
            title: 'Birthday',
            type: 'date',
        },{
            name: 'birthLocation',
            title: 'Birth Location',
            type: 'string',
        },
        {
            name: 'fromActiveDate',
            title: 'From Active Date',
            type: 'date',
        },
        {
            name: 'toActiveDate',
            title: 'To Active Date',
            type: 'date',
        },
        {
            name: 'otherNames',
            title: 'Alternate names',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'occupations',
            title: 'Occupations',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'instruments',
            title: 'Instruments',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'labels',
            title: 'Labels',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'artistSongList',
            title: 'Songs',
            type: 'array',
            of: [{type: 'reference', to: [{type: "MmSongAdSection"}]}]
        },
        {
            name: 'artistWorks',
            title: 'Works',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'influencedBy',
            title: 'Influenced By',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'videography',
            title: 'Videography',
            type: 'array',
            of: [{type:"reference",to:[{type: 'MmGalleryItem'}]}]
        },
        {
            name: 'ctaButtonText',
            title: 'Learn More Button Text',
            type: 'string'
        },
        {
            name: 'ctaButtonLink',
            title: 'Learn More Button Link',
            type: 'string'
        }
    ],
    preview: {
        select: {
            title: 'serviceName',
            media: 'dividerImage',
        },
    },
}



