<template>
    <transition name="el-zoom-in-top">
        <div class="content-wrapper">
       <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>Nuevo Reto</h1>
            <ol class="breadcrumb">
                <li><router-link to="/"> <i class="ti-home"></i></router-link></li>                
                <li><router-link :to="{name:'challenges-list'}">Mis Retos</router-link></li>
                <li class="active">Nuevo Reto</li>
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
                            <div class="col-md-4">
                                <h2>Nuevo Reto</h2>
                                <div class="input-box">
                                    <h5>Nombre del Reto</h5>
                                    <el-input placeholder="Please input" v-model="input"></el-input>
                                </div>

                                <div class="input-box">
                                    <h5>Descripción del Reto</h5>
                                    <el-input type="textarea" :rows="4" placeholder="Please input"  v-model="textarea"></el-input>
                                </div>

                                <div class="input-box">
                                    <h5>Activo</h5>
                                    <div class="row" style="font-size:12px">
                                        <div class="col-md-3">
                                            desde el:                                            
                                        </div>
                                        <div class="col-md-9">
                                            <el-input type="datetime-local" placeholder="Please input" v-model="df"></el-input>
                                        </div>
                                    </div>
                                    <br>
                                    <div class="row" style="font-size:12px">
                                        <div class="col-md-3">
                                            hasta el:
                                            </div>
                                        <div class="col-md-9">
                                            <el-input  type="datetime-local" placeholder="Please input" v-model="dt"></el-input>
                                        </div>
                                    </div>
                                </div>

                                <div class="input-box">
                                    <h5>Imagen representativa</h5>                                    
                                    <el-upload
                                      action="https://jsonplaceholder.typicode.com/posts/"
                                      list-type="picture-card"
                                      :on-preview="handlePictureCardPreview"
                                      :on-remove="handleRemove">
                                      <i class="el-icon-plus"></i>
                                    </el-upload>                                                                                    
                                </div>
                                
                                <div class="input-box">
                                    <h5>Condiciones de uso</h5>
                                    <el-input type="textarea" :rows="4" placeholder="Please input"  v-model="textarea"></el-input>
                                </div>



                            </div>
                            <div class="col-md-5">
                                <h4>Premios</h4>
                                <div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="input-box">
                                                <h5>Imagen representativa</h5>                                    
                                                <el-upload
                                                  action="https://jsonplaceholder.typicode.com/posts/"
                                                  list-type="picture-card"
                                                  :on-preview="handlePictureCardPreview"
                                                  :on-remove="handleRemove">
                                                  <i class="el-icon-plus"></i>
                                                </el-upload>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="input-box">
                                                <h5>Nombre del Premio</h5>
                                                <el-input placeholder="Please input" v-model="input"></el-input>
                                            </div>
                                            <div class="input-box">
                                                <h5>Cantidad </h5>
                                                <el-input placeholder="Please input" v-model="input"></el-input>
                                            </div>

                                            Este premio se aplica al los mejores 5 concursantes
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <el-button type="primary">Guardar y Publicar</el-button>
                                <el-button type="default">Cancelar</el-button>
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
    name: 'ChallengesForm',
    data: function () {
      return {
        fileList: []
      }
    },
    methods: {
      handleRemove: function (file, fileList) {
        console.log(file, fileList)
      },
      handlePreview: function (file) {
        console.log(file)
      }
    }
  }
</script>
<style lang="scss">
    .el-upload__input{
        display: none!important;
    }
</style>

