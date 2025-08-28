const express = require('express');
const cors = require('cors');
const produtosRouter = require('./routes/produtos');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/produtos', produtosRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


