import { Table } from 'antd';
import { getUsersApi } from "../../service/user";
import {
    useQuery
} from 'react-query'


const UserManagement = () => {
    const { data: getUserList, isLoading: getUserListLoading } = useQuery("userList", () => { return getUsersApi() })

    const columns = [
        {
            title: 'Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
    ];
    return (
        <div>
            <Table dataSource={getUserList} columns={columns} rowKey="id" loading={getUserListLoading} />
        </div>
    )
}

export default UserManagement


