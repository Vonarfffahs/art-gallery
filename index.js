// task 1
function userDialog() { 
    if (confirm('Would you like to rate this website?')) {
        let userReview = prompt('Rate our website, please! (0-5)', 0);
        if (userReview === null)
            alert('You canceled the review');

        while (isNaN(+userReview) || +userReview < 0 || +userReview > 5 || userReview === '') {
            userReview = prompt('Please, enter a number between 1 and 5', 0);
            if (userReview === null) {
                alert('You canceled the review');
                break;
            }
        }

        if (userReview > 2) 
            alert(`Thanks for your feedback! You gave rate: ${userReview}!`)
        else if (userReview != null) 
            alert('Thanks for your feedback! We will try to get better!');
    }
}
userDialog();

function devInfo(lastName, name, position = 'student') {
    alert(`Developer: ${lastName} ${name}, Position: ${position}`);
}
let lastName = 'Shafranov',
    name = 'Victor',
    position = 'senior developer';
devInfo(lastName, name);

function stringCompare(first, second) {
    if (first > second)
        alert(first); 
    else
        alert(second);
}
stringCompare("Hello", "Hi");

// task 2
let bottomElement = document.getElementById('bottom');
bottomElement.innerText = "Page's Bottom";