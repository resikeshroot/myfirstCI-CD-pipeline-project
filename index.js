
const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for logging requests
app.use(morgan("dev"));

// Root endpoint
app.get("/", (req, res) => {
	res.send("<h1>CI/CD Pipeline Demo</h1><p>Status: <strong>Running locally</strong></p>");
});

// Health check endpoint
app.get("/health", (req, res) => {
	res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
