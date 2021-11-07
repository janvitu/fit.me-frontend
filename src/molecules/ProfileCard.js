export function ProfileCard({ name, phone, email, address }) {
	return (
		<div className="text-center md:text-left mx-auto lg:grid lg:grid-cols-3 lg:gap-60 lg:gap-y-8 grid grid-cols-3">
			<div className="text-gray-600">Celé jméno</div>
			<div>{name}</div>
			<div className="text-gray-600 underline">Upravit</div>

			<div className="text-gray-600">Telefon</div>
			<div>{phone}</div>
			<div className="text-gray-600 underline">Upravit</div>

			<div className="text-gray-600">Email</div>
			<div>{email}</div>
			<div className="text-gray-600 underline">Upravit</div>

			<div className="text-gray-600">Adresa</div>
			<div>{address}</div>
			<div className="text-gray-600 underline">Upravit</div>
		</div>
	);
}

ProfileCard.defaultProps = {
	name: "Albert Mirek",
	phone: "888888888",
	email: "mail@mail.com",
	address: "U Ďolíčku na Bohemce, Praha 10",
};
