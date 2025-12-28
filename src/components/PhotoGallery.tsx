import imgRectangle19322 from "figma:asset/59a1255686a6071c561b3f82f70c1cc200d2fccd.png";
import imgRectangle19325 from "figma:asset/68c7011cdeb0648622e4ec8db3cee5f9da98552e.png";
import imgRectangle19323 from "figma:asset/c9b4a18e13a1f09fb133e1048f7065e2baf5bade.png";
import imgRectangle19324 from "figma:asset/4d31ff51f917c2b08adf26f1a138371acec3151e.png";
import imgRectangle19327 from "figma:asset/2be388556490e4fe5b69dbfbd8cc61e2d38b7eae.png";
import imgRectangle19328 from "figma:asset/b12e81844367d17ff1a63ee808ef717f542ac08b.png";
import { useState } from 'react';

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    imgRectangle19322,
    imgRectangle19325,
    imgRectangle19323,
    imgRectangle19324,
    imgRectangle19327,
    imgRectangle19328
  ];

  return (
    <section className="py-16 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#93288e] tracking-wide mb-4 uppercase">
            Memories on Board
          </p>
          <h2 className="text-[#222] uppercase">
            Photo Gallery
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(photo)}
            >
              <img
                src={photo}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
