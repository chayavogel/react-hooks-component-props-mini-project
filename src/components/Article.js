import React from "react"

function Article({
    date ="January 1, 1970",
    title,
    preview,
    minutes}) {


    const readTime = (minutes < 30 ? <p>{minutes}</p> : <p>{minutes} "more" </p>)

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            {readTime}
        </article>
    )
}

export default Article
