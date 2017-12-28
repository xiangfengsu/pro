import { stringify } from 'qs';
import request from '../utils/request';

export async function query(params) {
    const { fetchUrl } = params;
    delete params.fetchUrl;
    return request(`${fetchUrl}`);
}