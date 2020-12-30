import React from 'react';
import './Preview.css'
import './Do/PreviewDo'
import PreviewDo from './Do/PreviewDo';
class Preview extends React.Component {

    render() {

        const preview = new PreviewDo(this.props.preview);

        return (
            <div className="preview">
                <div className="preview_img">
                    <img src={preview.imgURL} ></img>
                </div>
                <div className="preview_footer">
                    <h4 className="preview_title">{preview.title}</h4>
                    <p className="preview_description">
                        {preview.description}
                    </p>
                    <div className="footer">
                        <span className="preview_createdAt">
                            {preview.createdAt}
                        </span>
                        <span className="preview_author">
                            {preview.author}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Preview;