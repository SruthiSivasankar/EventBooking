const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);

sequelize.sync().then(()=>{
    console.log('Database synced');
    app.listen(3000,() =>{
        console.log('Server running on port 3000');
    });
}).catch(console.error); 

// const express = require('express');
// const initDatabase = require('./config/database'); // now it's a function
// const authRoutes = require('./routes/authRoutes');

// (async () => {
//   try {
//     const sequelize = await initDatabase();

//     await sequelize.sync();
//     console.log('Database synced');

//     const app = express();
//     app.use(express.json());
//     app.use('/api/auth', authRoutes);

//     app.listen(3000, () => {
//       console.log('Server running on port 3000');
//     });
//   } catch (err) {
//     console.error('Error starting app:', err);
//   }
// })();
