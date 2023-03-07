//  character data
const charactersData = [
  { name: "Ghostface", franchise: "Scream", image: "images/Ghostface.jpg", link:"ghostface.html" },
  { name: "Michael Myers", franchise: "Halloween", image: "images/michaelmyers.jpg" },
  { name: "Freddy Krueger", franchise: "A Nightmare on Elm Street", image: "images/FreddyKrueger.jpg" },
  { name: "Hannibal Lecter", franchise: "Hannibal", image: "images/hanniballecter.jpg" },
  { name: "Pennywise", franchise: "It", image: "images/pennywise.jpg" }
];
      
// function to render character boxes
function renderCharacters(characters) {
  const search = document.getElementById("characters")
  if (document.getElementById("search-container")){
    document.getElementById("search-container").remove()
  }
  const charactersContainer = document.createElement("div");
  charactersContainer.setAttribute("id", "characters-container"); // set the new id attribute
  charactersContainer.setAttribute("id", "search-container"); // set the new id attribute

  search.appendChild(charactersContainer);
  characters.forEach(character => {
    const box = document.createElement("div");
    box.classList.add("box");
    const boxImg = document.createElement("div");
    boxImg.classList.add("box-img");
    const img = document.createElement("img");
    img.src = character.image;
    img.alt = character.name;
    boxImg.appendChild(img);
    box.appendChild(boxImg);
    const h3 = document.createElement("h3");
    h3.textContent = character.name;
    box.appendChild(h3);
    const span = document.createElement("span");
    span.textContent = character.franchise;
    box.appendChild(span);
    const butt = document.createElement("a");
    butt.textContent = "Click me";
    butt.href= charactersData[0].link;
    box.appendChild(butt);
    charactersContainer.appendChild(box);
  });

}


// function to search for characters
function searchCharacters() {
  const searchText = document.getElementById("search-box").value.toLowerCase();
  const filteredCharacters = charactersData.filter(character => character.name.toLowerCase().includes(searchText));
  renderCharacters(filteredCharacters);
}

//  event listener to search button
document.getElementById("search-button").addEventListener("click", searchCharacters);



