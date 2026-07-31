import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from './item'

@Component({
  selector: 'app-lista-produtos',
  imports: [ FormsModule ],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  descricao_produto : string = 'valor'
  valor_unitario? : number = 0.0
  listaItens : Item[] =[]
  

  addItem(){
    //INSTANCIA DA CLASSE ITEM PASSANDO OS PARAMETROS DO CONSTRUTOS
    //let item = new Item (this.descricao_produto, this.valor_unitario)
    //INSTÂNCIA DA CLASSE ITEM (CRIANDO O OBJETO item)
    let item = new Item()
    item.idProduto = this.listaItens.length + 1
    item.descricaoProduto = this.descricao_produto
    item.valorUnitario = this.valor_unitario

    this.listaItens.push(item)
    //LIMPANDO AS PROPRIEDADES DA CLASSE
    this.descricao_produto = ''
    this.valor_unitario = 0.0
  }

  

}
