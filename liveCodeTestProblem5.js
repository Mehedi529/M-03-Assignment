function cityFacts(city) {
    const { name, population, continent } = city;
    return name + " " + "has a population of" + " " + population + " " +  "and is situated in"+ " "  + continent;
  }
  
  console.log(cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
  }));
  
  console.log(cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
  }));
  