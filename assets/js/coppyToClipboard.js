export default function copyToClip(event) {
	const target = event.currentTarget;
	const coppyElem = target.querySelector("span");

	navigator.clipboard.writeText(coppyElem.innerText);
}
