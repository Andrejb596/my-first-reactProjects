import React, { useReducer } from 'react'


export default function NewReviewForm() {
    const FORM_ACTIONS = {
        setName: 'setName',
        setText: 'setText',
        setRating: 'setRating'
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const OnNameChange = (e) => dispatch(
        {type: FORM_ACTIONS.setName, payload: {name: e.target.value}}
    );
    return (
        <div>
            <label>
                Name:
                <input 
                value={state.name}
                onChange={OnNameChange}
                type="text" />
            </label>
            <label>
                Text:
                <input type="text" />
            </label>
            <label>
                Number:
                <input type="number" />
            </label>
        </div>
    )
}
