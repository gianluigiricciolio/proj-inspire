import { reactive } from "vue"

export const store = reactive({
    selectedItem: "",
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
    items: [
        {
            id: "PB-70_17,5_40",
            name: "Portabottiglie",
            img_src: "src/assets/img/items/PB-70_17,5_40/porta-bottiglie-blu.png",
            dimension: "17,5 x 40",
            gsm: "70",
            colors: [
                {
                    id: "BL",
                    name: "Dark Blue",
                    hexa: "#000000"
                },
                {
                    id: "BX",
                    name: "Bordeaux",
                    hexa: "#000001"
                },
                {
                    id: "NR",
                    name: "Nero",
                    hexa: "#000001"
                },
            ],
            prints: [
                {
                    id: "001",
                    name: "bottle",
                    img_src: "blablabla"
                },
                {
                    id: "000",
                    name: "Senza disegno",
                    img_src: ""
                },
            ]
        },
        {
            id: "SC-60_30_40",
            name: "Sacchetto",
            img_src: "src/assets/img/items/SC-60_30_40/sacca-portascarpe-blu.png",
            dimension: "30 x 40",
            gsm: "60",
            colors: [
                {
                    id: "BL",
                    name: "Dark Blue",
                    hexa: "#000000"
                },
                {
                    id: "BX",
                    name: "Bordeaux",
                    hexa: "#000001"
                },
                {
                    id: "NR",
                    name: "Nero",
                    hexa: "#000001"
                },
                {
                    id: "MR",
                    name: "Marrone",
                    hexa: "#000001"
                },
            ],
            prints: [
                {
                    id: "000",
                    name: "Senza disegno",
                    img_src: ""
                },
                {
                    id: "101",
                    name: "Decollette Donna",
                    img_src: "blablabla"
                },
                {
                    id: "102",
                    name: "Francesina Uomo",
                    img_src: "blablabla"
                },
                {
                    id: "103",
                    name: "Snickers Ragazzo",
                    img_src: "blablabla"
                },

            ]
        },
        {
            id: "ZPC-60_30_40",
            name: "Zainetto",
            img_src: "./src/assets/img/items/ZPC-60_30_40/zainetto-blu.png",
            dimension: "30 x 40",
            gsm: "60",
            colors: [
                {
                    id: "BL",
                    name: "Dark Blue",
                    hexa: "#000000"
                },
                {
                    id: "BX",
                    name: "Bordeaux",
                    hexa: "#000001"
                },
                {
                    id: "NR",
                    name: "Nero",
                    hexa: "#000001"
                },
                {
                    id: "MR",
                    name: "Marrone",
                    hexa: "#000001"
                },
            ],
            prints: [
                {
                    id: "000",
                    name: "Senza disegno",
                    img_src: ""
                },
                {
                    id: "501",
                    name: "Sport Running Gym",
                    img_src: ""
                },
                {
                    id: "502",
                    name: "Sport Running Gym Orange",
                    img_src: ""
                },
                {
                    id: "521",
                    name: "Bikers Cerchio",
                    img_src: ""
                },
                {
                    id: "541",
                    name: "Pallone e Scarpette",
                    img_src: "blablabla"
                },
                {
                    id: "581",
                    name: "Tennis e Padel",
                    img_src: "blablabla"
                },
                {
                    id: "582",
                    name: "Tennis e Padel Orange",
                    img_src: "blablabla"
                },
                {
                    id: "601",
                    name: "Topolino con Stella",
                    img_src: "blablabla"
                },
                {
                    id: "611",
                    name: "Topolino in Barca",
                    img_src: "blablabla"
                },
                {
                    id: "621",
                    name: "Minnie con Stella",
                    img_src: "blablabla"
                },
                {
                    id: "641",
                    name: "Topolino e Minnie nel Cuore",
                    img_src: "blablabla"
                },
                {
                    id: "661",
                    name: "Image Unisex",
                    img_src: "blablabla"
                },
                {
                    id: "671",
                    name: "Play e Libri Orange",
                    img_src: "blablabla"
                },
                {
                    id: "672",
                    name: "Play e Libri",
                    img_src: "blablabla"
                },
                {
                    id: "701",
                    name: "Cartolina Napoli Naif",
                    img_src: "blablabla"
                },
                {
                    id: "711",
                    name: "Formule Matematiche",
                    img_src: "blablabla"
                },
                {
                    id: "721",
                    name: "Lettera a mano con Timbri",
                    img_src: "blablabla"
                },
                {
                    id: "722",
                    name: "Lettera a mano con Timbri Black",
                    img_src: "blablabla"
                },
                {
                    id: "731",
                    name: "Francobolli Misti",
                    img_src: "blablabla"
                },
                {
                    id: "741",
                    name: "Pupazzetti",
                    img_src: "blablabla"
                },
                {
                    id: "751",
                    name: "Paris disegno Eiffel e Palazzo",
                    img_src: "blablabla"
                },
                {
                    id: "761",
                    name: "New York Astratto",
                    img_src: "blablabla"
                },
            ]
        },
        {
            id: "ZGC-70_40_50",
            name: "Zaino Cinture",
            img_src: "./src/assets/img/items/ZGC-70_40_50/zaino-passanti-blu.png",
            dimension: "40 x 50",
            gsm: "70",
            colors: [
                {
                    id: "BL",
                    name: "Dark Blue",
                    hexa: "#000000"
                },
                {
                    id: "BX",
                    name: "Bordeaux",
                    hexa: "#000001"
                },
                {
                    id: "NR",
                    name: "Nero",
                    hexa: "#000001"
                },
                {
                    id: "MR",
                    name: "Marrone",
                    hexa: "#000001"
                },
            ],
            prints: [
                {
                    id: "000",
                    name: "Senza disegno",
                    img_src: ""
                },
                {
                    id: "501",
                    name: "Sport Running Gym",
                    img_src: ""
                },
                {
                    id: "502",
                    name: "Sport Running Gym Orange",
                    img_src: ""
                },
                {
                    id: "521",
                    name: "Bikers Cerchio",
                    img_src: ""
                },
                {
                    id: "541",
                    name: "Pallone e Scarpette",
                    img_src: "blablabla"
                },
                {
                    id: "581",
                    name: "Tennis e Padel",
                    img_src: "blablabla"
                },
                {
                    id: "582",
                    name: "Tennis e Padel Orange",
                    img_src: "blablabla"
                },
                {
                    id: "601",
                    name: "Topolino con Stella",
                    img_src: "blablabla"
                },
                {
                    id: "611",
                    name: "Topolino in Barca",
                    img_src: "blablabla"
                },
                {
                    id: "621",
                    name: "Minnie con Stella",
                    img_src: "blablabla"
                },
                {
                    id: "641",
                    name: "Topolino e Minnie nel Cuore",
                    img_src: "blablabla"
                },
                {
                    id: "661",
                    name: "Image Unisex",
                    img_src: "blablabla"
                },
                {
                    id: "671",
                    name: "Play e Libri Orange",
                    img_src: "blablabla"
                },
                {
                    id: "672",
                    name: "Play e Libri",
                    img_src: "blablabla"
                },
                {
                    id: "701",
                    name: "Cartolina Napoli Naif",
                    img_src: "blablabla"
                },
                {
                    id: "711",
                    name: "Formule Matematiche",
                    img_src: "blablabla"
                },
                {
                    id: "721",
                    name: "Lettera a mano con Timbri",
                    img_src: "blablabla"
                },
                {
                    id: "722",
                    name: "Lettera a mano con Timbri Black",
                    img_src: "blablabla"
                },
                {
                    id: "731",
                    name: "Francobolli Misti",
                    img_src: "blablabla"
                },
                {
                    id: "741",
                    name: "Pupazzetti",
                    img_src: "blablabla"
                },
                {
                    id: "751",
                    name: "Paris disegno Eiffel e Palazzo",
                    img_src: "blablabla"
                },
                {
                    id: "761",
                    name: "New York Astratto",
                    img_src: "blablabla"
                },
            ]
        },
        /*    {
                id: "ZGB-70_40_50",
                name: "Zaino Borchie",
                img_src: "./src/assets/img/items/ZGB-70_40_50/zaino-borchie-blu.png",
                dimension: "40 x 50",
                gsm: "70",
                colors: [
                    {
                        id: "BL",
                        name: "Dark Blue",
                        hexa: "#000000"
                    },
                    {
                        id: "BX",
                        name: "Bordeaux",
                        hexa: "#000001"
                    },
                    {
                        id: "NR",
                        name: "Nero",
                        hexa: "#000001"
                    },
                    {
                        id: "MR",
                        name: "Marrone",
                        hexa: "#000001"
                    },
                ],
                prints: [
                    {
                        id: "000",
                        name: "Senza disegno",
                        img_src: ""
                    },
                    {
                        id: "501",
                        name: "Sport Running Gym",
                        img_src: ""
                    },
                    {
                        id: "502",
                        name: "Sport Running Gym Orange",
                        img_src: ""
                    },
                    {
                        id: "521",
                        name: "Bikers Cerchio",
                        img_src: ""
                    },
                    {
                        id: "541",
                        name: "Pallone e Scarpette",
                        img_src: "blablabla"
                    },
                    {
                        id: "581",
                        name: "Tennis e Padel",
                        img_src: "blablabla"
                    },
                    {
                        id: "582",
                        name: "Tennis e Padel Orange",
                        img_src: "blablabla"
                    },
                    {
                        id: "601",
                        name: "Topolino con Stella",
                        img_src: "blablabla"
                    },
                    {
                        id: "611",
                        name: "Topolino in Barca",
                        img_src: "blablabla"
                    },
                    {
                        id: "621",
                        name: "Minnie con Stella",
                        img_src: "blablabla"
                    },
                    {
                        id: "641",
                        name: "Topolino e Minnie nel Cuore",
                        img_src: "blablabla"
                    },
                    {
                        id: "661",
                        name: "Image Unisex",
                        img_src: "blablabla"
                    },
                    {
                        id: "671",
                        name: "Play e Libri Orange",
                        img_src: "blablabla"
                    },
                    {
                        id: "672",
                        name: "Play e Libri",
                        img_src: "blablabla"
                    },
                    {
                        id: "701",
                        name: "Cartolina Napoli Naif",
                        img_src: "blablabla"
                    },
                    {
                        id: "711",
                        name: "Formule Matematiche",
                        img_src: "blablabla"
                    },
                    {
                        id: "721",
                        name: "Lettera a mano con Timbri",
                        img_src: "blablabla"
                    },
                    {
                        id: "722",
                        name: "Lettera a mano con Timbri Black",
                        img_src: "blablabla"
                    },
                    {
                        id: "731",
                        name: "Francobolli Misti",
                        img_src: "blablabla"
                    },
                    {
                        id: "741",
                        name: "Pupazzetti",
                        img_src: "blablabla"
                    },
                    {
                        id: "751",
                        name: "Paris disegno Eiffel e Palazzo",
                        img_src: "blablabla"
                    },
                    {
                        id: "761",
                        name: "New York Astratto",
                        img_src: "blablabla"
                    },
                ]
            }, */

    ]
});
