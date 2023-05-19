type Result = {
    pageid: string,
    title: string,
    extract: string,
    //  thumbnail: une propriété optionnelle qui représente une miniature (image réduite) associée à la page. 
    thumbnail?: {
        source: string,
        width: number,
        height: number,
    }
}

type SearchResult = {
    query?: {
        pages?: Result[],
    },
}