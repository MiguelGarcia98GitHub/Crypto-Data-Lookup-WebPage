// DOM ELEMENTS VARIABLES
let apiDataWrapAll = document.querySelector(".apidatawrapall");

// CRYPTO LIST BY MARKETCAP
function displayCryptoListByMarketCap() {
  fetch(`https://api.coingecko.com/api/v3/coins`)
    .then((response) => response.json())
    .then((json) => {
      apiDataWrapAll.innerHTML = "";
      console.log(json);

      apiDataWrapAll.innerHTML += `
       <div class="apidatatitlediv">
                                <div class="apidatatitlediv_1">
                                        <div class="apidatatitlediv_1_1">TOP 10 CRIPTOS POR CAP. DE MERCADO</div>
                                </div>
                                <div class="apidatatitlediv_2">
                                        <div class="apidatatitlediv_1_2">PRECIO ACTUAL</div>
                                </div>
                                <div class="apidatatitlediv_3">
                                        <div class="apidatatitlediv_1_3">PRECIO MÁS ALTO 24 H</div>
                                </div>
                                <div class="apidatatitlediv_4">
                                        <div class="apidatatitlediv_1_4">PRECIO MÁS BAJO 24H</div>
                                </div>
                        </div>


      `;

      for (let i = 0; i < 10; i++) {
        apiDataWrapAll.innerHTML += `
        <div class="apidatadiv">
                                <div class="apidatadiv_1">
                                        <div class="apidatadiv_1_1"><img src="${json[i].image.small}" class="apidatadiv_1_1_img"></div>
                                        <div class="apidatadiv_1_2">${json[i].id}</div>
                                </div>
                                <div class="apidatadiv_2">
                                        <div class="apidatadiv_1_2">${json[i].market_data.current_price.eur} €</div>
                                </div>
                                <div class="apidatadiv_3">
                                        <div class="apidatadiv_1_3">${json[i].market_data.high_24h.eur} €</div>
                                </div>
                                <div class="apidatadiv_4">
                                        <div class="apidatadiv_1_4">${json[i].market_data.low_24h.eur} €</div>
                                </div>
                        </div>



      `;
      }
    });
}

displayCryptoListByMarketCap();

let cryptosMarketCapDiv = document.querySelector(".header_1_1");
cryptosMarketCapDiv.addEventListener("click", displayCryptoListByMarketCap);

// CRYPTO SEARCH
function searchCryptoByName(inputvalue) {
  fetch(
    `https://api.coingecko.com/api/v3/coins/${inputvalue}?localization=en&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
  )
    .then((response) => response.json())
    .then((json) => {
      apiDataWrapAll.innerHTML = "";
      console.log(json);

      apiDataWrapAll.innerHTML += `
       <div class="apidatatitlediv">
                                <div class="apidatatitlediv_1">
                                        <div class="apidatatitlediv_1_1">CRIPTOMONEDA QUE BUSCASTE</div>
                                </div>
                                <div class="apidatatitlediv_2">
                                        <div class="apidatatitlediv_1_2">PRECIO ACTUAL</div>
                                </div>
                                <div class="apidatatitlediv_3">
                                        <div class="apidatatitlediv_1_3">PRECIO MÁS ALTO 24 H</div>
                                </div>
                                <div class="apidatatitlediv_4">
                                        <div class="apidatatitlediv_1_4">PRECIO MÁS BAJO 24H</div>
                                </div>
                        </div>


      `;

      apiDataWrapAll.innerHTML += `
      <div class="apidatadiv">
                              <div class="apidatadiv_1">
                                      <div class="apidatadiv_1_1"><img src="${json.image.small}" class="apidatadiv_1_1_img"></div>
                                      <div class="apidatadiv_1_2">${json.id}</div>
                              </div>
                              <div class="apidatadiv_2">
                                      <div class="apidatadiv_1_2">${json.market_data.current_price.eur} €</div>
                              </div>
                              <div class="apidatadiv_3">
                                      <div class="apidatadiv_1_3">${json.market_data.high_24h.eur} €</div>
                              </div>
                              <div class="apidatadiv_4">
                                      <div class="apidatadiv_1_4">${json.market_data.low_24h.eur} €</div>
                              </div>
                      </div>


    `;
    });
}

let inputTextCrypto = document.querySelector(".header_1_4_2_input");
let magSearch = document.querySelector(".header_1_4_3_button");
// searchCryptoByName("ethereum");

function searchCrypto() {
  let inputText = inputTextCrypto.value;
  searchCryptoByName(inputText);
}

magSearch.addEventListener("click", searchCrypto);

inputTextCrypto.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    searchCrypto();
  }
});

// CRYPTO RANDOM
let cryptoRandomDiv = document.querySelector(".header_1_2");

function getRandomCrypto() {
  fetch(`https://api.coingecko.com/api/v3/coins/`)
    .then((response) => response.json())
    .then((json) => {
      apiDataWrapAll.innerHTML = "";
      let randomNumber = Math.floor(Math.random() * 50);
      console.log(json[randomNumber]);

      apiDataWrapAll.innerHTML += `
      <div class="apidatatitlediv">
                               <div class="apidatatitlediv_1">
                                       <div class="apidatatitlediv_1_1">CRIPTOMONEDA ALEATORIA</div>
                               </div>
                               <div class="apidatatitlediv_2">
                                       <div class="apidatatitlediv_1_2">PRECIO ACTUAL</div>
                               </div>
                               <div class="apidatatitlediv_3">
                                       <div class="apidatatitlediv_1_3">PRECIO MÁS ALTO 24 H</div>
                               </div>
                               <div class="apidatatitlediv_4">
                                       <div class="apidatatitlediv_1_4">PRECIO MÁS BAJO 24H</div>
                               </div>
                       </div>


     `;

      apiDataWrapAll.innerHTML += `
        <div class="apidatadiv">
                                <div class="apidatadiv_1">
                                        <div class="apidatadiv_1_1"><img src="${json[randomNumber].image.small}" class="apidatadiv_1_1_img"></div>
                                        <div class="apidatadiv_1_2">${json[randomNumber].id}</div>
                                </div>
                                <div class="apidatadiv_2">
                                        <div class="apidatadiv_1_2">${json[randomNumber].market_data.current_price.eur} €</div>
                                </div>
                                <div class="apidatadiv_3">
                                        <div class="apidatadiv_1_3">${json[randomNumber].market_data.high_24h.eur} €</div>
                                </div>
                                <div class="apidatadiv_4">
                                        <div class="apidatadiv_1_4">${json[randomNumber].market_data.low_24h.eur} €</div>
                                </div>
                        </div>



      `;
    });
}

cryptoRandomDiv.addEventListener("click", getRandomCrypto);

// TOP 10 EXCHANGES

function getTopExchanges() {
  fetch(`https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1`)
    .then((response) => response.json())
    .then((json) => {
      apiDataWrapAll.innerHTML = "";
      console.log(json);

      apiDataWrapAll.innerHTML += `
      <div class="apidatatitlediv">
                               <div class="apidatatitlediv_1">
                                       <div class="apidatatitlediv_1_1">PÁGINA WEB</div>
                               </div>
                               <div class="apidatatitlediv_2">
                                       <div class="apidatatitlediv_1_2">ENLACE A LA PÁGINA</div>
                               </div>
                               <div class="apidatatitlediv_3">
                                       <div class="apidatatitlediv_1_3">VOLUMEN EN BITCOIN DE LA PÁGINA, ÚLTIMAS 24H</div>
                               </div>
                               <div class="apidatatitlediv_4">
                                       <div class="apidatatitlediv_1_4">AÑO EN QUE SE FUNDA</div>
                               </div>
                       </div>


     `;

      for (let i = 0; i < 10; i++) {
        if (json[i].year_established == null) {
          json[i].year_established = "Año Desconocido";
        }
        apiDataWrapAll.innerHTML += `
        <div class="apidatadiv">
                                <div class="apidatadiv_1">
                                        <div class="apidatadiv_1_1"><img src="${json[i].image}" class="apidatadiv_1_1_img"></div>
                                        <div class="apidatadiv_1_2">${json[i].name}</div>
                                </div>
                                <div class="apidatadiv_2">
                                        <div class="apidatadiv_1_2">${json[i].url}</div>
                                </div>
                                <div class="apidatadiv_3">
                                        <div class="apidatadiv_1_3">${json[i].trade_volume_24h_btc} BTC</div>
                                </div>
                                <div class="apidatadiv_4">
                                        <div class="apidatadiv_1_4">${json[i].year_established}</div>
                                </div>
                        </div>




      `;
      }
    });
}

let topTenPages = document.querySelector(".header_1_3");
topTenPages.addEventListener("click", getTopExchanges);
