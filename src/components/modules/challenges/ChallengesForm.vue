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
                            <div class="col-md-9">
                                <h2>Nuevo Reto</h2>
                                <div class="row">
                                    <div class="col-md-6">

                                        <div class="input-box">
                                            <h5>Nombre del Reto</h5>
                                            <el-input placeholder="Please input" v-model="input"></el-input>
                                        </div>

                                        <div class="input-box">
                                            <h5>Imagen representativa</h5>                                    
                                            
                                            <image-uploader 
                                              width="360px" 
                                              height="170px">
                                            </image-uploader>
                                                                                                                            
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        
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
                                        
                                    </div>                                    
                                </div>
                                <hr>

                                <div>
                                    <h4>Premios</h4>
                                    <div class="awards">
                                        <div class="row award">
                                            <div class="col-md-4">
                                                <div class="input-box">
                                                    <h5>Imagen representativa</h5>                                    
                                                    <image-uploader 
                                                      width="150px" 
                                                      height="160px">
                                                    </image-uploader>
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
                                            <div class="clearfix"></div>
                                            <hr>
                                        </div>

                                        <div class="row award">
                                            <div class="col-md-4">
                                                <div class="input-box">
                                                    <h5>Imagen representativa</h5>                                    
                                                    <image-uploader 
                                                      width="150px" 
                                                      height="160px">
                                                    </image-uploader>
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
                                            <div class="clearfix"></div>
                                            <hr>
                                        </div>
                                        <div style="text-align: center">
                                            <el-button type="default">Agregar premio</el-button>
                                        </div>
                                    </div>  

                                </div>    
                                <hr>

                                        <div class="input-box">
                                            <h5>Condiciones de uso</h5>
                                            <el-input type="textarea" :rows="4" placeholder="Please input"  v-model="textarea"></el-input>
                                        </div>                                        
                                
                            </div>

                            <div class="col-md-1"></div>

                            <div class="col-md-2" style="text-align: right; padding: 70px 0 0 0">                            
                                    <div style="position: fixed">
                                    <el-button type="primary" @click="dialogFormVisible = true">Guardar y Publicar</el-button>    
                                        <div class="clearfix"></div>
                                        <br>
                                    <el-button type="default" @click="navigateTo('challenges-list')" style="width:100%">Cancelar</el-button>
                                    </div>                                
                            </div>
                            <el-dialog title="Tu reto se verá asi" :visible.sync="dialogFormVisible">
                              aqui mostrar las imagenes con el celular en ambas interfaces
                              <span slot="footer" class="dialog-footer">
                                <div class="">¿Te gusta como ha quedado?</div>
                                <br>
                                <el-button @click="dialogFormVisible = false">No, continuar editando</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false">Si, publicar ahora</el-button>
                              </span>
                            </el-dialog>

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
