const git = currentUrl("git");
const vk = currentUrl("vk");
const insta = currentUrl("insta");
const portfolio = currentUrl();
const twitch = currentUrl("tw-app");
const goodCarton = currentUrl("good-carton");

// GG
function currentUrl(url) {

    let element = document.getElementById(`${url}`);
    if (url === "git") {
        gitUrl(element);
    } else if (url === "vk") {
        vkUrl(element);
    } else if (url === "insta") {
        instUrl(element)
    } else
        return function () {
            element.href = `https://alexeyabramov.github.io/${url}`;
        }
}

function gitUrl(e) {
    return e.href = "https://github.com/AlexeyAbramov";
}
function vkUrl(e) {
    return e.href = "https://vk.com/id20692837";
}
function instUrl(e) {
    return e.href = "https://instagram.com/al.abram0v";
}