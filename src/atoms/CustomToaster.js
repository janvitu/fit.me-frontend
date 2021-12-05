import toast, { Toaster } from "react-hot-toast";
export function CustomToaster({}) {
	return (
		<Toaster
			position="top-right"
			reverseOrder={false}
			gutter={8}
			containerClassName=""
			containerStyle={{ position: "sticky", top: 100 }}
			className="absolute top-40"
			toastOptions={{
				className: "",
				duration: 9000,
				style: {
					background: "white",
					color: "black",
				},
				success: {
					duration: 9000,
					theme: {
						primary: "green",
						secondary: "red",
					},
				},
				error: {
					duration: 9000,
					theme: {
						primary: "red",
						secondary: "black",
					},
				},
			}}
		/>
	);
}
