import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const socialsJson = [
    { name: 'twitter', link: 'twitter.com/name' },
    { name: 'facebook', link: 'facebook.com/name' },
    { name: 'linkedin', link: 'linkedin.com/name' },
    { name: 'instagram', link: 'instagram.com/name' },
]

const imageJson = [
    {
        name: 'helloImage',
        link: 'https://unsplash.com/photos/black-smartphone-beside-pen-rNYCrcjUnOA',
    },
]
const teckStack = [
    {
        name: 'Express',
    },
    {
        name: 'Nodejs',
    },
    {
        name: 'Typescript',
    },
    {
        name: 'Javascript',
    },
]

async function main() {
    await prisma.user.upsert({
        where: { id: 1 },
        update: {},
        create: {
            username: 'Jovantest',
            email: 'jovan@test.com',
            password: 'sss$helloPass',
            profile: {
                create: {
                    firstName: 'Jovan',
                    lastName: 'Lanutan',
                    socials: socialsJson,
                },
            },
            about: {
                create: {
                    title: 'my title',
                    description: 'my random description would just test',
                },
            },
            work: {
                create: {
                    position: 'Accounting',
                    companyName: 'X Technologies Inc.',
                    location: 'New york',
                    startDate: new Date('2023-01-22'),
                    endDate: new Date('2024-01-01'),
                },
            },
            project: {
                create: {
                    name: 'Project A',
                    description: 'Project A is simle project',
                    image: imageJson,
                    techStack: teckStack,
                },
            },
            contact: {
                create: {
                    address: 'New york',
                    email: 'jovan@test.com',
                    phone: '0232321',
                },
            },
        },
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })
