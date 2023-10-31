import { AtarColoredLogo, RoshnIconLanding, roshnLanding, AtarLanding, BinSalam } from '@/assets';
import { MiskDashboardLogo, MiskLanding, MiskLandingLogo } from '@/assets/whitelables';
import SmallLogo from '@/assets/whitelables/misk/SmallLogo';

const atar = {
	name: 'Atar',
	primaryPalette: {
		main: '#008EA5',
		dark: '#00697A',
	},
	mapsIcon: 'https://marketplace.goatar.com/static/activemap.svg',
	dashboardIcon: {
		url: AtarColoredLogo,
	},
	landingBackground: AtarLanding,
	footer: {
		address: '3504 Imam Saud bin Faisal Rd. Almalqa 6418, Riyadh, Saudi Arabia ',
		email: 'info@goatar.com',
		slogan: 'Our goal is at the heart of all that we do.',
	},
	apiTenent: 'marketDev',
};

const roshn = {
	name: 'Roshn',
	primaryPalette: {
		main: '#4a918d',
		dark: '#4a918d',
	},
	dashboardIcon: {
		url: RoshnIconLanding,
	},
	// landingIcon: {
	// 	url: RoshnIconLanding,
	// },
	landingBackground: roshnLanding,

	footer: {
		address: '3504 Imam Saud bin Faisal Rd. Almalqa 6418, Riyadh, Saudi Arabia ',
		email: 'info@goatar.com',
		slogan: 'Our goal is at the heart of all that we do.',
	},
	NoManagedByLogo: true,
	apiTenent: 'marketDev',
};

const misk = {
	name: 'MISK',
	primaryPalette: {
		main: '#00635B',
		dark: '#003D38',
	},

	dashboardIcon: {
		url: MiskDashboardLogo,
		width: '200px',
	},
	landingIcon: {
		url: MiskLandingLogo,
		width: '200px',
	}, // optional if not exist we will use dashboardIcon with filter as white
	landingBackground: MiskLanding,
	sloganTitle: 'Mohammed Bin Salman Nonprofit City', // optional if not exist we will fall back to Buy, rent, or sell your property easily
	sloganBody: 'A visionary home for young, dynamic, creative people', //optional , fall back to Discover properties available for sale and rent, view all property details, book a visit with a sales consultant, and complete the payment process with ease and flexibility in one platform.
	footer: {
		address: '2617 جعيثن اليزيدي، 6814، عرقة، الرياض 12588، Saudi Arabia',
		email: 'city@misk.org.sa',
		slogan: '',
	},
	NoManagedByLogo: true,
	smallLogo: { url: SmallLogo, width: '70px' },
	rentOnly: true,
	apiTenent: 'Miskcity',
};

const allxtenants = {
	misk,
	roshn,
	atar,
};

const tenant = 'atar';

export default allxtenants[tenant];
