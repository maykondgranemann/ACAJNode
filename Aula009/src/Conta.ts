export class Conta{
    private _agencia:string;
    private _numero:string;
    protected _saldo:number;
    private _cliente:string;
    

    get agencia():string{
        return this._agencia;
    }    
    set agencia(ag:string){
        console.log('Acessando o metodo como se fosse uma variavel');
        this._agencia = ag;
    }

    set numero(numero:string){
        this._numero;
    }
    get numero():string{
        return this._numero;
    }

    set cliente(cliente:string){
        this._cliente;
    }
    get cliente():string{
        return this._cliente;
    }

    get saldo():number{
        return this._saldo;
    }

    depositar(valor:number):void{        
        this._saldo += valor;
    }

    sacar(valor:number):string{
        if(this._saldo > valor){
            this._saldo -= valor;
            return 'saque executado';
        }
        return 'saldo insuficiente';
    }
}       