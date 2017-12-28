import { query } from '../services/dictionary';

export default {
    namespace: 'dictionary',
    state: {
    },
    effects: {
        *query({ payload }, { call, put }) {
            const { dictionaryKey } = payload;
            delete payload.dictionaryKey;
            const response = yield call(query, payload);
            const { status = -1, errorMessage = '', body = [] } = response;
            yield put({
                type: 'querySuccess',
                payload: {
                    [dictionaryKey]: body
                },
            });
        }

    },

    reducers: {
        querySuccess(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        }
    },
};
