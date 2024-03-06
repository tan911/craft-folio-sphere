import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const socialsJson = [
    { name: 'twitter', link: 'twitter.com/name' },
    { name: 'facebook', link: 'facebook.com/name' },
    { name: 'linkedin', link: 'linkedin.com/name' },
    { name: 'instagram', link: 'instagram.com/name' },
]

const imageJson = [
    {
        name: faker.image.avatar(),
        link: faker.image.url(),
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
        where: { id: faker.string.uuid() },
        update: {},
        create: {
            name: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            image: faker.image.avatarGitHub(),
            profile: {
                create: {
                    firstName: faker.person.firstName(),
                    lastName: faker.person.lastName(),
                    socials: socialsJson,
                },
            },
            about: {
                create: {
                    title: 'HI!, my little bio.',
                    description: faker.person.bio(),
                },
            },
            work: {
                create: {
                    position: faker.person.jobTitle(),
                    companyName: faker.company.name(),
                    location: faker.location.country(),
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
                    address: faker.location.country(),
                    email: faker.internet.email(),
                    phone: faker.phone.imei(),
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
