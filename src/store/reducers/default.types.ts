import rootReducer from '../root-reducer';

export enum ActionType {
    DEPOSIT = 'DEPOSIT',
    WITHDRAW = 'WITHDRAW',
    BANKRUPT = 'BANKRUPT',
    SET_ERROR = 'SET_ERROR',
    CONSOLE_LOG = 'CONSOLE_LOG',
}

export interface IInitialState {
    total: number;
    isError: boolean;
    lastOperation: Array<string>;
}

export type State = ReturnType<typeof rootReducer>;
