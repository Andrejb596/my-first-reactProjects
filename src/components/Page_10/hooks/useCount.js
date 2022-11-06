import React, { useState, useCallback } from 'react'

export default function useCount(initialValue) {
    const [count, setCount] = useState(initialValue);
    const decrement = useCallback(() => { setCount((currentCount) => currentCount - 1) },
        [count]
    );
    const increment = useCallback(() => { setCount((currentCount) => currentCount - 1) },
        [count]
    );


    return (count, decrement, increment)
}
