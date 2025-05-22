const search = document.getElementById('search');
  const plantList = document.getElementById('plantList');
  const buttons = plantList.getElementsByClassName('plant-button');
 
  search.addEventListener('input', () => {
    const query = search.value.toLowerCase();
    for (let btn of buttons) {
      const name = btn.textContent.toLowerCase();
      btn.style.display = name.includes(query) ? 'block' : 'none';
    }
  });
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
   alert("Thank you! Your order has been placed.");
    });
    
