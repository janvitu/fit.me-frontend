export function HeadingWrapper({ isCentered, children }) {
	return <div className={isCentered ? "text-center" : "text-left"}>{children}</div>;
}

HeadingWrapper.defaultProps = {
	isCentered: false,
};
