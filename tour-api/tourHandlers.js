const getAllTours = (req, res) => {
    res.json({ message: "Hello from get all tours!" });
};

const createTour = (req, res) => {
    res.json({ message: "Hello from create tour!" });
};

const getTourById = (req, res) => {
    res.json({ message: "Hello from get tour by ID!" });
};

const updateTour = (req, res) => {
    res.json({ message: "Hello from update tour!" });
};

const deleteTour = (req, res) => {
    res.json({ message: "Hello from delete tour!" });
};

module.exports = {
    getAllTours,
    getTourById,
    updateTour,
    deleteTour,
    createTour,
};