import toast, { Toaster } from "react-hot-toast";
export function CustomToaster({}) {
	return (
		<Toaster
			position="top-right"
			reverseOrder={false}
			gutter={8}
			containerClassName=""
			containerStyle={{ position: "absolute", top: 100 }}
			className="absolute top-40"
			toastOptions={{
				// Define default options
				className: "",
				duration: 5000,
				style: {
					background: "white",
					color: "black",
				},
				// Default options for specific types
				success: {
					duration: 3000,
					theme: {
						primary: "green",
						secondary: "red",
					},
				},
				error: {
					duration: 7000,
					theme: {
						primary: "red",
						secondary: "black",
					},
				},
			}}
		/>
	);
}
