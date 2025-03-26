import React from "react";
import { tourismPlaces } from "../../constants";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const place = tourismPlaces.find((p) => p.id.toString() === id); // Ensure ID is a string for comparison

  if (!place) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-500">Article Not Found</h1>
        <p className="text-gray-600">The requested place does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
        <img
          src={place.image || "/placeholder.svg"}
          alt={place.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {place.title}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto mt-10 space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">{place.article}</p>
      </div>

      {/* Photo Gallery */}
      {place.photos && place.photos.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {place.photos.map((photo, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;
