import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Define a basic route
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send('The server is up and running!');
});