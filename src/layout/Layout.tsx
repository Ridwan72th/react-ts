import { Row, Col, } from 'antd'
import Content from './Content'
import SideMenu from './SideMenu'


const Layout = () => {

    return (
        <div className='w-full'>
            <Row className='min-h-screen'>
                <Col>
                    <div className='h-[50px] flex justify-center items-center bg-orange-400 rounded-t-lg'>
                        <div className='text-white'>React-ts</div>
                    </div>
                    <SideMenu />
                </Col>
                <Col flex={1} >
                    <div className='h-[50px]'>
                    </div>
                    <Content />
                </Col>
            </Row >
        </div >
    )
}

export default Layout