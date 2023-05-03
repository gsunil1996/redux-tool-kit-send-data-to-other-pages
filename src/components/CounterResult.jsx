import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCount } from '../redux/features/counterSlice';

const CounterResult = () => {
    const dispatch = useDispatch();

    const countFromRedux = useSelector(state => state.countValue.count);
    const setCountFromRedux = useSelector(state => state.countValue.setCount)

    return (
        <div>
            <h1>Counter Result in another page</h1>
            <h2>Count Value from Redux: {countFromRedux}</h2>
            <div>
                <button onClick={() => setCountFromRedux(5)}>setCountLocal to 5</button>
                <button onClick={() => setCountFromRedux(10)}>setCountLocal to 10</button>
            </div>
            <div style={{ marginTop: "10px" }}>
                <button onClick={() => dispatch(getCount(countFromRedux + 1))}>Increment Redux</button>
                <button onClick={() => dispatch(getCount(countFromRedux - 1))}>Decrement Redux</button>
            </div>
        </div>
    )
}

export default CounterResult