"use client"

import { useEffect } from "react"

const Leader = () => {
    useEffect(()=> {
        const btn = document.querySelector('.btn-reg')

        btn.addEventListener('click', ()=> {
            window.location.href='https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-c14a5e0ef5d45ab85e88368a6b66d66a727979884e96c006393c2d4bd21bf6f9&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fget%2F&response_type=code'
        })
    })
    return <div>
        <button className="btn-reg">42</button>
    </div>;
}


export default Leader;