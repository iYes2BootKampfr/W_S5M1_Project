function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "card" class name to cards so CSS kicks in
  //  ✨ add your code here
  let cards = document.querySelectorAll('section>div')
  cards.forEach(card => card.classList.add('card'))

  // 👉 TASK 2 - Build the "Quote of the Day" widget
  //  ✨ add your code here
  const quoteContainer = document.querySelector('.quoteoftheday')
  const quoteObj = quotes[Math.floor(Math.random() * quotes.length)]
  const authorElement = document.createElement("div")
  const textElement = document.createElement("div")
  textElement.textContent = quoteObj.quote
  authorElement.textContent = `${quoteObj.author} in ${quoteObj.date || ' an unknown date'}`
  quoteContainer.appendChild(textElement)
  quoteContainer.appendChild(authorElement)

  // 👉 TASK 3 - Build the "Corporate Speak" widget
  //  ✨ add your code here
  function randomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
  }
  function generateCorporateSpeak() {
    const sentence = `We need to ${randomWord(verbs)} our ${randomWord(nouns)} ` +
      `${randomWord(adverbs)} in order to ${randomWord(verbs)} our ` +
      `${randomWord(nouns)} ${randomWord(adverbs)}.`;
    return sentence;
  }
  const corporateContainer = document.querySelector('.corporatespeak')
  const corporateSpeak = document.createElement('p')
  corporateSpeak.textContent = generateCorporateSpeak()
  corporateContainer.appendChild(corporateSpeak)

  // 👉 TASK 4 - Build the "Countdown" widget
  //  ✨ add your code here
  let counter = 5
  const countdownContainer = document.querySelector('.countdown')
  const countdown = document.createElement('p')
  countdown.textContent = `T-minus ${counter}...`
  countdownContainer.appendChild(countdown)
  let id = setInterval(() => {
    if (counter === 1) {
      clearInterval(id)
      countdown.textContent = 'Liftoff! 🚀'
    } else {
      countdown.textContent = `T-minus ${--counter}...`
    }
  }, 1000);

  // 👉 TASK 5 - Build the "Friends" widget
  //  ✨ add your code here
  const personContainer = document.querySelector('.friends')
  const randomIndex = Math.floor(Math.random() * people.length)
  const person = people[randomIndex]
  const numFriends = person.friends.length
  let friendString = ''
  if (numFriends > 0) {
    friendString += ' and is friends with '
    for (let i = 0; i < numFriends; i++) {
      const friend = people.find(p => p.id === person.friends[i])
      let separator = ''
      if (i === numFriends - 2) separator = ' and '
      else if (i === numFriends - 1) separator = ''
      else separator = ', '
      friendString += `${friend.fname} ${friend.lname}${separator}`
    }
  } else {
    friendString += ' and has no friends'
  }
  const year = person.dateOfBirth.split('-')[0]
  const sentence = `${person.fname} ${person.lname} was born in ${year}${friendString}.`;
  const p = document.createElement('p')
  p.textContent = sentence
  personContainer.appendChild(p)

  // 👉 TASK 5 - Make it so user can tab through the widgets
  //  ✨ add your code here
  quoteContainer.setAttribute('tabindex', '1')
  corporateContainer.setAttribute('tabindex', '2')
  countdownContainer.setAttribute('tabindex', '3')
  personContainer.setAttribute('tabindex', '4')

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
