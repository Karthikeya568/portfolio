const jobTitleElement = document.getElementById('job-title');
const jobTitles = ['Software Developer', 'Video Editor', 'Freelancer'];
let currentJobTitle = 0;
let isDeleting = false;
let isTyping = false;

function typeWriter() {
  const currentText = jobTitleElement.textContent;
  const currentJob = jobTitles[currentJobTitle];

  if (isDeleting) {
    jobTitleElement.textContent = currentText.slice(0, currentText.length - 1);
    if (currentText.length === 0) {
      isDeleting = false;
      isTyping = true;
    }
  } else if (isTyping) {
    if (currentText.length < currentJob.length) {
      jobTitleElement.textContent = currentText + currentJob.charAt(currentText.length);
    } else {
      isTyping = false;
      isDeleting = true;
      currentJobTitle = (currentJobTitle + 1) % jobTitles.length; // Cycle through the array
    }
  }

  setTimeout(typeWriter, 50); // Adjust speed as desired (lower number = faster)
}

typeWriter(); // Start the animation
