var customName = document.getElementById('customname')
var randomize = document.querySelector('.randomize')
var story = document.querySelector('.story')

function randomValueFromArray (array) {
  return array[Math.floor(Math.random() * array.length)]
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas']
let insertY = ['the soup kitchen', 'Disneyland', 'the White House']
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away']

randomize.addEventListener('click', result)

function result () {
  var newStory = storyText
  var xItem = randomValueFromArray(insertX)
  var yItem = randomValueFromArray(insertY)
  var zItem = randomValueFromArray(insertZ)
  newStory = newStory.replace(':insertx', xItem)
  newStory = newStory.replace(':inserty', yItem)
  newStory = newStory.replace(':insertz', zItem)
  if (customName.value !== '') {
    var name = customName.value
    newStory = newStory.replace('Bob', name)
  }

  if (document.getElementById('uk').checked) {
    var weight = Math.round(300)
    var temperature = Math.round(94)
    weight *= 0.0714286
    temperature = (5 / 9) * (temperature - 32)
    var temp = temperature + ' celsius'
    storyText = storyText.replace('94 farenheit', temp)
    temp = weight + ' stones'
    storyText = storyText.replace('300 pounds', weight)
  }

  story.textContent = newStory
  story.style.visibility = 'visible'
}
