import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#20212a", peach: "#ff9e80", lavender: "#c7b9ff", mist: "#f7f7fb" }, boxShadow: { float: "0 18px 55px rgba(57, 45, 90, .12)" } } }, plugins: [] } satisfies Config;
