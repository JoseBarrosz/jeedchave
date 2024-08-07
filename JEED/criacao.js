document.addEventListener('DOMContentLoaded', () => {
    const modalidades = document.querySelectorAll('.modalidade');

    modalidades.forEach(modalidade => {
        modalidade.addEventListener('click', () => {
            // Remove a classe 'selected' de todas as modalidades
            modalidades.forEach(mod => mod.classList.remove('selected'));
            // Adiciona a classe 'selected' à modalidade clicada
            modalidade.classList.add('selected');
        });
    });

    document.getElementById('criar-campeonato').addEventListener('click', function() {
        // Verificar se todos os campos do formulário foram preenchidos
        var nomeCampeonato = document.getElementById('nome-campeonato').value;
        var dataHorario = document.getElementById('data-horario').value;
        var horaHorario = document.getElementById('hora-horario').value;
        var numeroEquipes = document.getElementById('numero-equipes').value;
        numeroEquipes = parseInt(numeroEquipes);
        
        // Verificar se uma modalidade foi selecionada
        var modalidadeSelecionada = document.querySelector('.modalidade.selected');

        if (!nomeCampeonato || !dataHorario || !horaHorario || isNaN(numeroEquipes) || numeroEquipes < 1 || numeroEquipes > 8) {
            alert('Por favor, preencha todos os campos do formulário corretamente.');
            return;
        }

        if (!modalidadeSelecionada) {
            alert('Por favor, selecione uma modalidade.');
            return;
        }

        var url;
        switch (numeroEquipes) {
            case 1:
                url = 'http://127.0.0.1:5500/login.html';
                break;
            case 2:
                url = 'http://127.0.0.1:5500/login.html';
                break;
            case 3:
                url = 'http://127.0.0.1:5500/login.html';
                break;
            case 4:
                url = 'http://127.0.0.1:5500/login.html';
                break;
            case 5:
                url = 'http://127.0.0.1:5500/login.html';
                break;
            case 6:
                url = 'http://127.0.0.1:5500/login.html';
                break;
            case 7:
                url = 'http://127.0.0.1:5500/login.html';
                break;
            case 8:
                url = 'http://127.0.0.1:5500/equipes8.html';
                break;
            default:
                alert('Número de equipes fora do intervalo permitido.');
                return;
        }

        window.location.href = url;
    });
});
