import HeroSection from "@/components/HeroSection";
import { sampleBooks } from "@/lib/constants";
import BookCard from "@/components/BookCard";
import React from "react";

const page = () => {
  return (
    <main className="wrapper container">
      <HeroSection />
      <div className="library-books-grid">
        {sampleBooks.map(({ _id, title, slug, author, coverURL }) => {
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
