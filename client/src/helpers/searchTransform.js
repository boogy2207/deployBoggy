const searchTransform = (books) => {

  const bookDB = books.filter(e => e.createdAt)

const bookApi = books.filter(e => e.volumeInfo)
    const book = bookApi.map((e) =>  {
        
        return {
            id: e.id,
            title: e.volumeInfo.title !== undefined ? e.volumeInfo.title : "no title",
        authors:
          e.volumeInfo.authors?.[0] !== undefined
            ? e.volumeInfo.authors?.[0]
            : "no authors",
        description:
          e.volumeInfo.description !== undefined
            ? e.volumeInfo.description
            : "no description",
        category:
          e.volumeInfo.categories?.[0] !== undefined
            ? e.volumeInfo.categories?.[0]
            : "no category",
        pagecount:
          e.volumeInfo.pageCount !== undefined
            ? e.volumeInfo.pageCount
            : "no pagecount",
        imagelink:
          e.volumeInfo.imageLinks.thumbnail !== undefined
            ? e.volumeInfo.imageLinks.thumbnail
            : "no image",
        language:
        e.volumeInfo.language !== undefined
        ? e.volumeInfo.language
        : "no language",
        price:
        e.saleInfo.listPrice !== undefined
        ? Math.round(e.saleInfo.listPrice.amount)
        : "Free Book",
    }
});

return book.concat(bookDB)

}

export default searchTransform