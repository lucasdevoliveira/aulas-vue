<template>
    <b-container>
        <b-row>
            <b-col class="search" md="3">
                menu
            </b-col>
            <b-col class="list" md="9">
                <div class="item">
                    carro 1
                </div>
                <div class="item">
                    carro 2
                </div>
                <div class="item">
                    carro 3
                </div>
                <div class="item">
                    carro 4
                </div>
                <div class="item">
                    carro 5
                </div>
                <div class="item">
                    carro 6
                </div>
                <div class="item">
                    carro 7
                </div>
                <div class="item">
                    carro 8
                </div>
                <div class="item">
                    carro 9
                </div>
                <div class="item">
                    carro 10
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

    export default {
        name: 'Cars'   
    }

</script>

<style scoped>
  .content {
    width: 100%;
    margin: 20px 0 0 0
  }

  .search {
    background: #444;
    height: 400px;
  }

  .list {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
  }

  .item {
    height: 300px;
    width: 251px;
    background: #222;
    margin: 10px;
  }

</style>