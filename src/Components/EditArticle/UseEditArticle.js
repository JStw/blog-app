import { useState } from 'react';
import { API_BASE_URL } from '../../App';


function useEditArticle() {
    const [status, setStatus] = useState({ loading: false, error: null, success: false })

    const editArticle = (article) => {
        setStatus({ ...status, loading: true })

        const payload = JSON.stringify({
            content: article.content,
            author: article.author
        });

        fetch(`${API_BASE_URL}/articles/${article.title}/${article.category}`, {method: 'PUT', body: payload})
            .then(response => response.json())
            .then(data => {
                setStatus({ ...status, success: true, loading: false })
            })
    }

    return {editArticle, status}
}

export default useEditArticle