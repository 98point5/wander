
const getMidPoint = (start, end) => {
	let startLoc = start.split(',');
	let endLoc = end.split(',');
	let midLat = ((+startLoc[0] + +endLoc[0])/2).toFixed(6);
	let midLong = ((+startLoc[1] + +endLoc[1])/2).toFixed(6);
	return midLat + ',' + midLong;
}

const getRandomPlaceType = () => {
	const types = [
		'amusement_park', 
		'art_gallery', 
		'bakery', 
		'book_store', 
		'cafe', 
		'casino',
		'church',
		'furniture_store', 
		'library', 
		'mosque', 
		'museum',
		'park', 
		'pet_store', 
		'shoe_store', 
		'spa', 
		'synagogue',
		'zoo'
	];

	return types[Math.floor(Math.random()*types.length)]
}


module.exports = {
	getMidPoint,
	getRandomPlaceType
}
