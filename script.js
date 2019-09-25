const git = currentUrl("git");
const vk = currentUrl("vk");
const insta = currentUrl("inst");
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
    } else if (url === "inst") {
        instUrl(element)
    } else return function() {element.href = `/${url}`;}

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