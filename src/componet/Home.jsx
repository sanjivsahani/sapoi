import React, { useState, useEffect } from 'react'
import axios from "axios"
import ReactCardFlip from 'react-card-flip';
import './Home.css'

const Home = () => {
    const [state, setState] = useState([])

    function getdata() {
        axios.get("https://rickandmortyapi.com/api/character").then((res) => {
            let a = (res.data)
            setState(a.results)
        })
    }
    useEffect(() => {
        getdata()
    }, [])

    console.log(state)

    return (
        <div>
            <div class="row">
                {
                    state.map((ele, ind) => {

                        return <>
                            <div className="flip-card p-2 m-2">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={ele.image} />
                                    </div>
                                    <div className="flip-card-back">
                                        <h2>Name:{ele.name}</h2>
                                        <hr />
                                        <h3>gender:{ele.gender}</h3>
                                        <h5>species:{ele.species}</h5>
                                        <h6>stauts:{ele.status}</h6>
                                        <hr />
                                        <button className='btn btn-warning' onClick={()=>push(ele,ind)}><h6>Like @ me</h6></button>
                                    </div>
                                </div>
                            </div>

                        </>

                    })

                }
            </div>

        </div>
    )
}

export default Home