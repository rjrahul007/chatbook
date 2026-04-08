import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/BookCard";
import { getAllBooks } from "@/lib/actions/book.action";

const page = async () => {
  const bookResults = await getAllBooks();
  const books = bookResults.success ? (bookResults.data ?? []) : [];
  return (
    <main className="wrapper container">
      <HeroSection />
      <div className="library-books-grid">
        {books.map(({ _id, title, slug, author, coverURL }) => {
          return (
            <BookCard
              key={_id}
              title={title}
              author={author}
              coverURL={coverURL}
              slug={slug}
            />
          );
        })}
      </div>
    </main>
  );
};

export default page;
