(function(){

var ParseMe = [
	{
		"code": "AL,US",
		"name": "Alabama",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "AK,US",
		"name": "Alaska",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "AZ,US",
		"name": "Arizona",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "AR,US",
		"name": "Arkansas",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "CA,US",
		"name": "California",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": [{
			"code": "Los Angeles,CA,US",
			"name": "Los Angeles",
			"lat": 34.052236999999998,
			"lng": -118.24367700000001,
			"type": "city",
			"children": []
		},
		{
			"code": "Oakland,CA,US",
			"name": "Oakland",
			"lat": 37.804366999999999,
			"lng": -122.27110999999999,
			"type": "city",
			"children": []
		},
		{
			"code": "Sacramento,CA,US",
			"name": "Sacramento",
			"lat": 38.581574000000003,
			"lng": -121.49439599999999,
			"type": "city",
			"children": []
		},
		{
			"code": "San Diego,CA,US",
			"name": "San Diego",
			"lat": 32.715449999999997,
			"lng": -117.15725999999999,
			"type": "city",
			"children": []
		},
		{
			"code": "San Francisco,CA,US",
			"name": "San Francisco",
			"lat": 37.774929999999998,
			"lng": -122.41941,
			"type": "city",
			"children": []
		},
		{
			"code": "San Jose,CA,US",
			"name": "San Jose",
			"lat": 37.33952,
			"lng": -121.89485999999999,
			"type": "city",
			"children": []
		}]
	},
	{
		"code": "CO,US",
		"name": "Colorado",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "CT,US",
		"name": "Connecticut",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "DE,US",
		"name": "Delaware",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "DC,US",
		"name": "District of Columbia",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "FL,US",
		"name": "Florida",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "GA,US",
		"name": "Georgia",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "HI,US",
		"name": "Hawaii",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "ID,US",
		"name": "Idaho",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "IL,US",
		"name": "Illinois",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "IN,US",
		"name": "Indiana",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "IA,US",
		"name": "Iowa",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "KS,US",
		"name": "Kansas",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "KY,US",
		"name": "Kentucky",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "LA,US",
		"name": "Louisiana",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "ME,US",
		"name": "Maine",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "MD,US",
		"name": "Maryland",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "MA,US",
		"name": "Massachusetts",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": [{
			"code": "Boston,MA,US",
			"name": "Boston",
			"lat": 42.358440999999999,
			"lng": -71.059742,
			"type": "city",
			"children": []
		},
		{
			"code": "Cambridge,MA,US",
			"name": "Cambridge",
			"lat": 42.372630000000001,
			"lng": -71.109639999999999,
			"type": "city",
			"children": []
		}]
	},
	{
		"code": "MI,US",
		"name": "Michigan",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "MN,US",
		"name": "Minnesota",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "MS,US",
		"name": "Mississippi",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "MO,US",
		"name": "Missouri",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "MT,US",
		"name": "Montana",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "NE,US",
		"name": "Nebraska",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "NV,US",
		"name": "Nevada",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "NH,US",
		"name": "New Hampshire",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "NJ,US",
		"name": "New Jersey",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "NM,US",
		"name": "New Mexico",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "NY,US",
		"name": "New York",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": [{
			"code": "Buffalo,NY,US",
			"name": "Buffalo",
			"lat": 42.894300000000001,
			"lng": -78.864999999999995,
			"type": "city",
			"children": []
		},
		{
			"code": "New York,NY,US",
			"name": "New York",
			"lat": 40.749760000000002,
			"lng": -73.987750000000005,
			"type": "city",
			"children": []
		},
		{
			"code": "Rochester,NY,US",
			"name": "Rochester",
			"lat": 43.161031999999999,
			"lng": -77.610918999999996,
			"type": "city",
			"children": []
		}]
	},
	{
		"code": "NC,US",
		"name": "North Carolina",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "ND,US",
		"name": "North Dakota",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "OH,US",
		"name": "Ohio",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "OK,US",
		"name": "Oklahoma",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "OR,US",
		"name": "Oregon",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "PA,US",
		"name": "Pennsylvania",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "RI,US",
		"name": "Rhode Island",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "SC,US",
		"name": "South Carolina",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "SD,US",
		"name": "South Dakota",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "TN,US",
		"name": "Tennessee",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "TX,US",
		"name": "Texas",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": [{
			"code": "Dallas,TX,US",
			"name": "Dallas",
			"lat": 32.802999999999997,
			"lng": -96.769800000000004,
			"type": "city",
			"children": []
		},
		{
			"code": "Fort Worth,TX,US",
			"name": "Fort Worth",
			"lat": 32.725409999999997,
			"lng": -97.320840000000004,
			"type": "city",
			"children": []
		},
		{
			"code": "Houston,TX,US",
			"name": "Houston",
			"lat": 29.762872999999999,
			"lng": -95.383054000000001,
			"type": "city",
			"children": []
		}]
	},
	{
		"code": "UT,US",
		"name": "Utah",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "VT,US",
		"name": "Vermont",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "VA,US",
		"name": "Virginia",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "WA,US",
		"name": "Washington",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "WV,US",
		"name": "West Virginia",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "WI,US",
		"name": "Wisconsin",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	},
	{
		"code": "WY,US",
		"name": "Wyoming",
		"lat": null,
		"lng": null,
		"type": "state",
		"children": []
	}
];

window.Data = [];
window.Mapped = {};
var fn = function(obj){
	window.Mapped[obj.name] = obj;
	window.Data.push(obj.name);
	if (obj.children)
		obj.children.each(fn);
}

ParseMe.each(fn);

})();
