const frequentPlaces = 
[
	{
		id: 1,
		vehicleId: 'demo',
		latitude: 37.784,
		longitude: -122.409,
		timesVisited: 50,
		nickName: 'Work'
	},

	{
		id: 2,
		vehicleId: 'demo',
		latitude: 37.767,
		longitude: -122.416,
		nickName: 'Home',
		timesVisited: 100
	},

	{
		id: 3,
		vehicleId: 'demo',
		latitude: 37.781,
		longitude: -122.406,
		nickName: 'Tempest',
		timesVisited: 50
	},
]


const users = {
	'a53df997-6f63-4988-bbe2-1b272dfadd1e':
	{
		id: 'a53df997-6f63-4988-bbe2-1b272dfadd1e',
		name: 'kony',
		frequentPlaces: frequentPlaces
  },

}


module.exports = {
	users, frequentPlaces
}