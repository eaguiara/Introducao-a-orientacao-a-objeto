function Carro(){
 
    this.marca = "Fiat";
    this.nome = "Classic";
    this.ano = "2009";
    this.potencia = "110cv";
    this.VelocidadeAtual = 0;
    
    this.ligar = function(){
        console.log( this.nome +' agora esta ligado...');
    }

    this.andar = function(velocidade){
        console.log('Carro andando...');
        this.VelocidadeAtual = this.VelocidadeAtual + velocidade;
    }

    this.parar = function(){
        console.log('Carro parado!');
        this.VelocidadeAtual = 0;
    }
}


var carro1 = new Carro();
carro1.potencia = "180cv";


var carro2 = new Carro();
carro2.ano = "2015";
carro2.nome = "Saveiro";
carro2.potencia = "90cv";
