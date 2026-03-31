import React, { useRef, useState, useMemo } from "react";

const SAMPLE_SIGNS = [
  { id: 1, label: "ខ្មាស់អៀន", video: "ខ្មាស់អៀន-4.mov" },
  { id: 2, label: "គ្រួសារ", video: "គ្រួសារ-16.mp4" },
  { id: 3, label: "ងងុយដេក", video: "ងងុយដេក-8.mov" },
  { id: 4, label: "ច្រណែន", video: "ច្រណែន-5.mov" },
  { id: 5, label: "ជីដូនមួយ", video: "ជីដូនមួយ-18.mp4" },
  { id: 6, label: "តា", video: "តា-4.mov" },
  { id: 7, label: "បងប្អូន", video: "បងប្អូន-6.mov" },
  { id: 8, label: "បារម្មណ៍", video: "បារម្មណ៍-5.mov" },
  { id: 9, label: "ភ្ញាក់ផ្អើល", video: "ភ្ញាក់ផ្អើល-7.mov" },
  { id: 10, label: "មានផ្ទៃពោះ", video: "មានផ្ទៃពោះ-8.mov" },
  { id: 11, label: "ម្តាយ", video: "ម្តាយ-17.mp4" },
  { id: 12, label: "សប្បាយ", video: "សប្បាយ-7.mov" },
  { id: 13, label: "ស្រឡាញ់", video: "ស្រឡាញ់-8.mov" },
  { id: 14, label: "អស់កម្លាំង", video: "អស់កម្លាំង-9.mov" },
  { id: 15, label: "អាណិត", video: "អាណិត-21.mp4" },
  { id: 16, label: "អារម្មណ៍", video: "អារម្មណ៍-21.mp4" },
  { id: 17, label: "ឪពុកម្តាយ", video: "ឪពុកម្តាយ-13.mp4" },
  { id: 18, label: "ឯកា", video: "ឯកា-23.mp4" },
];

const GestureCard = ({ sign }) => {
  const videoRef = useRef(null);

  return (
    <div 
      className="group relative flex flex-col items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300 shadow-md"
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
        <video
          ref={videoRef}
          src={`src/assets/videos/sample_signs/${sign.video}`}
          muted loop playsInline
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity pointer-events-none">
          <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/10">
            <svg className="w-4 h-4 text-white/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="py-2.5 w-full text-center bg-white/5 group-hover:bg-brand-primary/20 transition-colors">
        <span className="text-white/90 text-[13px] font-sans font-medium">{sign.label}</span>
      </div>
    </div>
  );
};

export function SampleGestureModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSigns = useMemo(() => {
    return SAMPLE_SIGNS.filter(sign => 
      sign.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#1a1a1a]/90 backdrop-blur-2xl border border-white/10 rounded-2xl flex flex-col shadow-2xl overflow-hidden max-h-[85vh]">
        
        {/* Header (Sticky) */}
        <div className="px-6 pt-6 pb-4 flex justify-between items-center border-b border-white/5">
          <div>
            <h3 className="font-heading text-xl font-semibold text-white">Sample Gestures</h3>
            <p className="text-white/40 text-xs mt-0.5">Hover on a video to preview the sign.</p>
          </div>
          <button onClick={onClose} className="p-2 -mr-2 text-white/40 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {filteredSigns.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-4">
              {filteredSigns.map((sign) => (
                <GestureCard key={sign.id} sign={sign} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-white/20">
              <svg className="w-12 h-12 mb-3 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-sm font-sans">រកមិនឃើញពាក្យ "{searchQuery}"</span>
            </div>
          )}
        </div>

        {/* Search Bar at Bottom (Replaces Done Button) */}
        <div className="p-6 bg-white/5 border-t border-white/10">
          <div className="relative group">
            <input
              type="text"
              placeholder="ស្វែងរកពាក្យ... (Search gestures)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-12 pr-6 text-white text-sm focus:outline-none focus:border-brand-primary/50 focus:bg-white/10 transition-all duration-300"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-white/30 group-focus-within:text-brand-primary/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {/* Clear Button (appears when typing) */}
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}