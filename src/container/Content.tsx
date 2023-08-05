import { Outlet } from 'react-router-dom'


const Content = () => {
    return (
        <div className='h-full w-full'>
            <Outlet />
        </div>
    )
}

export default Content