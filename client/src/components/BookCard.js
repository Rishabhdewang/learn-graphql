import React from 'react'
import { Card } from 'antd'
function BookCard({ book }) {
    return (
        <Card width={256} className="card">
            <h3>{book.name}</h3>
            <p>{book.genre}</p>
        </Card>

    )
}

export default BookCard
