function padTo2Digits(number) {
	return number.toString().padStart(2, "0");
}

export function formatDateForServer(date) {
	// prettier-ignore
	const formatedDate =
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate())
    ].join("-")
    + " " +
		[
			padTo2Digits(date.getHours()),
			padTo2Digits(date.getMinutes()),
			padTo2Digits(date.getSeconds()),
    ].join(":");

	return formatedDate;
}

export function parseDate(date) {
	const t = date.split(/[- :]/);
	const parsedDate = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]));

	return parsedDate;
}
