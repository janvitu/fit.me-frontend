export function InputWrapper({ children }) {
	return (
		<div className="bg-white border border-gray-400 h-11 relative rounded-md text-gray-300 transition-all">
			{children}
			<div className="absolute bottom-0 hidden italic pl-4 text-left text-sm transform translate-y-full w-full"></div>
		</div>
	);
}
