const Tour = require("./tourLib");

const getAllTours = (req, res) => {
    const tours = Tour.getAllTours();
    res.json(tours);
};

const createTour = (req, res) => {
    const { name, info, image, price, location } = req.body;
    const tour = Tour.addOne(
        name,
        info,
        image,
        price,
        location
    );
    res.status(201).json(tour);
};

const getTourById = (req, res) => {
    const tour = Tour.getTourById(req.params.id);

    if (tour) {
        res.json(tour);
    } else {
        res.status(404).json({ message: "Tour not found" });
    }
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