/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        // Add custom shadows with colored effects
        "custom-red": "0 4px 6px rgba(255, 0, 0, 0.5)", // Red shadow
        "custom-blue": "0 4px 6px rgba(133, 133, 133, 0.5)", // Blue shadow
        "custom-green": "0 4px 6px rgba(0, 255, 0, 0.5)", // Green shadow
        "custom-uplifted":
          "0 1px 3px rgba(133, 133, 133, 0.5), 0 4px 6px rgba(0, 0, 0, 0.08)", // Soft and diffused
        "custom-elevated":
          "0 10px 15px rgba(133, 133, 133, 0.5), 0 4px 6px rgba(0, 0, 0, 0.05)", // Stronger elevation
      },
    },
  },
  plugins: [require("daisyui")],
};
