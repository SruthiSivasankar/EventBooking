
const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    
    const userId = req.user?.userId;

    const { name, description, startDate, endDate, price, venue } = req.body;

    const event = await Event.create({
      name,
      description,
      startDate,
      endDate,
      price,
      venue,
      createdBy: userId ?? null,
    });

    res.status(200).json({ message: 'Event created', event });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll({ order: [['startDate', 'ASC']] });
    res.json(events);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { name, description, startDate, endDate, price, venue } = req.body;

    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    await event.update({ name, description, startDate, endDate, price, venue });
    res.json({ message: 'Event updated', event });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    await event.destroy();
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
