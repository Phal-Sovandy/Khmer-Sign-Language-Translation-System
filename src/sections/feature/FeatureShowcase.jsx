import namasteImg from "../../assets/images/signs/namaste.webp";
import cursorImg from "../../assets/images/misc/cursor.webp";
import MediaWrapper from "../../components/ui/MediaWrapper";
import DatasetCollage from "../../components/visuals/DatasetCollage";

const features = [
  {
    id: 1,
    title: "Real-Time Translation",
    description:
      "Converts Khmer sign language gestures into accurate text instantly, enabling smooth and natural communication without delays.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M7.598 4.487c.267-1.31 1.433-2.237 2.768-2.237h3.268c1.335 0 2.5.927 2.768 2.237a.656.656 0 0 0 .62.524h.033c1.403.062 2.481.234 3.381.825c.567.372 1.055.85 1.435 1.409c.473.694.681 1.492.781 2.456c.098.943.098 2.124.098 3.62v.085c0 1.496 0 2.678-.098 3.62c-.1.964-.308 1.762-.781 2.457a5.2 5.2 0 0 1-1.435 1.409c-.703.461-1.51.665-2.488.762c-.958.096-2.159.096-3.685.096H9.737c-1.526 0-2.727 0-3.685-.096c-.978-.097-1.785-.3-2.488-.762a5.2 5.2 0 0 1-1.435-1.41c-.473-.694-.681-1.492-.781-2.456c-.098-.942-.098-2.124-.098-3.62v-.085c0-1.496 0-2.677.098-3.62c.1-.964.308-1.762.781-2.456a5.2 5.2 0 0 1 1.435-1.41c.9-.59 1.978-.762 3.381-.823l.017-.001h.016a.656.656 0 0 0 .62-.524m2.768-.737c-.64 0-1.177.443-1.298 1.036c-.195.96-1.047 1.716-2.072 1.725c-1.348.06-2.07.225-2.61.579a3.7 3.7 0 0 0-1.017.999c-.276.405-.442.924-.53 1.767c-.088.856-.089 1.96-.089 3.508s0 2.651.09 3.507c.087.843.253 1.362.53 1.768c.268.394.613.734 1.017.999c.417.273.951.438 1.814.524c.874.087 2 .088 3.577.088h4.444c1.576 0 2.702 0 3.577-.088c.863-.086 1.397-.25 1.814-.524c.404-.265.75-.605 1.018-1c.276-.405.442-.924.53-1.767c.088-.856.089-1.96.089-3.507s0-2.652-.09-3.508c-.087-.843-.253-1.362-.53-1.767a3.7 3.7 0 0 0-1.017-1c-.538-.353-1.26-.518-2.61-.578c-1.024-.01-1.876-.764-2.071-1.725a1.314 1.314 0 0 0-1.298-1.036zm1.634 7a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M8.25 13a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m9-3a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"
          clip-rule="evenodd"
        />
      </svg>
    ),
    imageLeft: true,
  },
  {
    id: 2,
    title: "Performance Optimized",
    description:
      "Designed to run smoothly on web platforms, ensuring fast and responsive translation without lag. Users experience seamless interactions even with continuous gestures.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="m8 22l1-7H4l9-13h2l-1 8h6L10 22z" />
      </svg>
    ),
    imageLeft: false,
  },
  {
    id: 3,
    title: "Multi-Gesture Support",
    description:
      "Supports over 120 Khmer sign language gestures, allowing users to translate multiple signs at once and communicate full sentences naturally and accurately.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 16 16"
      >
        <g fill="none">
          <g clip-path="url(#SVGFd4lJeyK)">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M6 3.325v5.971l-1.5-.375l-.53-.132l-.672-.168l-.205-.051a.478.478 0 0 0-.409.84l.167.13l.547.425l.43.334l2.142 1.666l2.728-.181L12 11.5l.667-3.557l.108-.579l.455-2.426l.148-.787l.009-.047a.51.51 0 0 0-.993-.234l-.013.046l-.22.77L12 5.25L11.5 7h-1V2.023a.523.523 0 0 0-1.043-.048l-.005.048l-.07.775l-.216 2.381l-.147 1.617L9 7H8l-.019-.093l-.329-1.647L7.5 4.5l-.26-1.298l-.13-.652l-.022-.108A.55.55 0 0 0 6 2.55zm-2.543 3.79l1.043.26V2.55a2.05 2.05 0 0 1 3.617-1.321A2.023 2.023 0 0 1 12 2.023v.182a2.01 2.01 0 0 1 2.861 2.176l-1.387 7.395a1.5 1.5 0 0 1-1.346 1.219l-3.302.283l-.028.002l-2.728.182a1.5 1.5 0 0 1-1.02-.313l-3.287-2.555a1.978 1.978 0 0 1 1.694-3.48m9.346 8.383a.75.75 0 0 0-.106-1.496l-7 .5a.75.75 0 1 0 .106 1.496z"
              clip-rule="evenodd"
            />
          </g>
          <defs>
            <clipPath id="SVGFd4lJeyK">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </g>
      </svg>
    ),
    imageLeft: true,
  },
  {
    id: 4,
    title: "Secure Processing",
    description:
      "Ensures all Khmer sign language data is processed safely and privately, protecting user information while delivering accurate and reliable translations in real time.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6 22q-.825 0-1.412-.587T4 20V10q0-.825.588-1.412T6 8h1V6q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.587 1.413T18 22zm6-5q.825 0 1.413-.587T14 15t-.587-1.412T12 13t-1.412.588T10 15t.588 1.413T12 17M9 8h6V6q0-1.25-.875-2.125T12 3t-2.125.875T9 6z"
        />
      </svg>
    ),
    imageLeft: false,
  },
];

function DemoImage({ cursorImg, namasteImg }) {
  return (
    <div className="relative scale-90 lg:scale-110">
      {/* Outer tilted detection frames */}
      <div className="absolute -inset-4 border border-white/30 -rotate-3 pointer-events-none" />
      <div className="absolute -inset-10 border border-white/15 -rotate-6 pointer-events-none" />
      <div className="absolute -inset-16 border border-white/8 -rotate-9 pointer-events-none" />

      {/* Main image container */}
      <div className="relative p-1">
        <MediaWrapper
          src={namasteImg}
          alt="Sign language detection"
          className="h-96 w-auto object-contain"
        />

        {/* Detection label */}
        <div className="absolute top-[-40px] left-[-20px] px-2 py-1 text-base font-bold text-white tracking-wide font-khmer">
          ជម្រាបសួរ: 99.68%
        </div>
      </div>

      {/* Detected Text popup */}
      <div className="absolute -top-6 right-[-20px] lg:right-[-100px] translate-x-8 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl px-6 py-4 shadow-2xl min-w-[220px]">
        <p className="text-xs text-white/70 mb-1.5 tracking-wide">
          Detected Text
        </p>
        <p className="text-base text-white font-medium font-khmer">
          ខ្ញុំចង់រៀនភាសាជនពិការគថ្លង់
        </p>
        {/* Cursor */}
        <MediaWrapper
          src={cursorImg}
          alt=""
          className="absolute -right-6 bottom-0 h-14 z-10 w-auto drop-shadow-md"
        />
        {/* Copied badge */}
        <div className="absolute right-3 -top-3 bg-[#2a2a2a] text-white text-[10px] px-2.5 py-1 rounded flex items-center gap-1 shadow-lg">
          <svg
            className="w-2.5 h-2.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Copied
        </div>
      </div>

      {/* Play button for speech */}
      <button className="absolute -bottom-3 -right-3 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/30 hover:bg-white/20 rounded-full shadow-xl transition-all hover:scale-110 z-20">
        <svg
          className="w-4 h-4 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  );
}

// Security Icons Component for Secure Processing feature
function SecurityIcons() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Icon 1 - Database/Stack */}
      <div className="absolute top-[-100px] lg:top-[-100px] left-[50px] lg:left-[-300px] md:-top-40 md:left-35">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="360"
          height="360"
          viewBox="0 0 24 24"
          className="text-white rotate-[-8deg] hover:scale-110 transition-transform drop-shadow-[0_8px_30px_rgba(47,107,255,0.4)]"
        >
          <path
            fill="currentColor"
            d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4"
          />
        </svg>
      </div>

      {/* Icon 2 - Lock */}
      <div className="absolute top-[50px] lg:top-[-100px] right-[-20px] lg:right-[-120px] md:top-36 md:right-26">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="300"
          viewBox="0 0 24 24"
          className="text-white rotate-[12deg] hover:scale-110 transition-transform drop-shadow-[0_8px_30px_rgba(47,107,255,0.4)]"
        >
          <path
            fill="currentColor"
            d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0zm-2 0V9A5 5 0 0 0 7 9v1zm-6 4v4h2v-4z"
          />
        </svg>
      </div>

      {/* Icon 3 - Shield */}
      <div className="absolute bottom-[10px] lg:bottom-[-80px] left-[-20px] lg:left-[50px] md:bottom-4 md:left-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="180"
          viewBox="0 0 24 24"
          className="text-white rotate-[-5deg] hover:scale-110 transition-transform lg:drop-shadow-[0_8px_30px_rgba(47,107,255,0.4)] drop-shadow-[0_8px_30px_rgba(47,107,255,0.8)]"
        >
          <path
            fill="currentColor"
            d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z"
          />
        </svg>
      </div>

      {/* Icon 4 - User/Profile */}
      <div className="absolute lg:bottom-[-100px] bottom-[-30px] lg:right-40 right-[50px] md:bottom-56 md:right-22">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="240"
          height="240"
          viewBox="0 0 32 32"
          className="text-white rotate-[15deg] hover:scale-110 transition-transform lg:drop-shadow-[0_8px_30px_rgba(47,107,255,0.4)] drop-shadow-[0_8px_30px_rgba(47,107,255,0.8)]"
        >
          <path
            fill="currentColor"
            d="M16 22a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2M14 6h4v2h-4z"
          />
          <path
            fill="currentColor"
            d="M24 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2.003 2.003 0 0 0 2-2V4a2 2 0 0 0-2-2m-4 26h-8v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm2 0v-2a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v2H8V4h16v24Z"
          />
        </svg>
      </div>
    </div>
  );
}

// Floating Detected Text Boxes Component for Performance Optimized feature
function FloatingTextBoxes() {
  const textBoxes = [
    {
      id: 1,
      text: "សួស្តី",
      top: "5%",
      left: "90%",
      delay: "0s",
      rotate: "-3deg",
    },
    {
      id: 2,
      text: "សូមស្វាគមន៍",
      top: "10%",
      right: "0%",
      delay: "0.2s",
      rotate: "2deg",
    },
    {
      id: 3,
      text: "សូមទោស",
      top: "25%",
      left: "75%",
      delay: "0.4s",
      rotate: "-2deg",
    },
    {
      id: 4,
      text: "ជម្រាបសួរ",
      top: "40%",
      right: "50%",
      delay: "0.6s",
      rotate: "3deg",
    },
    {
      id: 5,
      text: "ខ្ញុំស្រឡាញ់អ្នក",
      bottom: "35%",
      left: "40%",
      delay: "0.8s",
      rotate: "-1deg",
    },
    {
      id: 6,
      text: "អរគុណច្រើន",
      bottom: "10%",
      right: "80%",
      delay: "1s",
      rotate: "2deg",
    },
    {
      id: 7,
      text: "សុខសប្បាយ",
      top: "0",
      right: "80%",
      delay: "1.2s",
      rotate: "-2deg",
    },
    {
      id: 8,
      text: "ជំរាបលា",
      bottom: "15%",
      left: "70%",
      delay: "1.4s",
      rotate: "1deg",
    },
  ];

  return (
    <div className="relative w-[30vw] lg:w-full h-96 scale-90 lg:scale-110">
      {textBoxes.map((box) => (
        <div
          key={box.id}
          className="absolute bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl px-5 py-4 shadow-2xl min-w-[200px] max-w-[280px] animate-float"
          style={{
            top: box.top,
            left: box.left,
            right: box.right,
            bottom: box.bottom,
            transform: `rotate(${box.rotate})`,
            animationDelay: box.delay,
          }}
        >
          <p className="text-xs text-white/70 mb-1.5 tracking-wide font-sans">
            Detected Text
          </p>
          <p className="text-sm text-white font-medium font-khmer">
            {box.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function FeatureInfo({ icon, title, description, align = "left" }) {
  return (
    <div
      className={`flex flex-col gap-5 w-full lg:w-2xl ${
        align === "left"
          ? "items-center lg:items-start text-center lg:text-left"
          : "items-center lg:items-end text-center lg:text-right"
      }`}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16">{icon}</div>

      {/* Title */}
      <h3 className="text-3xl lg:text-4xl font-bold text-white font-heading">
        {title}
      </h3>

      {/* Description */}
      <p className="text-white/60 text-base lg:text-lg leading-relaxed font-sans w-full">
        {description}
      </p>
    </div>
  );
}

export default function FeatureShowcase() {
  return (
    <section className="relative w-screen py-48 bg-brand-background overflow-hidden">
      <div className="flex flex-col gap-72">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`relative z-10 flex flex-col items-center gap-20 px-8 lg:flex-row lg:justify-between lg:items-center lg:gap-95 max-w-[1700px] mx-auto ${
              feature.imageLeft ? "" : "lg:flex-row-reverse"
            }`}
          >
            {/* Demo Image, Floating Text Boxes, Dataset Collage, or Security Icons */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              {feature.id === 2 ? (
                <FloatingTextBoxes />
              ) : feature.id === 3 ? (
                <DatasetCollage addClassName="relative w-[90vw] lg:w-[40vw] lg:mr-[-200px] max-w-[835px] h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden rounded-2xl" />
              ) : feature.id === 4 ? (
                <SecurityIcons />
              ) : (
                <DemoImage cursorImg={cursorImg} namasteImg={namasteImg} />
              )}
            </div>

            {/* Feature Info */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <FeatureInfo
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                align={feature.imageLeft ? "left" : "right"}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
