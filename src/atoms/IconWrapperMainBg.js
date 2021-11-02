export function IconWrapperMainBg({ children }) {
	return (
		<div className="p-5 inline-block bg-main-400 rounded-md shadow-lg">
			<div className="h-6 w-6 text-white">{children}</div>
		</div>
	);
}
