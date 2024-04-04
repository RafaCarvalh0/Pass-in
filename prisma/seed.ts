import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: 'a2c767e6-06f6-4810-9cc8-019cf1b41a2c',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'evento de node.js',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})