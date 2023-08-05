import { instance } from '.';

export const getUsersApi = async () => {
    const res = await instance.get('/user')
    return res.data
}