import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/jokes', (req, res) => {
  res.json([
    { id: 1, name: "Why don't scientists trust atoms?", description: "Because they make up everything!" },
    { id: 2, name: "Parallel lines have so much in common.", description: "It’s a shame they’ll never meet." },
    { id: 3, name: "Why did the scarecrow win an award?", description: "Because he was outstanding in his field!" },
    { id: 4, name: "Why don’t skeletons fight each other?", description: "They don’t have the guts." },
    { id: 5, name: "What do you call fake spaghetti?", description: "An impasta!" },
    { id: 6, name: "Why couldn’t the bicycle stand up by itself?", description: "It was two tired." },
    { id: 7, name: "What do you call cheese that isn't yours?", description: "Nacho cheese." },
    { id: 8, name: "How does a penguin build its house?", description: "Igloos it together." },
    { id: 9, name: "Why don’t some couples go to the gym?", description: "Because some relationships don’t work out." },
    { id: 10, name: "What do you get when you cross a snowman and a vampire?", description: "Frostbite." }
  ]);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
