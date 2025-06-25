import { NextResponse } from 'next/server'

export function middleware(request) {
  // Haal land info op van Vercel's geo data
  const country = request.geo?.country
  const city = request.geo?.city
  const region = request.geo?.region
  
  console.log(`Bezoeker uit: ${country}, ${city}, ${region}`)
  
  // Alleen Nederland toelaten
  if (country !== 'NL') {
    // Maak een custom error pagina response
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html lang="nl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chatbot Vergelijker - Alleen beschikbaar in Nederland</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 40px 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .container {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            text-align: center;
            max-width: 500px;
          }
          h1 {
            color: #333;
            margin-bottom: 20px;
            font-size: 24px;
          }
          p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 20px;
          }
          .flag {
            font-size: 48px;
            margin-bottom: 20px;
          }
          .contact {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
          }
          .contact h3 {
            margin-top: 0;
            color: #333;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="flag">🇳🇱</div>
          <h1>Chatbot Vergelijker</h1>
          <p><strong>Deze service is momenteel alleen beschikbaar in Nederland</strong></p>
          <p>We detecteerden dat je toegang vraagt vanuit: <strong>${country || 'Onbekend land'}</strong></p>
          <p>Onze chatbot vergelijker is speciaal ontwikkeld voor de Nederlandse markt en compliance vereisten.</p>
          
          <div class="contact">
            <h3>Interesse in internationale uitbreiding?</h3>
            <p>Neem contact met ons op voor meer informatie over beschikbaarheid in jouw regio.</p>
          </div>
        </div>
      </body>
      </html>
      `, 
      { 
        status: 403,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'X-Blocked-Country': country || 'unknown'
        }
      }
    )
  }
  
  // Nederlandse bezoekers doorlaten
  // Optioneel: voeg Nederlandse geo-data toe aan headers voor analytics
  const response = NextResponse.next()
  response.headers.set('X-User-Country', 'NL')
  response.headers.set('X-User-City', city || 'unknown')
  response.headers.set('X-User-Region', region || 'unknown')
  
  return response
}

// Configureer welke routes de middleware moet checken
export const config = {
  matcher: [
    /*
     * Match alle routes behalve:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}