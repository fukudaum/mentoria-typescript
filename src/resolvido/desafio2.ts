// Como podemos melhorar o esse código usando TS? 
enum Job {
    "Atriz",
    "Padeiro"
}

interface IPerson {
    nome: string,
    idade: number,
    profissao: Job,
}

let pessoa1: IPerson = {
    nome: "maria",
    idade: 29,
    profissao: Job.Atriz,
};

let pessoa2: IPerson = {
    nome: "roberto",
    idade: 19,
    profissao: Job.Padeiro,
}

let pessoa3:IPerson = {
    nome: "laura",
    idade: 32,
    profissao: Job.Atriz,
};

let pessoa4:IPerson = {
    nome: "carlos",
    idade: 19,
    profissao: Job.Padeiro,
}