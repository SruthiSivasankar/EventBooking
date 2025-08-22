const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

sequelize.sync().then(()=>{
    console.log('Database synced');
    app.listen(3000,() =>{
        console.log('Server running on port 3000');
    });
}).catch(console.error); 
