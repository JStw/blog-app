import React from 'react';
import { NavLink } from 'react-router-dom';

export const Article = (props) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h4 className="card-title">{props.article.title}</h4>
                    <p className="card-text">
                        {props.article.content}<br/>
                        <NavLink className="nav-link" to={{pathname:`/edit/${props.article.title}/${props.article.category}`, state: {article: props.article}}}>
                            Edit article
                        </NavLink>
                        <button onClick={props.onDelete(props.article)}>Delete</button>
                    </p>
                </div>
                <div className="card-footer">
                    Published on the: {props.article.createdAt.toLocaleDateString()}
                </div>
            </div>
        </div>
    );
}

export default Article;
