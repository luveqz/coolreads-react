import { User, QueryUserArgs } from '@/.output/graphql'

function user(_ctx: {}, { username }: QueryUserArgs): User {
  return {
    id: '5',
    firstName: 'Haylee',
    lastName: 'Caulfield',
    username: 'goldenfish',
    bio: 'I could’ve told you my whole autobiography, but I didn’t felt like it.',
    avatarUrl:
      'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/coolreads%2Fhaylee.webp?alt=media',
  }
}

export default {
  Query: {
    user,
  },
}
