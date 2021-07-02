// const sliderFunctionality = () => {
// 	const goToNextImage = () => {};
// 	const goToPreviousImage = () => {};
// };

// export default sliderFunctionality;

// const sliderFunctionality = () => {
// 	let n = 0;
// 	const goToNextImage = () => {
// 		document.getElementById('next').addEventListener('click', () => {
// 			n += 1;
// 			console.log(n);
// 		});
// 		goToNextImage;
// 	};
// 	const goToPreviousImage = () => {
// 		n -= 1;
// 	};
// };

// export default sliderFunctionality;
const sliderFunctionality = () => {
	let itemClassName = 'photo';
	(items = document.getElementsByClassName(itemClassName)),
		(totalItems = items.length),
		(slide = 0),
		(moving = true);

	// Set classes
	function setInitialClasses() {
		// Targets the previous, current, and next items and adds the respective classes
		items[totalItems - 1].classList.add('prev');
		items[0].classList.add('active');
		items[1].classList.add('next');
	}

	// Set event listeners
	function setEventListeners() {
		let next = document.getElementsByClassName('button--next')[0],
			prev = document.getElementsByClassName('button--prev')[0];

		next.addEventListener('click', moveNext);
		prev.addEventListener('click', movePrev);
	}

	// Handle the movement to the next image
	function moveNext() {
		// Check if moving
		if (!moving) {
			// If it is the last image, reset back to 0, else do +1
			if (slide === totalItems - 1) {
				slide = 0;
			} else {
				slide++;
			}
			moveCarouselTo(slide);
		}
	}

	// Handle the movement to the previous image
	function movePrev() {
		// Check if moving
		if (!moving) {
			// If it is the first slide, set as the last slide, else -1
			if (slide === 0) {
				slide = totalItems - 1;
			} else {
				slide--;
			}
			moveCarouselTo(slide);
		}
	}

	// Disable interaction while the images are moving
	function disableInteraction() {
		moving = true;
		setTimeout(function () {
			moving = false;
		}, 500);
	}

	function moveCarouselTo(slide) {
		// Check if carousel is moving, if not, allow interaction
		if (!moving) {
			// temporarily disable interactivity
			disableInteraction();
			// Update the "old" adjacent slides with "new" ones
			let newPrevious = slide - 1,
				newNext = slide + 1,
				oldPrevious = slide - 2,
				oldNext = slide + 2;
			// Test if carousel has more than three items
			if (totalItems - 1 > 3) {
				// Checks and updates if the new slides are out of bounds
				if (newPrevious <= 0) {
					oldPrevious = totalItems - 1;
				} else if (newNext >= totalItems - 1) {
					oldNext = 0;
				}
				// Checks and updates if slide is at the beginning/end
				if (slide === 0) {
					newPrevious = totalItems - 1;
					oldPrevious = totalItems - 2;
					oldNext = slide + 1;
				} else if (slide === totalItems - 1) {
					newPrevious = slide - 1;
					newNext = 0;
					oldNext = 1;
				}

				// Reset old next/prev elements to default classes
				items[oldPrevious].className = itemClassName;
				items[oldNext].className = itemClassName;
				// Add new classes
				items[newPrevious].className = itemClassName + ' prev';
				items[slide].className = itemClassName + ' active';
				items[newNext].className = itemClassName + ' next';
			}
		}
	}

	function initCarousel() {
		setInitialClasses();
		setEventListeners();
		// Set moving to false so that the carousel becomes interactive
		moving = false;
	}

	initCarousel();
};
