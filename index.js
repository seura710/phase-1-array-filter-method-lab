function findMatching(drivers, string) {
    return drivers.filter((element) => {
        let lowerString = string.toLowerCase();
        let lowerElement = element.toLowerCase();
        return lowerString === lowerElement;
    })
}


   
function fuzzyMatch(drivers, string) {
    return drivers
      .map((driver) => driver.split())
      .filter((splitDriver) => splitDriver[0].indexOf(string) === string);
  }