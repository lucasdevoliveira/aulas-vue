<template>
  <div id="app">
    <Select 
      label="Estados" 
      :lista="respostaDoServidor" 
      @itemSelecionado="itemSelecionado"
      />

    <Select v-if="respostaDoServidorCidades" label="Cidades" :lista="respostaDoServidorCidades" />
  </div>
</template>

<script>
import Select from './components/Select.vue'

export default {
  name: 'App',
  components: {
    Select
  },
  methods: {
    itemSelecionado(data) {
      console.log(data)
      fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${data.valor}/municipios`)
        .then(response => response.json())
        .then(response => {
          console.log(response)
          const teste = response.map(item => {
            return {
              nome: item.nome,
              valor: item.id
            }
          })

          this.respostaDoServidorCidades = teste;
        })
    }
  },
  data: () => {
        return {
            respostaDoServidor: [],
            respostaDoServidorCidades: []
        }
    },
    beforeCreate() {

      fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(response => response.json())
        .then(response => {

          const teste = response.map(item => {
            return {
              nome: item.nome,
              valor: item.sigla
            }
          })

          this.respostaDoServidor = teste;
        })

    }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    background: #090c10;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
