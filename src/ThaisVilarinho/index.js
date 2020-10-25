const users = [
    { id: 1, name: 'Lucas', lastName: 'Moura', createDate: '2020-10-09' },
    { id: 5, name: 'Son', lastName: 'Goku', createDate: '2019-08-07' },
    { id: 8, name: 'Mestre', lastName: 'Yoda', createDate: '2015-10-10' },
];

const resolucaoExercicio01 = document.querySelector('.exercicio01');
const resolucaoExercicio02A = document.querySelector('.gerarPares');
const resolucaoExercicio02B = document.querySelector('.gerarImpares');
const resolucaoExercicio02C = document.querySelector('.somarTudoOp01');
const resolucaoExercicio02D = document.querySelector('.somarTudoOp02');
const resolucaoExercicio02E = document.querySelector('.descartarOsDoisPrimeiros');
const resolucaoExercicio02F = document.querySelector('.juntarArrays');
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

const exercicio2 = (resolucaoExercicio02A, resolucaoExercicio02B, resolucaoExercicio02C, resolucaoExercicio02D, resolucaoExercicio02E, resolucaoExercicio02F) => {

    class Matematica {

        static gerarPares(x, y) {
            if (x % 2 !== 0){
                x++;
            }
            while(x <= y){
                let html = `<span>${x}</span><br>`
                resolucaoExercicio02A.insertAdjacentHTML('beforeend', html);
                x += 2;
            }
        }
        
        static gerarImpares(x, y) { 
            if (x % 2 === 0){
                x++;
            }
            while(x <= y){
                let html = `<span>${x}</span><br>`
                resolucaoExercicio02B.insertAdjacentHTML('beforeend', html);
                x += 2;                
            }
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

    Matematica.gerarPares(5, 200);
    Matematica.gerarImpares(1, 100);
    resolucaoExercicio02C.innerHTML = `<span>${Matematica.somarTudo(1, 2, 3, 4)}</span>`;
    resolucaoExercicio02D.innerHTML = `<span>${Matematica.somarTudo(1, 2, 3, 5, 10, 25, 100)}</span>`;    
    resolucaoExercicio02E.innerHTML = `<span>${Matematica.descartarOsDoisPrimeiros([100, -5, 10, 20, 3, 9])}</span>`;    
    resolucaoExercicio02F.innerHTML = `<span>${Matematica.juntarArrays([4, 2], [1, 2, 3])}</span>`;    

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
exercicio2(resolucaoExercicio02A, resolucaoExercicio02B, resolucaoExercicio02C, resolucaoExercicio02D, resolucaoExercicio02E, resolucaoExercicio02F);
exercicio3(resolucaoExercicio03);
exercicio4(users, resolucaoExercicio04);
exercicio5(users, resolucaoExercicio05);