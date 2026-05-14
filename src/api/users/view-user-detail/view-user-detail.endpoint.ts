const baseURL = 'https://reqres.in/api';

export const viewUserDetailEndpoint = {
    viewUserById: (id: number | string) => `${baseURL}/users/${id}`,
};