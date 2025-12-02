import MediaWrapper from "../ui/MediaWrapper";

/**
 * DatasetCollage Component
 * Displays a collage of 12 dataset images with play button overlays
 */
export default function DatasetCollage({
  addClassName = "relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden rounded-2xl",
}) {
  return (
    <div className={addClassName}>
      {/* Image 1 */}
      <div className="absolute top-4 left-4 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(47,107,255,0.2)] rotate-[-3deg] hover:scale-105 transition-transform">
        <MediaWrapper
          src="/src/assets/images/dataset/dataset-1.webp"
          alt="Dataset sample"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Image 2 */}
      <div className="absolute top-8 left-32 sm:left-40 md:left-52 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(47,107,255,0.2)] rotate-[2deg] hover:scale-105 transition-transform">
        <MediaWrapper
          src="/src/assets/images/dataset/dataset-2.webp"
          alt="Dataset sample"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Image 3 */}
      <div className="absolute top-4 left-56 sm:left-72 md:left-[420px] w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(47,107,255,0.2)] rotate-[-2deg] hover:scale-105 transition-transform">
        <MediaWrapper
          src="/src/assets/images/dataset/dataset-3.webp"
          alt="Dataset sample"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Image 4 */}
      <div className="absolute top-6 right-4 sm:right-6 md:right-8 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(47,107,255,0.2)] rotate-[4deg] hover:scale-105 transition-transform">
        <MediaWrapper
          src="/src/assets/images/dataset/dataset-4.webp"
          alt="Dataset sample"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Image 5 */}
      <div className="absolute top-32 sm:top-40 md:top-52 left-4 sm:left-6 md:left-8 w-20 h-28 sm:w-28 sm:h-36 md:w-36 md:h-44 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(47,107,255,0.2)] rotate-[1deg] hover:scale-105 transition-transform">
        <MediaWrapper
          src="/src/assets/images/dataset/dataset-5.webp"
          alt="Dataset sample"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Image 6 - Center large */}
      <div className="absolute top-28 sm:top-36 md:top-48 left-1/2 -translate-x-1/2 w-32 h-28 sm:w-40 sm:h-36 md:w-56 md:h-48 rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(47,107,255,0.25)] rotate-[-1deg] hover:scale-105 transition-transform z-10">
        <MediaWrapper
          src="/src/assets/images/dataset/dataset-6.webp"
          alt="Dataset sample"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Image 7 */}
      <div className="absolute top-36 sm:top-44 md:top-56 right-4 sm:right-6 md:right-8 w-28 h-24 sm:w-36 sm:h-32 md:w-48 md:h-40 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(47,107,255,0.2)] rotate-[-3deg] hover:scale-105 transition-transform">
        <MediaWrapper
          src="/src/assets/images/dataset/dataset-7.webp"
          alt="Dataset sample"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Image 8 */}
      <div className="absolute bottom-24 sm:bottom-32 md:bottom-40 left-8 sm:left-12 md:left-16 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(47,107,255,0.2)] rotate-[3deg] hover:scale-105 transition-transform">
        <MediaWrapper
          src="/src/assets/images/dataset/dataset-8.webp"
          alt="Dataset sample"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Image 9 */}
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-32 left-40 sm:left-48 md:left-64 w-28 h-24 sm:w-36 sm:h-32 md:w-44 md:h-40 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(47,107,255,0.2)] rotate-[-2deg] hover:scale-105 transition-transform">
        <MediaWrapper
          src="/src/assets/images/dataset/dataset-9.webp"
          alt="Dataset sample"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Image 10 */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 right-32 sm:right-40 md:right-56 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(47,107,255,0.2)] rotate-[2deg] hover:scale-105 transition-transform">
        <MediaWrapper
          src="/src/assets/images/dataset/dataset-10.webp"
          alt="Dataset sample"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Image 11 */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-6 sm:right-8 md:right-12 w-24 h-28 sm:w-32 sm:h-36 md:w-40 md:h-44 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(47,107,255,0.2)] rotate-[-4deg] hover:scale-105 transition-transform">
        <MediaWrapper
          src="/src/assets/images/dataset/dataset-11.webp"
          alt="Dataset sample"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Image 12 */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/3 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(47,107,255,0.2)] rotate-[1deg] hover:scale-105 transition-transform">
        <MediaWrapper
          src="/src/assets/images/dataset/dataset-12.webp"
          alt="Dataset sample"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
