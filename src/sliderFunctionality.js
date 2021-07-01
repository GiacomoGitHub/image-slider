// const sliderFunctionality = () => {
// 	const goToNextImage = () => {};
// 	const goToPreviousImage = () => {};
// };

// export default sliderFunctionality;

const sliderFunctionality = () => {
	let n = 0;
	const goToNextImage = () => {
		document.getElementById('next').addEventListener('click', () => {
			n += 1;
			console.log(n);
		});
		goToNextImage;
	};
	const goToPreviousImage = () => {
		n -= 1;
	};
};

export default sliderFunctionality;
