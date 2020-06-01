import React, { useState } from 'react'
import useCreateArticle from './UseCreateArticle';


function CreateArticle() {
    const {createArticle, status} = useCreateArticle()

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        createArticle({ title, category, author, content })
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="mt-4">Add a new article:</h1>
                    <hr/>
                    {status.success ? <div className="alert alert-success" role="alert">Your item has been saved!</div> : ''}
                    <form onSubmit={handleSubmit}>
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
                            <button className="btn btn-secondary" type="submit">Create an article</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateArticle;