import React, { useState } from 'react';
import Article from './Components/Article';
import { API_BASE_URL } from '../../App';

function Articles(props) {
    const [articles, setArticles] = useState(props.articles);
    const [status, setStatus] = useState({success: '', error: ''});

    const deleteArticle = (article) => {
        return () => {
            fetch(`${API_BASE_URL}/articles/${article.title}/${article.category}`, {method: 'DELETE'})
                .then(response => response.json())
                .then(data => {
                    if (!data) {
                        throw new Error('An error occurred while saving your item in DB, error: ' + data)
                    }

                    setStatus({...status, success: `Your article ${article.title} has been deleted successfully.`})
                    setArticles(articles.filter(item => item.title !== article.title && item.category !== article.category));

                    setTimeout(() => setStatus({...status, success: ''}))
                })
                .catch(error => {
                    setStatus({...status, error: `An error occurred while trying to delete the article ${article.title}.`})
                    setTimeout(() => setStatus({...status, error: ''}))
                })
        }
    };

    return (
        <div className="row text-center">
            {status.success ? <div className="alert alert-success" role="alert">{status.success}</div> : ''}
            {status.error ? <div className="alert alert-danger" role="alert">{status.error}</div> : ''}

            {articles.map((article, number) => {
                return <Article
                    key={number}
                    onDelete={deleteArticle}
                    article={article}/>
            })}
        </div>
    );
}

export default Articles;
