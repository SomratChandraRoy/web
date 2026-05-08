import { serializeError } from 'serialize-error';

export const getHTMLForErrorPage = (err: unknown): string => {
  return `
<html>
  <head>
    <style>
      body { font-family: system-ui, -apple-system, sans-serif; padding: 2rem; background: #fafafa; color: #333; }
      .error-container { background: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); max-width: 800px; margin: 0 auto; border: 1px solid #fee2e2; }
      h1 { color: #ef4444; margin-top: 0; }
      pre { background: #f871711a; color: #b91c1c; padding: 1rem; overflow-x: auto; border-radius: 4px; font-size: 0.875rem; border: 1px solid #fecaca; }
    </style>
    <script>
    window.onload = () => {
      const error = ${JSON.stringify(serializeError(err))};
      if (window.parent !== window) {
        window.parent.postMessage({ type: 'sandbox:web:ready' }, '*');
        window.parent.postMessage({ type: 'sandbox:error:detected', error: error }, '*');
      } else {
        document.getElementById('fallback-ui').style.display = 'block';
        document.getElementById('error-details').textContent = error.message || JSON.stringify(error, null, 2);
      }

      const healthyResponse = {
        type: 'sandbox:web:healthcheck:response',
        healthy: true,
        hasError: true,
        supportsErrorDetected: true,
      };
      window.addEventListener('message', (event) => {
        if (event.data.type === 'sandbox:navigation') {
          window.location.pathname = event.data.pathname;
        }
        if (event.data.type === 'sandbox:web:healthcheck') {
          window.parent.postMessage(healthyResponse, '*');
        }
      });
      console.error("Server Error:", error);
    }
    </script>
  </head>
  <body>
    <div id="fallback-ui" style="display: none;" class="error-container">
      <h1>Server Initialization Error</h1>
      <p>An unexpected error occurred while starting the application server. This is often due to missing environment variables or database connection issues.</p>
      <pre id="error-details"></pre>
      <p style="margin-top: 1rem; color: #666; font-size: 0.875rem;">If you are the administrator, please check the Appwrite Function environment variables (e.g., DATABASE_URL, AUTH_SECRET) and the function logs.</p>
    </div>
  </body>
</html>
    `;
};
