export interface Route {
  title: string
  path: string
}

export const routes: Route[] = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Writing',
    path: '/writing'
  },
  {
    title: 'Sketches',
    path: '/sketches'
  }
]
