import HeroSection from "@/components/HeroSection";
import {sampleBooks} from "@/lib/constants";
import BookCard from "@/lib/BookCard";

export default function Page() {
  return (
      <main>
        <HeroSection />
          <div className='wrapper library-books-grid pb-12'>
            {
              sampleBooks.map((book) =>(
                  <BookCard key={book._id} title={book.title} author={book.author} coverURL={book.coverURL} slug={book.slug}/>
              ))
            }
          </div>
      </main>
  );
}
