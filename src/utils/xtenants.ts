import { AtarColoredLogo, RoshnIconLanding, roshnLanding, AtarLanding, BinSalam } from '@/assets';
import { MiskDashboardLogo, MiskLanding, MiskLandingLogo } from '@/assets/whitelables';

const atar = {
	name: 'Atar',
	primaryPalette: {
		main: '#008EA5',
		dark: '#00697A',
	},
	mapsIcon: 'https://marketplace.goatar.com/static/activemap.svg',
	dashboardIcon: AtarColoredLogo,
	landingBackground: AtarLanding,
};

const roshn = {
	name: 'Roshn',
	primaryPalette: {
		main: '#4a918d',
		dark: '#4a918d',
	},
	dashboardIcon: RoshnIconLanding,
	landingBackground: roshnLanding,
};

const misk = {
	name: 'Mohammed Bin Salman City',
	primaryPalette: {
		main: '#00635B',
		dark: '#003D38',
	},

	dashboardIcon: MiskDashboardLogo,
	landingIcon: MiskLandingLogo, // optional if not exist we will use dashboardIcon with filter as white
	landingBackground: MiskLanding,
	sloganTitle: 'Mohammed Bin Salman Nonprofit City', // optional if not exist we will fall back to Buy, rent, or sell your property easily
	sloganBody: 'A visionary home for young, dynamic, creative people', //optional , fall back to Discover properties available for sale and rent, view all property details, book a visit with a sales consultant, and complete the payment process with ease and flexibility in one platform.
};

const allxtenants = {
	misk,
	roshn,
	atar,
};

const tenant = 'atar';

export const xtenants = allxtenants[tenant];
