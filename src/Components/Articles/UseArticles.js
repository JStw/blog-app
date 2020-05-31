import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../App';

export const transform = data => {
    return (data || []).map(item => {
        return {
            title: item.title,
            category: item.category,
            content: item.content,
            author: item.author,
            createdAt: new Date(item.createdAt)
        };
    });
};

function useArticles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/articles`)
            .then(response => response.json())
            .then(data => {
                if (!data || !data.length) {
                    throw new Error('An error occured while retrieving data, error: ' + data)
                }
                setArticles(transform(data));
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return articles;
}

export default useArticles;