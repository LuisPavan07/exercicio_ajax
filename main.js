$(document).ready(function() {
    const nameElement = $('#name');
    const usernameElement = $('#username');
    const linkElement = $('#link');
    const avatarElement = $('#avatar');
    const reposElement = $('#repos');
    const followersElement = $('#followers');
    const followingElement = $('#following');

    fetch('https://api.github.com/users/luispavan07')
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        nameElement.text(json.name);
        usernameElement.text(json.login);
        linkElement.attr('href', json.html_url);
        avatarElement.attr('src', json.avatar_url);
        followersElement.text(json.followers);
        followingElement.text(json.following);
        reposElement.text(json.public_repos);
    })
    .catch(function(erro) {
        alert("Ocorreu um erro ao buscar dados do Github.");
    })
    .finally(function() {
        console.log("Fim.");
    })
})