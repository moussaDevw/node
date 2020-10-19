const express = require('express');

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3001;
const etudiants = [
    {
        id:1,
        name:"moussa",
        username:"diagne"
    },
    {
        id:2,
        name:"baba",
        username:"ngom"
    },
    {
        id:3,
        name:"ibou",
        username:"fall"
    }
]
app.get('/api/etudiants', (req,res)=>{
    res.json(etudiants);
});

app.get('/api/etudiants/:id', (req,res)=>{
    const id = Number(req.params.id);
    const etudiant = etudiants.find(etudiant=>etudiant.id === id);
    res.json(etudiant);
});

app.delete('/api/etudiants/:id', (req,res)=>{
    let id = Number(req.params.id)
    etudiants = etudiants.filter(etudiant => etudiant.id !== id)
    res.status(204).end()
});

app.post('/api/etudiants', (req,res)=>{
    const etudiant = req.body;
    res.json(etudiant);
});

app.put('/api/etudiants/:id', (req,res)=>{
    const id = Number(req.params.id);
    const etudiant = etudiants.map(etudiant=>etudiant.id === id);
    res.status(201);
})


app.listen(PORT);
console.log(PORT)
