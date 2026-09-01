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
    const tour = Tour.updateTour(
        req.params.id, 
        req.body
    );  

    if (!tour) {
        return res.status(404).json({ message: "Tour not found" });
    }

    res.json(tour);
};

const deleteTour = (req, res) => {
    const deleted = Tour.deleteTour(req.params.id);

    if (!deleted) {
        return res.status(404).json({ message: "Tour not found" });
    }

    res.json({ message: "Tour deleted successfully" });
};

module.exports = {
    getAllTours,
    getTourById,
    updateTour,
    deleteTour,
    createTour,
};