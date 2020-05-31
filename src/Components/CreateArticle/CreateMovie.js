import React, { useState } from 'react'
import useCreateMovie from './UseCreateMovie';


function CreateMovie() {
    const {createMovie, status} = useCreateMovie()

    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [genre, setGenre] = useState('')
    const [year, setYear] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        createMovie({ author, title, description, genre, year: +year })
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="mt-4">Add a new movie:</h1>
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
                            <input type="text" className="form-control" placeholder="Type an author..."
                                   value={author}
                                   onChange={event => setAuthor(event.target.value)}
                            />
                        </div>
                        <br/>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Type a description..."
                                   value={description}
                                   onChange={event => setDescription(event.target.value)}
                            />
                        </div>
                        <br/>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Type a genre..."
                                   value={genre}
                                   onChange={event => setGenre(event.target.value)}
                            />
                        </div>
                        <br/>
                        <div className="input-group">
                            <input type="number" className="form-control" placeholder="Type a year..."
                                   value={year}
                                   onChange={event => setYear(event.target.value)}
                            />
                        </div>
                        <br/>
                        <div className="text-center">
                            <button className="btn btn-secondary" type="submit">Create a movie</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateMovie;