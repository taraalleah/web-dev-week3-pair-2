let tourArray = [];

let nextId = 1;

function addOne(name, info, image, price, location) {
    if (!name || !info || !image || !price || !location) {
        return false;
    }

    const newTour = {
        id: nextId,
        name,
        info,
        image,
        price,
        location
    };

    tourArray.push(newTour);
    nextId++;
    return newTour;

}
function getAllTours() {
    return tourArray;
}

function getTourById(id) {
    return tourArray.find((tour) => tour.id === parseInt(id)) || null;
}

function updateTour(id, updatedData) {
    const tour = getTourById(id);
    if (tour) {
        if (updatedData.name) {
            tour.name = updatedData.name;
        }
        if (updatedData.info) {
            tour.info = updatedData.info;
        }
        if (updatedData.image) {
            tour.image = updatedData.image;
        }
        if (updatedData.price) {
            tour.price = updatedData.price;
        }
        if (updatedData.location) {
            tour.location = updatedData.location;
        }
        return tour;
    } else {
        return null;
    }
}

// if (require.main === module) {
//     const result = addOne(
//         "Paris in 7 Days",
//         "Explore Paris.",
//         "https://example.com/paris.jpg",
//         "1,995",
//         "Paris, France"
//     );

//     console.log(result);
    
// };

addOne(
        "Paris in 7 Days",
        "Explore Paris.",
        "https://example.com/paris.jpg",
        "1,995",
        "Paris, France"
    );

addOne(
    "Helsinki Weekend",
    "Discover Helsinki.",
    "https://example.com/helsinki.jpg",
    "795",
    "Helsinki, Finland"
);

console.log(getAllTours());


module.exports = {
    addOne,
    getAllTours,
    getTourById,
    updateTour
};