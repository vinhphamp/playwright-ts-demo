import loginData from '../../../test-data/api/login.data.json';

export function buildLoginPayload (
    testCase: keyof typeof loginData
) {
    return loginData[testCase];
}