import React from "react";
import TourismCard from "../../components/shared/TourismCard";
import Button from "../../components/ui/Button";
import { tourismPlaces } from "../../constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/0-0.jpg')",
            backgroundPosition: "center 30%",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Discover Amazing Places
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
            Explore the India's most beautiful destinations and create
            unforgettable memories
          </p>
          <Button
            variant="secondary"
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight * 0.5,
                behavior: "smooth",
              })
            }
          >
            Explore Destinations
          </Button>
        </div>
      </section>

      {/* Tourism Cards Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Popular Destinations
            </h2>
            <p className="mt-2 text-muted-foreground">
              Discover our handpicked selection of amazing places to visit
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tourismPlaces.map((place) => (
            <TourismCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Roamly. Made by Pramoda S R and Nithin
            P. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
