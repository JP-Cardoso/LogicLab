// object literal
const p1 = {
  nome: "Lucas",
  idade: 20
}

// factory function
function Pessoa({ nome, idade }) { 
  return {
    nome,
    idade,
    andar: () => {
      console.log(`${nome} está andando`)
    }
  }
}

const pessoa1 = Pessoa({nome: "Goth", idade: 17});
const pessoa2 = Pessoa({nome: "Anna", idade: 17});2
const pessoa3 = Pessoa({nome: "Van Gog", idade: 17});
pessoa1.andar();
pessoa2.andar();
pessoa3.andar();


// constructor function
function Animal({nome, classe}) {
  this.nome = nome,
  this.classe = classe,
  this.andar = () => {
    console.log(`O animal ${this.nome} está andando`)
  }
};

const dog = new Animal({nome: "dog", classe:"cachorro"});
const cat = new Animal({nome: "gatin", classe:"felino"});

dog.andar();
cat.andar();