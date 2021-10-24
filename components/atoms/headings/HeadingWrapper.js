export function HeadingWrapper({ centered, children }) {
	return <div className={centered ? "text-center" : "text-left"}>{children}</div>;
}

HeadingWrapper.defaultProps = {
	centered: false,
};
