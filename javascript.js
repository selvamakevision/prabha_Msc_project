function generateRandomNumber() {
        // Generate a random number between 1 and 100
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        // Display the number in the paragraph with id "random-number"
        document.getElementById("random-number").innerText = "Generated Number: " + randomNumber;
    }
    
    // Automatically generate the random number when the page loads
    window.onload = generateRandomNumber;
    