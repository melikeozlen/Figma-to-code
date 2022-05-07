const collect = document.querySelector(".collect");
const collect_2 = document.querySelector(".collect_2");
const collect_3 = document.querySelector(".cont_3");


const cont = document.querySelector(".cont");

for (let i = 0; i < 10; i++) {
  let card = document.createElement("div");
  let card_2 = document.createElement("div");

  card.className = "card";
  card_2.className = "card_2";

  fetch("http://localhost:3000/card1")
    .then((response) => response.json())
    .then((data) => {
      card.innerHTML =
        `<img class='imgs' src="` +
        data[i].src +
        `" alt="">
    <div class="card_title">
        <div class="card-title-top">
            <span>@Jonny</span>
            <span>Current Bid</span>
        </div>
    </div>
    <div class="card-title-bottom">
        <span>Yellow Painting</span>
        <span>0.005 ETH</span>
    </div>
    <button>
        Place a bid
    </button>`;
      if (i < 3) {
        card_2.innerHTML =
          `<img class='imgs' src="` +
          data[i].src +
          `" alt="">
    <div class="card_title">
        <div class="card-title-top">
            <span>@Jonny</span>
            <span>Current Bid</span>
        </div>
    </div>
    <div class="card-title-bottom">
        <span>Yellow Painting</span>
        <span>0.005 ETH</span>
    </div>
    <button>
        Place a bid
    </button>`;
        collect_2.appendChild(card_2);
      }
      collect.appendChild(card);
    });
}
for (let i = 0; i < 3; i++) {
    let card_3 = document.createElement("div");
  
    card_3.className = "card_3";
  
    fetch("http://localhost:3000/card2")
      .then((response) => response.json())
      .then((data) => {
        card_3.innerHTML =
          `<img class='imgs' src="` +
          data[i].srcpt +
          `" alt="">
          <div class="title">

          <h3>John Wick</h3>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.

          </p>
      </div>
      <button>
          +Follow
      </button>`;
        card_3.style.backgroundImage = "url('"+data[i].srcbg +"')";
        collect_3.appendChild(card_3);
      });
  }
  