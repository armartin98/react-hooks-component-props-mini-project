import React from "react";
import Article from "./Article";

function ArticleList({post}) {
    const articlePost = post.map(article => {
        return (
            <Article key={article.id} title={article.title} date={article.date} preview={article.preview} />
        )
    })

    return (
        <main>
            {articlePost}
        </main>
    )
}

export default ArticleList