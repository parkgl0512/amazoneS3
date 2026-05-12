import { useState } from 'react'
import './App.css'

type Book = {
  title: string
  author: string
  publisher: string
  year: string
  category: string
}

function App() {
  const [keyword, setKeyword] = useState('')

  const books: Book[] = [
    {
      title: '데이터베이스 개론',
      author: '김연희',
      publisher: '한빛아카데미',
      year: '2022',
      category: 'IT / 데이터베이스',
    },
    {
      title: '클린 코드',
      author: 'Robert C. Martin',
      publisher: '인사이트',
      year: '2013',
      category: '프로그래밍',
    },
    {
      title: '모던 자바스크립트 Deep Dive',
      author: '이웅모',
      publisher: '위키북스',
      year: '2020',
      category: '웹 개발',
    },
  ]

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(keyword.toLowerCase())
  )

  return (
    <>
      <header className="header">
        <h1>Book Finder</h1>
        <p>원하는 도서를 검색하고 기본 정보를 확인해보세요.</p>
      </header>

      <main className="container">
        <section className="search-section">
          <h2>도서 검색</h2>
          <input
            type="text"
            placeholder="도서명을 입력하세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </section>

        <section className="book-list">
          <h2>검색 결과</h2>

          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <article className="book-card" key={index}>
                <h3>{book.title}</h3>
                <p><strong>저자:</strong> {book.author}</p>
                <p><strong>출판사:</strong> {book.publisher}</p>
                <p><strong>출판연도:</strong> {book.year}</p>
                <p><strong>분류:</strong> {book.category}</p>
              </article>
            ))
          ) : (
            <p className="empty">검색 결과가 없습니다.</p>
          )}
        </section>
      </main>
    </>
  )
}

export default App