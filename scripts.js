// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function calculateHealth() {
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;

    const exercise = document.getElementById('exercise').value;
    const water = document.getElementById('water').value;
    const mood = document.getElementById('mood').value;
    const sleep = document.getElementById('sleep').value;
    const food = document.getElementById('food').value;

    let healthScore = 0;
    let recommendations = [];

    if (exercise >= 30 && exercise <= 60) {
        healthScore += 20;
        recommendations.push("Good exercise routine!");
    } else {
        recommendations.push("Aim for 30-60 minutes of exercise daily.");
    }


 if (water >= 2 && water <= 5) {
        healthScore += 20; 
        recommendations.push("Good water intake 👍");
    } else if (water > 5) {
        recommendations.push("Don't drink excess water, up to 5 liters a day is enough 👌");
    } else {
        recommendations.push("Try to drink at least 2 liters of water a day. 🙁");
    }




    if (mood >= 7) {
        healthScore += 20;
        recommendations.push("Your mood is in a good range.");
    } else {
        recommendations.push("Try to engage in activities that boost your mood.");
    }

    if (sleep >= 7 && sleep <= 9) {
        healthScore += 20;
        recommendations.push("You are getting a healthy amount of sleep.");
    } else {
        recommendations.push("Aim for 7-9 hours of sleep each night.");
    }



const recommendedCalories = (gender === 'male') ? 2500 : 2000;
if (food >= 1300 && food <= recommendedCalories) {
    healthScore += 20;
    recommendations.push("Your calorie intake is within the recommended range.");
} else if (food < 1300) {
    recommendations.push("Your calorie intake is too low! You might lose weight quickly. Eat at least 1300 calories. 🍽️");
} else {
    recommendations.push(`Consider reducing your calorie intake to below ${recommendedCalories} calories.`);
}



    let summary = `
        <h3>Health Summary</h3>
        <p>Gender: ${gender}</p>
        <p>Age: ${age}</p>
        <p>Exercise: ${exercise} minutes</p>
        <p>Water Intake: ${water} liters</p>
        <p>Mood: ${mood}/10</p>
        <p>Sleep: ${sleep} hours</p>
        <p>Food Consumption: ${food} calories</p>
        <p><strong>Overall Health Score: ${healthScore}</strong></p>
        <h4>Recommendations:</h4>
        <ul>
            ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
    `;

    document.getElementById('health-summary').innerHTML = summary;
}

function shareLink() {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
        alert('Link copied to clipboard!');
    }, (err) => {
        console.error('Could not copy text: ', err);
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star-rating span");
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener("click", function () {
            selectedRating = this.getAttribute("data-value");
            stars.forEach(s => s.classList.remove("active"));
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add("active");
            }
        });
    });
});

function submitReview() {
    const name = document.getElementById("reviewer-name").value;
    const reviewText = document.getElementById("review-text").value;
    const reviewList = document.getElementById("review-list");

    if (name && reviewText && selectedRating > 0) {
        const reviewItem = document.createElement("div");
        reviewItem.innerHTML = `<strong>${name}</strong> - ${'★'.repeat(selectedRating)}<p>${reviewText}</p>`;
        reviewList.appendChild(reviewItem);
        
        // Reset form
        document.getElementById("reviewer-name").value = "";
        document.getElementById("review-text").value = "";
        selectedRating = 0;
        document.querySelectorAll(".star-rating span").forEach(s => s.classList.remove("active"));
    } else {
        alert("Please fill in all fields and select a rating.");
    }
}

