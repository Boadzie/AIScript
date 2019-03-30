module.exports = {
    themeConfig: {
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Data-Science',
                link: '/data-science/data-science'
            },
            {
                text: 'AI',
                items: [{
                        text: 'AI',
                        link: '/ai/ai'
                    },
                    {
                        text: 'Machine Learning',
                        link: '/ai/ml/ml'
                    },
                    {
                        text: 'Natural Language Processing',
                        link: '/ai/nlp'
                    },
                    {
                        text: 'Computer Vision',
                        link: '/ai/cv'
                    },
                    {
                        text: 'Business Analytics',
                        link: '/ai/bi'
                    },
                    {
                        text: 'Big Data',
                        link: '/ai/bd'
                    }
                ]

            },
            {
                text: 'Blockchain',
                link: '/blockchain/blockchain'
            },
            {
                text: 'Cybersecurity',
                link: '/cybersecurity/cs'
            },
            {
                text: 'Design',
                link: '/design/ds'
            },
            {
                text: 'About',
                link: '/about/about'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/Boadzie/AIScript'
            },
        ],
        sidebar: 'auto'
    }
}