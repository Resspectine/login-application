import C from '../constants';

export const loginUser = (user) =>
    ({
        type: C.LOGIN_USER,
        user
    });
