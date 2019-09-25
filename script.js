const git = currentUrl("git");
const vk = currentUrl("vk");
const portfolio = currentUrl();
const twitch = currentUrl("tw-app");
const goodCarton = currentUrl("good-carton");


function currentUrl(url) {
    let element = document.getElementsByClassName("kek")[1];
    return function () {
        if (url === "git") {
            gitUrl(element);
        } else if (url === "vk") {
            vkUrl(element);
        } else
        return element.href = `https://alexeyabramov.github.io/${url}`;
    }
}

function gitUrl(e) {
    return e.href = "https://github.com/AlexeyAbramov";
}

function vkUrl(e) {
    return e.href = "https://vk.com/id20692837";
}