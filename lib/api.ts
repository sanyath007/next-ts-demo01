import axios, { AxiosResponse } from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getPosts = async () => {
    try {
        const res: AxiosResponse<any, any> = await api.get('/api/posts?page=&cate=2&limit=5');

        return res.data;
    } catch (error) {
        return error;
    }
}