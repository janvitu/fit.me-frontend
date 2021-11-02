export function StatItem({ indicatorText, indicatorNumber }) {
	return (
		<div className="flex flex-col px-8 pt-8">
			<dt className="order-2 text-base font-medium text-gray-500"> {indicatorText}</dt>
			<dd className="order-1 text-2xl font-extrabold text-main-600 sm:text-3xl">
				{indicatorNumber}
			</dd>
		</div>
	);
}
