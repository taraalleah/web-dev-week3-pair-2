const express = require("express");

const {
    getAllTours,
    getTourById,
    updateTour,
    deleteTour,
    createTour,
} = require("./tourHandlers");

const app = express();
app.use(express.json());

app.get("/tours", getAllTours);

app.post("/tours", createTour);

app.get("/tours/:id", getTourById);

app.patch("/tours/:id", updateTour);

app.delete("/tours/:id", deleteTour);

const port = 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
