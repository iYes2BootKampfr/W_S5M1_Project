function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const divs = document.querySelectorAll(('div'));
  divs.forEach((div) => {
    div.classList.add('widget');
  });

    
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const qotd = document.querySelector('.quoteoftheday');
  // console.log(quotes)
  function displayRandomQuote() {
  // Build the randomIndex statement to return the index holding the three keys 
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // Destructure the quotes-array object by importing relevant keys
  const { quote, author, date } = quotes[randomIndex];
  // Build the respective div child nodes to house them
  const quoteDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  // Set the text content for each child div
  quoteDiv.textContent = quote;
  authorDiv.textContent = `${author} in ${date || "an unknown date"}`;
  // append the child Nodes to the parent div qotd
  qotd.appendChild(quoteDiv);
  qotd.appendChild(authorDiv);
}
// QOTD widget callback
displayRandomQuote();

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  // selecting the corporatespeak widget
  const corpSpk = document.querySelector('.corporatespeak')
  // Helper function to get the length of all respectve arrays
  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }  
  // data check
  console.log(verbs[getRandomIndex(verbs)])
  console.log(adverbs[getRandomIndex(adverbs)])
  console.log(nouns[getRandomIndex(nouns)])
  
  function displayCorporateSpeak() {
    // create the child p element 
    const corpSpkTxt = document.createElement('p');
    // grab text content for the newly creted element 
    const randomVerb1 = verbs[getRandomIndex(verbs)];
    const randomNoun1 = nouns[getRandomIndex(nouns)];
    const randomAdverb1 = adverbs[getRandomIndex(adverbs)];
    const randomVerb2 = verbs[getRandomIndex(verbs)];
    const randomNoun2 = nouns[getRandomIndex(nouns)];
    const randomAdverb2 = adverbs[getRandomIndex(adverbs)];
    // Fill element text content
    corpSpkTxt.textContent = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`;
    // append the element and its text as a child to the corpSpk selector
    corpSpk.appendChild(corpSpkTxt)
  }
  // final callbck
  displayCorporateSpeak()


  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  function countdownWidget() {
    // count Widget selection, node creation, and element appendage  
    const countdownDiv = document.querySelector('.countdown');
    const countdownText = document.createElement('p');
    countdownDiv.appendChild(countdownText);
    // Starting count
    let counter = 5; 
    // count mechanism
    const intervalId = setInterval(() => {
      // count dynamic text
      countdownText.textContent = `T-minus ${counter}...`;
      counter--;
      // testing text
      console.log(countdownText.textContent)
      // count result
      if (counter < 0) {
        clearInterval(intervalId);
        countdownText.textContent = "Liftoff! 🚀";
      }
    }, 1000); 
  }
  // countdown callback
  countdownWidget();

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  function displayFriends(personId) {
    // Find the person by ID
    const person = people.find(p => p.id === personId);
    if (!person) return `Person with ID ${personId} not found.`;
  
    const { fname, lname, dateOfBirth, friends } = person;
    const birthYear = new Date(dateOfBirth).getFullYear();
  
    // Map friends' IDs to their names
    const friendsNames = friends
      .map(friendId => {
        const friend = people.find(p => p.id === friendId);
        return friend ? `${friend.fname} ${friend.lname}` : null;
      })
      .filter(Boolean); // Remove null entries

    // Select necessary DOM element and Append
    const friendDiv = document.querySelector('.friends');
    const friendTxt = document.createElement('p');
    friendDiv.appendChild(friendTxt)
  
    // Format the output via condtional
    if (friendsNames.length === 0) {
      friendTxt.textContent = `${fname} ${lname} was born in ${birthYear} and has no friends.`;
    }else {
      friendTxt.textContent = `${fname} ${lname} was born in ${birthYear} and is friends with ${friendsNames.join(', ')}.`;
    }
  }
  // random key to call for Person and their Friends
  const randomPerson = people[Math.floor(Math.random() * people.length)];
  // callback function of displayFriends
  console.log(displayFriends(randomPerson.id))

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  const widgets = document.querySelectorAll('.widget');

// Add tabIndex to make widgets focusable
widgets.forEach((widget, index) => {
  widget.tabIndex = index + 1; // Makes the widget focusable with the Tab key

  // Add click event listener to toggle active class
  widget.addEventListener('click', () => {
    // Remove 'active' class from all widgets
    widgets.forEach(w => w.classList.remove('active'));

    // Add 'active' class to clicked widget
    widget.classList.add('active');
  });

  // Add keyboard navigation with Enter or Space key
  widget.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent default scrolling for Space
      widget.click(); // Trigger click behavior
    }
  });
});
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
