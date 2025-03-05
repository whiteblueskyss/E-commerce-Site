import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`erver is running on http://localhost:${PORT}`);
});
