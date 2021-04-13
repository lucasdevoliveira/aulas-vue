<template>
  <div class="container">
    <div class="input-controls">
      <label>{{label}}</label>
      <input @focus="setOpenList" @keyup="buscar" v-model="value" type="text" />
    </div>
    <div v-if="abertaLista" class="list">
      <ul>
        <li 
          v-for="item in listaComBusca" 
          :key="item.nome"
          @click="ItemSelecionado(item)">
          {{item.nome}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: ['label', 'lista'],
    data: () => {
        return {
            value: '',
            abertaLista: false,
            listaComBusca: []
        }
    },
    methods: {
      setOpenList() {
        this.abertaLista = true
      },
      setCloseList() {
        this.abertaLista = false
      },
      ItemSelecionado(valor) {

        this.value = valor.nome

        this.$emit('itemSelecionado', valor)

        this.setCloseList()
      },
      buscar() {
        const prov = this.lista.map(item => {
          const regex = new RegExp(this.value, 'g');
          if (item.nome.match(regex)) {
            return {
              nome: item.nome,
              valor: item.valor
            }
          }
          
        })

        this.listaComBusca = prov.filter(item => item != undefined)
      }
    }
  }
</script>

<style scoped>

  .container {
    position: relative;
  }

  .input-controls {
    display: flex;
    flex-direction: column;
  }

  .input-controls label {
    color: #fff;
  }

  .input-controls input {
    padding: 10px 15px;
  }

  .list {
    position: absolute;
    background: #fff;
    width: 100%;
  }

  .list li {
    padding: 5px;
    cursor: pointer;
  }

  .list li:hover {
    background: #f2f2f2;
  }

</style>
