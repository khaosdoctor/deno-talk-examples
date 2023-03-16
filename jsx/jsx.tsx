/** @jsx h */

import { serve } from 'std/http/server.ts'
import { h, renderSSR } from 'x/nano_jsx@v0.0.20/mod.ts'
import type React from 'https://esm.sh/react@18.2.0'

function App() {
	return (
		<html>
			<head>
				<title>Hello from JSX</title>
			</head>
			<body>
				<h1>Hello world</h1>
			</body>
		</html>
	)
}

function handler() {
	const html = renderSSR(<App />)
	return new Response(html, {
		headers: {
			'content-type': 'text/html',
		},
	})
}

serve(handler)
