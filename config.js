// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Isabella',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Sweet dreams',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '190b11d5309b8f31562e71b8a4bed037', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '52.040760',
	defaultLongitude: '4.225740',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'ManageBac',
			icon: 'school',
			link: 'https://ishthehague.managebac.com/student',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0/#inbox',
		},
		{
			id: '3',
			name: 'Classroom',
			icon: 'presentation',
			link: 'https://classroom.google.com/u/0/h',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar-days',
			link: 'https://calendar.google.com/calendar/u/0/r/',
		},
		{
			id: '5',
			name: 'Drive',
			icon: 'triangle',
			link: 'https://drive.google.com/drive/my-drive',
		},
		{
			id: '6',
			name: 'Tweek',
			icon: 'list-todo',
			link: 'https://tweek.so/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'library',
			id: '1',
			links: [
				{
					name: 'Math textbook',
					link: 'https://bookshelf.oxfordsecondary.co.uk/contents/428/index.html',
				},
				{
					name: 'CompSci website',
					link: 'https://sites.google.com/ishthehague.nl/ish-dp-computer-science/home?authuser=0&pli=1',
				},
				{
					name: 'Physics OneNote',
					link: 'https://rijnlands-my.sharepoint.com/:o:/r/personal/s_walsh_ishthehague_nl/Documents/Class%20Notebooks/Physics25%20HL_6%20Co2026%20Olsson%20Walsh?d=wec88db2ca73440c7ab6c5ee1a671593d&csf=1&web=1&e=hHfPZu',
				},
				{
					name: 'Print',
					link: 'https://myprinttest.rijnlandslyceum.nl/RicohmyPrint/Main.aspx',
				},
			],
		},
		{
			icon: 'user',
			id: '2',
			links: [
				{
					name: 'Timetable',
					link: 'https://ishthehague.students.isamshosting.cloud/api/profile/timetable/',
				},
				{
					name: 'Academic calendar',
					link: 'https://docs.google.com/spreadsheets/d/1CJsvl0QMhqzA5Qz89x7wKnhij_bEtrufrtWXSuK5cjo/edit?gid=0#gid=0',
				},
				{
					name: 'Configuration',
					link: 'https://github.com/neocyliq/My-bento/edit/master/config.js#L81C15',
				},
				{
					name: 'Icons',
					link: 'https://lucide.dev/icons/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
