import React, { useState, useEffect } from 'react'
import axios from "axios";
import Movie from './../components/Movie';

function Homescreen() {

    const [movies, setmovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, seterror] = useState(false)



    try {
        useEffect(() => {
            loadData()
        }, [])
        let loadData = async () => {
            setLoading(true)
            let data = (await axios.get('/api/movies/getallmovies')).data

            console.log(data)
            setmovies(data)
            setLoading(false)


        }
    } catch (error) {
        seterror(true)
        console.log(error)
        setLoading(false)

    }

    return (
        <div className='container'>

            <div className='row justify-content-center mt-5'>
                {loading ? (<h1>Loading...</h1>) : error ? (<h1>Error...</h1>) : (movies.map(movie => {
                    return <div className='col-md-9 mt-2'>
                        <Movie movie={movie}/>
                    </div>

                }))}
            </div>


        </div>
    )
}

export default Homescreen