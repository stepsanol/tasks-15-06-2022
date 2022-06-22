const days = ['Mon', 'Tues', 'Wen', 'Thur', 'Fri', 'Sat', 'Sun'] // и т.п.

const cuttentDayIndex = new Date().getDay();

const currentDay = days[cuttentDayIndex - 1];
const currentDayy = currentDay.italics();
days.forEach(function(elem) {
    days[cuttentDayIndex - 1] = currentDayy
	document.write(elem + '<br>');
});