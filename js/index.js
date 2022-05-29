let emptyOrderGif = document.getElementById('empty-order-gif')

const executeOrder = () => {
	emptyOrderGif.style.display = 'none'

	let orderIdInput = document.getElementById('order-id-input').value

	if(!orderIdInput.length){
		alert('Please enter a valid order ID')
		return
	}

	createNewOrderColumn(orderIdInput)

	document.getElementById(orderIdInput).innerText = 'Order Placed!'

	chefReceived(orderIdInput)
		.then(pizzaSauceAdded)
		.then(firstLayerOfCheezeAdded)
		.then(toppingsAdded)
		.then(secondLayerOfCheezeAdded)
		.then(pizzaBaked)
		.then(oreganoAdded)
		.then(packageReceivedAtCounter)
		.then(() => document.getElementById(orderIdInput).innerText = 'Order Ready!')
		.catch((err) => console.log(err))
}

const donutOrder = () => {
	emptyOrderGif.style.display = 'none'

	let orderIdInput = document.getElementById('order-id-input').value

	if(!orderIdInput.length){
		alert('Please enter a valid order ID')
		return
	}

	createNewOrderDonut(orderIdInput)

	document.getElementById(orderIdInput).innerText = 'Order Placed!'

	chefReceived(orderIdInput)
		.then(donutAreBeingFried)
		.then(donutIsFried)
		.then(chocolateGlazePrepared)
		.then(donutsBeingDipedInChocolateGlaze)
		.then(toppingsAddedOnDonut)
		.then(donutIsPacked)
		.then(packageReceivedAtCounter)
		.then(() => document.getElementById(orderIdInput).innerText = 'Order Ready!')
		.catch((err) => console.log(err))
}

const chickenStripBasketOrder = () => {
	emptyOrderGif.style.display = 'none'

	let orderIdInput = document.getElementById('order-id-input').value

	if(!orderIdInput.length){
		alert('Please enter a valid order ID')
		return
	}

	createNewOrderChickenStrips(orderIdInput)

	document.getElementById(orderIdInput).innerText = 'Order Placed!'

	chefReceived(orderIdInput)
		.then(cuttingChicken)
		.then(marinatingChicken)
		.then(chickenStripsInOven)
		.then(chickenStripsAreReady)
		.then(chickenStripsAreBeingPacked)
		.then(chickenBasketIsReady)
		.then(packageReceivedAtCounter)
		.then(() => document.getElementById(orderIdInput).innerText = 'Order Ready!')
		.catch((err) => console.log(err))
}

const frenchFries = () => {
	emptyOrderGif.style.display = 'none'

	let orderIdInput = document.getElementById('order-id-input').value

	if(!orderIdInput.length){
		alert('Please enter a valid order ID')
		return
	}

	createNewOrderFrenchFries(orderIdInput)

	document.getElementById(orderIdInput).innerText = 'Order Placed!'

	chefReceived(orderIdInput)
		.then(cuttingPotato)
		.then(marinatingPotato)
		.then(PotatoStripsInOven)
		.then(PotatoStripsAreReady)
		.then(PotatoStripsAreBeingPacked)
		.then(FrenchFriesReady)
		.then(packageReceivedAtCounter)
		.then(() => document.getElementById(orderIdInput).innerText = 'Order Ready!')
		.catch((err) => console.log(err))
}