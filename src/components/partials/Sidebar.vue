<template>
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <div>
            <section class="sidebar">
                <!-- /.search form -->
                <!-- Sidebar user panel -->
                <div class="user-panel">
                    <div class="image"> <img src="/static/img/avatar2.png" class="img-circle" alt="User Image"> </div>
                    <div class="info">
                        <p>Buen día, Matirasa</p>
                        <br>
                        <!-- <p><small>You haven,t miss any task this week!</small></p> -->
                        <div> 
                            <!--
                            <a href="#">
                                <i class="ti-panel"></i><small>Settings</small>
                            </a> 
                            -->
                            <a href="#">
                                <i class="ti-user"></i><small>Profile</small>
                            </a> 
                            <a href="#">
                                <i class="ti-power-off"></i><small>Logout</small>
                            </a> 
                        </div>
                    </div> <img class="bg-user" src="/static/img/avatar-bg.png" alt="User Image"> </div>
                <!-- sidebar menu: : style can be found in sidebar.less -->
                <ul class="sidebar-menu">
                    <li class="header">Mis Poderes</li>
                    
                    <!--
                    <li>
                        <router-link to="/challenges-list"> <i class="ti-email"></i> <span>Mail Apps</span> </router-link>
                    </li>
                    -->
                    
                    <li>
                        <router-link :to="{name:'challenges-list'}">
                            <i class="fa ti-cup"></i>
                            <span>Mis Retos</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/advertisements-list">
                            <i class="fa ti-announcement"></i>                            
                            <span>Mis Anuncios</span>
                        </router-link>
                    </li>
                    <li> 
                        <router-link to="/promotions-list">  
                            <i class="fa ti-package"></i>
                            <span>Mis Promociones</span>
                        </router-link>
                    </li>
                    <li>
                        <br>
                        <br>
                        <br>
                    </li>
                </ul>
            </section>
            <!-- /.sidebar -->
        </div>
    </aside>
</template>

<script>
import Avatar from 'vue-avatar/dist/Avatar'
export default {
  name: 'DashboardSidebar',
  mounted: function () {
    $(document).ready(function ($) {
      $('.main-sidebar > div').slimScroll({
        width: '230px',
        position: 'left',
        size: '3px',
        height: '95vh'
      })
    })
  },
  components: {
    Avatar
  }
}
</script>