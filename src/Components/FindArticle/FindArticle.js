import React, { useState } from 'react';
import { transform } from '../Articles/UseArticles';
import { API_BASE_URL } from '../../App';
import Articles from '../Articles/Articles';

function FindArticle() {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [articles, setArticles] = useState([]);


    function searchArticle(event) {
        event.preventDefault();

        fetch(`${API_BASE_URL}/articles/find/${title}/${category}`)
            .then(response => response.json())
            .then(data => setArticles(transform(data)));
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-8">
                    <h1 className="mt-4">Your results:</h1>
                    <hr/>

                    {!articles.length ? 'No articles for now' : <div className="container"><Articles articles={articles}/></div>}
                </div>

                <div className="col-md-4">
                    <div className="card my-4">
                        <h5 className="card-header">Search an article</h5>
                        <div className="card-body">
                            <form onSubmit={searchArticle}>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Type a title..."
                                           value={title}
                                           onChange={event => setTitle(event.target.value)}
                                    />
                                </div>
                                <br/>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Type a category..."
                                           value={category}
                                           onChange={event => setCategory(event.target.value)}
                                    />
                                </div>
                                <br/>
                                <div className="text-center">
                                    <button className="btn btn-secondary" type="submit">Search!</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindArticle;