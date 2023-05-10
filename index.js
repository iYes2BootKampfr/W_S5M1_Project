function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // TASK 1
  const quoteContainer = document.querySelector('.quoteoftheday')
  const quoteObj = quotes[Math.floor(Math.random() * quotes.length)]

  // Create the quote elements
  const authorElement = document.createElement("h4")
  const textElement = document.createElement("div")
  const dateElement = document.createElement("div")

  // Set the text content of the elements
  authorElement.textContent = quoteObj.author
  textElement.textContent = quoteObj.quote
  dateElement.textContent = quoteObj.date || 'Unknown Date'

  // Set the attributes of the elements
  quoteContainer.setAttribute('tabindex', '1')

  // Append the elements to the container
  quoteContainer.appendChild(authorElement)
  quoteContainer.appendChild(textElement)
  quoteContainer.appendChild(dateElement)
}

// TASK 2

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
corporateContainer.appendChild(corporateSpeak)
corporateSpeak.textContent = generateCorporateSpeak()
corporateContainer.setAttribute('tabindex', '2')

// TASK 3

let counter = 5
const countdownContainer = document.querySelector('.countdown')
const countdown = document.createElement('p')
countdownContainer.appendChild(countdown)
countdown.textContent = `T-minus ${counter}...`
let id = setInterval(() => {
  if (counter === 1) {
    clearInterval(id)
    countdown.textContent = 'Liftoff! 🚀'
  } else {
    countdown.textContent = `T-minus ${--counter}...`
  }
}, 1000);
countdownContainer.setAttribute('tabindex', '3')

// TASK 4
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
personContainer.setAttribute('tabindex', '4')

// DO NOT WORK BELOW THIS LINE
moduleProject1()
try { module.exports = { moduleProject1 } } catch { } // eslint-disable-line
