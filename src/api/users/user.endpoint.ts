const baseURL = 'https://reqres.in/api';

export const viewUserListEndpoint = {
    view: `${baseURL}/users/`
};

export const viewUserDetailEndpoint = {
    viewUserById: (id: number | string) => `${baseURL}/users/${id}`,
};

export const createUserEndpoint = {
    create: `${baseURL}/users/`
};