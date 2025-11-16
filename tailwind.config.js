/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
  
    experimental: {
        arbitraryProperties: true,
    },
  
    theme: {
        extend: {
            fontFamily: {
            sans: ["Pretendard", "sans-serif"],
            },
    
            screens: {
            mobile: { min: "568px", max: "768px" },
            tablet: { min: "769px", max: "1100px" },
            desktop: { min: "1101px" },
            },
        },
    },
  
        plugins: [],
  };
  