let tourArray = [];

let nextId = 1;

function addOne(name, info, image, price, location){
    if(!name || !info || !image || !price || !location){
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

if (require.main === module) {
  const result = addOne(
    "7 Days Tour",
    "Join us for the Best of Helsinki!",
    "https://www.course-api.com/images/tours/tour-x.jpeg",
    "1,495",
    "Helsinki, Finland"
  );

  console.log(result);
};

module.exports = {
    addOne,
};