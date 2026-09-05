/** @type {import('next').NextConfig} */

// GitHub Pages sirve los repos de proyecto en una subruta:
// https://usuario.github.io/IaFinde_4/
// Por eso, SOLO cuando se construye para GitHub Pages (variable GITHUB_PAGES=true,
// la pone el workflow automáticamente) añadimos ese prefijo a todas las rutas.
// En local (npm run dev) o en otros hostings (Vercel, Netlify) no se aplica.
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = '/IaFinde_4';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubPages ? repoName : '',
  assetPrefix: isGithubPages ? repoName : '',
};

export default nextConfig;
