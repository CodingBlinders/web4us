const Message = require('../Models/Message');

const MessageController = {
    createMessage: async (req, res) => {
        try {
            const message = new Message(req.body);
            await message.save();
            res.status(201).send(message);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    getMessages: async (req, res) => {
        try {
            const messages = await Message.find({
                $or: [
                    { senderId: req.params.userId, recipientId: req.params.recipientId },
                    { senderId: req.params.recipientId, recipientId: req.params.userId }
                ]
            }).sort('timestamp');
            res.status(200).send(messages);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    deleteMessage: async (req, res) => {
        try {
            const message = await Message.findByIdAndDelete(req.params.id);
            if (!message) return res.status(404).send();
            res.status(200).send(message);
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = MessageController;