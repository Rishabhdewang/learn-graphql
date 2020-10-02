import React from 'react'
import { graphql } from 'react-apollo'
import { getBooksQuery } from '../queries/queries'
import BookCard from './BookCard'

function BookList(props) {
    const displayBooks = () => {
        var data = props.data
        if (data.loading) {
            return (
                <div>Loading</div>
            )
        }
        else {
            return data.books.map(book => {
                return (<BookCard book={book} key={book.id} />)
            })
        }
    }
    return (
        <div>
            {
                displayBooks()
            }
        </div>
    )
}

export default graphql(getBooksQuery)(BookList)
