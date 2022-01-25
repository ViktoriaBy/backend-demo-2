//BUILDING THE SERVER
const express = require('express');
const cors = require('cors');
const app = express();
const {getAllMovies, createMovie, deleteMovie, updateMovie} = require('./movieController')
const port = 4004

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//MOVIE ENDPOINTS
app.get('/api/movies', getAllMovies)
app.post('/api/movies', createMovie )
app.delete('/api/movies/:id', deleteMovie)
app.put('/api/movies/:id', updateMovie)




app.listen(port, () => console.log(`Server is running ${port}`))





