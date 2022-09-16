//mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#navbarBasicExample');
const submitBtn = document.getElementById('submit')

var api_token = ""

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

window.onSpotifyIframeApiReady = (IFrameAPI) => {
    let element = document.getElementById('embed-iframe');
    let options = {
        uri: 'spotify:artist:6M2wZ9GZgrQXHCFfjv46we'
      };
    let callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };

  $.ajax({
    "async": true,
    "crossDomain": true,
    "url": "https://sagenda.net/api/v3/token",
    "method": "POST",
    "headers": {
      "content-type": "application/x-www-form-urlencoded"
    },
    "data": {
      "grant_type": "api_token",
      "api_token": "a075eba83d7c4f47ab0fffa234dc9505"
    }
  }).done(function (response) {
    console.log(response);
    return api_token = response.access_token
  });

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c3738d217msh1f62f50a23002c1p1cafe0jsn78da2a75c225',
		'X-RapidAPI-Host': 'sagenda-sagenda-v1.p.rapidapi.com'
	}
};

$.ajax(
    {
      "async": true,
      "crossDomain": true,
      "url": "https://sagenda.net/api/v3/status/oauth",
      "method": "GET",
      "headers": {
        "Authorization": "Bearer " + api_token
      }
    }).done(function (response) {
      console.log(response);
    });

    $.ajax(
      {
        "async": true,
        "crossDomain": true,
        "url": "https://sagenda.net/api/v3/status/oauth",
        "method": "GET",
        "headers": {
          "Authorization": "Bearer " + api_token
        }
      }).done(function (response) {
        console.log(response);
      });