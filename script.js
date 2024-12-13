document.querySelectorAll('.game-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        document.getElementById('sharingan-audio').play(); // Toque do som do Sharingan

        // Animação do Kamui - Efeito de absorção dos ícones para dentro do olho
        document.getElementById('kamui-game-container').style.animation = "icons-absorb 3s forwards";

        // Animação de absorção para o olho (Kamui)
        setTimeout(() => {
            // Redireciona para o jogo depois da animação
            window.location.href = icon.id === 'subway-surfers' ? 'https://subway-surfers-link.com' : 'https://level-devil-link.com';
        }, 3000);
    });
});