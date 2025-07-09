// let searchInput = $.querySelector(".search-input")
// let ipt = $.querySelector("input")
// let autoComplateBox = $.querySelector(".autocom-box")
// let image = $.querySelector("img")

// ipt.addEventListener("keyup", function(){
//  let inputValue = ipt.value
//  if (inputValue){
//   searchInput.classList.add("active")

//   let filteredWords = Suggestions.filter(function (sugg){
//    return sugg.toLowerCase().startsWith(inputValue.toLocaleLowerCase())
//   })
//   listItemGenerator(filteredWords)
//  } else {
//   searchInput.classList.remove("active")
//  }
// })

// function listItemGenerator(wordsArray){
//  let listItemAray = wordsArray.map(function(word){
//   return "<li>" + word +"</li>"
//  })
//  let customListWord;
// if (!listItemAray.length){
// customListWord = "<li>" + ipt.value +"</li>"
// } else {
//  customListWord = listItemAray.join("")
// }

// autoComplateBox.innerHTML = customListWord 
// complateInputWith()
// }

// function complateInputWith(){
//  let allListItems = autoComplateBox.querySelectorAll("li")
//  allListItems.forEach(function(li){
//   li.addEventListener("click", function(event){
//    ipt.value = event.target.innerHTML
//    searchInput.classList.remove("active")
//   })
//  })
// }
// image.addEventListener("click", function(){
//  ipt.value = ""
//     searchInput.classList.remove("active")
// })
// body.addEventListener("keyup", function(event){
// if (event.keyCode === 27 || event.keyCode === 46 ||event.keyCode === 13){
//  ipt.value = ""
//     searchInput.classList.remove("active")
// }
// })