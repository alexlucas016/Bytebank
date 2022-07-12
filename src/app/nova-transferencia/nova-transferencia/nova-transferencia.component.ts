import { Transferencia } from './../../module/transferencias.module';
import { TransferenciaService } from './../../service/transferencia.service';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) { }

  transferir(){
    console.log('Solicitada nova transferência')

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    },
    (error) => console.error(error)
    );

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }



  ngOnInit(): void {
  }

}
