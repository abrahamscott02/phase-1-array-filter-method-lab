// Code your solution here
// function findMatching(drivers, query) {
//     const lowercaseQuery = query.toLowerCase(); // Convert the query to lowercase for case-insensitive comparison
    
//     return drivers.filter(driver => {
//         const lowercaseDriver = driver.toLowerCase(); // Convert the driver's name to lowercase for case-insensitive comparison
//         return lowercaseDriver.includes(lowercaseQuery);
//     });

function findMatching(drivers, string) {
    const lowercaseQuery = string.toLowerCase(); // Convert the query to lowercase for case-insensitive comparison
    
    return drivers.filter(driver => {
        const lowercaseDriver = driver.toLowerCase(); // Convert the driver's name to lowercase for case-insensitive comparison
        return lowercaseDriver.includes(lowercaseQuery);
    });
}

function fuzzyMatch(drivers, string) {
    const lowerCaseQuery = string.toLowerCase();

    return drivers.filter(driver => {
        const lowercaseDriver = driver.toLowerCase();
        return lowercaseDriver.startsWith(lowerCaseQuery)
    })
}

function matchName(drivers, string){
    return drivers.filter(driver => {
        const lowercaseDriverName = driver.name.toLowerCase();
        const lowercaseQuery = string.toLowerCase();
        return lowercaseDriverName === lowercaseQuery

    })
}