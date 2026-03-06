// components\technical\techhomecomponents\TechHomeHero.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-auto bg-[#1E1E1E] overflow-hidden flex items-start md:items-center">
      {/* Grid Background Pattern with varying opacity */}
      <div className="absolute inset-0">
        {/* Base Grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FBFFDE 1px, transparent 1px),
              linear-gradient(to bottom, #FBFFDE 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Faded spots - Top Left */}
        <div
          className="absolute top-0 left-0 w-[40%] h-[40%] opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FBFFDE 1px, transparent 1px),
              linear-gradient(to bottom, #FBFFDE 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at top left, black 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at top left, black 0%, transparent 70%)'
          }}
        />

        {/* Faded spots - Center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FBFFDE 1px, transparent 1px),
              linear-gradient(to bottom, #FBFFDE 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 60%)'
          }}
        />

        {/* Faded spots - Bottom Right */}
        <div
          className="absolute bottom-0 right-0 w-[35%] h-[35%] opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #FBFFDE 1px, transparent 1px),
              linear-gradient(to bottom, #FBFFDE 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at bottom right, black 0%, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(circle at bottom right, black 0%, transparent 65%)'
          }}
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E]/60 via-transparent to-transparent" />

      {/* Light Source - Quarter Circle Top Right */}
      <div className="absolute -top-[50%] -right-[50%] md:-top-[40%] md:-right-[30%] lg:-top-[30%] lg:-right-[20%] w-[100vw] h-[100vw] md:w-[80vw] md:h-[80vw] lg:w-[60vw] lg:h-[60vw]">
        <div
          className="w-full h-full rounded-full opacity-30 blur-[100px] md:blur-[120px] lg:blur-[150px]"
          style={{
            background: 'radial-gradient(circle at top right, #D8F209 0%, transparent 70%)'
          }}
        />
      </div>

      {/* Container */}
      <div className="relative w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32 py-6 sm:py-8 md:py-12 lg:py-16">

        {/* Content */}
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">

          {/* Label */}
          <div className="inline-block mt-4 sm:mt-6 md:mt-0">
            <span className="text-[#D8F209] uppercase tracking-wider font-medium text-[clamp(10px,2.5vw,13px)]">
              WHAT WE DO
            </span>
          </div>

          {/* Main Heading */}
          <div className="max-w-5xl px-4">
            <h1 className="sr-only">The Ladder Tech - Enterprise Technical Solutions & AI Development</h1>
            <h2 className="m-0 p-0 border-0 outline-none">
              <span className="block text-[#D8F209] font-bold leading-tight text-[clamp(24px,5vw,56px)]">
                Building Digital Foundations
              </span>
              <span className="block text-[#D8F209] font-bold leading-tight text-[clamp(24px,5vw,56px)] mt-1">
                That Help Brands Grow
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-[#FBFFDE]/90 text-[clamp(14px,3.5vw,18px)] leading-relaxed px-4">
            We partner with businesses to design, build, and scale digital products that are purposeful, performant, and built for long-term impact.
          </p>

          {/* CTA Button */}
          <Link href="/technical/services" className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 h-[clamp(44px,10vw,56px)] bg-[#D8F209] text-[#1E1E1E] font-semibold rounded-lg text-[clamp(14px,3.5vw,16px)] hover:bg-[#c4db08] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#D8F209]/30 touch-manipulation">
            Our capabilities
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Animated Connection Diagram - SVG */}
        <div className="relative mt-6 sm:mt-8 md:mt-12 lg:mt-16 w-full flex items-center justify-center">
          <div className="w-full max-w-6xl px-4 sm:px-0">

            <svg
              className="w-full h-auto"
              viewBox="0 0 1218 278"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Define the paths for animation */}
              <defs>
                {/* Left Top Path - REVERSED */}
                <path id="leftTopPath" d="M 538.5 124.5 L 339.5 124.5 C 331 124.5 323.5 116 323.5 108.5 L 323.5 48 C 323.5 40 315 32 307.5 32 L 137.5 32" />

                {/* Left Middle Path - REVERSED */}
                <path id="leftMiddlePath" d="M 538.5 139.5 H 266.728 L 254 150 Q 245 160.5 233.772 160.5 H 68" />

                {/* Left Bottom Path - REVERSED */}
                <path id="leftBottomPath" d="M 538.5 153 L 339.5 153 C 331 153 323.5 161 323.5 169 L 323.5 229.5 C 323.5 237 315 245.5 307.5 245.5 L 137.5 245.5" />

                {/* Right Top Path */}
                <path id="rightTopPath" d="M 678.5 124.5 H 877.5 Q 893.5 124.5 893.5 108.5 V 48 Q 893.5 32 909.5 32 H 1079.5" />

                {/* Right Middle Path */}
                <path id="rightMiddlePath" d="M 678.5 139.5 H 950.272 Q 961 139.5 970 149 L 983.228 160.5 H 1149" />

                {/* Right Bottom Path */}
                <path id="rightBottomPath" d="M 678.5 153 H 877.5 Q 893.5 153 893.5 169 V 229.5 Q 893.5 245.5 909.5 245.5 H 1079.5" />

                {/* Filters from original SVG */}
                <filter id="filter0_f_38_220" x="43.3335" y="114.833" width="519.833" height="70.3334" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter1_f_38_220" x="526" y="137" width="12" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter2_f_38_220" x="523" y="134" width="18" height="11" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter3_f_38_220" x="112.833" y="7.33331" width="450.333" height="141.833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter4_f_38_220" x="526" y="122" width="12" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter5_f_38_220" x="523" y="119" width="18" height="11" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter6_f_38_220" x="112.833" y="128.333" width="450.333" height="141.833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter7_f_38_220" x="526" y="151" width="12" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter8_f_38_220" x="523" y="148" width="18" height="11" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter9_f_38_220" x="653.833" y="114.833" width="519.833" height="70.3334" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter10_f_38_220" x="679.5" y="137" width="12" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter11_f_38_220" x="676.5" y="134" width="18" height="11" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter12_f_38_220" x="653.833" y="7.33331" width="450.333" height="141.833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter13_f_38_220" x="679.5" y="122" width="12" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter14_f_38_220" x="676.5" y="119" width="18" height="11" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter15_f_38_220" x="653.833" y="128.333" width="450.333" height="141.833" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter16_f_38_220" x="679.5" y="151" width="12" height="5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_38_220" />
                </filter>
                <filter id="filter17_f_38_220" x="676.5" y="148" width="18" height="11" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_38_220" />
                </filter>
                <linearGradient id="paint0_linear_38_220" x1="527" y1="141.5" x2="537" y2="141.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D8F209" />
                  <stop offset="1" stopColor="#D8F209" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_38_220" x1="527" y1="126.5" x2="537" y2="126.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D8F209" />
                  <stop offset="1" stopColor="#D8F209" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear_38_220" x1="527" y1="155.5" x2="537" y2="155.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D8F209" />
                  <stop offset="1" stopColor="#D8F209" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint3_linear_38_220" x1="680.5" y1="141.5" x2="690.5" y2="141.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D8F209" stopOpacity="0" />
                  <stop offset="1" stopColor="#D8F209" />
                </linearGradient>
                <linearGradient id="paint4_linear_38_220" x1="680.5" y1="126.5" x2="690.5" y2="126.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D8F209" stopOpacity="0" />
                  <stop offset="1" stopColor="#D8F209" />
                </linearGradient>
                <linearGradient id="paint5_linear_38_220" x1="680.5" y1="155.5" x2="690.5" y2="155.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D8F209" stopOpacity="0" />
                  <stop offset="1" stopColor="#D8F209" />
                </linearGradient>
              </defs>

              {/* Original SVG content */}
              <g opacity="0.12" filter="url(#filter0_f_38_220)">
                <path d="M549.167 139.5C549.167 145.391 544.391 150.167 538.5 150.167C532.609 150.167 527.833 145.391 527.833 139.5C527.833 133.609 532.609 128.833 538.5 128.833C544.391 128.833 549.167 133.609 549.167 139.5ZM78.6667 160.5C78.6667 166.391 73.8911 171.167 68 171.167C62.1089 171.167 57.3333 166.391 57.3333 160.5C57.3333 154.609 62.1089 149.833 68 149.833C73.8911 149.833 78.6667 154.609 78.6667 160.5ZM538.5 139.5V141.5H266.728V139.5V137.5H538.5V139.5ZM254.722 144.924L256.223 146.246L247.279 156.399L245.778 155.076L244.277 153.754L253.221 143.601L254.722 144.924ZM233.772 160.5V162.5H68V160.5V158.5H233.772V160.5ZM245.778 155.076L247.279 156.399C243.861 160.277 238.942 162.5 233.772 162.5V160.5V158.5C237.793 158.5 241.619 156.771 244.277 153.754L245.778 155.076ZM266.728 139.5V141.5C262.707 141.5 258.881 143.229 256.223 146.246L254.722 144.924L253.221 143.601C256.639 139.723 261.558 137.5 266.728 137.5V139.5Z" fill="#D8F209" />
              </g>
              <path opacity="0.45" d="M541.167 139.5C541.167 140.973 539.973 142.167 538.5 142.167C537.027 142.167 535.833 140.973 535.833 139.5C535.833 138.027 537.027 136.833 538.5 136.833C539.973 136.833 541.167 138.027 541.167 139.5ZM70.6667 160.5C70.6667 161.973 69.4727 163.167 68 163.167C66.5273 163.167 65.3333 161.973 65.3333 160.5C65.3333 159.027 66.5273 157.833 68 157.833C69.4727 157.833 70.6667 159.027 70.6667 160.5ZM538.5 139.5V140H266.728V139.5V139H538.5V139.5ZM254.722 144.924L255.097 145.254L246.153 155.407L245.778 155.076L245.403 154.746L254.347 144.593L254.722 144.924ZM233.772 160.5V161H68V160.5V160H233.772V160.5ZM245.778 155.076L246.153 155.407C243.021 158.963 238.511 161 233.772 161V160.5V160C238.224 160 242.46 158.086 245.403 154.746L245.778 155.076ZM266.728 139.5V140C262.276 140 258.04 141.914 255.097 145.254L254.722 144.924L254.347 144.593C257.479 141.037 261.989 139 266.728 139V139.5Z" fill="#D8F209" />
              <g filter="url(#filter1_f_38_220)">
                <line x1="528.5" y1="139.5" x2="535.5" y2="139.5" stroke="#D8F209" strokeWidth="3" strokeLinecap="round" />
              </g>
              <g filter="url(#filter2_f_38_220)">
                <line x1="528.5" y1="139.5" x2="535.5" y2="139.5" stroke="url(#paint0_linear_38_220)" strokeWidth="3" strokeLinecap="round" />
              </g>
              <g opacity="0.12" filter="url(#filter3_f_38_220)">
                <path d="M549.167 124.5C549.167 130.391 544.391 135.167 538.5 135.167C532.609 135.167 527.833 130.391 527.833 124.5C527.833 118.609 532.609 113.833 538.5 113.833C544.391 113.833 549.167 118.609 549.167 124.5ZM148.167 32C148.167 37.891 143.391 42.6667 137.5 42.6667C131.609 42.6667 126.833 37.891 126.833 32C126.833 26.109 131.609 21.3333 137.5 21.3333C143.391 21.3333 148.167 26.109 148.167 32ZM538.5 124.5V126.5H339.5V124.5V122.5H538.5V124.5ZM323.5 108.5H321.5V48H323.5H325.5V108.5H323.5ZM307.5 32V34H137.5V32V30H307.5V32ZM323.5 48H321.5C321.5 40.268 315.232 34 307.5 34V32V30C317.441 30 325.5 38.0589 325.5 48H323.5ZM339.5 124.5V126.5C329.559 126.5 321.5 118.441 321.5 108.5H323.5H325.5C325.5 116.232 331.768 122.5 339.5 122.5V124.5Z" fill="#D8F209" />
              </g>
              <g filter="url(#filter4_f_38_220)">
                <line x1="528.5" y1="124.5" x2="535.5" y2="124.5" stroke="#D8F209" strokeWidth="3" strokeLinecap="round" />
              </g>
              <g filter="url(#filter5_f_38_220)">
                <line x1="528.5" y1="124.5" x2="535.5" y2="124.5" stroke="url(#paint1_linear_38_220)" strokeWidth="3" strokeLinecap="round" />
              </g>
              <path opacity="0.45" d="M541.167 124.5C541.167 125.973 539.973 127.167 538.5 127.167C537.027 127.167 535.833 125.973 535.833 124.5C535.833 123.027 537.027 121.833 538.5 121.833C539.973 121.833 541.167 123.027 541.167 124.5ZM140.167 32C140.167 33.4728 138.973 34.6667 137.5 34.6667C136.027 34.6667 134.833 33.4728 134.833 32C134.833 30.5272 136.027 29.3333 137.5 29.3333C138.973 29.3333 140.167 30.5272 140.167 32ZM538.5 124.5V125H339.5V124.5V124H538.5V124.5ZM323.5 108.5H323V48H323.5H324V108.5H323.5ZM307.5 32V32.5H137.5V32V31.5H307.5V32ZM323.5 48H323C323 39.4396 316.06 32.5 307.5 32.5V32V31.5C316.613 31.5 324 38.8873 324 48H323.5ZM339.5 124.5V125C330.387 125 323 117.613 323 108.5H323.5H324C324 117.06 330.94 124 339.5 124V124.5Z" fill="#D8F209" />
              <g opacity="0.12" filter="url(#filter6_f_38_220)">
                <path d="M549.167 153C549.167 147.109 544.391 142.333 538.5 142.333C532.609 142.333 527.833 147.109 527.833 153C527.833 158.891 532.609 163.667 538.5 163.667C544.391 163.667 549.167 158.891 549.167 153ZM148.167 245.5C148.167 239.609 143.391 234.833 137.5 234.833C131.609 234.833 126.833 239.609 126.833 245.5C126.833 251.391 131.609 256.167 137.5 256.167C143.391 256.167 148.167 251.391 148.167 245.5ZM538.5 153V151H339.5V153V155H538.5V153ZM323.5 169H321.5V229.5H323.5H325.5V169H323.5ZM307.5 245.5V243.5H137.5V245.5V247.5H307.5V245.5ZM323.5 229.5H321.5C321.5 237.232 315.232 243.5 307.5 243.5V245.5V247.5C317.441 247.5 325.5 239.441 325.5 229.5H323.5ZM339.5 153V151C329.559 151 321.5 159.059 321.5 169H323.5H325.5C325.5 161.268 331.768 155 339.5 155V153Z" fill="#D8F209" />
              </g>
              <path opacity="0.45" d="M541.167 153C541.167 151.527 539.973 150.333 538.5 150.333C537.027 150.333 535.833 151.527 535.833 153C535.833 154.473 537.027 155.667 538.5 155.667C539.973 155.667 541.167 154.473 541.167 153ZM140.167 245.5C140.167 244.027 138.973 242.833 137.5 242.833C136.027 242.833 134.833 244.027 134.833 245.5C134.833 246.973 136.027 248.167 137.5 248.167C138.973 248.167 140.167 246.973 140.167 245.5ZM538.5 153V152.5H339.5V153V153.5H538.5V153ZM323.5 169H323V229.5H323.5H324V169H323.5ZM307.5 245.5V245H137.5V245.5V246H307.5V245.5ZM323.5 229.5H323C323 238.06 316.06 245 307.5 245V245.5V246C316.613 246 324 238.613 324 229.5H323.5ZM339.5 153V152.5C330.387 152.5 323 159.887 323 169H323.5H324C324 160.44 330.94 153.5 339.5 153.5V153Z" fill="#D8F209" />
              <g filter="url(#filter7_f_38_220)">
                <line x1="528.5" y1="153.5" x2="535.5" y2="153.5" stroke="#D8F209" strokeWidth="3" strokeLinecap="round" />
              </g>
              <g filter="url(#filter8_f_38_220)">
                <line x1="528.5" y1="153.5" x2="535.5" y2="153.5" stroke="url(#paint2_linear_38_220)" strokeWidth="3" strokeLinecap="round" />
              </g>
              <rect x="70.5" y="0.5" width="63.0439" height="63.0439" rx="19.5" fill="#D8F209" fillOpacity="0.2" />
              <rect x="70.5" y="0.5" width="63.0439" height="63.0439" rx="19.5" stroke="#D8F209" />
              <path d="M117.038 26.4493C118.313 29.8744 118.378 33.6328 117.222 37.0998C116.065 40.5669 113.758 43.5339 110.682 45.5079C107.606 47.4819 103.947 48.3441 100.314 47.9511C96.68 47.5581 93.2903 45.9337 90.7076 43.3477C87.8065 40.4561 86.1241 36.5626 86.0066 32.4682C85.8891 28.3739 87.3455 24.3902 90.076 21.3371C92.8065 18.2839 96.6034 16.3935 100.685 16.0548C104.767 15.7162 108.824 16.9551 112.02 19.5166L115 16.5357C115.165 16.3702 115.362 16.2389 115.578 16.1494C115.794 16.0598 116.026 16.0138 116.26 16.0138C116.494 16.0138 116.725 16.0598 116.942 16.1494C117.158 16.2389 117.354 16.3702 117.52 16.5357C117.685 16.7011 117.816 16.8975 117.906 17.1137C117.995 17.3299 118.041 17.5616 118.041 17.7956C118.041 18.0296 117.995 18.2613 117.906 18.4775C117.816 18.6937 117.685 18.8901 117.52 19.0556L103.289 33.2858C103.124 33.4512 102.928 33.5825 102.711 33.672C102.495 33.7616 102.263 33.8076 102.029 33.8076C101.795 33.8076 101.564 33.7616 101.348 33.672C101.131 33.5825 100.935 33.4512 100.77 33.2858C100.604 33.1203 100.473 32.9239 100.383 32.7077C100.294 32.4915 100.248 32.2598 100.248 32.0258C100.248 31.7918 100.294 31.5601 100.383 31.3439C100.473 31.1277 100.604 30.9313 100.77 30.7658L104.327 27.2083C103.324 26.7292 102.197 26.5752 101.103 26.7675C100.008 26.9599 99.0012 27.4892 98.222 28.2814C97.4428 29.0737 96.9304 30.0894 96.7562 31.1869C96.5821 32.2844 96.7549 33.4089 97.2505 34.4035C97.7462 35.398 98.54 36.2131 99.5211 36.7348C100.502 37.2566 101.622 37.459 102.723 37.3139C103.825 37.1688 104.854 36.6834 105.667 35.9254C106.479 35.1674 107.035 34.1746 107.256 33.0856C107.349 32.6231 107.622 32.2166 108.015 31.9554C108.408 31.6942 108.889 31.5998 109.351 31.693C109.814 31.7862 110.22 32.0593 110.482 32.4522C110.743 32.8451 110.837 33.3257 110.744 33.7883C110.365 35.6547 109.397 37.3503 107.982 38.6254C106.568 39.9004 104.781 40.6877 102.885 40.8713C100.99 41.0549 99.085 40.6251 97.4519 39.6452C95.8188 38.6653 94.5434 37.187 93.8133 35.4279C93.0833 33.6688 92.9373 31.7219 93.3967 29.8736C93.8561 28.0252 94.8967 26.3732 96.3653 25.1606C97.8339 23.948 99.653 23.2389 101.555 23.1376C103.457 23.0363 105.341 23.5482 106.93 24.5979L109.484 22.0528C107.085 20.2611 104.12 19.3939 101.134 19.6102C98.1474 19.8265 95.3389 21.1118 93.223 23.2306C91.1071 25.3493 89.8256 28.1596 89.6133 31.1464C89.4011 34.1332 90.2723 37.0965 92.0673 39.4932C93.8623 41.8899 96.4608 43.5595 99.3867 44.1959C102.313 44.8324 105.37 44.3932 107.998 42.9587C110.627 41.5243 112.65 39.1907 113.698 36.3856C114.745 33.5805 114.747 30.4918 113.703 27.6856C113.62 27.4662 113.581 27.2325 113.588 26.998C113.596 26.7635 113.65 26.5328 113.747 26.3192C113.844 26.1056 113.982 25.9133 114.154 25.7534C114.325 25.5935 114.527 25.4692 114.747 25.3876C114.967 25.3059 115.201 25.2686 115.435 25.2778C115.67 25.2869 115.9 25.3424 116.113 25.441C116.326 25.5395 116.517 25.6792 116.676 25.852C116.835 26.0248 116.958 26.2273 117.038 26.4479V26.4493Z" fill="#D8F209" />
              <g opacity="0.8">
                <rect x="0.5" y="129.5" width="63" height="63" rx="19.5" fill="#D8F209" fillOpacity="0.2" />
                <rect x="0.5" y="129.5" width="63" height="63" rx="19.5" stroke="#D8F209" />
                <path d="M45.037 145H18.963C18.1771 145 17.4235 145.366 16.8678 146.019C16.3122 146.671 16 147.556 16 148.478V173.522C16 174.444 16.3122 175.329 16.8678 175.981C17.4235 176.634 17.8229 177 18.963 177H45.037C45.8229 177 46.5765 176.634 47.1322 175.981C47.6878 175.329 48 174.444 48 173.522V148.478C48 147.556 47.6878 146.671 47.1322 146.019C46.5765 145.366 45.8229 145 45.037 145ZM44.4444 149.174V154.739H19.5556V149.174H44.4444ZM19.5556 158.913H26.6667V172.826H19.5556V158.913ZM30.2222 172.826V158.913H44.4444V172.826H30.2222Z" fill="#D8F209" />
              </g>
              <g opacity="0.6">
                <rect x="70.5" y="214.5" width="63" height="63" rx="19.5" fill="#D8F209" fillOpacity="0.2" />
                <rect x="70.5" y="214.5" width="63" height="63" rx="19.5" stroke="#D8F209" />
                <path d="M118 246C118 249.164 117.546 252.258 116.695 254.889C115.845 257.52 114.635 259.571 113.22 260.782C111.805 261.993 110.248 262.31 108.746 261.692C107.244 261.075 105.864 259.551 104.781 257.313L104.718 257.172L96.993 239.15C96.3399 237.825 95.512 236.929 94.6131 236.573C93.7143 236.217 92.7846 236.417 91.9407 237.149C91.0967 237.881 90.3762 239.111 89.8695 240.686C89.3628 242.26 89.0925 244.109 89.0925 246C89.0925 247.891 89.3628 249.74 89.8695 251.314C90.3762 252.889 91.0967 254.119 91.9407 254.851C92.7846 255.583 93.7143 255.783 94.6131 255.427C95.512 255.071 96.3399 254.175 96.993 252.85L97.3905 251.922C97.6627 251.286 98.0462 250.899 98.4566 250.846C98.8669 250.794 99.2705 251.081 99.5785 251.643C99.8866 252.206 100.074 252.998 100.099 253.846C100.124 254.694 99.9857 255.528 99.7134 256.164L99.2811 257.172L99.2178 257.313C98.1349 259.55 96.7552 261.074 95.2532 261.691C93.7512 262.308 92.1944 261.991 90.7796 260.78C89.3648 259.569 88.1556 257.519 87.3049 254.888C86.4541 252.257 86 249.164 86 246C86 242.836 86.4541 239.743 87.3049 237.112C88.1556 234.481 89.3648 232.431 90.7796 231.22C92.1944 230.009 93.7512 229.692 95.2532 230.309C96.7552 230.926 98.1349 232.45 99.2178 234.687L99.2811 234.828L107.006 252.85C107.659 254.175 108.487 255.071 109.386 255.427C110.285 255.783 111.215 255.583 112.058 254.851C112.902 254.119 113.623 252.889 114.13 251.314C114.636 249.74 114.907 247.891 114.907 246C114.907 244.109 114.636 242.26 114.13 240.686C113.623 239.111 112.902 237.881 112.058 237.149C111.215 236.417 110.285 236.217 109.386 236.573C108.487 236.929 107.659 237.825 107.006 239.15L106.609 240.078C106.474 240.393 106.31 240.65 106.127 240.835C105.944 241.019 105.746 241.128 105.543 241.154C105.339 241.18 105.136 241.122 104.943 240.986C104.751 240.849 104.573 240.635 104.421 240.357C104.268 240.078 104.144 239.74 104.054 239.362C103.965 238.984 103.912 238.574 103.9 238.154C103.887 237.734 103.915 237.313 103.981 236.916C104.047 236.518 104.151 236.151 104.286 235.836L104.718 234.828L104.781 234.687C105.864 232.449 107.244 230.925 108.746 230.308C110.248 229.69 111.805 230.007 113.22 231.218C114.635 232.429 115.845 234.48 116.695 237.111C117.546 239.742 118 242.836 118 246Z" fill="#D8F209" />
              </g>
              <rect x="544" y="74.5" width="129" height="129" rx="39.5" fill="#D8F209" fillOpacity="0.1" />
              <rect x="544" y="74.5" width="129" height="129" rx="39.5" stroke="#D8F209" />
              <path d="M618.533 87.5701C618.533 87.2552 618.788 87 619.102 87H622.518C622.832 87 623.087 87.2552 623.087 87.5701V187.054H618.533V87.5701Z" fill="#D8F209" />
              <path d="M597.471 87.5701C597.471 87.2552 597.725 87 598.04 87H601.455C601.77 87 602.025 87.2552 602.025 87.5701V107.385C602.025 107.699 601.77 107.955 601.455 107.955H598.04C597.725 107.955 597.471 107.699 597.471 107.385V87.5701Z" fill="#D8F209" />
              <path d="M597.471 109.722C597.471 109.407 597.725 109.152 598.04 109.152H601.455C601.77 109.152 602.025 109.407 602.025 109.722V129.537C602.025 129.852 601.77 130.107 601.455 130.107H598.04C597.725 130.107 597.471 129.852 597.471 129.537V109.722Z" fill="#D8F209" />
              <path d="M597.471 131.874C597.471 131.559 597.725 131.304 598.04 131.304H601.455C601.77 131.304 602.025 131.559 602.025 131.874V151.689C602.025 152.004 601.77 152.259 601.455 152.259H598.04C597.725 152.259 597.471 152.004 597.471 151.689V131.874Z" fill="#D8F209" />
              <path d="M597.471 149.142C597.471 148.827 597.725 148.572 598.04 148.572H601.455C601.77 148.572 602.025 148.827 602.025 149.142V187.054H597.471V149.142Z" fill="#D8F209" />
              <path d="M616.825 103.165C617.14 103.165 617.395 103.42 617.395 103.735V107.385C617.395 107.699 617.14 107.955 616.825 107.955H598.04C597.725 107.955 597.471 107.699 597.471 107.385V103.735C597.471 103.42 597.725 103.165 598.04 103.165H616.825Z" fill="#D8F209" />
              <path d="M616.825 125.317C617.14 125.317 617.395 125.572 617.395 125.887V129.537C617.395 129.852 617.14 130.107 616.825 130.107H598.04C597.725 130.107 597.471 129.852 597.471 129.537V125.887C597.471 125.572 597.725 125.317 598.04 125.317H616.825Z" fill="#D8F209" />
              <path d="M616.825 147.469C617.14 147.469 617.395 147.725 617.395 148.039V151.689C617.395 152.004 617.14 152.259 616.825 152.259L598.04 152.259C597.725 152.259 597.471 152.004 597.471 151.689V148.039C597.471 147.725 597.725 147.469 598.04 147.469H616.825Z" fill="#D8F209" />
              <path d="M616.825 169.621C617.14 169.621 617.395 169.877 617.395 170.191V174.411H597.471V170.191C597.471 169.877 597.725 169.621 598.04 169.621H616.825Z" fill="#D8F209" />
              <path d="M646 191C644.577 190.85 629.542 186.959 608.713 186.959C587.885 186.959 571.712 190.925 571 191C571 189.388 587.885 181.496 608.713 181.496C629.542 181.496 646 189.388 646 191Z" fill="#D8F209" />
              <g style={{ mixBlendMode: 'screen' }} opacity="0.12" filter="url(#filter9_f_38_220)">
                <path d="M667.833 139.5C667.833 145.391 672.609 150.167 678.5 150.167C684.391 150.167 689.167 145.391 689.167 139.5C689.167 133.609 684.391 128.833 678.5 128.833C672.609 128.833 667.833 133.609 667.833 139.5ZM1138.33 160.5C1138.33 166.391 1143.11 171.167 1149 171.167C1154.89 171.167 1159.67 166.391 1159.67 160.5C1159.67 154.609 1154.89 149.833 1149 149.833C1143.11 149.833 1138.33 154.609 1138.33 160.5ZM678.5 139.5V141.5H950.272V139.5V137.5H678.5V139.5ZM962.278 144.924L960.777 146.246L969.721 156.399L971.222 155.076L972.723 153.754L963.779 143.601L962.278 144.924ZM983.228 160.5V162.5H1149V160.5V158.5H983.228V160.5ZM971.222 155.076L969.721 156.399C973.139 160.277 978.058 162.5 983.228 162.5V160.5V158.5C979.207 158.5 975.381 156.771 972.723 153.754L971.222 155.076ZM950.272 139.5V141.5C954.293 141.5 958.119 143.229 960.777 146.246L962.278 144.924L963.779 143.601C960.361 139.723 955.442 137.5 950.272 137.5V139.5Z" fill="#D8F209" />
              </g>
              <g style={{ mixBlendMode: 'screen' }} opacity="0.45">
                <path d="M675.833 139.5C675.833 140.973 677.027 142.167 678.5 142.167C679.973 142.167 681.167 140.973 681.167 139.5C681.167 138.027 679.973 136.833 678.5 136.833C677.027 136.833 675.833 138.027 675.833 139.5ZM1146.33 160.5C1146.33 161.973 1147.53 163.167 1149 163.167C1150.47 163.167 1151.67 161.973 1151.67 160.5C1151.67 159.027 1150.47 157.833 1149 157.833C1147.53 157.833 1146.33 159.027 1146.33 160.5ZM678.5 139.5V140H950.272V139.5V139H678.5V139.5ZM962.278 144.924L961.903 145.254L970.847 155.407L971.222 155.076L971.597 154.746L962.653 144.593L962.278 144.924ZM983.228 160.5V161H1149V160.5V160H983.228V160.5ZM971.222 155.076L970.847 155.407C973.979 158.963 978.489 161 983.228 161V160.5V160C978.776 160 974.54 158.086 971.597 154.746L971.222 155.076ZM950.272 139.5V140C954.724 140 958.96 141.914 961.903 145.254L962.278 144.924L962.653 144.593C959.521 141.037 955.011 139 950.272 139V139.5Z" fill="#D8F209" />
              </g>
              <g filter="url(#filter10_f_38_220)">
                <line x1="682" y1="139.5" x2="689" y2="139.5" stroke="#D8F209" strokeWidth="3" strokeLinecap="round" />
              </g>
              <g filter="url(#filter11_f_38_220)">
                <line x1="682" y1="139.5" x2="689" y2="139.5" stroke="url(#paint3_linear_38_220)" strokeWidth="3" strokeLinecap="round" />
              </g>
              <g style={{ mixBlendMode: 'screen' }} opacity="0.12" filter="url(#filter12_f_38_220)">
                <path d="M667.833 124.5C667.833 130.391 672.609 135.167 678.5 135.167C684.391 135.167 689.167 130.391 689.167 124.5C689.167 118.609 684.391 113.833 678.5 113.833C672.609 113.833 667.833 118.609 667.833 124.5ZM1068.83 32C1068.83 37.891 1073.61 42.6667 1079.5 42.6667C1085.39 42.6667 1090.17 37.891 1090.17 32C1090.17 26.109 1085.39 21.3333 1079.5 21.3333C1073.61 21.3333 1068.83 26.109 1068.83 32ZM678.5 124.5V126.5H877.5V124.5V122.5H678.5V124.5ZM893.5 108.5H895.5V48H893.5H891.5V108.5H893.5ZM909.5 32V34H1079.5V32V30H909.5V32ZM893.5 48H895.5C895.5 40.268 901.768 34 909.5 34V32V30C899.559 30 891.5 38.0589 891.5 48H893.5ZM877.5 124.5V126.5C887.441 126.5 895.5 118.441 895.5 108.5H893.5H891.5C891.5 116.232 885.232 122.5 877.5 122.5V124.5Z" fill="#D8F209" />
              </g>
              <g style={{ mixBlendMode: 'screen' }} opacity="0.45">
                <path d="M675.833 124.5C675.833 125.973 677.027 127.167 678.5 127.167C679.973 127.167 681.167 125.973 681.167 124.5C681.167 123.027 679.973 121.833 678.5 121.833C677.027 121.833 675.833 123.027 675.833 124.5ZM1076.83 32C1076.83 33.4728 1078.03 34.6667 1079.5 34.6667C1080.97 34.6667 1082.17 33.4728 1082.17 32C1082.17 30.5272 1080.97 29.3333 1079.5 29.3333C1078.03 29.3333 1076.83 30.5272 1076.83 32ZM678.5 124.5V125H877.5V124.5V124H678.5V124.5ZM893.5 108.5H894V48H893.5H893V108.5H893.5ZM909.5 32V32.5H1079.5V32V31.5H909.5V32ZM893.5 48H894C894 39.4396 900.94 32.5 909.5 32.5V32V31.5C900.387 31.5 893 38.8873 893 48H893.5ZM877.5 124.5V125C886.613 125 894 117.613 894 108.5H893.5H893C893 117.06 886.06 124 877.5 124V124.5Z" fill="#D8F209" />
              </g>
              <g filter="url(#filter13_f_38_220)">
                <line x1="682" y1="124.5" x2="689" y2="124.5" stroke="#D8F209" strokeWidth="3" strokeLinecap="round" />
              </g>
              <g filter="url(#filter14_f_38_220)">
                <line x1="682" y1="124.5" x2="689" y2="124.5" stroke="url(#paint4_linear_38_220)" strokeWidth="3" strokeLinecap="round" />
              </g>
              <g style={{ mixBlendMode: 'screen' }} opacity="0.12" filter="url(#filter15_f_38_220)">
                <path d="M667.833 153C667.833 147.109 672.609 142.333 678.5 142.333C684.391 142.333 689.167 147.109 689.167 153C689.167 158.891 684.391 163.667 678.5 163.667C672.609 163.667 667.833 158.891 667.833 153ZM1068.83 245.5C1068.83 239.609 1073.61 234.833 1079.5 234.833C1085.39 234.833 1090.17 239.609 1090.17 245.5C1090.17 251.391 1085.39 256.167 1079.5 256.167C1073.61 256.167 1068.83 251.391 1068.83 245.5ZM678.5 153V151H877.5V153V155H678.5V153ZM893.5 169H895.5V229.5H893.5H891.5V169H893.5ZM909.5 245.5V243.5H1079.5V245.5V247.5H909.5V245.5ZM893.5 229.5H895.5C895.5 237.232 901.768 243.5 909.5 243.5V245.5V247.5C899.559 247.5 891.5 239.441 891.5 229.5H893.5ZM877.5 153V151C887.441 151 895.5 159.059 895.5 169H893.5H891.5C891.5 161.268 885.232 155 877.5 155V153Z" fill="#D8F209" />
              </g>
              <g style={{ mixBlendMode: 'screen' }} opacity="0.45">
                <path d="M675.833 153C675.833 151.527 677.027 150.333 678.5 150.333C679.973 150.333 681.167 151.527 681.167 153C681.167 154.473 679.973 155.667 678.5 155.667C677.027 155.667 675.833 154.473 675.833 153ZM1076.83 245.5C1076.83 244.027 1078.03 242.833 1079.5 242.833C1080.97 242.833 1082.17 244.027 1082.17 245.5C1082.17 246.973 1080.97 248.167 1079.5 248.167C1078.03 248.167 1076.83 246.973 1076.83 245.5ZM678.5 153V152.5H877.5V153V153.5H678.5V153ZM893.5 169H894V229.5H893.5H893V169H893.5ZM909.5 245.5V245H1079.5V245.5V246H909.5V245.5ZM893.5 229.5H894C894 238.06 900.94 245 909.5 245V245.5V246C900.387 246 893 238.613 893 229.5H893.5ZM877.5 153V152.5C886.613 152.5 894 159.887 894 169H893.5H893C893 160.44 886.06 153.5 877.5 153.5V153Z" fill="#D8F209" />
              </g>
              <g filter="url(#filter16_f_38_220)">
                <line x1="682" y1="153.5" x2="689" y2="153.5" stroke="#D8F209" strokeWidth="3" strokeLinecap="round" />
              </g>
              <g filter="url(#filter17_f_38_220)">
                <line x1="682" y1="153.5" x2="689" y2="153.5" stroke="url(#paint5_linear_38_220)" strokeWidth="3" strokeLinecap="round" />
              </g>
              <g opacity="0.8">
                <rect x="1154" y="129.5" width="63" height="63" rx="19.5" fill="#D8F209" fillOpacity="0.2" />
                <rect x="1154" y="129.5" width="63" height="63" rx="19.5" stroke="#D8F209" />
                <path d="M1178.23 156.075L1173.47 161L1178.23 165.925C1178.39 166.086 1178.52 166.283 1178.62 166.507C1178.71 166.731 1178.77 166.976 1178.79 167.228C1178.81 167.48 1178.79 167.735 1178.73 167.977C1178.67 168.219 1178.57 168.444 1178.44 168.639C1178.31 168.833 1178.15 168.994 1177.97 169.112C1177.79 169.229 1177.59 169.301 1177.39 169.323C1177.18 169.345 1176.98 169.316 1176.78 169.24C1176.59 169.163 1176.41 169.039 1176.25 168.875L1170.06 162.475C1169.88 162.295 1169.74 162.07 1169.65 161.815C1169.55 161.56 1169.5 161.282 1169.5 161C1169.5 160.719 1169.55 160.441 1169.65 160.186C1169.74 159.931 1169.88 159.705 1170.06 159.525L1176.25 153.125C1176.57 152.804 1176.97 152.651 1177.38 152.699C1177.79 152.747 1178.16 152.992 1178.42 153.381C1178.68 153.771 1178.81 154.272 1178.77 154.777C1178.74 155.281 1178.54 155.748 1178.23 156.075ZM1200.94 159.525L1194.75 153.125C1194.59 152.961 1194.41 152.838 1194.22 152.761C1194.02 152.684 1193.82 152.656 1193.61 152.678C1193.41 152.7 1193.21 152.771 1193.03 152.889C1192.85 153.006 1192.69 153.167 1192.56 153.362C1192.43 153.556 1192.33 153.781 1192.27 154.023C1192.21 154.266 1192.19 154.52 1192.21 154.772C1192.23 155.025 1192.29 155.27 1192.38 155.493C1192.48 155.717 1192.61 155.915 1192.77 156.075L1197.53 161L1192.77 165.925C1192.61 166.086 1192.48 166.283 1192.38 166.507C1192.29 166.731 1192.23 166.976 1192.21 167.228C1192.19 167.48 1192.21 167.735 1192.27 167.977C1192.33 168.219 1192.43 168.444 1192.56 168.639C1192.69 168.833 1192.85 168.994 1193.03 169.112C1193.21 169.229 1193.41 169.301 1193.61 169.323C1193.82 169.345 1194.02 169.316 1194.22 169.24C1194.41 169.163 1194.59 169.039 1194.75 168.875L1200.94 162.475C1201.12 162.295 1201.26 162.07 1201.35 161.815C1201.45 161.56 1201.5 161.282 1201.5 161C1201.5 160.719 1201.45 160.441 1201.35 160.186C1201.26 159.931 1201.12 159.705 1200.94 159.525ZM1190.16 145.116C1189.97 145.029 1189.76 144.991 1189.56 145.002C1189.36 145.013 1189.16 145.074 1188.97 145.18C1188.79 145.287 1188.62 145.438 1188.49 145.624C1188.35 145.81 1188.24 146.027 1188.17 146.264L1179.92 174.424C1179.78 174.902 1179.79 175.43 1179.97 175.891C1180.14 176.353 1180.46 176.709 1180.84 176.883C1181.01 176.961 1181.19 177 1181.37 177C1181.69 177 1182 176.879 1182.26 176.653C1182.52 176.427 1182.72 176.106 1182.83 175.736L1191.08 147.576C1191.15 147.339 1191.19 147.088 1191.18 146.836C1191.17 146.584 1191.12 146.337 1191.03 146.108C1190.95 145.88 1190.82 145.674 1190.67 145.504C1190.52 145.334 1190.35 145.202 1190.16 145.116Z" fill="#D8F209" />
              </g>
              <g opacity="0.6">
                <rect x="1084" y="214.5" width="63" height="63" rx="19.5" fill="#D8F209" fillOpacity="0.2" />
                <rect x="1084" y="214.5" width="63" height="63" rx="19.5" stroke="#D8F209" />
                <path d="M1100.16 232.904C1099.95 233.078 1099.79 233.294 1099.67 233.536C1099.56 233.778 1099.5 234.041 1099.5 234.307V260.154C1099.5 260.643 1099.7 261.113 1100.06 261.459C1100.42 261.805 1100.91 262 1101.42 262C1101.93 262 1102.42 261.805 1102.78 261.459C1103.14 261.113 1103.34 260.643 1103.34 260.154V253.649C1106.99 251.015 1110.08 252.246 1114.65 254.418C1117.25 255.649 1120.21 257.064 1123.42 257.064C1125.77 257.064 1128.26 256.304 1130.84 254.16C1131.04 253.987 1131.21 253.773 1131.33 253.533C1131.44 253.294 1131.5 253.033 1131.5 252.769V234.307C1131.5 233.953 1131.39 233.606 1131.2 233.309C1131 233.011 1130.71 232.774 1130.38 232.627C1130.04 232.48 1129.67 232.429 1129.31 232.479C1128.94 232.53 1128.6 232.68 1128.32 232.912C1124.37 236.206 1121.2 234.959 1116.35 232.653C1111.85 230.502 1106.25 227.836 1100.16 232.904ZM1127.66 251.886C1124.01 254.521 1120.92 253.287 1116.35 251.117C1112.65 249.347 1108.19 247.23 1103.34 249.364V235.182C1106.99 232.549 1110.08 233.779 1114.65 235.952C1117.25 237.182 1120.21 238.598 1123.42 238.598C1124.88 238.6 1126.33 238.295 1127.66 237.704V251.886Z" fill="#D8F209" />
              </g>
              <rect x="1084" y="0.5" width="63" height="63" rx="19.5" fill="#D8F209" fillOpacity="0.2" />
              <rect x="1084" y="0.5" width="63" height="63" rx="19.5" stroke="#D8F209" />
              <path d="M1131.5 45.913C1131.5 46.4665 1131.31 46.9974 1130.98 47.3887C1130.65 47.7801 1130.19 48 1129.72 48H1101.28C1100.81 48 1100.35 47.7801 1100.02 47.3887C1099.69 46.9974 1099.5 46.4665 1099.5 45.913V18.087C1099.5 17.5335 1099.69 17.0026 1100.02 16.6113C1100.35 16.2199 1100.81 16 1101.28 16C1101.75 16 1102.2 16.2199 1102.53 16.6113C1102.87 17.0026 1103.06 17.5335 1103.06 18.087V35.3043L1109.5 27.7357C1109.67 27.5411 1109.86 27.3867 1110.08 27.2814C1110.3 27.1761 1110.53 27.1218 1110.76 27.1218C1110.99 27.1218 1111.23 27.1761 1111.44 27.2814C1111.66 27.3867 1111.85 27.5411 1112.02 27.7357L1115.5 31.8261L1121.87 24.3478H1120.24C1119.77 24.3478 1119.32 24.128 1118.98 23.7366C1118.65 23.3452 1118.46 22.8144 1118.46 22.2609C1118.46 21.7074 1118.65 21.1765 1118.98 20.7852C1119.32 20.3938 1119.77 20.1739 1120.24 20.1739H1126.17C1126.64 20.1739 1127.09 20.3938 1127.42 20.7852C1127.76 21.1765 1127.94 21.7074 1127.94 22.2609V29.2174C1127.94 29.7709 1127.76 30.3017 1127.42 30.6931C1127.09 31.0845 1126.64 31.3043 1126.17 31.3043C1125.7 31.3043 1125.24 31.0845 1124.91 30.6931C1124.58 30.3017 1124.39 29.7709 1124.39 29.2174V27.3043L1116.76 36.2643C1116.59 36.4589 1116.4 36.6133 1116.18 36.7186C1115.96 36.8239 1115.73 36.8782 1115.5 36.8782C1115.26 36.8782 1115.03 36.8239 1114.82 36.7186C1114.6 36.6133 1114.4 36.4589 1114.24 36.2643L1110.76 32.1739L1103.06 41.2174V43.8261H1129.72C1130.19 43.8261 1130.65 44.046 1130.98 44.4373C1131.31 44.8287 1131.5 45.3595 1131.5 45.913Z" fill="#D8F209" />

              {/* Animated Pills */}
              {/* Left Top Path Pill */}
              <ellipse className="pill-left-top" rx="6" ry="4" fill="#D8F209" opacity="0.9">
                <animateMotion dur="4s" repeatCount="indefinite" begin="0s">
                  <mpath href="#leftTopPath" />
                </animateMotion>
              </ellipse>

              {/* Left Middle Path Pill */}
              <ellipse className="pill-left-middle" rx="6" ry="4" fill="#D8F209" opacity="0.9">
                <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.8s">
                  <mpath href="#leftMiddlePath" />
                </animateMotion>
              </ellipse>

              {/* Left Bottom Path Pill */}
              <ellipse className="pill-left-bottom" rx="6" ry="4" fill="#D8F209" opacity="0.9">
                <animateMotion dur="4.5s" repeatCount="indefinite" begin="1.5s">
                  <mpath href="#leftBottomPath" />
                </animateMotion>
              </ellipse>

              {/* Right Top Path Pill */}
              <ellipse className="pill-right-top" rx="6" ry="4" fill="#D8F209" opacity="0.9">
                <animateMotion dur="3.8s" repeatCount="indefinite" begin="0.5s">
                  <mpath href="#rightTopPath" />
                </animateMotion>
              </ellipse>

              {/* Right Middle Path Pill */}
              <ellipse className="pill-right-middle" rx="6" ry="4" fill="#D8F209" opacity="0.9">
                <animateMotion dur="4.2s" repeatCount="indefinite" begin="1.2s">
                  <mpath href="#rightMiddlePath" />
                </animateMotion>
              </ellipse>

              {/* Right Bottom Path Pill */}
              <ellipse className="pill-right-bottom" rx="6" ry="4" fill="#D8F209" opacity="0.9">
                <animateMotion dur="3.6s" repeatCount="indefinite" begin="2s">
                  <mpath href="#rightBottomPath" />
                </animateMotion>
              </ellipse>
            </svg>


          </div>
        </div>
      </div>
    </section>
  );
}
