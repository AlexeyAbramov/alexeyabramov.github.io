const portfolio = currentUrl();
const twitch = currentUrl("tw-app");
const goodCarton = currentUrl("good-carton");


function currentUrl(url) {
    let element = document.getElementById("click");
    return function () {
        return element.href = `https://alexeyabramov.github.io/${url}`;
    }
}