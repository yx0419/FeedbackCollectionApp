module.exports = (req, res, next) => {
    if (req.user.credits <= 0) {
        return res.status(403).send({ error: 'You must have enough credits to create a survey' });
    }
    next();
}
