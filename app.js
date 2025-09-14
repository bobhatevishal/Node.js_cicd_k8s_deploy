const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (for JSON API support)
app.use(express.json());

// Root route with styled HTML + CSS
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Node.js on Kubernetes</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            font-size: 3rem;
            margin: 0.5rem;
          }
          p {
            font-size: 1.2rem;
            opacity: 0.9;
          }
          .container {
            text-align: center;
            background: rgba(0, 0, 0, 0.3);
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Hello 👋</h1>
          <p>This Node.js app is running on <strong>Kubernetes 🚀</strong></p>
        </div>
      </body>
    </html>
  `);
});

// Health check route for Kubernetes probes
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Service is healthy ✅" });
});

// Start server and listen on all network interfaces
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server is running at http://0.0.0.0:${PORT}`);
});
