import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
//redux toolkit


function ReviewFeedback() {
    const history = useHistory();
    const store = useSelector(store => store)

    const prevPage = () => {
        history.push('/comments')
    }
    const submitFeedback = () => {
        const postObj = {
            feeling: Number(store.feelingReducer.feeling),
            understanding: Number(store.understandingReducer.understanding), 
            support: Number(store.supportedReducer.supported), 
            comments: store.commentReducer.comments
        }

        axios({
            method: 'POST',
            url: '/feedback', 
            data: postObj
        }).then((res) => {
            console.log('post success', res);
            history.push('/thanks')
        }).catch((err) => {
            console.log('post error', err);
        })
    }
    console.log(store);
    return (

        <>
            <h2>Review your Feedback</h2>

            <ul>
                <li>Feeling: {store.feelingReducer.feeling}</li>
                <li>Understanding: {store.understandingReducer.understanding}</li>
                <li>support: {store.supportedReducer.supported}</li>
                <li>comments: {store.commentReducer.comments}</li>
            </ul>

            <button onClick={prevPage}>prev</button>
            <button onClick={submitFeedback}>submit</button>
        </>
    )
}

export default ReviewFeedback