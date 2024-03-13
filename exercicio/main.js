$(document).ready(function () {
    const githubUserName = "SandersonGit";
    const githubAPI = `https://api.github.com/users/${githubUserName}`;

    // fillNumbers(userData) atualiza elementos HTML com dados do usuário, como repositórios, seguidores e seguindo, usando propriedades do objeto userData obtido da API do GitHub. 
    function fillNumbers(userData) {
        $('.repos-count').text(userData.public_repos);
        $('.followers-count').text(userData.followers);
        $('.following-count').text(userData.following);
    }


    // O bloco `try` inicia uma requisição AJAX à API do GitHub. No sucesso, atualiza elementos HTML com dados do usuário, como avatar, nome, e link do GitHub. Em caso de erro na requisição, uma exceção é lançada e capturada, exibindo a mensagem de erro no console. Essa abordagem ajuda a tratar falhas na comunicação com a API, garantindo uma experiência de usuário mais robusta.
    
    try {
        $.ajax({
            url: githubAPI,
            method: 'GET',
            success: function (data) {
                $('.profile-avatar').attr('src', data.avatar_url);
                $('.profile-name').text(data.name);
                $('.profile-username').text(`@${data.login}`);
                fillNumbers(data);
                $('.profile-link').attr('href', data.html_url);
            },
            error: function(textStatus){
                throw new Error('Erro na requisição para a API do Github' + textStatus);
            },

        });
        

    }
    catch (error) {
        console.error(error.message);
    }
    
})

