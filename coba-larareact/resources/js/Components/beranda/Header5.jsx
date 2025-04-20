"use client";

import { Button } from "@relume_io/relume-ui";

import { useState, useEffect } from "react";

export function Header5() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Gunakan placeholder sementara sampai gambar asli tersedia
    const carImages = [
        {
            src: "https://unsplash.com/photos/black-bmw-car-surrounded-by-grass-field-7Cdw956mZ4w",
            alt: "Mobil Premium 1",
        },
        {
            src: "https://unsplash.com/photos/black-bmw-car-surrounded-by-grass-field-7Cdw956mZ4w",
            alt: "Mobil Premium 2",
        },
    ];

    // Auto slideshow functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage();
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    // Function to go to next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === carImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to previous image
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? carImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <section id="relume" className="relative px-[5%]">
            <div className="relative z-10 container mx-auto">
                <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
                            Selamat datang di Mediator, Solusi Cerdas Anda
                        </h1>
                        <p className="text-white text-lg md:text-xl">
                            Mediator adalah platform inovatif yang dirancang
                            khusus untuk memudahkan proses jual beli kendaraan.
                            Bergabunglah dengan kami dan tingkatkan pengalaman
                            Anda dalam dunia otomotif.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                            <Button
                                title="Daftar"
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium"
                            >
                                Daftar
                            </Button>
                            <Button
                                title="Pelajari"
                                variant="secondary-alt"
                                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10"
                            >
                                Pelajari
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Slider Controls */}
            <div className="absolute bottom-8 right-8 z-20 flex gap-4">
                <button
                    onClick={prevImage}
                    className="bg-white/20 hover:bg-white/40 text-white rounded-full p-3"
                    aria-label="Previous image"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button
                    onClick={nextImage}
                    className="bg-white/20 hover:bg-white/40 text-white rounded-full p-3"
                    aria-label="Next image"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
                {carImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-3 w-3 rounded-full ${
                            index === currentImageIndex
                                ? "bg-red-600"
                                : "bg-white/50"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Background Image with Transition */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {carImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentImageIndex
                                ? "opacity-100"
                                : "opacity-0"
                        }`}
                    >
                        <div className="relative w-full h-full">
                            <img
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="100vw"
                                style={{ objectFit: "cover" }}
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-black/50" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
