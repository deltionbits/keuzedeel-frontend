// import { NextRequest } from 'next/server';

// async function AllRoutes() {
//   return [
//     { path: '/', lastModified: new Date() },
//     { path: '/about', lastModified: new Date() },
//     { path: '/contact', lastModified: new Date() },
//     { path: '/current-games', lastModified: new Date() },
//     { path: '/current-games/valorant', lastModified: new Date() },
//     { path: '/current-games/rainbow-six-siege', lastModified: new Date() },
//     { path: '/current-games/league-of-legends', lastModified: new Date() },
//     { path: '/upcoming-games', lastModified: new Date() },
//     { path: '/upcoming-games/valorant', lastModified: new Date() },
//     { path: '/upcoming-games/god-of-war-ragnarok', lastModified: new Date() },
//     { path: '/upcoming-games/league-of-legends', lastModified: new Date() },
//     { path: 'cart', lastModified: new Date() },
//   ];
// }

// export async function GET(request: NextRequest) {
//   const baseUrl = 'https://boxedgames.nl';
//   const routes = await AllRoutes();

//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// ${routes.map(route => `  <url>
//     <loc>${baseUrl}${route.path}</loc>
//     <lastmod>${route.lastModified.toISOString()}</lastmod>
//   </url>`).join('\n')}
// </urlset>`;

//   return new Response(sitemap, {
//     status: 200,
//     headers: {
//       'Content-Type': 'text/xml',
//       'Cache-Control': 'no-cache, no-store, must-revalidate',
//       'Robots': 'index, follow'
//     }
//   });
// }