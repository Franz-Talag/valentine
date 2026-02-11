function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');
    
    // Calculate available space within the container
    const containerRect = container.getBoundingClientRect();
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    
    // Calculate random position within container bounds
    const maxX = containerRect.width - buttonWidth;
    const maxY = containerRect.height - buttonHeight;
    
    // Ensure we don't go negative (for very small screens)
    const safeMaxX = Math.max(0, maxX);
    const safeMaxY = Math.max(0, maxY);
    
    const x = Math.random() * safeMaxX;
    const y = Math.random() * safeMaxY;
    
    // Use relative positioning within container
    noButton.style.position = 'relative';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
    noButton.style.transform = 'none'; // Remove any existing transform
}

// Add event listeners for both mouse and touch events
document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    
    // Handle Yes button
    if (yesButton) {
        yesButton.addEventListener('click', nextPage);
        yesButton.addEventListener('touchstart', function(e) {
            e.preventDefault();
            nextPage();
        });
    }
    
    // Handle No button
    if (noButton) {
        // For mouse devices
        noButton.addEventListener('mouseover', moveButton);
        
        // For touch devices
        noButton.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Prevent default touch behavior
            moveButton();
        });
        
        // Also add click/tap prevention for the No button
        noButton.addEventListener('click', function(e) {
            e.preventDefault();
            moveButton();
        });
    }
    
    // Make sure buttons are properly sized for mobile
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        // Ensure minimum touch target size
        if (button.offsetHeight < 44) {
            button.style.minHeight = '44px';
        }
        if (button.offsetWidth < 44) {
            button.style.minWidth = '44px';
        }
    });
});
