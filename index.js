const express = require('express');
const app = express();
const morgan = require('morgan');
const evaluacionRoutes = require('./routes/evaluacionRoutes');

// Settings
app.set('appName', 'AutoEvaluacionAPP');


app.use(express.json());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', evaluacionRoutes);
app.use(express.static('public'));

app.listen(5000, () => {
    console.log('Nombre de la app: ', app.get('appName'));
    console.log('Server on port 5000');
});
