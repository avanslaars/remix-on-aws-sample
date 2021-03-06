import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { MetaFunction } from 'remix'

export const meta: MetaFunction = () => {
  return { title: 'Sample Remix App on AWS' }
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <h1>Sample Remix App</h1>
          <nav>
            <Link to="/">Home</Link> <Link to="/about">About</Link>
          </nav>
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
