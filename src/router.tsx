import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'

const Dashboard = lazy(() => import('./containers/Dashboard'))
const UserManagement = lazy(() => import('./containers/UserManangement'))
const NotFoundPage = lazy(() => import('./containers/Notfound'))




const RouterProvider = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='*' element={<NotFoundPage />} />
                <Route index element={<Dashboard />} />
                <Route path="/user-management" element={<UserManagement />} />
            </Route>
        </Routes>
    )
}

export default RouterProvider