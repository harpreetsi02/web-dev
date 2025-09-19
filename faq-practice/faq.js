// Select all question buttons
const faqQuestion = document.querySelectorAll('.faq-question');

// Loop through each question button
faqQuestion.forEach(question => {
    // add a click event listener to each queations
    question.addEventListener("click", () => {
        // close any other open answers except the one clicked
        faqQuestion.forEach(item => {
            if(item !== question){
                item.classList.remove('actice'); //remove 'active' class to reset arrow rotation
                item.nextElementSibling.style.maxHeight = null; // collapse the answer
            }
        });

        // toggle 'active' class on the clicked question to rotate the arrow
        question.classList.toggle("active");

        // select the corresponding answer div
        const answer = question.nextElementSibling;

        // check if the answer is already open
        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
        }
        else{
            // if closed, set max-height to scrollheight to expend it
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});