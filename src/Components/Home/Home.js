import React from 'react'
import useArticles from '../Articles/UseArticles';
import Articles from '../Articles/Articles';

function Home() {
    const articles = useArticles();

    return (
        <div className="container">
            <header className="jumbotron my-4">
                <h3 className="display-3">Welcome folks!</h3>
                <p className="lead">
                    Handle your blog articles here.
                </p>
            </header>
            {articles.length ? <Articles articles={articles}/> : 'Loading articles...'}
        </div>
    )
}

export default Home