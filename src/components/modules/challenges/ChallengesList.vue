<template>
    <transition name="el-zoom-in-top">
        <div class="content-wrapper">
       <!-- Content Header (Page header) -->
        
        
        <section class="content-header">
            
            <h1>Mis Retos
            <!--<small> It's all start from here <i class="ti-heart"></i><i class="ti-export"></i><i class="ti-printer"></i></small> -->
            </h1>
            <ol class="breadcrumb">
                <li><router-link to="/"> <i class="ti-home"></i></router-link></li>                
                <li class="active">Mis Retos</li>
            </ol>
            
        </section>
        
            <!-- Main content -->
            <section class="content">
                <!--
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">Lista de Retos</h3>
                        <div class="box-tools pull-right">
                            <!--
                            <button type="button" data-widget="collapse" data-toggle="tooltip" title="Collapse" class="btn btn-box-tool"><i class="ti-minus"></i></button>
                            <button type="button" data-widget="remove" data-toggle="tooltip" title="Remove" class="btn btn-box-tool"><i class="ti-close"></i></button>
                        </div>
                    </div>
                            -->
                    <!-- <div class="box-body" style="min-height:400px;">   -->
                    <!-- <div class="box-body no-pad padding-fifthin" style="display: block;"> -->

                        <div class="pull-left">
                            <span>viendo los</span>
                            <el-select v-model="filterBy" placeholder="Select">                            
                                <el-option label="proximos retos" value="next_challenges"> </el-option>
                                <el-option label="retos pasados" value="past_challenges"> </el-option>
                            </el-select>
                        </div>
                        <div class="pull-right">
                            <el-button type="primary" @click="navigateTo('challenges-form')">Crear Reto</el-button>
                        </div>
                        <div class="clearfix"></div>
                        <hr>
                        <br>


                        <div class="row">
                            <div class="col-md-3 col-xl-6" style="margin-botton:20px">
                                <div class="card1">
                                    <div class="cover" style="background-image: url(https://source.unsplash.com/category/food/800x600)">
                                        <label> <i class="ti-medall-alt"></i> <font>Ahora Mismo</font> </label>                                       
                                    </div>
                                    <div class="info">
                                        <span class="title">En dos lineas Nombre del Reto</span>
                                        <span class="period">del 3/10/17 11:00 al 3/10/17 14:00</span>
                                        <div class="stats">
                                            <span class="stat"><i class="ti-star"></i> 20</span>
                                            <span class="stat"><i class="ti-game"></i> 50</span>
                                        </div>
                                        <el-button>Ver</el-button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-xl-6" style="margin-botton:20px">
                                <div class="card1">
                                    <div class="cover" style="background-image: url(https://source.unsplash.com/category/food/800x600)">
                                        <label> <i class="ti-medall-alt"></i> <font>Ahora Mismo</font> </label>
                                        
                                    </div>
                                    <div class="info">
                                        <span class="title">En dos lineas Nombre del Reto</span>
                                        <span class="period">del 3/10/17 11:00 al 3/10/17 14:00</span>
                                        <div class="stats">
                                            <span class="stat"><i class="ti-star"></i> 20</span>
                                            <span class="stat"><i class="ti-game"></i> 50</span>
                                        </div>
                                        <el-button>Ver</el-button>
                                    </div>
                                </div>
                            </div>


                            <div class="col-md-3 col-xl-6">
                                <div class="card1">
                                    <div class="cover" style="background-image: url(https://source.unsplash.com/category/food/800x600)">
                                        
                                        
                                    </div>
                                    <div class="info">
                                        <span class="title">En dos lineas Nombre del Reto</span>
                                        <span class="period">del 3/10/17 11:00 al 3/10/17 14:00</span>
                                        <div class="stats">
                                            <span class="stat"><i class="ti-star"></i> 20</span>
                                            <span class="stat"><i class="ti-game"></i> 50</span>
                                        </div>
                                        <el-button>Ver/Editar</el-button>
                                    </div>
                                </div>
                            </div>


                            <div class="col-md-3 col-xl-6">
                                <div class="card1">
                                    <div class="cover" style="background-image: url(https://source.unsplash.com/category/food/800x600)">        
                                        <label class="done"> <i class="ti-medall-alt"></i> <font>Finalizado</font> </label>                                                                           
                                    </div>
                                    <div class="info">
                                        <span class="title">Nombre en una linea</span>
                                        <span class="period">del 3/10/17 11:00 al 3/10/17 14:00</span>
                                        <div class="stats">
                                            <span class="stat"><i class="ti-star"></i> 20</span>
                                        </div>
                                        <el-button>Ver</el-button>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-xl-6">
                                <div class="card1">
                                    <div class="cover" style="background-image: url(https://source.unsplash.com/category/food/800x600)">                                                                           
                                    </div>
                                    <div class="info">
                                        <span>Nombre del Reto</span>
                                        
                                        
                                    </div>
                                </div>
                            </div>

                        </div>


                    <!--</div>
                </div>
                 -->
            </section>
            <!-- /.content -->
        </div>
    </transition>
</template>
<script>
  export default {
    name: 'BlankPage',
    data () {
      return {
        filterBy: 'next_challenges'
      }
    },
    methods: {
      navigateTo: function (nav) {
        this.$router.push({name: nav})
      }
    }
  }
</script>
