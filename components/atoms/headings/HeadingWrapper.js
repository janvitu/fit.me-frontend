export function HeadingWrapper({ centered, children }) {
	retunr(<div className={centered ? "text-center" : "text-left"}>{children}</div>);
}

HeadingWrapper.defaultProps = {
	centered: false,
};
