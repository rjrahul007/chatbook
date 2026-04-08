import { Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/BookCard";
import { getAllBooks } from "@/lib/actions/book.action";
import Search from "@/components/Search";

const page = async () => {
  const bookResults = await getAllBooks();
  const books = bookResults.success ? (bookResults.data ?? []) : [];
  return (
    <main className="wrapper container">
      <HeroSection />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
        <h2 className="text-3xl font-serif font-bold text-[#212a3b]">
          Recent Books
        </h2>
        <Suspense
          fallback={
            <div className="w-48 h-10 bg-gray-200 rounded animate-pulse" />
          }
        >
          <Search />
        </Suspense>
      </div>
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
