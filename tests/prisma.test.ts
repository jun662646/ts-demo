import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

describe('example test with Prisma Client', () => {
  beforeAll(async () => {
    await prisma.user.deleteMany({})
  })
  afterAll(async () => {
    await prisma.$disconnect()
  })
  test('test query', async () => {
    const data = await prisma.user.findMany({ take: 1, select: { id: true } })
    expect(data).toBeTruthy()
  })

  test('test create', async () => {
    let email = 'alice@prisma.io'
    let name = 'Alice'

    const user1 = await prisma.user.create({
      data: {
        email,
        name,
      },
    })

    expect(user1.id).toBeTruthy()
    expect(user1.name).toEqual(name)
    expect(user1.email).toEqual(email)

    email = 'shakuntala@prisma.io'
    name = 'Shakuntala'

    const user2 = await prisma.user.create({
      data: {
        name,
        email,
      },
    })

    expect(user2.id).toBeTruthy()
    expect(user2.name).toEqual(name)
    expect(user2.email).toEqual(email)

    const updatedName = 'Shakuntala Devi'
    const updatedUser2 = await prisma.user.update({
      data: {
        name: updatedName,
      },
      where: {
        id: user2.id,
      },
    })

    expect(updatedUser2.name).toEqual(updatedName)
  })

})
