//mobile menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#navbarBasicExample");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById("embed-iframe");
  let options = {
    uri: "spotify:artist:6M2wZ9GZgrQXHCFfjv46we",
  };
  let callback = (EmbedController) => {};
  IFrameAPI.createController(element, options, callback);
};

// spotfify API

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById("embed-iframe");
  let options = {
    uri: "spotify:artist:6M2wZ9GZgrQXHCFfjv46we",
  };
  let callback = (EmbedController) => {};
  IFrameAPI.createController(element, options, callback);
};
