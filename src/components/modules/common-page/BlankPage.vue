<template>
    <transition name="el-zoom-in-top">
        <div class="content-wrapper dashboard-wrapper">
            <!-- Main content -->
            <section class="content">
                <!--end of New User-->
                <div class="row">
                    <div class="col-md-4 col-xl-4">
                        <div class="box">
                            <!-- /.box-header -->
                            <div class="box-body no-pad padding-fifthin" style="display: block;">
                                <div class="events-nest ">
                                    <div class="wrap-no-pad padding-fifthin">
                                        <div class="row">
                                            <div class="col-sm-6 bor-right bor-bottom">
                                                <div class="devin-table-dash centered pad-box"> <i class="palette-Pink-500 bg ti-shopping-cart-full"></i>
                                                    <div class="palette-Pink-500 text value">648</div>
                                                    <div class="label">Items Sold</div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 bor-bottom">
                                                <div class="devin-table-dash centered pad-box"> <i class="palette-Purple-500 bg ti-link"></i>
                                                    <div class="palette-Purple-500 text value">47.5<strong>K</strong></div>
                                                    <div class="label">Followers</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-6 bor-right">
                                                <div class="devin-table-dash centered pad-box"> <i class="palette-Deep-Purple-500 bg ti-wallet"></i>
                                                    <div class="value palette-Deep-Purple-500 text"><strong>$</strong>764</div>
                                                    <div class="label">Daily Earnings</div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="devin-table-dash centered pad-box"> <i class="ti-bag palette-Light-Blue-500 bg"></i>
                                                    <div class="value palette-Light-Blue-500 text">256</div>
                                                    <div class="label">Products</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xl-4">
                        <div class="box">
                            <!-- /.box-header -->
                            <div class="box-body no-pad padding-fifthin" style="display: block;">
                                <div class="events-nest ">
                                    <div class="wrap-no-pad padding-fifthin">
                                        <div class="pad-box">
                                            <div class="devin-table-dash bigger">
                                                <div class="value">3059</div>
                                                <div class="trending trending-up palette-Amber-500 bg"><span>15%</span></div>
                                                <div class="label">Products Sold</div>
                                            </div>
                                            <hr>
                                            <br>
                                            <div class="el-chart-w">
                                                

                                            </div>
                                            <br> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xl-4">
                        <div class="box">
                            <!-- /.box-header -->
                            <div class="box-body no-pad padding-fifthin" style="display: block;">
                                <div class="events-nest ">
                                    <div class="wrap-no-pad padding-fifthin">
                                        <div class="pad-box">
                                            <div class="element-info-with-icon smaller">
                                                <div class="element-info-text">
                                                    <h5>Monthly Revenue</h5>
                                                    <div>Calculated every month</div>
                                                </div>
                                            </div>
                                            <div class="devin-progress-bar">
                                                <el-progress class="circle-one" type="circle" :percentage="63" :width="50" :stroke-width="2" status="success"></el-progress>
                                                <el-progress style="padding: 0 10px;" class="bor-left bor-right" type="circle" :percentage="75" :width="125" :stroke-width="6"></el-progress>
                                                <el-progress class="circle-two" type="circle" :percentage="89" :width="50" :stroke-width="2" status="exception"></el-progress>
                                            </div>
                                            <div class="os-progress-bar primary"> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Second-->
                <div class="row">
                    <div class="col-md-6 col-xl-6">
                        <div class="food">
                            <div class="cover" style="background-image: url(https://source.unsplash.com/category/food/800x600)">
                                <label> <i class="ti-medall-alt"></i> <font>CULINARY</font> </label>
                                <a href="#" class="download"> <i class="ti-truck"></i> </a>
                            </div>
                            <div class="info">
                                <a href="#" class="recipe"> <i class="ti-pencil-alt"></i> <font><h3>76.5%</h3></font> </a>
                                <div class="content-food">
                                    <ul>
                                        <li><strong>Sweetness</strong>
                                            <el-progress :text-inside="true" :stroke-width="15" :percentage="85"></el-progress>
                                        </li>
                                        <li><strong>Acidity</strong>
                                            <el-progress :text-inside="true" :stroke-width="15" :percentage="60"></el-progress>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--widget two-->
                    <div class="col-md-6 col-xl-6">
                        <div class="container-widget-two">
                            <div class="widget-two">
                                <div class="section section-graph">
                                    <div class="graph-info"> <i class="ti-home"></i> <span class="graph-info-big">454.757</span> <span class="graph-info-small">+5.78 (5.71%)</span> </div>
                                    <div id="graph">
                                        
                                    </div>
                                </div>
                                <div class="section section-info"> <span class="info-time">Today 2:25 PM</span>
                                    <h3 class="info-title">Salt Lake City, Utah</h3>
                                    <div class="info-block">
                                        <dl> <dt><i class="ti-stats-up"></i></dt> <dt>13.5 M</dt>
                                            <dd>Shares Traded</dd>
                                        </dl>
                                    </div>
                                    <div class="info-block last">
                                        <dl> <dt><i class="ti-stats-down"></i></dt> <dt>28.44</dt>
                                            <dd>Market Cap</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="section"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <!--Third-->
                <div class="row">
                    <div class="col-md-7 col-xl-7 col-sm-12">
                        <div id="weather">
                            <div class="panelLeft">
                                <div class="top-cal-devin">
                                    <p>JUNY 21, 2017</p>
                                </div> <img src="https://source.unsplash.com/collection/431862/800x600" alt="" />
                                <div class="bottom">
                                    <div class="temp">
                                        <p>10°</p>
                                        <p>New York City</p>
                                    </div>
                                </div>
                            </div>
                            <div class="panelRight">
                                <div class="customHeight">
                                    <p>Statistics</p>
                                    <hr/>
                                    <ul>
                                        <li> <i class="wi wi-thermometer"></i>
                                            <p>35%</p>
                                        </li>
                                        <li> <i class="wi wi-day-rain-mix"></i>
                                            <p>Easterly</p>
                                        </li>
                                        <li> <i class="wi wi-cloudy-gusts"></i>
                                            <p>7 mph</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="remainingHeight">
                                    <ul class="inline">
                                        <li class="active">Today</li>
                                        <li>Week</li>
                                    </ul>
                                    <ul class="forecast">
                                        <li> <span class="time">Now</span> <span class="temp">24°C</span> <span class="conditions">Cloudy</span> </li>
                                        <li> <span class="time">6 AM</span> <span class="temp">23°C</span> <span class="conditions">Cloudy</span> </li>
                                        <li> <span class="time">6:59 AM</span> <span class="temp">Sunrise</span> <span class="conditions">Cloudy</span> </li>
                                        <li> <span class="time">7 AM</span> <span class="temp">24°C</span> <span class="conditions">Partly Cloudy</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5 col-xl-5 col-sm-12">
                        <div class="widget">
                            <div class="widget__header">
                                <h2 class="widget__header-title">
                                      DNTM
                                      <span class="widget__header-author">
                                        by Abine
                                      </span>
                                    </h2>
                                <div class="nav">
                                    <a href="#" class="nav__item"> <i class="fa fa-cubes"></i> </a>
                                    <a href="#" class="nav__item"> <i class="fa fa-check-circle-o"></i> </a>
                                    <a href="#" class="nav__item"> <i class="fa fa-gear"></i> </a>
                                </div>
                            </div>
                            <div class="widget__body">
                                <div class="flash"> <strong>All 6</strong> companies blocked now </div>
                                <div class="accordion">
                                    <div class="accordion__item ">
                                        <div class="accordion__header"> <i class="fa fa-minus accordion__state-icon"></i>
                                            <h2>Social Networks</h2> </div>
                                        <div class="accordion__body">
                                            <div class="accordion__body-item"> <i class=" fa ti-facebook"></i> Facebook </div>
                                            <div class="accordion__body-item"> <i class=" fa ti-twitter"></i> Twitter </div>
                                            <div class="accordion__body-item"> <i class=" fa ti-instagram"></i> Instagram </div>
                                        </div>
                                    </div>
                              
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br>
                <br>
                <br>
            </section>
            <!-- /.content -->
        </div>
    </transition>
</template>
<script>
  export default {
    name: 'BlankPage'
  }
</script>
<style>
    .padding-fifthin{
            padding: 15px!important;
    }
</style>
