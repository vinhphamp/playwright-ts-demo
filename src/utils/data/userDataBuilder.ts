import createUserData from '../../../test-data/users/createuser.data.json';

export function buildUser() {
    return {
        ...createUserData.newUser,
        username: `${createUserData.newUser.username}_${Date.now()}`
    };
}