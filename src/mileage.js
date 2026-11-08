function validateMileage(mileage) {
    if (mileage < 0) {
        throw new Error("Mileage cannot be negative");
    }

    return true;
}

module.exports = { validateMileage };