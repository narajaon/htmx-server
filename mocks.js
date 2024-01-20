const mockMonthLabels = [
	"janvier",
	"fevrier",
	"mars",
	"avril",
	"mai",
	"juin",
	"juillet",
	"aout",
	"septembre",
	"octobre",
	"novembre",
	"decembre",
];
const mockDays = ["lu", "ma", "me", "je", "ve", "sa", "di"];
const mockMonths = mockMonthLabels.map((month) => ({
	label: month,
	days: Array(31)
		.fill(0)
		.map((_zero, dayNb) => ({ label: mockDays[dayNb % 7], number: dayNb + 1 })),
}));
const SlotType = {
	MUAY_THAI: "Muay Thai",
	MMA: "MMA",
	HIIT: "HIIT",
};

const mockSlots = [
	{
		type: SlotType.MUAY_THAI,
		teacher: "Onizuka",
		location: "Mitaka",
		shortDescription: "Beginer friendly",
		longDescription:
			"Enjoy a group class for all levels ! You can come even if you are a beginer, we will be happy to guide you !",
		startTime: "8h30",
		endTime: "9h30",
		currentNbAttendees: 9,
		maxNbAttendees: 15,
	},
	{
		type: SlotType.MUAY_THAI,
		teacher: "Onizuka",
		location: "Mitaka",
		shortDescription: "Beginer friendly",
		longDescription:
			"Enjoy a group class for all levels ! You can come even if you are a beginer, we will be happy to guide you !",
		startTime: "8h30",
		endTime: "9h30",
		currentNbAttendees: 9,
		maxNbAttendees: 15,
	},
	{
		type: SlotType.MMA,
		teacher: "Onizuka",
		location: "Mitaka",
		shortDescription: "Seminar",
		longDescription:
			"Enjoy a group class for all levels ! You can come even if you are a beginer, we will be happy to guide you !",
		startTime: "8h30",
		endTime: "9h30",
		currentNbAttendees: 9,
		maxNbAttendees: 15,
	},
	{
		type: SlotType.HIIT,
		teacher: "Onizuka",
		location: "Mitaka",
		shortDescription: "50% boxe 50% bootcamp",
		longDescription:
			"Enjoy a group class for all levels ! You can come even if you are a beginer, we will be happy to guide you !",
		startTime: "10h",
		endTime: "11h",
		currentNbAttendees: 9,
		maxNbAttendees: 15,
	},
	{
		type: SlotType.MUAY_THAI,
		teacher: "Onizuka",
		location: "Mitaka",
		shortDescription: "Sparring",
		longDescription:
			"Enjoy a group class for all levels ! You can come even if you are a beginer, we will be happy to guide you !",
		startTime: "9h45",
		endTime: "11h",
		currentNbAttendees: 9,
		maxNbAttendees: 15,
	},
];

module.exports = {
	mockMonths,
	mockSlots,
};
