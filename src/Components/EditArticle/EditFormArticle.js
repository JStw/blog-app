import React, { useState } from 'react';
import useEditArticle from './UseEditArticle';

function EditFormArticle(props) {
    const {editArticle, status} = useEditArticle()

    const [content, setContent] = useState(props.article.content)
    const [author, setAuthor] = useState(props.article.author)

    const handleSubmit = (event) => {
        event.preventDefault();

        editArticle({ ...props.article, content, author })
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="mt-4">Edit {props.article.title}:</h1>
                    <hr/>
                    {status.success ? <div className="alert alert-success" role="alert">Your article has been successfully saved in your DB.</div> : ''}
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Type a content..."
                                   value={content}
                                   onChange={event => setContent(event.target.value)}
                            />
                        </div>
                        <br/>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Type an author..."
                                   value={author}
                                   onChange={event => setAuthor(event.target.value)}
                            />
                        </div>
                        <br/>
                        <div className="text-center">
                            <button className="btn btn-secondary" type="submit">
                                Update the article
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditFormArticle