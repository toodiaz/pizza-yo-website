import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: { extend: { colors: { primary: '#E63946', accent: '#FFD60A' } } },
  plugins: []
}
export default config
