import user from './user'

export const review = {
  user,
  book: {
    title: 'Last Evening on Earth',
    authors: ['Roberto Bolaño'],
    coverUrl:
      'https://images-na.ssl-images-amazon.com/images/I/71Jk-53tOfL.jpg',
  },
  review: {
    rating: 4.5,
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad illo porro iste dolor reprehenderit laboriosam nihil blanditiis in quasi! Atque tempora deleniti delectus recusandae ex, dolorem voluptatum dolores eius, itaque laboriosam maxime explicabo quis accusantium. Dolores consequatur voluptatum cumque. Atque tempora deleniti delectus recusandae ex, dolorem voluptatum dolores eius, itaque laboriosam maxime explicabo quis accusantium.',
  },
  meta: {
    publishedAt: '15m',
    comments: ['Lorem', 'Lorem', 'Lorem', 'Lorem'],
    likes: 108,
  },
}

export const quote = {
  user,
  book: {
    title: 'Last Evening on Earth',
    authors: ['Roberto Bolaño'],
  },
  quote:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad illo porro iste dolor reprehenderit laboriosam nihil blanditiis in quasi! Atque tempora deleniti delectus recusandae ex, dolorem voluptatum dolores eius, itaque laboriosam maxime explicabo quis accusantium. Dolores consequatur voluptatum cumque. Atque tempora deleniti delectus recusandae ex, dolorem voluptatum dolores eius, itaque laboriosam maxime explicabo quis accusantium.',
  meta: {
    publishedAt: '15m',
    comments: ['Lorem', 'Lorem'],
    likes: 3,
  },
}
