import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../App';
import { transform } from '../Articles/UseArticles';

function useArticleById(title, category) {
    const [article, setData] = useState();

    useEffect(() => {
        fetch(`${API_BASE_URL}/articles/find/${title}/${category}`)
            .then(response => response.json())
            .then(data => {
                if (!data || !data.length) {
                    return;
                }

                setData(transform(data)[0]);
            })
    }, []);

    return article
}

export default useArticleById