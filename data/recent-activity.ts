import user from './user'

export const review = {
  user,
  book: {
    title: 'Last Evening on Earth',
    authors: ['Roberto Bolaño'],
    coverUrl:
      'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/coolreads%2Fcovers%2Fleoe.webp?alt=media',
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
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/coolreads%2Fcovers%2Fleoe.webp?alt=media',
    },
    {
      id: 2,
      title: 'Crónica del pájaro que da cuerda al mundo',
      authors: ['Haruki Murakami'],
      coverUrl:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/coolreads%2Fcovers%2Fcdpqdcam.webp?alt=media',
    },
    {
      id: 3,
      title: 'A Confederacy of Dunces',
      authors: ['John Kennedy Toole'],
      coverUrl:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/coolreads%2Fcovers%2Facod.webp?alt=media',
    },
    {
      id: 4,
      title: 'No Longer Human',
      authors: ['Osamu Dazai'],
      coverUrl:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/coolreads%2Fcovers%2Fnlh.webp?alt=media',
    },
    {
      id: 5,
      title: 'The Catcher in the Rye ',
      authors: ['J.D. Salinger'],
      coverUrl:
        'https://firebasestorage.googleapis.com/v0/b/fictolab.appspot.com/o/coolreads%2Fcovers%2Ftcitr.webp?alt=media',
    },
  ],
  name: 'Anti-hero’s journey',
  meta: {
    publishedAt: '2w',
    comments: [],
    likes: 0,
  },
}
