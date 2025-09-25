import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Danylo Morhun - Frontend Developer Portfolio',
    short_name: 'Danylo Morhun',
    description: 'Experienced Frontend Developer with 3+ years of expertise in React, TypeScript, Next.js, and modern web technologies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/face.webp',
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/face.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
    categories: ['portfolio', 'developer', 'frontend', 'react', 'typescript'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}
