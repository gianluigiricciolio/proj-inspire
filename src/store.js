import { reactive } from "vue"

export const store = reactive({
    partners: [
        {
            name: 'Avantagarde',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-1@2x.png'
        },
        {
            name: 'Fastlane',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-9@2x.png'
        },
        {
            name: 'Ron Jones',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-7@2x.png'
        },
        {
            name: 'Chippys',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-3@2x.png'
        },
        {
            name: 'Bullseye',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-4@2x.png'
        },
        {
            name: 'Mighty Furnitures',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/client-5@2x.png'
        },
    ],
    cardInfo: [
        {
            name: 'ANNA PHILANDROS',
            role: 'Creative Director',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-142@2x-443x424.png'
        },
        {
            name: 'DEXTER MATTHEW',
            role: 'Designer',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-143@2x-443x424.png'
        },
        {
            name: ' RANDY SMITH',
            role: 'Creative Director',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-144@2x-443x424.png'
        },
        {
            name: ' ANGELO GARNER',
            role: 'Co-founder',
            img: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/08/Mask-Group-146@2x-443x424.png'
        },
    ],
    cardData: [
        {
            icon: 'fa-solid fa-database',
            name: 'Virtual Document'
        },
        {
            icon: 'fa-solid fa-money-bill-1-wave',
            name: 'Flexible Payments'
        },
        {
            icon: 'fa-solid fa-gauge-high',
            name: 'SEO Tools'
        },
        {
            icon: 'fa-regular fa-gem',
            name: 'UI Design'
        }
    ],
    supportCard: [
        {
            title: 'DESIGNING',
            desc: 'All Designs',
            value: '10',
            type: '/Design',
            theme: 'black-gradient',
            feats: [
                'Creative Design Enabled',
                'Vibrant Color Usage',
                'Eye Catching Design',
                'Extreme Typography',
                'Exceptional Design'
            ]
        },
        {
            title: 'DEVELOPMENT',
            desc: 'WordPress Projects',
            value: '15',
            type: '/Design',
            theme: 'green-gradient',
            feats: [
                'Creative Design Enabled',
                'Vibrant Color Usage',
                'Eye Catching Design',
                'Extreme Typography',
                'Exceptional Design'
            ]
        },
        {
            title: 'SEO',
            desc: 'Web Products',
            value: '10',
            type: '/Product',
            theme: 'black-gradient',
            feats: [
                'Creative Design Enabled',
                'Vibrant Color Usage',
                'Eye Catching Design',
                'Extreme Typography',
                'Exceptional Design'
            ]
        },
    ],
    carouselInfo: [
        {
            title: 'We are a Web Design Agency',
            imageUrl: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2022/04/img1-1644x1644.jpg',
        },

        {
            title: 'A Group of Expert Planners',
            imageUrl: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2022/04/img2-1644x1644.jpg',
        },

        {
            title: 'Focus on Your Business',
            imageUrl: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2022/04/img3-1644x1644.jpg',
        }
    ],
    projects: [
        {
            imageUrl: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/ina-soulis-227104-unsplash-1024x1024.jpg',
            name: 'The Basket of Flowers',
            paragraph: ['BRANDING', 'MARKETING'],
        },
        {
            imageUrl: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/sunisa-misa-531163-unsplash-1024x1024.jpg',
            name: 'A Famous Ferris Wheel',
            paragraph: ['MARKETING'],
        },
        {
            imageUrl: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/355H-1024x1024.jpg',
            name: 'Complementary Colours',
            paragraph: ['BRANDING', 'MARKETING'],
        },
        {
            imageUrl: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/photo-1448932252197-d19750584e56-1024x1024.jpg',
            name: 'Business Prestige',
            paragraph: ['BRANDING'],
        },
        {
            imageUrl: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/business-competition-PB366D8-1024x1024.jpg',
            name: 'Colourful Origami Boats',
            paragraph: ['BRANDING', 'MARKETING'],
        },
        {
            imageUrl: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg',
            name: 'Modern Couch',
            paragraph: ['MARKETING'],
        },
        {
            imageUrl: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/aa9a4539-PQGJ7HU-1024x1024.jpg',
            name: 'Hot Air Balloons',
            paragraph: ['BRANDING', 'MARKETING'],
        },
        {
            imageUrl: 'https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/cody-davis-253928-unsplash-1024x1024.jpg',
            name: 'Make Difference',
            paragraph: ['BRANDING'],
        },
    ],
    contactCard: [
        {
            icon: "fa-solid fa-location-dot",
            title: "ADDRESS:",
            info: "123 Ave, Lorem City, site Country, The World",
        },
        {
            icon: "fa-solid fa-phone-volume",
            title: "PHONE:",
            info: "(001) 123456789 - 234567891 info@phloxbusiness.com",
        },
        {
            icon: "fa-solid fa-stopwatch",
            title: "WORK HOURS:",
            info: "Monday-Friday 09.00-23.00, Sunday 09.00-16.00",
        },
    ],
});
