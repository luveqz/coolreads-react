import { PrismaClient } from '@prisma/client'
import { QueryUserArgs } from '@/.output/graphql'

const prisma = new PrismaClient()

async function user(_ctx: {}, { username }: QueryUserArgs) {
  const user = await prisma.user.findFirst({
    where: { username },
  })
  return user
}

export default {
  Query: {
    user,
  },
}
