import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Blog',
  description: 'Les dernières actualités de mDevsLabs.'
};

export default function BlogPage() {
  redirect('/news');
}