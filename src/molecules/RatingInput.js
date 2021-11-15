import { Label } from "@src/atoms";
import { useState } from "react";

export function RatingInput({ addRating }) {
	const [isFocused, setIsFocused] = useState(false);
	const [comment, setComment] = useState("");
	const [rating, setRating] = useState(0);

	const handleRating = (e, index) => {
		e.preventDefault();
		const ratingValue = 5 - index;
		setRating(ratingValue);
		console.log(ratingValue);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		addRating({
			user: {
				name: "Pepe",
				avatar: "https://placeimg.com/64/64/people",
			},
			rating: rating,
			submitedAt: new Date(),
			text: comment,
		});
		setComment("");
	};

	return (
		<div className="flex items-start space-x-4">
			<div className="flex-shrink-0">
				{/* Avatar IMG */}
				<img
					className="inline-block h-10 w-10 rounded-full"
					src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
			</div>
			<div className="min-w-0 flex-1">
				<form action="#" className="relative">
					<div
						className={`visited bg-white border border-gray-400 relative rounded-md text-gray-400 transition-all ${
							isFocused ? "is-focused" : ""
						}`}
					>
						<textarea
							onFocus={() => {
								setIsFocused(true);
							}}
							onBlur={() => {
								setIsFocused(false);
							}}
							value={comment}
							onChange={(e) => setComment(e.target.value)}
							id="comment"
							name="comment"
							type="text"
							className="block w-full py-3 pb-3 pl-3 pt-3 border-0 resize-none rounded-md focus:ring-0 sm:text-sm transition-colors"
							rows="3"
						></textarea>
						<Label htmlFor="comment">Přidat hodnocení</Label>
						<div
							className="py-2 mx-2 flex items-center justify-end gap-7 flex-wrap"
							aria-hidden="true"
						>
							<div className="flex flex-row-reverse gap-2 starlist">
								{[...Array(5)].map((star, index) => {
									return (
										<button
											key={index}
											className={5 - index === rating ? "selected" : ""}
											onClick={(e) => handleRating(e, index)}
										>
											<svg
												aria-hidden="true"
												focusable="false"
												className="text-yellow-400 h-4 hover:block"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 576 512"
											>
												<path
													// className={`${checked ? "hidden" : ""}`}
													className=""
													fill="currentColor"
													d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM405.8 317.9l27.8 162L288 403.5 142.5 480l27.8-162L52.5 203.1l162.7-23.6L288 32l72.8 147.5 162.7 23.6-117.7 114.8z"
												></path>
												<path
													// className={`${checked ? "" : "hidden"}`}
													className=""
													fill="currentColor"
													d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
												></path>
											</svg>
										</button>
									);
								})}
							</div>
							<button
								type="submit"
								onClick={onSubmit}
								className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-main-600 hover:bg-main-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500"
							>
								Odeslat
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
