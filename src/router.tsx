import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './container/Layout'
import Dashboard from './component/Dashboard'
import UserManagement from './component/UserManangement'

const RouterProvider = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="/user-management" element={<UserManagement />} />
            </Route>
        </Routes>
    )
}

export default RouterProvider