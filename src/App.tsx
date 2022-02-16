import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { State } from './store/reducers/default.types';
import './App.css';
import { dispatchActions } from './store';

const App: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
        dispatchActions,
        dispatch
    );

    const currentState = useSelector((state: State) => state.default);

    return (
        <div className='App'>
            <h1>{currentState.total}</h1>
            <button onClick={() => depositMoney(1234)} type='button'>
                Deposit
            </button>
            <button onClick={() => withdrawMoney(500)} type='button'>
                Withdrawn
            </button>
            <button onClick={() => bankrupt()} type='button'>
                Bankrupt
            </button>
        </div>
    );
};

export default App;
