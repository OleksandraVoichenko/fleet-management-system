function searchVehicles(vehicles, query) {
    const searchQuery = query.toLowerCase();

    return vehicles.filter(vehicle =>
        vehicle.brand.toLowerCase().includes(searchQuery) ||
        vehicle.model.toLowerCase().includes(searchQuery) ||
        vehicle.licensePlate.toLowerCase().includes(searchQuery)
    );
}

function filterVehiclesByStatus(vehicles, status) {
    return vehicles.filter(vehicle =>
        vehicle.status === status
    );
}

module.exports = {
    searchVehicles,
    filterVehiclesByStatus
};

