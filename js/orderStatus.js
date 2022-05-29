const chefReceived = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Chef received'
			resolve(orderNumber)
		}, 2000)
	})
}

const pizzaSauceAdded = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Pizza Sauce added'
			resolve(orderNumber)
		}, 10000)
	})
}

const firstLayerOfCheezeAdded = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'First layer of cheeze added'
			resolve(orderNumber)
		}, 5000)
	})
}

const toppingsAdded = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Toppings added'
			resolve(orderNumber)
		}, 12000)
	})
}

const secondLayerOfCheezeAdded = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Second layer of cheeze added'
			resolve(orderNumber)
		}, 5000)
	})
}

const pizzaBaked = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Pizza baked'
			resolve(orderNumber)
		}, 15000)
	})
}

const oreganoAdded = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Oregano added and packed'
			resolve(orderNumber)
		}, 8000)
	})
}

const packageReceivedAtCounter = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Package received at counter'
			resolve(orderNumber)
		}, 2000)
	})
}

//------------------------------------Chocolate Doughnut-------------------------------//

const donutAreBeingFried = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Donuts are being fried'
			resolve(orderNumber)
		}, 10000)
	})
}

const donutIsFried = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Donuts are fried hot'
			resolve(orderNumber)
		}, 5000)
	})
}

const chocolateGlazePrepared = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Chocolate glaze prepared'
			resolve(orderNumber)
		}, 12000)
	})
}

const donutsBeingDipedInChocolateGlaze = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Chocolate glaze if filled'
			resolve(orderNumber)
		}, 5000)
	})
}

const toppingsAddedOnDonut = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Toppings added'
			resolve(orderNumber)
		}, 15000)
	})
}

const donutIsPacked = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Donut is packed'
			resolve(orderNumber)
		}, 8000)
	})
}

//------------------------------------ Chicken Strip Basket -------------------------------//

const cuttingChicken = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Chicken slices are being cut'
			resolve(orderNumber)
		}, 10000)
	})
}

const marinatingChicken = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Marinating Chicken'
			resolve(orderNumber)
		}, 5000)
	})
}

const chickenStripsInOven = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Chicken strips are oven fried'
			resolve(orderNumber)
		}, 12000)
	})
}

const chickenStripsAreReady = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Chicken strips are ready'
			resolve(orderNumber)
		}, 5000)
	})
}

const chickenStripsAreBeingPacked = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Chicken Strips are being packed'
			resolve(orderNumber)
		}, 15000)
	})
}

const chickenBasketIsReady = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Chicken Strip Basket is prepared'
			resolve(orderNumber)
		}, 8000)
	})
}

//------------------------------------ French Fries -------------------------------//

const cuttingPotato = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Potato slices are being cut'
			resolve(orderNumber)
		}, 10000)
	})
}

const marinatingPotato = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Marinating Potato strips'
			resolve(orderNumber)
		}, 5000)
	})
}

const PotatoStripsInOven = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Potato strips are oven fried'
			resolve(orderNumber)
		}, 12000)
	})
}

const PotatoStripsAreReady = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'French Fries are ready'
			resolve(orderNumber)
		}, 15000)
	})
}

const PotatoStripsAreBeingPacked = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'Adding Secret Flavor'
			resolve(orderNumber)
		}, 5000)
	})
}

const FrenchFriesReady = (orderNumber) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.getElementById(orderNumber).innerText = 'French Fries are prepared'
			resolve(orderNumber)
		}, 8000)
	})
}