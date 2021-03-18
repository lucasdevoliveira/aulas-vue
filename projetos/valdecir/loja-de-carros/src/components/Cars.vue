<template>
    <div class="content">
        <div class="container">
            <div class="search">
                buscador
            </div>
            <div class="list">
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
            </div>
        </div>
    </div>  
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

  .container {
    height: auto;
    width: 1400px;
    margin: 0 auto;
    display: flex;
  }

  .search {
    height: 600px;
    width: 380px;
    background: #ccc;
    margin: 0 20px 0 0;
  }

  .list {
      width: 100%;
      height: auto;
      background: #ccc;
      display: flex;
      flex-wrap: wrap;
  }

  .item {
    height: 300px;
    width: 251px;
    background: #666;
    margin: 10px;
  }

</style>