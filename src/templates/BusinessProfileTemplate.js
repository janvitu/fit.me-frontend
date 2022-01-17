import { useState, useEffect, useContext } from "react";
import { H2, TextProse, XlWrapper } from "@src/atoms";
import { Modal, RatingInput } from "@src/molecules";
import { EventCard } from "@src/organisms";
import { ContactBusinessForm, DetailCard, RatingList } from "@src/organisms";
import snarkdown from "snarkdown";
import { disableScroll, enableScroll } from "@src/utils/handleScroll";
import { gql, useMutation } from "@apollo/client";
import { UserContext } from "@src/utils/UserProvider";

const ADD_REVIEWSPORTSGROUND = gql`
	mutation AddReviewSportsground($stars: Int!, $comment: String!, $token: String!, $id: Int!) {
		addReviewSportsground(stars: $stars, comment: $comment, token: $token, sportsground_id: $id)
	}
`;
const ADD_REVIEWCOACH = gql`
	mutation AddReviewCoach($stars: Int!, $comment: String!, $token: String!, $id: Int!) {
		addReviewCoach(stars: $stars, comment: $comment, token: $token, coach_id: $id)
	}
`;

export function BusinessProfileTemplate({ BusinessProfileData, type }) {
	const [mutate, { loading, error, data }] = useMutation(chooseMutation(type));
	const { user } = useContext(UserContext);

	const article = snarkdown(BusinessProfileData.description);
	const [reviews, setReviews] = useState(
		[...BusinessProfileData.reviews].sort((a, b) => {
			return new Date(b.datetime) - new Date(a.datetime);
		}),
	);
	const [contactModal, setContactModal] = useState(false);

	useEffect(() => {
		if (contactModal) {
			disableScroll();
		} else {
			enableScroll();
		}
	}, [contactModal]);

	const [rating, setRating] = useState(0);

	useEffect(() => {
		const rating = reviews.map((review) => review.rating);
		const averageRating = reviews.reduce((a, b) => a + b, 0) / reviews.length;
		const roundedAverageRating = Math.round(averageRating);
		setRating(roundedAverageRating);
	}, [reviews]);

	const closeContactModal = () => {
		setContactModal(false);
	};
	const openContactModal = () => {
		setContactModal(true);
	};

	function chooseMutation(type) {
		if (type == "coach") return ADD_REVIEWCOACH;
		else return ADD_REVIEWSPORTSGROUND;
	}

	const addReview = async (review) => {
		try {
			await mutate({
				variables: {
					stars: review.stars,
					comment: review.comment,
					token: localStorage.getItem("token"),
					id: parseInt(BusinessProfileData.id),
				},
			});
			setReviews([review, ...reviews]);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<section>
				<div>
					<img
						className="h-32 w-full object-cover lg:h-48"
						src="https://source.unsplash.com/random/?workout"
						alt=""
					/>
				</div>
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
						<div className="flex">
							<img
								className="h-24 w-24 rounded-full object-contain ring-4 bg-gray-200 ring-white sm:h-32 sm:w-32"
								src={BusinessProfileData.profile_photo.location}
								alt={BusinessProfileData.profile_photo.name}
							/>
						</div>
						<div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
							<div className="sm:hidden md:block mt-6 min-w-0 flex-1">
								<span className="text-xs text-gray-400">@{BusinessProfileData.username}</span>
								<h1 className="text-2xl font-bold text-gray-900 truncate">
									{BusinessProfileData.name}
								</h1>
							</div>
							<div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
								<button
									type="button"
									onClick={openContactModal}
									className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-500"
								>
									<svg
										className="-ml-1 mr-2 h-5 w-5 text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
									</svg>
									<span>Napsat zprávu</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="pb-16 relative">
				<XlWrapper>
					<div className="flex">
						<div className="relative flex-grow bg-white overflow-hidden">
							<div className="relative px-4 sm:px-6 lg:px-8">
								<TextProse>
									<div dangerouslySetInnerHTML={{ __html: article }}></div>
								</TextProse>
							</div>
						</div>
						<DetailCard
							descriptionItems={BusinessProfileData.details}
							rating={BusinessProfileData.rating}
						/>
					</div>
				</XlWrapper>
			</section>
			{BusinessProfileData.events && (
				<section>
					<XlWrapper>
						<div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4">
							{BusinessProfileData.events.map((event) => (
								<EventCard key={event.id} id={event.id} modal={true} />
							))}
						</div>
					</XlWrapper>
				</section>
			)}

			<section>
				<XlWrapper>
					<div className="space-y-10">
						<RatingInput addReview={addReview} />
						<RatingList reviews={reviews} />
					</div>
				</XlWrapper>
			</section>
			<Modal isOpen={contactModal} onClose={closeContactModal}>
				<div className="space-y-6">
					<H2>Zašlete nám zprávu</H2>
					<ContactBusinessForm />
				</div>
			</Modal>
		</>
	);
}
