import { Outlet } from 'react-router-dom'


const Content = () => {
    return (
        <div className='px-5 h-content'>
            <Outlet />
        </div>
    )
}

export default Content