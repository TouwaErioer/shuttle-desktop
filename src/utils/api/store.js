import {get} from '@/utils/request/request'

const API = '/major/store/';

// 根据serviceId查询store
export const findStoreByServiceId = (serviceId, pageNo, pageSize) => get(API + 'findByServiceId/' + serviceId + '?pageNo=' + pageNo + '&pageSize=' + pageSize);

// 查询热门store
export const findPopularStore = () => get(API + 'rank');

// 根据id查询store
export const findStoreById = (id) => get(API + 'findById/' + id);