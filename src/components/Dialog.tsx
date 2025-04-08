import { AiFillCloseCircle } from "react-icons/ai";
import { ReactNode, useState } from "react";
import { IBlog } from "../types";

interface DialogProps {
	setSearchResults?: (blogs: IBlog[]) => void;
	children: ReactNode;
}

function Dialog({ setSearchResults, children }: DialogProps) {
	const [isOpen, setIsOpen] = useState(true);

	const closeModal = () => {
		if (setSearchResults) setSearchResults([]);
		setIsOpen(false);
	};
	return (
		<dialog
			open={isOpen}
			id="modal"
			className={`${
				isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
			}  flex flex-col items-center justify-center bg-inherit transition-opacity duration-300 ease-in-out fixed inset-0 backdrop-filter backdrop-blur-md backdrop-brightness-50 w-4/6 border border-container rounded-md max-h-[80vh] text-white p-4`}
		>
			<button
				onClick={closeModal}
				className="flex flex-row gap-2 items-center justify-center ml-auto font-medium hover:text-red-300 my-4"
			>
				<span>Close</span>
				<AiFillCloseCircle height={25} />
			</button>
			<div className="max-h-[80vh] overflow-auto w-11/12 mb-6 ">{children}</div>
		</dialog>
	);
}

export default Dialog;
