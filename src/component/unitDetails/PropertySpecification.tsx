type PropertyUnitOptions = {
	[key: number]: string;
};
type SubTypeOptions = {
	[key: number]: { [key: number]: string };
};

export const MainUnitTypes: PropertyUnitOptions = {
	1: 'Residential',
	2: 'Commercial',
};

export const MainSubtypes: SubTypeOptions = {
	1: { 1: 'APARTMENT', 2: 'VILLA', 3: 'LAND' },
	2: {
		1: 'Office',
		2: 'Retail',
		3: 'Land',
		4: 'Workshop',
		5: 'Warehouse',
	},
};

export const AcTypes: PropertyUnitOptions = {
	1: 'Window',
	2: 'Split',
	3: 'Central',
	4: 'Not Installed',
};

export const ParkingTypes: PropertyUnitOptions = {
	0: 'Not Available',
	1: 'Available',
};
export const FurnishedTypes: PropertyUnitOptions = {
	0: 'Not Furnished',
	1: 'Furnished',
};

let numberAsWords = [
	'Ground',
	'First',
	'Second',
	'Third',
	'Fourth',
	'Fifth',
	'Sixth',
	'Seventh',
	'Eighth',
	'Ninth',
	'Tenth',
];

export function stringifyNumber(n: number) {
	if (n < 20) return numberAsWords[n];
	return numberAsWords[n % 10];
}
