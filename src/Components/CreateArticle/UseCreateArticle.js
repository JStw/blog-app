import { useState } from 'react';
import { API_BASE_URL } from '../../App';


function useCreateArticle() {
    const [status, setStatus] = useState({ error: '', success: false })

    const createArticle = (article) => {

        const payload = JSON.stringify({
            title: article.title,
            category: article.category,
            author: article.author,
            content: article.content
        });

        fetch(`${API_BASE_URL}/articles`, {method: 'POST', body: payload})
            .then(response => response.json())
            .then(data => {
                if (!data || !data.length) {
                    throw new Error('An error occured while saving your item in DB, error: ' + data)
                }

                setStatus({ ...status, success: true, error: ''})
            })
            .catch(error => setStatus({...status, success: false, error}))
    }

    return {createArticle, status}
}

export default useCreateArticle