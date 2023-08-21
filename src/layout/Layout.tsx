import { Row, Col, } from 'antd'
import Content from './Content'


const Layout = () => {
    return (
        <div className='w-full'>
            <Row className='min-h-screen'>
                <Col flex={1} >
                    <Content />
                </Col>
            </Row >
        </div >
    )
}

export default Layout