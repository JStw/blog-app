import { useState } from 'react';
import { API_BASE_URL } from '../../App';


function useCreateMovie() {
    const [status, setStatus] = useState({ error: '', success: false })

    const createMovie = (movie) => {

        const payload = JSON.stringify({
            title: movie.title,
            author: movie.author,
            description: movie.description,
            genre: movie.genre,
            year: +movie.year
        });

        fetch(`${API_BASE_URL}/movies`, {method: 'POST', body: payload})
            .then(response => response.json())
            .then(data => {
                if (!data || !data.length) {
                    throw new Error('An error occured while saving your item in DB, error: ' + data)
                }

                setStatus({ ...status, success: true, error: ''})
            })
            .catch(error => setStatus({...status, success: false, error}))
    }

    return {createMovie, status}
}

export default useCreateMovie