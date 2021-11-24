import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-app';

  valoresRecebidos: string [] = [];
  inscricaoObservable!: Subscription;
  //teste: string;
  
  ngOnInit() {
    const observable = this.novoObservable();

    this.inscricaoObservable = observable.subscribe(
      valor => {
        this.valoresRecebidos.push(valor);
      },

      erro => {
        this.valoresRecebidos.push(erro);
      }, 
      () => {
        this.valoresRecebidos.push("O Observable foi encerrado");
      });
  }

  novoObservable(): Observable<string> {
    return new Observable<string>(observador => {
      setTimeout(() => {
        observador.next("Primeiro timeout")
      }, 2000);

      setTimeout(() => {
        observador.next("Segundo timeout")
      }, 3000);

      setTimeout(() => {
        observador.next("Terceiro timeout")
      }, 5000);

      setTimeout(() => {
        observador.next("Quarto timeout")
      }, 4000);
    })
  }

  ngOnDestroy() {
    if (this.inscricaoObservable ) {
      this.inscricaoObservable.unsubscribe();
    }
  }


  // //NgIf
  // exibirNome: boolean = false;

  // alterar() {
  //   this.exibirNome = !this.exibirNome;
  // }

  // //NgFor
  // cabecalho = 'Exemplo de diretiva NgFor';
  // times = ['São Paulo', 'Flamengo', 'Palmeiras', 'Santos'];
  // time = this.times[0];

  // //NgSwitch
  // selection: string = 'nome';
  // options = ['nome', 'endereco', 'telefone', 'outros']

  

}
