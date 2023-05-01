const validadeTitle = (req, res, next) => {
    const { body } = req;

    if(body.title == undefined) {
       return res.status(400).json({ message: ' The field title is required'})
    }

    if(body.title == '') {
        return res.status(400).json({ message: ' The field cannot be empty'})
    }

    next()
};

const validadePrice = (req, res, next) => {
    const { body } = req;

    if(body.price == undefined) {
       return res.status(400).json({ message: ' The field price is required'})
    }

    if(body.price == '') {
        return res.status(400).json({ message: ' The field price cannot be empty'})
    }

    next()
};

const validadeQuantity = (req, res, next) => {
    const { body } = req;

    if(body.quantity == undefined) {
       return res.status(400).json({ message: ' The field quantity is required'})
    }

    if(body.quantity == '') {
        return res.status(400).json({ message: ' The field quantity cannot be empty'})
    }

    next()
};

module.exports = {
    validadeTitle,
    validadePrice,
    validadeQuantity
}