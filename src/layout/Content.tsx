import { Outlet } from 'react-router-dom'


const Content = () => {
    return (
        <div className='px-5'>
            <Outlet />
        </div>
    )
}

export default Content