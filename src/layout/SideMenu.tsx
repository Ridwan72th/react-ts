import { Menu, MenuProps } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const SideMenu = () => {
    const navigate = useNavigate();

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const onClick: MenuProps['onClick'] = (ev: any) => {
        console.log("event", ev);

        navigate(ev.key)
    };

    const items: MenuProps['items'] = [
        getItem('Home', '/'),
    ]


    return (
        <div className='h-full bg-gray-50'>
            <Menu
                onClick={onClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </div>

    )
}

export default SideMenu