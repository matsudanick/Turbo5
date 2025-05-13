document.addEventListener('DOMContentLoaded', function() {
        const audio = document.getElementById('bgAudio');
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // Cria botão de ativação se autoplay for bloqueado
                const btn = document.createElement('button');
                btn.innerHTML = 'Ativar Som';
                btn.style.position = 'fixed';
                btn.style.bottom = '20px';
                btn.style.right = '20px';
                btn.style.zIndex = '1000';
                btn.style.padding = '10px 20px';
                btn.style.backgroundColor = 'red';
                btn.style.color = 'white';
                btn.style.border = 'none';
                btn.style.borderRadius = '5px';
                btn.style.cursor = 'pointer';
                
                btn.addEventListener('click', () => {
                    audio.play();
                    btn.remove();
                });
                
                document.body.appendChild(btn);
            });
        }
    });