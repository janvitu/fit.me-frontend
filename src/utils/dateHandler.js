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
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	return `${day}.${month}.${year}`;
}
