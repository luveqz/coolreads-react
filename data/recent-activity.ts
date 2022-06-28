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
    publishedAt: '3m',
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
    publishedAt: '5h',
    comments: ['Lorem', 'Lorem'],
    likes: 3,
  },
}

export const list = {
  user,
  books: [
    {
      id: 1,
      title: 'Last Evening on Earth',
      authors: ['Roberto Bolaño'],
      coverUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71Jk-53tOfL.jpg',
    },
    {
      id: 2,
      title: 'Crónica del pájaro que da cuerda al mundo',
      authors: ['Haruki Murakami'],
      coverUrl:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348296785l/3392482.jpg',
    },
    {
      id: 3,
      title: 'A Confederacy of Dunces',
      authors: ['John Kennedy Toole'],
      coverUrl:
        'https://www.penguin.co.uk/content/dam/prh/books/570/57049/9780141182865.jpg.transform/PRHDesktopWide_small/image.jpg',
    },
    {
      id: 4,
      title: 'No Longer Human',
      authors: ['Osamu Dazai'],
      coverUrl:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1422638843l/194746.jpg',
    },
    {
      id: 5,
      title: 'The Catcher in the Rye ',
      authors: ['J.D. Salinger'],
      coverUrl:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg',
    },
  ],
  name: 'Anti-hero’s journey',
  meta: {
    publishedAt: '2w',
    comments: [],
    likes: 0,
  },
}
