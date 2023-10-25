import { AtarColoredLogo, RoshnIconLanding, roshnLanding, AtarLanding, BinSalam } from '@/assets';
import { MiskDashboardLogo, MiskLanding, MiskLandingLogo } from '@/assets/whitelables';

export const xtenants = {
	name: 'Atar',
	primaryPalette: {
		main: '#008EA5',
		dark: '#00697A',
	},
	mapsIcon: 'https://marketplace.goatar.com/static/activemap.svg',
	dashboardIcon: AtarColoredLogo,

	landingBackground: AtarLanding,
};

// export const xtenants = {
// 	name: 'Roshn',
// 	primaryPalette: {
// 		main: '#4a918d',
// 		dark: '#4a918d',
// 	},

// 	dashboardIcon: RoshnIconLanding,
// 	landingBackground: roshnLanding,
// };

// export const xtenants = {
// 	name: 'Mohammed Bin Salman City',
// 	primaryPalette: {
// 		main: '#00635B',
// 		dark: '#003D38',
// 	},

// 	dashboardIcon: MiskDashboardLogo,
// 	landingIcon: MiskLandingLogo, // optional if not exist we will use dashboardIcon with filter as white
// 	landingBackground: MiskLanding,
// };
