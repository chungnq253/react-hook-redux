import axiosService from '../helpers/axios-service';

export const fetchUsersAPI = (keyword = '') => axiosService.get(`http://5d418c0475f67300146b3f63.mockapi.io/user?search=${keyword}`);
