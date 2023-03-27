import Login from '@/pages/login'
import Index from '@/pages/Index'
import NotFound from '@/pages//NotFound'

const Router = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/home/:username',
    element: <Index />,
  },
  {
    path: '/home',
    element: <Index />,
  },
  {
    path: '/tweet/:id',
    element: <Index />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Login />,
  },
  { path: '*', element: <NotFound /> },
]

export default Router
