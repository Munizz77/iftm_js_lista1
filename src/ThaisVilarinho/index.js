const users = [
    { id: 1, name: 'Lucas', lastName: 'Moura', createDate: '2020-10-09' },
    { id: 5, name: 'Son', lastName: 'Goku', createDate: '2019-08-07' },
    { id: 8, name: 'Mestre', lastName: 'Yoda', createDate: '2015-10-10' },
];

const resolucaoExercicio01 = document.querySelector('.exercicio01');
const resolucaoExercicio02 = document.querySelector('.exercicio02');
const caixaSelecaoResolucao = document.querySelector('#selecionaResolucao');
const resolucaoExercicio03 = document.querySelector('.exercicio03');
const resolucaoExercicio04 = document.querySelector('.exercicio04');
const resolucaoExercicio05 = document.querySelector('.exercicio05');


const exercicio1 = (elementoHtml) => {
    

    elementoHtml.innerHTML = '';

    const tvShow = {
        name: "Cobra Kai",
        platform: 'Netflix',
        details: {
            seasons: 2,
            episodes: 10,
        }
    };

    const resultado = ({name, platform, details: {seasons, episodes}} ) => {
        return `Terminei de assistir a série ${name} na ${platform} que contém ${seasons} temporadas (${episodes} episódios cada)`;
    };

    let html = `${resultado(tvShow)}`;
    elementoHtml.innerHTML = html;
};

const exercicio2 = (elementoHtml, caixaSelecaoResolucao) => {

    class Matematica {

        static gerarPares(x, y) {
            if (x % 2 !== 0){
                x++;
            }
            imprimirIntervalo(x, y);
        }
        
        static gerarImpares(x, y) { 
            if (x % 2 === 0){
                x++;
            }
            imprimirIntervalo(x, y);
        }
       
        static somarTudo(...params) {
            return(params.reduce((total, seguinte) => total + seguinte));
        }
        
        static descartarOsDoisPrimeiros(meuVetor) {
            const [primeiro, segundo, ...resto] = meuVetor;
            return resto;

        }
        
        static juntarArrays(array1, array2) {
            const array3 = [...array1, ...array2];
            return array3;
        }

    }



    function imprimirIntervalo(x, y){
        while(x <= y){
            let html = `<span>${x}</span><br>`
            elementoHtml.insertAdjacentHTML('beforeend', html);
            x += 2;
        }
    }

    //console.log();
    //console.log(Matematica.juntarArrays([4, 2], [1, 2, 3])); // retorna [4, 2, 1, 2, 3];

    caixaSelecaoResolucao.addEventListener('change', (event)=>{ 
        elementoHtml.innerHTML = '';
        const selecao = event.target.value;
        if (selecao === 'gerarPares'){
            Matematica.gerarPares(5,200);
        } else if (selecao === 'gerarImpares'){
            Matematica.gerarImpares(1,100);
        } else if (selecao === 'somarOp1'){
            const resultado = Matematica.somarTudo(1, 2, 3, 4);
            let html = `<span>${resultado}</span>`;
            elementoHtml.innerHTML = html;
        } else if (selecao === 'somarOp2'){
            const resultado = Matematica.somarTudo(1, 2, 3, 5, 10, 25, 100);
            let html = `<span>${resultado}</span>`;
            elementoHtml.innerHTML = html;
        } else if (selecao === 'descartarOsDoisPrimeiros'){
            const resultado = Matematica.descartarOsDoisPrimeiros([100, -5, 10, 20, 3, 9]);
            let html = `<span>${resultado}</span>`;
            elementoHtml.innerHTML = html;
        } else if (selecao === 'juntarArrays'){
            const resultado = Matematica.juntarArrays([4, 2], [1, 2, 3]);
            let html = `<span>${resultado}</span>`;
            elementoHtml.innerHTML = html;
        }
        
    })
};

const exercicio3 = (elementoHtml) => {

    elementoHtml.innerHTML = '';

    const livro = {
        titulo: 'O chamado do Cuco',
        preco: 29.90,
        autor: 'Robert Galbraith'
    };

    const spreadOperator = (livro) => {
        const copiaAlteradaLivro = ({...livro, autor: ' J. K. Rowling'});
        return copiaAlteradaLivro;
      }

    const book = spreadOperator(livro)
    let html = `<span> título: ${book.titulo} </span><br>
                <span> preco: ${book.preco} </span><br>
                <span> autor: ${book.autor} </span>
    `;
    elementoHtml.innerHTML = html;
};

const exercicio4 = (users, elementoHtml) => {

    elementoHtml.innerHTML = '';

    const formatUsers = users.map((item, index)=> {
        let data = item.createDate.split('-');
        let dia = data[2];
        let mes = data[1];
        let ano = data[0];
        return {
                fullname: `${item.name} ${item.lastName}`,
                createDate: `${dia}/${mes}/${ano % 100}`
        }
    });

    for (let i = 0; i < formatUsers.length; i++){
        let html = `
            <p>{ fullName: ${formatUsers[i].fullname}, createDate: ${formatUsers[i].createDate} }</p>
        `;
        elementoHtml.insertAdjacentHTML('beforeend', html);
    }
};

const exercicio5 = (users, elementoHtml) => {

    elementoHtml.innerHTML = '';
    const resultadoBusca = users.find(item => {
        return item.id === 10;
    });
    
    if (resultadoBusca){
        elementoHtml.innerHTML = `<p>${'Id foi encontrado'}</p>`;
    } else {
        elementoHtml.innerHTML = `<p>${'Id não foi encontrado'}</p>`;
    }
    
};


exercicio1(resolucaoExercicio01);
exercicio2(resolucaoExercicio02, caixaSelecaoResolucao);
exercicio3(resolucaoExercicio03);
exercicio4(users, resolucaoExercicio04);
exercicio5(users, resolucaoExercicio05);