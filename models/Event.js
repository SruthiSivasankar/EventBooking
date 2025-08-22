
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,  
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isAfterStart(value) {
        if (this.startDate && value < this.startDate) {
          throw new Error('endDate must be after startDate');
        }
      }
    }
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00,
    validate: { min: 0 }
  },
  venue: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
}, {
  tableName: 'events',
  timestamps: true,
});

module.exports = Event;
