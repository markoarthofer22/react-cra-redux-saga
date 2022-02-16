import { ActionType, IInitialState } from './default.types';

const initialState: IInitialState = {
    total: 0,
    isError: false,
    lastOperation: [],
};

type Action = {
    type: string;
    payload?: unknown;
};

const defaultReducer = (
    state = initialState,
    action: Action
): IInitialState => {
    switch (action.type) {
        case ActionType.DEPOSIT:
            return {
                ...state,
                total: state.total + Number(action.payload),
            };

        case ActionType.WITHDRAW:
            return {
                ...state,
                total: state.total - Number(action.payload),
            };

        case ActionType.BANKRUPT:
            return {
                ...state,
                total: 0,
            };

        case ActionType.SET_ERROR:
            return {
                ...state,
                isError: Boolean(action.payload),
            };

        case ActionType.CONSOLE_LOG:
            console.log('Logs after 2 seconds');
            return state;

        default:
            return state;
    }
};

export default defaultReducer;
