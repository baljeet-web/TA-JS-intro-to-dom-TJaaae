{/* <li class = width>
              <div class="photo flex-2">
                <img src="https://raw.githubusercontent.com/nnnkit/json-data-collections/master/game-of-thrones/game-of-thrones-eddard-stark.jpg" alt="name">
                <h2>Eddard "Ned" Stark</h2>
              </div>
              <p>
                Lord of Winterfell - Warden of the North - Hand of the King - Married to Catelyn (Tully) Stark
              </p>
              <btn class="button">
                Learn More!
              </btn>
            </li> */}

var ul = document.querySelector(`ul`)


got.houses.forEach(house => {
    house.people.forEach(element=>{
    var li = document.createElement(`li`)
    li.className=(`width`)
    var div = document.createElement(`div`);
    div.className= (`photo, flex-2`)
    var img = document.createElement(`img`);
    img.src = element.image
    var h2 = document.createElement(`h2`);
    h2.innerHTML = element.name;
    div.append(img,h2)

    var p = document.createElement(`p`);
    p.innerHTML = element.description

    var btn = document.createElement(`btn`);
    btn.className= (`button`);
    btn.innerText = `Learn More!`

    ul.append(li);
    li.append(div,p,btn)
});
});
