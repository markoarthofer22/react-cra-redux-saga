import { put, takeEvery, all, take, actionChannel } from 'redux-saga/effects';
import { addConsoleLogAsync, depositMoney } from './reducers/default.actions';
import { ActionType } from './reducers/default.types';

const delay = (ms: number): Promise<any> =>
    // eslint-disable-next-line no-promise-executor-return
    new Promise((res) => setTimeout(res, ms));

// eslint-disable-next-line require-yield
function* helloSaga(): any {
    console.log('Hello Sagas!');
}

// Our worker Saga: will perform the async increment task
function* incrementAsync(): any {
    yield delay(2000);
    yield put(depositMoney(150));
    yield put(addConsoleLogAsync());
}

// pass payload from diff action
function* propsPayloadToAction(): any {
    const { payload } = yield take(ActionType.DEPOSIT);
    const val = payload / 2 + Math.random();
    yield put(depositMoney(val));
}

function* watchIncrementAsync(): any {
    yield takeEvery(ActionType.DEPOSIT, incrementAsync);
}

export default function* rootSaga(): any {
    yield all([helloSaga(), watchIncrementAsync()]);
}
