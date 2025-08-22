const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/', authenticateToken, eventController.createEvent);

router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);

router.put('/:id', authenticateToken, eventController.updateEvent);
router.delete('/:id', authenticateToken, eventController.deleteEvent);

module.exports = router;
