//creating methods
const carMethods = {
    honk() {
      console.log("Tuut tuut");
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: ${this.price}`);
    },
    
    loseGas(currentYear) {
      let yearsDifference = currentYear - this.year;
      let gasLoss = 5 + yearsDifference;
      this.gas -= gasLoss;
      if (this.gas < 0) {
        this.gas = 0;
      }
    }
  };
  
  // Create car objects
  const cars = [
    {
      brand: "Honda",
      model: "CR-V",
      year: 2023,
      color: "Red",
      price: 50000,
      gas: 45,
      ...carMethods
    },
    {
      brand: "Ford",
      model: "F-150",
      year: 2020,
      color: "Black",
      price: 25000,
      gas: 30,
      ...carMethods
    },
    {
      brand: "BMW",
      model: "X5",
      year: 2022,
      color: "Green",
      price: 60000,
      gas: 65,
      ...carMethods
    },
    {
      brand: "Mazda",
      model: "CX-5",
      year: 2019,
      color: "White",
      price: 15000,
      gas: 60,
      ...carMethods
    },
    {
      brand: "Audi",
      model: "Q7",
      year: 2018,
      color: "Silver",
      price: 52000,
      gas: 47,
      ...carMethods
    },
    {
      brand: "Kia",
      model: "Forte",
      year: 2020,
      color: "Blue",
      price: 21000,
      gas: 56,
      ...carMethods
    }
  ];
  
  // Perform race
  const raceTurns = 7;
  const currentYear = new Date().getFullYear();
  const carRaceContainer = document.getElementById('carRace');
  for (let turn = 1; turn <= raceTurns; turn++) {
    const turnContainer = document.createElement('div');
    turnContainer.classList.add('turn-container');
    turnContainer.innerHTML = `<h2>Turn ${turn}</h2>`;
    carRaceContainer.appendChild(turnContainer);
  
    cars.forEach(car => {
      car.loseGas(currentYear);
      const carInfo = document.createElement('div');
      carInfo.classList.add('car-info');
      carInfo.innerHTML = `
        <div class="car">
          <h3>${car.brand} ${car.model}</h3>
          <p>Year: ${car.year}</p>
          <p>Color: ${car.color}</p>
          <p>Price: $${car.price}</p>
          <p>Remaining Gas: ${car.gas} litres</p>
        </div>
      `;
      turnContainer.appendChild(carInfo);
    });
  }
  
  // Honk method invocation
  cars.forEach(car => car.honk());
  