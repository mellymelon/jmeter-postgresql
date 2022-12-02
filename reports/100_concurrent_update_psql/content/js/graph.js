/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 6818.0, "minX": 0.0, "maxY": 11009.0, "series": [{"data": [[0.0, 6818.0], [0.1, 6818.0], [0.2, 6818.0], [0.3, 6818.0], [0.4, 6818.0], [0.5, 6818.0], [0.6, 6818.0], [0.7, 6818.0], [0.8, 6818.0], [0.9, 6818.0], [1.0, 6891.0], [1.1, 6891.0], [1.2, 6891.0], [1.3, 6891.0], [1.4, 6891.0], [1.5, 6891.0], [1.6, 6891.0], [1.7, 6891.0], [1.8, 6891.0], [1.9, 6891.0], [2.0, 7007.0], [2.1, 7007.0], [2.2, 7007.0], [2.3, 7007.0], [2.4, 7007.0], [2.5, 7007.0], [2.6, 7007.0], [2.7, 7007.0], [2.8, 7007.0], [2.9, 7007.0], [3.0, 7019.0], [3.1, 7019.0], [3.2, 7019.0], [3.3, 7019.0], [3.4, 7019.0], [3.5, 7019.0], [3.6, 7019.0], [3.7, 7019.0], [3.8, 7019.0], [3.9, 7019.0], [4.0, 7129.0], [4.1, 7129.0], [4.2, 7129.0], [4.3, 7129.0], [4.4, 7129.0], [4.5, 7129.0], [4.6, 7129.0], [4.7, 7129.0], [4.8, 7129.0], [4.9, 7129.0], [5.0, 7202.0], [5.1, 7202.0], [5.2, 7202.0], [5.3, 7202.0], [5.4, 7202.0], [5.5, 7202.0], [5.6, 7202.0], [5.7, 7202.0], [5.8, 7202.0], [5.9, 7202.0], [6.0, 7214.0], [6.1, 7214.0], [6.2, 7214.0], [6.3, 7214.0], [6.4, 7214.0], [6.5, 7214.0], [6.6, 7214.0], [6.7, 7214.0], [6.8, 7214.0], [6.9, 7214.0], [7.0, 7223.0], [7.1, 7223.0], [7.2, 7223.0], [7.3, 7223.0], [7.4, 7223.0], [7.5, 7223.0], [7.6, 7223.0], [7.7, 7223.0], [7.8, 7223.0], [7.9, 7223.0], [8.0, 7283.0], [8.1, 7283.0], [8.2, 7283.0], [8.3, 7283.0], [8.4, 7283.0], [8.5, 7283.0], [8.6, 7283.0], [8.7, 7283.0], [8.8, 7283.0], [8.9, 7283.0], [9.0, 7309.0], [9.1, 7309.0], [9.2, 7309.0], [9.3, 7309.0], [9.4, 7309.0], [9.5, 7309.0], [9.6, 7309.0], [9.7, 7309.0], [9.8, 7309.0], [9.9, 7309.0], [10.0, 7425.0], [10.1, 7425.0], [10.2, 7425.0], [10.3, 7425.0], [10.4, 7425.0], [10.5, 7425.0], [10.6, 7425.0], [10.7, 7425.0], [10.8, 7425.0], [10.9, 7425.0], [11.0, 7563.0], [11.1, 7563.0], [11.2, 7563.0], [11.3, 7563.0], [11.4, 7563.0], [11.5, 7563.0], [11.6, 7563.0], [11.7, 7563.0], [11.8, 7563.0], [11.9, 7563.0], [12.0, 7629.0], [12.1, 7629.0], [12.2, 7629.0], [12.3, 7629.0], [12.4, 7629.0], [12.5, 7629.0], [12.6, 7629.0], [12.7, 7629.0], [12.8, 7629.0], [12.9, 7629.0], [13.0, 7689.0], [13.1, 7689.0], [13.2, 7689.0], [13.3, 7689.0], [13.4, 7689.0], [13.5, 7689.0], [13.6, 7689.0], [13.7, 7689.0], [13.8, 7689.0], [13.9, 7689.0], [14.0, 7764.0], [14.1, 7764.0], [14.2, 7764.0], [14.3, 7764.0], [14.4, 7764.0], [14.5, 7764.0], [14.6, 7764.0], [14.7, 7764.0], [14.8, 7764.0], [14.9, 7764.0], [15.0, 7766.0], [15.1, 7766.0], [15.2, 7766.0], [15.3, 7766.0], [15.4, 7766.0], [15.5, 7766.0], [15.6, 7766.0], [15.7, 7766.0], [15.8, 7766.0], [15.9, 7766.0], [16.0, 7782.0], [16.1, 7782.0], [16.2, 7782.0], [16.3, 7782.0], [16.4, 7782.0], [16.5, 7782.0], [16.6, 7782.0], [16.7, 7782.0], [16.8, 7782.0], [16.9, 7782.0], [17.0, 7806.0], [17.1, 7806.0], [17.2, 7806.0], [17.3, 7806.0], [17.4, 7806.0], [17.5, 7806.0], [17.6, 7806.0], [17.7, 7806.0], [17.8, 7806.0], [17.9, 7806.0], [18.0, 7873.0], [18.1, 7873.0], [18.2, 7873.0], [18.3, 7873.0], [18.4, 7873.0], [18.5, 7873.0], [18.6, 7873.0], [18.7, 7873.0], [18.8, 7873.0], [18.9, 7873.0], [19.0, 7974.0], [19.1, 7974.0], [19.2, 7974.0], [19.3, 7974.0], [19.4, 7974.0], [19.5, 7974.0], [19.6, 7974.0], [19.7, 7974.0], [19.8, 7974.0], [19.9, 7974.0], [20.0, 8052.0], [20.1, 8052.0], [20.2, 8052.0], [20.3, 8052.0], [20.4, 8052.0], [20.5, 8052.0], [20.6, 8052.0], [20.7, 8052.0], [20.8, 8052.0], [20.9, 8052.0], [21.0, 8123.0], [21.1, 8123.0], [21.2, 8123.0], [21.3, 8123.0], [21.4, 8123.0], [21.5, 8123.0], [21.6, 8123.0], [21.7, 8123.0], [21.8, 8123.0], [21.9, 8123.0], [22.0, 8134.0], [22.1, 8134.0], [22.2, 8134.0], [22.3, 8134.0], [22.4, 8134.0], [22.5, 8134.0], [22.6, 8134.0], [22.7, 8134.0], [22.8, 8134.0], [22.9, 8134.0], [23.0, 8154.0], [23.1, 8154.0], [23.2, 8154.0], [23.3, 8154.0], [23.4, 8154.0], [23.5, 8154.0], [23.6, 8154.0], [23.7, 8154.0], [23.8, 8154.0], [23.9, 8154.0], [24.0, 8173.0], [24.1, 8173.0], [24.2, 8173.0], [24.3, 8173.0], [24.4, 8173.0], [24.5, 8173.0], [24.6, 8173.0], [24.7, 8173.0], [24.8, 8173.0], [24.9, 8173.0], [25.0, 8190.0], [25.1, 8190.0], [25.2, 8190.0], [25.3, 8190.0], [25.4, 8190.0], [25.5, 8190.0], [25.6, 8190.0], [25.7, 8190.0], [25.8, 8190.0], [25.9, 8190.0], [26.0, 8201.0], [26.1, 8201.0], [26.2, 8201.0], [26.3, 8201.0], [26.4, 8201.0], [26.5, 8201.0], [26.6, 8201.0], [26.7, 8201.0], [26.8, 8201.0], [26.9, 8201.0], [27.0, 8293.0], [27.1, 8293.0], [27.2, 8293.0], [27.3, 8293.0], [27.4, 8293.0], [27.5, 8293.0], [27.6, 8293.0], [27.7, 8293.0], [27.8, 8293.0], [27.9, 8293.0], [28.0, 8317.0], [28.1, 8317.0], [28.2, 8317.0], [28.3, 8317.0], [28.4, 8317.0], [28.5, 8317.0], [28.6, 8317.0], [28.7, 8317.0], [28.8, 8317.0], [28.9, 8317.0], [29.0, 8388.0], [29.1, 8388.0], [29.2, 8388.0], [29.3, 8388.0], [29.4, 8388.0], [29.5, 8388.0], [29.6, 8388.0], [29.7, 8388.0], [29.8, 8388.0], [29.9, 8388.0], [30.0, 8414.0], [30.1, 8414.0], [30.2, 8414.0], [30.3, 8414.0], [30.4, 8414.0], [30.5, 8414.0], [30.6, 8414.0], [30.7, 8414.0], [30.8, 8414.0], [30.9, 8414.0], [31.0, 8509.0], [31.1, 8509.0], [31.2, 8509.0], [31.3, 8509.0], [31.4, 8509.0], [31.5, 8509.0], [31.6, 8509.0], [31.7, 8509.0], [31.8, 8509.0], [31.9, 8509.0], [32.0, 8516.0], [32.1, 8516.0], [32.2, 8516.0], [32.3, 8516.0], [32.4, 8516.0], [32.5, 8516.0], [32.6, 8516.0], [32.7, 8516.0], [32.8, 8516.0], [32.9, 8516.0], [33.0, 8519.0], [33.1, 8519.0], [33.2, 8519.0], [33.3, 8519.0], [33.4, 8519.0], [33.5, 8519.0], [33.6, 8519.0], [33.7, 8519.0], [33.8, 8519.0], [33.9, 8519.0], [34.0, 8553.0], [34.1, 8553.0], [34.2, 8553.0], [34.3, 8553.0], [34.4, 8553.0], [34.5, 8553.0], [34.6, 8553.0], [34.7, 8553.0], [34.8, 8553.0], [34.9, 8553.0], [35.0, 8562.0], [35.1, 8562.0], [35.2, 8562.0], [35.3, 8562.0], [35.4, 8562.0], [35.5, 8562.0], [35.6, 8562.0], [35.7, 8562.0], [35.8, 8562.0], [35.9, 8562.0], [36.0, 8602.0], [36.1, 8602.0], [36.2, 8602.0], [36.3, 8602.0], [36.4, 8602.0], [36.5, 8602.0], [36.6, 8602.0], [36.7, 8602.0], [36.8, 8602.0], [36.9, 8602.0], [37.0, 8627.0], [37.1, 8627.0], [37.2, 8627.0], [37.3, 8627.0], [37.4, 8627.0], [37.5, 8627.0], [37.6, 8627.0], [37.7, 8627.0], [37.8, 8627.0], [37.9, 8627.0], [38.0, 8771.0], [38.1, 8771.0], [38.2, 8771.0], [38.3, 8771.0], [38.4, 8771.0], [38.5, 8771.0], [38.6, 8771.0], [38.7, 8771.0], [38.8, 8771.0], [38.9, 8771.0], [39.0, 8786.0], [39.1, 8786.0], [39.2, 8786.0], [39.3, 8786.0], [39.4, 8786.0], [39.5, 8786.0], [39.6, 8786.0], [39.7, 8786.0], [39.8, 8786.0], [39.9, 8786.0], [40.0, 8831.0], [40.1, 8831.0], [40.2, 8831.0], [40.3, 8831.0], [40.4, 8831.0], [40.5, 8831.0], [40.6, 8831.0], [40.7, 8831.0], [40.8, 8831.0], [40.9, 8831.0], [41.0, 8839.0], [41.1, 8839.0], [41.2, 8839.0], [41.3, 8839.0], [41.4, 8839.0], [41.5, 8839.0], [41.6, 8839.0], [41.7, 8839.0], [41.8, 8839.0], [41.9, 8839.0], [42.0, 8849.0], [42.1, 8849.0], [42.2, 8849.0], [42.3, 8849.0], [42.4, 8849.0], [42.5, 8849.0], [42.6, 8849.0], [42.7, 8849.0], [42.8, 8849.0], [42.9, 8849.0], [43.0, 8870.0], [43.1, 8870.0], [43.2, 8870.0], [43.3, 8870.0], [43.4, 8870.0], [43.5, 8870.0], [43.6, 8870.0], [43.7, 8870.0], [43.8, 8870.0], [43.9, 8870.0], [44.0, 8875.0], [44.1, 8875.0], [44.2, 8875.0], [44.3, 8875.0], [44.4, 8875.0], [44.5, 8875.0], [44.6, 8875.0], [44.7, 8875.0], [44.8, 8875.0], [44.9, 8875.0], [45.0, 9006.0], [45.1, 9006.0], [45.2, 9006.0], [45.3, 9006.0], [45.4, 9006.0], [45.5, 9006.0], [45.6, 9006.0], [45.7, 9006.0], [45.8, 9006.0], [45.9, 9006.0], [46.0, 9031.0], [46.1, 9031.0], [46.2, 9031.0], [46.3, 9031.0], [46.4, 9031.0], [46.5, 9031.0], [46.6, 9031.0], [46.7, 9031.0], [46.8, 9031.0], [46.9, 9031.0], [47.0, 9045.0], [47.1, 9045.0], [47.2, 9045.0], [47.3, 9045.0], [47.4, 9045.0], [47.5, 9045.0], [47.6, 9045.0], [47.7, 9045.0], [47.8, 9045.0], [47.9, 9045.0], [48.0, 9115.0], [48.1, 9115.0], [48.2, 9115.0], [48.3, 9115.0], [48.4, 9115.0], [48.5, 9115.0], [48.6, 9115.0], [48.7, 9115.0], [48.8, 9115.0], [48.9, 9115.0], [49.0, 9157.0], [49.1, 9157.0], [49.2, 9157.0], [49.3, 9157.0], [49.4, 9157.0], [49.5, 9157.0], [49.6, 9157.0], [49.7, 9157.0], [49.8, 9157.0], [49.9, 9157.0], [50.0, 9158.0], [50.1, 9158.0], [50.2, 9158.0], [50.3, 9158.0], [50.4, 9158.0], [50.5, 9158.0], [50.6, 9158.0], [50.7, 9158.0], [50.8, 9158.0], [50.9, 9158.0], [51.0, 9168.0], [51.1, 9168.0], [51.2, 9168.0], [51.3, 9168.0], [51.4, 9168.0], [51.5, 9168.0], [51.6, 9168.0], [51.7, 9168.0], [51.8, 9168.0], [51.9, 9168.0], [52.0, 9173.0], [52.1, 9173.0], [52.2, 9173.0], [52.3, 9173.0], [52.4, 9173.0], [52.5, 9173.0], [52.6, 9173.0], [52.7, 9173.0], [52.8, 9173.0], [52.9, 9173.0], [53.0, 9229.0], [53.1, 9229.0], [53.2, 9229.0], [53.3, 9229.0], [53.4, 9229.0], [53.5, 9229.0], [53.6, 9229.0], [53.7, 9229.0], [53.8, 9229.0], [53.9, 9229.0], [54.0, 9298.0], [54.1, 9298.0], [54.2, 9298.0], [54.3, 9298.0], [54.4, 9298.0], [54.5, 9298.0], [54.6, 9298.0], [54.7, 9298.0], [54.8, 9298.0], [54.9, 9298.0], [55.0, 9451.0], [55.1, 9451.0], [55.2, 9451.0], [55.3, 9451.0], [55.4, 9451.0], [55.5, 9451.0], [55.6, 9451.0], [55.7, 9451.0], [55.8, 9451.0], [55.9, 9451.0], [56.0, 9461.0], [56.1, 9461.0], [56.2, 9461.0], [56.3, 9461.0], [56.4, 9461.0], [56.5, 9461.0], [56.6, 9461.0], [56.7, 9461.0], [56.8, 9461.0], [56.9, 9461.0], [57.0, 9464.0], [57.1, 9464.0], [57.2, 9464.0], [57.3, 9464.0], [57.4, 9464.0], [57.5, 9464.0], [57.6, 9464.0], [57.7, 9464.0], [57.8, 9464.0], [57.9, 9464.0], [58.0, 9465.0], [58.1, 9465.0], [58.2, 9465.0], [58.3, 9465.0], [58.4, 9465.0], [58.5, 9465.0], [58.6, 9465.0], [58.7, 9465.0], [58.8, 9465.0], [58.9, 9465.0], [59.0, 9490.0], [59.1, 9490.0], [59.2, 9490.0], [59.3, 9490.0], [59.4, 9490.0], [59.5, 9490.0], [59.6, 9490.0], [59.7, 9490.0], [59.8, 9490.0], [59.9, 9490.0], [60.0, 9500.0], [60.1, 9500.0], [60.2, 9500.0], [60.3, 9500.0], [60.4, 9500.0], [60.5, 9500.0], [60.6, 9500.0], [60.7, 9500.0], [60.8, 9500.0], [60.9, 9500.0], [61.0, 9556.0], [61.1, 9556.0], [61.2, 9556.0], [61.3, 9556.0], [61.4, 9556.0], [61.5, 9556.0], [61.6, 9556.0], [61.7, 9556.0], [61.8, 9556.0], [61.9, 9556.0], [62.0, 9660.0], [62.1, 9660.0], [62.2, 9660.0], [62.3, 9660.0], [62.4, 9660.0], [62.5, 9660.0], [62.6, 9660.0], [62.7, 9660.0], [62.8, 9660.0], [62.9, 9660.0], [63.0, 9666.0], [63.1, 9666.0], [63.2, 9666.0], [63.3, 9666.0], [63.4, 9666.0], [63.5, 9666.0], [63.6, 9666.0], [63.7, 9666.0], [63.8, 9666.0], [63.9, 9666.0], [64.0, 9678.0], [64.1, 9678.0], [64.2, 9678.0], [64.3, 9678.0], [64.4, 9678.0], [64.5, 9678.0], [64.6, 9678.0], [64.7, 9678.0], [64.8, 9678.0], [64.9, 9678.0], [65.0, 9746.0], [65.1, 9746.0], [65.2, 9746.0], [65.3, 9746.0], [65.4, 9746.0], [65.5, 9746.0], [65.6, 9746.0], [65.7, 9746.0], [65.8, 9746.0], [65.9, 9746.0], [66.0, 9753.0], [66.1, 9753.0], [66.2, 9753.0], [66.3, 9753.0], [66.4, 9753.0], [66.5, 9753.0], [66.6, 9753.0], [66.7, 9753.0], [66.8, 9753.0], [66.9, 9753.0], [67.0, 9863.0], [67.1, 9863.0], [67.2, 9863.0], [67.3, 9863.0], [67.4, 9863.0], [67.5, 9863.0], [67.6, 9863.0], [67.7, 9863.0], [67.8, 9863.0], [67.9, 9863.0], [68.0, 9888.0], [68.1, 9888.0], [68.2, 9888.0], [68.3, 9888.0], [68.4, 9888.0], [68.5, 9888.0], [68.6, 9888.0], [68.7, 9888.0], [68.8, 9888.0], [68.9, 9888.0], [69.0, 9948.0], [69.1, 9948.0], [69.2, 9948.0], [69.3, 9948.0], [69.4, 9948.0], [69.5, 9948.0], [69.6, 9948.0], [69.7, 9948.0], [69.8, 9948.0], [69.9, 9948.0], [70.0, 9971.0], [70.1, 9971.0], [70.2, 9971.0], [70.3, 9971.0], [70.4, 9971.0], [70.5, 9971.0], [70.6, 9971.0], [70.7, 9971.0], [70.8, 9971.0], [70.9, 9971.0], [71.0, 9991.0], [71.1, 9991.0], [71.2, 9991.0], [71.3, 9991.0], [71.4, 9991.0], [71.5, 9991.0], [71.6, 9991.0], [71.7, 9991.0], [71.8, 9991.0], [71.9, 9991.0], [72.0, 10026.0], [72.1, 10026.0], [72.2, 10026.0], [72.3, 10026.0], [72.4, 10026.0], [72.5, 10026.0], [72.6, 10026.0], [72.7, 10026.0], [72.8, 10026.0], [72.9, 10026.0], [73.0, 10033.0], [73.1, 10033.0], [73.2, 10033.0], [73.3, 10033.0], [73.4, 10033.0], [73.5, 10033.0], [73.6, 10033.0], [73.7, 10033.0], [73.8, 10033.0], [73.9, 10033.0], [74.0, 10084.0], [74.1, 10084.0], [74.2, 10084.0], [74.3, 10084.0], [74.4, 10084.0], [74.5, 10084.0], [74.6, 10084.0], [74.7, 10084.0], [74.8, 10084.0], [74.9, 10084.0], [75.0, 10140.0], [75.1, 10140.0], [75.2, 10140.0], [75.3, 10140.0], [75.4, 10140.0], [75.5, 10140.0], [75.6, 10140.0], [75.7, 10140.0], [75.8, 10140.0], [75.9, 10140.0], [76.0, 10142.0], [76.1, 10142.0], [76.2, 10142.0], [76.3, 10142.0], [76.4, 10142.0], [76.5, 10142.0], [76.6, 10142.0], [76.7, 10142.0], [76.8, 10142.0], [76.9, 10142.0], [77.0, 10194.0], [77.1, 10194.0], [77.2, 10194.0], [77.3, 10194.0], [77.4, 10194.0], [77.5, 10194.0], [77.6, 10194.0], [77.7, 10194.0], [77.8, 10194.0], [77.9, 10194.0], [78.0, 10326.0], [78.1, 10326.0], [78.2, 10326.0], [78.3, 10326.0], [78.4, 10326.0], [78.5, 10326.0], [78.6, 10326.0], [78.7, 10326.0], [78.8, 10326.0], [78.9, 10326.0], [79.0, 10354.0], [79.1, 10354.0], [79.2, 10354.0], [79.3, 10354.0], [79.4, 10354.0], [79.5, 10354.0], [79.6, 10354.0], [79.7, 10354.0], [79.8, 10354.0], [79.9, 10354.0], [80.0, 10364.0], [80.1, 10364.0], [80.2, 10364.0], [80.3, 10364.0], [80.4, 10364.0], [80.5, 10364.0], [80.6, 10364.0], [80.7, 10364.0], [80.8, 10364.0], [80.9, 10364.0], [81.0, 10400.0], [81.1, 10400.0], [81.2, 10400.0], [81.3, 10400.0], [81.4, 10400.0], [81.5, 10400.0], [81.6, 10400.0], [81.7, 10400.0], [81.8, 10400.0], [81.9, 10400.0], [82.0, 10413.0], [82.1, 10413.0], [82.2, 10413.0], [82.3, 10413.0], [82.4, 10413.0], [82.5, 10413.0], [82.6, 10413.0], [82.7, 10413.0], [82.8, 10413.0], [82.9, 10413.0], [83.0, 10455.0], [83.1, 10455.0], [83.2, 10455.0], [83.3, 10455.0], [83.4, 10455.0], [83.5, 10455.0], [83.6, 10455.0], [83.7, 10455.0], [83.8, 10455.0], [83.9, 10455.0], [84.0, 10469.0], [84.1, 10469.0], [84.2, 10469.0], [84.3, 10469.0], [84.4, 10469.0], [84.5, 10469.0], [84.6, 10469.0], [84.7, 10469.0], [84.8, 10469.0], [84.9, 10469.0], [85.0, 10584.0], [85.1, 10584.0], [85.2, 10584.0], [85.3, 10584.0], [85.4, 10584.0], [85.5, 10584.0], [85.6, 10584.0], [85.7, 10584.0], [85.8, 10584.0], [85.9, 10584.0], [86.0, 10629.0], [86.1, 10629.0], [86.2, 10629.0], [86.3, 10629.0], [86.4, 10629.0], [86.5, 10629.0], [86.6, 10629.0], [86.7, 10629.0], [86.8, 10629.0], [86.9, 10629.0], [87.0, 10659.0], [87.1, 10659.0], [87.2, 10659.0], [87.3, 10659.0], [87.4, 10659.0], [87.5, 10659.0], [87.6, 10659.0], [87.7, 10659.0], [87.8, 10659.0], [87.9, 10659.0], [88.0, 10665.0], [88.1, 10665.0], [88.2, 10665.0], [88.3, 10665.0], [88.4, 10665.0], [88.5, 10665.0], [88.6, 10665.0], [88.7, 10665.0], [88.8, 10665.0], [88.9, 10665.0], [89.0, 10682.0], [89.1, 10682.0], [89.2, 10682.0], [89.3, 10682.0], [89.4, 10682.0], [89.5, 10682.0], [89.6, 10682.0], [89.7, 10682.0], [89.8, 10682.0], [89.9, 10682.0], [90.0, 10774.0], [90.1, 10774.0], [90.2, 10774.0], [90.3, 10774.0], [90.4, 10774.0], [90.5, 10774.0], [90.6, 10774.0], [90.7, 10774.0], [90.8, 10774.0], [90.9, 10774.0], [91.0, 10804.0], [91.1, 10804.0], [91.2, 10804.0], [91.3, 10804.0], [91.4, 10804.0], [91.5, 10804.0], [91.6, 10804.0], [91.7, 10804.0], [91.8, 10804.0], [91.9, 10804.0], [92.0, 10825.0], [92.1, 10825.0], [92.2, 10825.0], [92.3, 10825.0], [92.4, 10825.0], [92.5, 10825.0], [92.6, 10825.0], [92.7, 10825.0], [92.8, 10825.0], [92.9, 10825.0], [93.0, 10835.0], [93.1, 10835.0], [93.2, 10835.0], [93.3, 10835.0], [93.4, 10835.0], [93.5, 10835.0], [93.6, 10835.0], [93.7, 10835.0], [93.8, 10835.0], [93.9, 10835.0], [94.0, 10849.0], [94.1, 10849.0], [94.2, 10849.0], [94.3, 10849.0], [94.4, 10849.0], [94.5, 10849.0], [94.6, 10849.0], [94.7, 10849.0], [94.8, 10849.0], [94.9, 10849.0], [95.0, 10870.0], [95.1, 10870.0], [95.2, 10870.0], [95.3, 10870.0], [95.4, 10870.0], [95.5, 10870.0], [95.6, 10870.0], [95.7, 10870.0], [95.8, 10870.0], [95.9, 10870.0], [96.0, 10946.0], [96.1, 10946.0], [96.2, 10946.0], [96.3, 10946.0], [96.4, 10946.0], [96.5, 10946.0], [96.6, 10946.0], [96.7, 10946.0], [96.8, 10946.0], [96.9, 10946.0], [97.0, 10981.0], [97.1, 10981.0], [97.2, 10981.0], [97.3, 10981.0], [97.4, 10981.0], [97.5, 10981.0], [97.6, 10981.0], [97.7, 10981.0], [97.8, 10981.0], [97.9, 10981.0], [98.0, 10987.0], [98.1, 10987.0], [98.2, 10987.0], [98.3, 10987.0], [98.4, 10987.0], [98.5, 10987.0], [98.6, 10987.0], [98.7, 10987.0], [98.8, 10987.0], [98.9, 10987.0], [99.0, 11009.0], [99.1, 11009.0], [99.2, 11009.0], [99.3, 11009.0], [99.4, 11009.0], [99.5, 11009.0], [99.6, 11009.0], [99.7, 11009.0], [99.8, 11009.0], [99.9, 11009.0]], "isOverall": false, "label": "JDBC Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 6800.0, "maxY": 5.0, "series": [{"data": [[8200.0, 2.0], [8300.0, 2.0], [8400.0, 1.0], [8500.0, 5.0], [8600.0, 2.0], [8700.0, 2.0], [8800.0, 5.0], [9000.0, 3.0], [9100.0, 5.0], [9200.0, 2.0], [9400.0, 5.0], [9500.0, 2.0], [9600.0, 3.0], [9700.0, 2.0], [9800.0, 2.0], [9900.0, 3.0], [10000.0, 3.0], [10100.0, 3.0], [10300.0, 3.0], [10400.0, 4.0], [10500.0, 1.0], [10600.0, 4.0], [10700.0, 1.0], [10800.0, 5.0], [10900.0, 3.0], [11000.0, 1.0], [6800.0, 2.0], [7000.0, 2.0], [7100.0, 1.0], [7200.0, 4.0], [7300.0, 1.0], [7400.0, 1.0], [7500.0, 1.0], [7600.0, 2.0], [7700.0, 3.0], [7800.0, 2.0], [7900.0, 1.0], [8100.0, 5.0], [8000.0, 1.0]], "isOverall": false, "label": "JDBC Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 50.5, "minX": 1.66989486E12, "maxY": 50.5, "series": [{"data": [[1.66989486E12, 50.5]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66989486E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 6818.0, "minX": 1.0, "maxY": 11009.0, "series": [{"data": [[2.0, 11009.0], [3.0, 10981.0], [4.0, 10946.0], [5.0, 10870.0], [6.0, 10849.0], [7.0, 10835.0], [8.0, 10825.0], [9.0, 10804.0], [10.0, 10774.0], [11.0, 10682.0], [12.0, 10665.0], [13.0, 10659.0], [14.0, 10629.0], [15.0, 10584.0], [16.0, 10469.0], [17.0, 10455.0], [18.0, 10413.0], [19.0, 10400.0], [20.0, 10364.0], [21.0, 10354.0], [22.0, 10326.0], [23.0, 10194.0], [24.0, 10142.0], [25.0, 10140.0], [26.0, 10084.0], [27.0, 10033.0], [28.0, 10026.0], [29.0, 9971.0], [30.0, 9991.0], [31.0, 9948.0], [33.0, 9863.0], [32.0, 9888.0], [35.0, 9753.0], [34.0, 9746.0], [37.0, 9666.0], [36.0, 9678.0], [39.0, 9556.0], [38.0, 9660.0], [41.0, 9464.0], [40.0, 9490.0], [43.0, 9465.0], [42.0, 9500.0], [45.0, 9451.0], [44.0, 9461.0], [47.0, 9229.0], [46.0, 9298.0], [49.0, 9158.0], [48.0, 9173.0], [51.0, 9168.0], [50.0, 9157.0], [53.0, 9006.0], [52.0, 9115.0], [55.0, 9045.0], [54.0, 9031.0], [57.0, 8839.0], [56.0, 8875.0], [59.0, 8849.0], [58.0, 8870.0], [61.0, 8786.0], [60.0, 8831.0], [63.0, 8602.0], [62.0, 8771.0], [67.0, 8516.0], [66.0, 8553.0], [65.0, 8562.0], [64.0, 8627.0], [71.0, 8388.0], [70.0, 8414.0], [69.0, 8519.0], [68.0, 8509.0], [75.0, 8201.0], [74.0, 8190.0], [73.0, 8293.0], [72.0, 8317.0], [79.0, 7974.0], [78.0, 8173.0], [77.0, 8154.0], [76.0, 8134.0], [83.0, 7873.0], [82.0, 7782.0], [81.0, 8123.0], [80.0, 8052.0], [87.0, 7764.0], [86.0, 7806.0], [85.0, 7766.0], [84.0, 7689.0], [91.0, 7283.0], [90.0, 7425.0], [89.0, 7563.0], [88.0, 7629.0], [95.0, 7202.0], [94.0, 7223.0], [93.0, 7214.0], [92.0, 7309.0], [99.0, 7007.0], [98.0, 6891.0], [97.0, 7129.0], [96.0, 7019.0], [100.0, 6818.0], [1.0, 10987.0]], "isOverall": false, "label": "JDBC Request", "isController": false}, {"data": [[50.5, 9119.440000000004]], "isOverall": false, "label": "JDBC Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.66989486E12, "maxY": 15.0, "series": [{"data": [[1.66989486E12, 15.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66989486E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66989486E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 9119.440000000004, "minX": 1.66989486E12, "maxY": 9119.440000000004, "series": [{"data": [[1.66989486E12, 9119.440000000004]], "isOverall": false, "label": "JDBC Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66989486E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 9119.310000000003, "minX": 1.66989486E12, "maxY": 9119.310000000003, "series": [{"data": [[1.66989486E12, 9119.310000000003]], "isOverall": false, "label": "JDBC Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66989486E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 9113.410000000002, "minX": 1.66989486E12, "maxY": 9113.410000000002, "series": [{"data": [[1.66989486E12, 9113.410000000002]], "isOverall": false, "label": "JDBC Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66989486E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 6818.0, "minX": 1.66989486E12, "maxY": 11009.0, "series": [{"data": [[1.66989486E12, 11009.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66989486E12, 10764.800000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66989486E12, 11008.78]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66989486E12, 10868.949999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66989486E12, 6818.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66989486E12, 9157.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66989486E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 7283.0, "minX": 4.0, "maxY": 10984.0, "series": [{"data": [[4.0, 10984.0], [17.0, 7283.0], [18.0, 8195.5], [20.0, 9374.5], [21.0, 10584.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 7283.0, "minX": 4.0, "maxY": 10983.5, "series": [{"data": [[4.0, 10983.5], [17.0, 7283.0], [18.0, 8195.5], [20.0, 9374.5], [21.0, 10584.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66989486E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66989486E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66989486E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66989486E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66989486E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66989486E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66989486E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66989486E12, 1.6666666666666667]], "isOverall": false, "label": "JDBC Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66989486E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66989486E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66989486E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66989486E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

