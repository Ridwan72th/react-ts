import { Table } from 'antd';
import { getUsersApi } from "../../service/user";
import {
    useQuery
} from 'react-query'


const UserManagement = () => {
    const { data: userList } = useQuery("userList", () => { return getUsersApi() })


    console.log("data", userList);

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

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
        <div><Table dataSource={userList} columns={columns} rowKey="id" /></div>
    )
}

export default UserManagement


