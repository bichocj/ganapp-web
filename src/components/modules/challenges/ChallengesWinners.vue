<template>
    <transition name="el-zoom-in-top">
        <div class="content-wrapper">
       <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>Nombre del Reto</h1>
            <ol class="breadcrumb">
                <li><router-link to="/"> <i class="ti-home"></i></router-link></li>                
                <li><router-link :to="{name:'challenges-list'}">Mis Retos</router-link></li>
                <li class="active">Reto: Nombre del Reto</li>
            </ol>
        </section>
  
            <!-- Main content -->
            <section class="content">
                <div class="box">
                    <!-- <div class="box-header with-border">
                        <h3 class="box-title">Nuevo Reto</h3>                        
                    </div>
                    -->
                    <div class="box-body" style="min-height:400px;">
                        <div class="row">
                            <div class="col-md-9">
                                <h2>Nombre del Reto</h2>
                                <span><i class="ti-star"></i> 4 personas siguiendo este reto</span> 
                                <span><i class="ti-game"></i> 200 personas jugaron este reto</span> 
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        Descripción del Reto
                                    </div>
                                    <div class="col-md-9">
                                        lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit amet consectetur adipiscing elit
                                    </div>
                                </div>                                
                                <div class="row">
                                    <div class="col-md-3">
                                        Realizado del
                                    </div>
                                    <div class="col-md-9">
                                        10/11/17 12:20  al 11:11:17 13:00
                                    </div>
                                </div>
                                <hr>
                                <div>
                                    <h4>Ganadores</h4>                                
                                    <div class="winners">
                                        <div class="winner-award">
                                            <div class="row header">
                                                <div class="col-md-6">Nombre del premio</div>
                                                <div class="col-md-6" style="text-align: right">
                                                    <span>Cantidad: 1</span>
                                                    <span>Entregados 1</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3 winner-award-info">
                                                    <img src="https://placeimg.com/150/150/tech">
                                                </div>
                                                <div class="col-md-9">
                                                    <div class="col-md-4 winner-award-person">
                                                        <img src="https://placeimg.com/150/150/people" class="img-circle ">
                                                        <span>Nombre del usuario</span>
                                                        <span>Teléfono: 95866981</span>                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="winner-award">
                                            <div class="row header">
                                                <div class="col-md-6">Nombre del premio</div>
                                                <div class="col-md-6" style="text-align: right">
                                                    <span>Cantidad: 1</span>
                                                    <span>Entregados 1</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3 winner-award-info">
                                                    <img src="https://placeimg.com/150/150/tech">
                                                </div>
                                                <div class="col-md-9">
                                                    <div class="col-md-4 winner-award-person">
                                                        <img src="https://placeimg.com/150/150/people" class="img-circle ">
                                                        <span>Nombre del usuario</span>
                                                        <span>Teléfono: 95866981</span>                                                       
                                                    </div>
                                                    <div class="col-md-4 winner-award-person">
                                                        <img src="https://placeimg.com/150/150/people" class="img-circle ">
                                                        <span>Nombre del usuario</span>
                                                        <span>Teléfono: 95866981</span>                                                       
                                                    </div>
                                                    <div class="col-md-4 winner-award-person">
                                                        <img src="https://placeimg.com/150/150/people" class="img-circle ">
                                                        <span>Nombre del usuario</span>
                                                        <span>Teléfono: 95866981</span>                                                       
                                                    </div>
                                                    <div class="col-md-4 winner-award-person">
                                                        <img src="https://placeimg.com/150/150/people" class="img-circle ">
                                                        <span>Nombre del usuario</span>
                                                        <span>Teléfono: 95866981</span>                                                       
                                                    </div>
                                                    <div class="col-md-4 winner-award-person">
                                                        <img src="https://placeimg.com/150/150/people" class="img-circle ">
                                                        <span>Nombre del usuario</span>
                                                        <span>Teléfono: 95866981</span>                                                       
                                                    </div>
                                                    <div class="col-md-4 winner-award-person">
                                                        <img src="https://placeimg.com/150/150/people" class="img-circle ">
                                                        <span>Nombre del usuario</span>
                                                        <span>Teléfono: 95866981</span>                                                       
                                                    </div>
                                                    <div class="col-md-4 winner-award-person">
                                                        <img src="https://placeimg.com/150/150/people" class="img-circle ">
                                                        <span>Nombre del usuario</span>
                                                        <span>Teléfono: 95866981</span>                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>                                    
                            </div>

                            <div class="col-md-1"></div>

                            <div class="col-md-2" style="text-align: right; padding: 70px 0 0 0">                            
                                    <div style="position: fixed">                                    
                                    <el-button type="default" @click="navigateTo('challenges-list')" style="width:100%">Regresar a <br> lista de retos</el-button>
                                    </div>                                
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <!-- /.content -->
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'ChallengesWinners',
    data: function () {
      return {
        fileList: [],
        dialogFormVisible: false
      }
    },
    methods: {
      handleRemove: function (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview: function (file) {
        console.log(file)
      },
      navigateTo: function (nav) {
        this.$router.push({name: nav})
      }
    }
  }
</script>
<style lang="scss">
    .el-upload__input{
        display: none!important;
    }
    .el-dialog__footer{
        text-align: center!important;
    }
    .image-uploader {
      position: absolute;
      margin: 0px 11px;
      left: 0;
    }
</style>
