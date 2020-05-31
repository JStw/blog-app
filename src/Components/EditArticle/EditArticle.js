import React from 'react';
import EditFormArticle from './EditFormArticle';
import useArticleById from "./UseArticleBy";

function EditArticle(props) {
    const article = useArticleById(props.match.params.title, props.match.params.category);

    if (!article) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="alert alert-info" role="alert">
                            Please wait until your data are loaded.
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <EditFormArticle article={article}/>
    )
}

export default EditArticle;