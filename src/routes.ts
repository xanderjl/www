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
    title: 'OSS',
    path: '/open-source'
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
