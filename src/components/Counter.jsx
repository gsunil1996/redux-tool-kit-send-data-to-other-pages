import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCount, setSetCount } from '../redux/features/counterSlice';

const Counter = () => {
    const [count, setCountLocal] = useState(0);
    const dispatch = useDispatch();

    const countFromRedux = useSelector(state => state.countValue.count);

    const setCountGlobal = (payload) => {
        setCountLocal(payload);
        dispatch(getCount(payload))
    }

    useEffect(() => {
        dispatch(setSetCount(setCountLocal));
    }, [dispatch]);

    return (
        <div>
            <h2>Local count: {count}</h2>
            <h2>Redux count: {countFromRedux}</h2>
            <button onClick={() => setCountGlobal(count + 1)}>Increment Local + Redux</button>
            <button onClick={() => setCountGlobal(count - 1)}>Decrement Local + Redux</button>
        </div>
    )
}

export default Counter