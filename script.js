let currentPage = 1;
const totalPages = 8;

function flipPage(pageNumber) {
    if (pageNumber > currentPage && pageNumber <= totalPages) {
        // Hide the current page
        document.querySelector(`.page${currentPage}`).style.display = 'none';
        
        // Show the next page
        document.querySelector(`.page${pageNumber}`).style.display = 'block';
        
        // Update the current page
        currentPage = pageNumber;
    }
}

function answer(response) {
    if (response === 'Yes') {
        alert('muje han kar diya jaanu tune hayeeeee i love you meri jaann!');
    } else if (response === 'No') {
        alert('no kese daba diya tune jaanu ab dekh tu gyi mujse nahi bachegi kissi lunga ab teri !');
    }
}

// Initially show the first page
document.querySelector(`.page${currentPage}`).style.display = 'block';
