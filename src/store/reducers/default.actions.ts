// import { Dispatch } from 'redux';
import { ActionType } from './default.types';

// export const depositMoney =
//     (amount: number) =>
//     (dispatch: Dispatch<{ type: string; payload: number }>) => {
//         dispatch({
//             type: ActionType.DEPOSIT,
//             payload: amount,
//         });
//     };

// export const withdrawMoney =
//     (amount: number) =>
//     (dispatch: Dispatch<{ type: string; payload: number }>) => {
//         dispatch({
//             type: ActionType.WITHDRAW,
//             payload: amount,
//         });
//     };#

// export const bankrupt = () => (dispatch: Dispatch<{ type: string }>) => {
//     dispatch({
//         type: ActionType.BANKRUPT,
//     });
// };

// export const setIsError =
//     (isErorr: boolean) =>
//     (dispatch: Dispatch<{ type: string; payload: boolean }>) => {
//         dispatch({
//             type: ActionType.SET_ERROR,
//             payload: isErorr,
//         });
//     };

export const depositMoney = (
    amount: number
): { type: typeof ActionType.DEPOSIT; payload: number } => ({
    type: ActionType.DEPOSIT,
    payload: amount,
});

export const withdrawMoney = (
    amount: number
): { type: typeof ActionType.WITHDRAW; payload: number } => ({
    type: ActionType.WITHDRAW,
    payload: amount,
});

export const bankrupt = (): { type: typeof ActionType.BANKRUPT } => ({
    type: ActionType.BANKRUPT,
});

export const setIsError = (
    isErorr: boolean
): { type: typeof ActionType.SET_ERROR; payload: boolean } => ({
    type: ActionType.SET_ERROR,
    payload: isErorr,
});

export const addConsoleLogAsync = (): {
    type: typeof ActionType.CONSOLE_LOG;
} => ({
    type: ActionType.CONSOLE_LOG,
});
