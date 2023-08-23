import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'

const NotFoundPage = lazy(() => import('./containers/Notfound'))
const Home = lazy(() => import('./containers/Home'))
const Sandbox = lazy(() => import('./containers/Sandbox'))






const RouterProvider = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='*' element={<NotFoundPage />} />
                <Route index element={<Home />} />
                <Route path='/sandbox' element={<Sandbox />} />

            </Route>
        </Routes>
    )
}

export default RouterProvider