export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="p-6 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-3xl font-bold">Art Gallery</h1>
        <nav>
          <a href="#gallery" className="text-lg text-gray-600 hover:text-black">Gallery</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-[60vh] bg-[url('/gallery-hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-white bg-opacity-70 p-6 rounded-lg">
          <h2 className="text-4xl font-semibold">Discover Beautiful Art</h2>
          <p className="text-lg mt-2">A curated collection of artwork</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={`/art${num}.jpg`}
                alt={`Artwork ${num}`}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Artwork {num}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-gray-900 text-white text-center mt-10">
        <p>&copy; 2025 Art Gallery. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
