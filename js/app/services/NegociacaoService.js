class NegociacaoService {

    constructor() {

        this._http = new HttpService();

    }

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {

            /*
                0: requisição ainda não iniciada

                1: conexão com o servidor estabelecida

                2: requisição recebida

                3: processando requisição

                4: requisição concluída e a resposta esta pronta
            */

            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(error => {
                    console.log(error);
                    reject('Não foi possível obter as negociações da semana')
                });
        });
    }

    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(error => {
                    console.log(error);
                    reject('Não foi possível obter as negociações da semana anterior')
                });
        });
    }


    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            this._http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(error => {
                    console.log(error);
                    reject('Não foi possível obter as negociações da semana retrasada')
                });
        });
    }

}