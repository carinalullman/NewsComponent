import React from 'react'

const aStyle = {
    "textDecoration": "none",
    "width": "100%"
}

const divStyle = {
    background: "aliceblue",
    margin: "4px",
    padding: "4px",
    border: "2px solid steelblue",
    "borderRadius": "4px"
}
const imgStyle = {
    width: "40px",
    height: "40px",
    "objectFit": "cover",
    border: "2px solid steelblue",
}

const titleStyle = {
    "paddingLeft": "8px",
    "fontFamily": "helvetica",
    "color": "steelblue",
    "marginBottom": "10px",
}

const titleLength = 30;

export default function NewsArticle({ newsArticle }) {
    return (
        <>
            <a style={aStyle} href={newsArticle.url}>
                <div style={divStyle}>
                    <img style={imgStyle} alt={""} src={newsArticle.urlToImage} />
                    <span style={titleStyle}>{newsArticle.title.substring(0, titleLength) + "..."}</span>
                </div>
            </a>
        </>
    )
}
