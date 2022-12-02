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
        data: {"result": {"minY": 346.0, "minX": 0.0, "maxY": 3902.0, "series": [{"data": [[0.0, 346.0], [0.1, 346.0], [0.2, 346.0], [0.3, 346.0], [0.4, 346.0], [0.5, 346.0], [0.6, 346.0], [0.7, 346.0], [0.8, 346.0], [0.9, 346.0], [1.0, 1247.0], [1.1, 1247.0], [1.2, 1247.0], [1.3, 1247.0], [1.4, 1247.0], [1.5, 1247.0], [1.6, 1247.0], [1.7, 1247.0], [1.8, 1247.0], [1.9, 1247.0], [2.0, 1261.0], [2.1, 1261.0], [2.2, 1261.0], [2.3, 1261.0], [2.4, 1261.0], [2.5, 1261.0], [2.6, 1261.0], [2.7, 1261.0], [2.8, 1261.0], [2.9, 1261.0], [3.0, 1269.0], [3.1, 1269.0], [3.2, 1269.0], [3.3, 1269.0], [3.4, 1269.0], [3.5, 1269.0], [3.6, 1269.0], [3.7, 1269.0], [3.8, 1269.0], [3.9, 1269.0], [4.0, 1341.0], [4.1, 1341.0], [4.2, 1341.0], [4.3, 1341.0], [4.4, 1341.0], [4.5, 1341.0], [4.6, 1341.0], [4.7, 1341.0], [4.8, 1341.0], [4.9, 1341.0], [5.0, 1417.0], [5.1, 1417.0], [5.2, 1417.0], [5.3, 1417.0], [5.4, 1417.0], [5.5, 1417.0], [5.6, 1417.0], [5.7, 1417.0], [5.8, 1417.0], [5.9, 1417.0], [6.0, 1425.0], [6.1, 1425.0], [6.2, 1425.0], [6.3, 1425.0], [6.4, 1425.0], [6.5, 1425.0], [6.6, 1425.0], [6.7, 1425.0], [6.8, 1425.0], [6.9, 1425.0], [7.0, 1426.0], [7.1, 1426.0], [7.2, 1426.0], [7.3, 1426.0], [7.4, 1426.0], [7.5, 1426.0], [7.6, 1426.0], [7.7, 1426.0], [7.8, 1426.0], [7.9, 1426.0], [8.0, 1431.0], [8.1, 1431.0], [8.2, 1431.0], [8.3, 1431.0], [8.4, 1431.0], [8.5, 1431.0], [8.6, 1431.0], [8.7, 1431.0], [8.8, 1431.0], [8.9, 1431.0], [9.0, 1472.0], [9.1, 1472.0], [9.2, 1472.0], [9.3, 1472.0], [9.4, 1472.0], [9.5, 1472.0], [9.6, 1472.0], [9.7, 1472.0], [9.8, 1472.0], [9.9, 1472.0], [10.0, 1478.0], [10.1, 1478.0], [10.2, 1478.0], [10.3, 1478.0], [10.4, 1478.0], [10.5, 1478.0], [10.6, 1478.0], [10.7, 1478.0], [10.8, 1478.0], [10.9, 1478.0], [11.0, 1479.0], [11.1, 1479.0], [11.2, 1479.0], [11.3, 1479.0], [11.4, 1479.0], [11.5, 1479.0], [11.6, 1479.0], [11.7, 1479.0], [11.8, 1479.0], [11.9, 1479.0], [12.0, 1608.0], [12.1, 1608.0], [12.2, 1608.0], [12.3, 1608.0], [12.4, 1608.0], [12.5, 1608.0], [12.6, 1608.0], [12.7, 1608.0], [12.8, 1608.0], [12.9, 1608.0], [13.0, 1609.0], [13.1, 1609.0], [13.2, 1609.0], [13.3, 1609.0], [13.4, 1609.0], [13.5, 1609.0], [13.6, 1609.0], [13.7, 1609.0], [13.8, 1609.0], [13.9, 1609.0], [14.0, 1716.0], [14.1, 1716.0], [14.2, 1716.0], [14.3, 1716.0], [14.4, 1716.0], [14.5, 1716.0], [14.6, 1716.0], [14.7, 1716.0], [14.8, 1716.0], [14.9, 1716.0], [15.0, 1817.0], [15.1, 1817.0], [15.2, 1817.0], [15.3, 1817.0], [15.4, 1817.0], [15.5, 1817.0], [15.6, 1817.0], [15.7, 1817.0], [15.8, 1817.0], [15.9, 1817.0], [16.0, 1868.0], [16.1, 1868.0], [16.2, 1868.0], [16.3, 1868.0], [16.4, 1868.0], [16.5, 1868.0], [16.6, 1868.0], [16.7, 1868.0], [16.8, 1868.0], [16.9, 1868.0], [17.0, 1887.0], [17.1, 1887.0], [17.2, 1887.0], [17.3, 1887.0], [17.4, 1887.0], [17.5, 1887.0], [17.6, 1887.0], [17.7, 1887.0], [17.8, 1887.0], [17.9, 1887.0], [18.0, 1893.0], [18.1, 1893.0], [18.2, 1893.0], [18.3, 1893.0], [18.4, 1893.0], [18.5, 1893.0], [18.6, 1893.0], [18.7, 1893.0], [18.8, 1893.0], [18.9, 1893.0], [19.0, 1893.0], [19.1, 1893.0], [19.2, 1893.0], [19.3, 1893.0], [19.4, 1893.0], [19.5, 1893.0], [19.6, 1893.0], [19.7, 1893.0], [19.8, 1893.0], [19.9, 1893.0], [20.0, 1900.0], [20.1, 1900.0], [20.2, 1900.0], [20.3, 1900.0], [20.4, 1900.0], [20.5, 1900.0], [20.6, 1900.0], [20.7, 1900.0], [20.8, 1900.0], [20.9, 1900.0], [21.0, 1906.0], [21.1, 1906.0], [21.2, 1906.0], [21.3, 1906.0], [21.4, 1906.0], [21.5, 1906.0], [21.6, 1906.0], [21.7, 1906.0], [21.8, 1906.0], [21.9, 1906.0], [22.0, 1925.0], [22.1, 1925.0], [22.2, 1925.0], [22.3, 1925.0], [22.4, 1925.0], [22.5, 1925.0], [22.6, 1925.0], [22.7, 1925.0], [22.8, 1925.0], [22.9, 1925.0], [23.0, 1926.0], [23.1, 1926.0], [23.2, 1926.0], [23.3, 1926.0], [23.4, 1926.0], [23.5, 1926.0], [23.6, 1926.0], [23.7, 1926.0], [23.8, 1926.0], [23.9, 1926.0], [24.0, 1931.0], [24.1, 1931.0], [24.2, 1931.0], [24.3, 1931.0], [24.4, 1931.0], [24.5, 1931.0], [24.6, 1931.0], [24.7, 1931.0], [24.8, 1931.0], [24.9, 1931.0], [25.0, 1966.0], [25.1, 1966.0], [25.2, 1966.0], [25.3, 1966.0], [25.4, 1966.0], [25.5, 1966.0], [25.6, 1966.0], [25.7, 1966.0], [25.8, 1966.0], [25.9, 1966.0], [26.0, 1979.0], [26.1, 1979.0], [26.2, 1979.0], [26.3, 1979.0], [26.4, 1979.0], [26.5, 1979.0], [26.6, 1979.0], [26.7, 1979.0], [26.8, 1979.0], [26.9, 1979.0], [27.0, 2008.0], [27.1, 2008.0], [27.2, 2008.0], [27.3, 2008.0], [27.4, 2008.0], [27.5, 2008.0], [27.6, 2008.0], [27.7, 2008.0], [27.8, 2008.0], [27.9, 2008.0], [28.0, 2019.0], [28.1, 2019.0], [28.2, 2019.0], [28.3, 2019.0], [28.4, 2019.0], [28.5, 2019.0], [28.6, 2019.0], [28.7, 2019.0], [28.8, 2019.0], [28.9, 2019.0], [29.0, 2022.0], [29.1, 2022.0], [29.2, 2022.0], [29.3, 2022.0], [29.4, 2022.0], [29.5, 2022.0], [29.6, 2022.0], [29.7, 2022.0], [29.8, 2022.0], [29.9, 2022.0], [30.0, 2024.0], [30.1, 2024.0], [30.2, 2024.0], [30.3, 2024.0], [30.4, 2024.0], [30.5, 2024.0], [30.6, 2024.0], [30.7, 2024.0], [30.8, 2024.0], [30.9, 2024.0], [31.0, 2035.0], [31.1, 2035.0], [31.2, 2035.0], [31.3, 2035.0], [31.4, 2035.0], [31.5, 2035.0], [31.6, 2035.0], [31.7, 2035.0], [31.8, 2035.0], [31.9, 2035.0], [32.0, 2038.0], [32.1, 2038.0], [32.2, 2038.0], [32.3, 2038.0], [32.4, 2038.0], [32.5, 2038.0], [32.6, 2038.0], [32.7, 2038.0], [32.8, 2038.0], [32.9, 2038.0], [33.0, 2041.0], [33.1, 2041.0], [33.2, 2041.0], [33.3, 2041.0], [33.4, 2041.0], [33.5, 2041.0], [33.6, 2041.0], [33.7, 2041.0], [33.8, 2041.0], [33.9, 2041.0], [34.0, 2058.0], [34.1, 2058.0], [34.2, 2058.0], [34.3, 2058.0], [34.4, 2058.0], [34.5, 2058.0], [34.6, 2058.0], [34.7, 2058.0], [34.8, 2058.0], [34.9, 2058.0], [35.0, 2061.0], [35.1, 2061.0], [35.2, 2061.0], [35.3, 2061.0], [35.4, 2061.0], [35.5, 2061.0], [35.6, 2061.0], [35.7, 2061.0], [35.8, 2061.0], [35.9, 2061.0], [36.0, 2064.0], [36.1, 2064.0], [36.2, 2064.0], [36.3, 2064.0], [36.4, 2064.0], [36.5, 2064.0], [36.6, 2064.0], [36.7, 2064.0], [36.8, 2064.0], [36.9, 2064.0], [37.0, 2069.0], [37.1, 2069.0], [37.2, 2069.0], [37.3, 2069.0], [37.4, 2069.0], [37.5, 2069.0], [37.6, 2069.0], [37.7, 2069.0], [37.8, 2069.0], [37.9, 2069.0], [38.0, 2075.0], [38.1, 2075.0], [38.2, 2075.0], [38.3, 2075.0], [38.4, 2075.0], [38.5, 2075.0], [38.6, 2075.0], [38.7, 2075.0], [38.8, 2075.0], [38.9, 2075.0], [39.0, 2079.0], [39.1, 2079.0], [39.2, 2079.0], [39.3, 2079.0], [39.4, 2079.0], [39.5, 2079.0], [39.6, 2079.0], [39.7, 2079.0], [39.8, 2079.0], [39.9, 2079.0], [40.0, 2080.0], [40.1, 2080.0], [40.2, 2080.0], [40.3, 2080.0], [40.4, 2080.0], [40.5, 2080.0], [40.6, 2080.0], [40.7, 2080.0], [40.8, 2080.0], [40.9, 2080.0], [41.0, 2084.0], [41.1, 2084.0], [41.2, 2084.0], [41.3, 2084.0], [41.4, 2084.0], [41.5, 2084.0], [41.6, 2084.0], [41.7, 2084.0], [41.8, 2084.0], [41.9, 2084.0], [42.0, 2167.0], [42.1, 2167.0], [42.2, 2167.0], [42.3, 2167.0], [42.4, 2167.0], [42.5, 2167.0], [42.6, 2167.0], [42.7, 2167.0], [42.8, 2167.0], [42.9, 2167.0], [43.0, 2169.0], [43.1, 2169.0], [43.2, 2169.0], [43.3, 2169.0], [43.4, 2169.0], [43.5, 2169.0], [43.6, 2169.0], [43.7, 2169.0], [43.8, 2169.0], [43.9, 2169.0], [44.0, 2218.0], [44.1, 2218.0], [44.2, 2218.0], [44.3, 2218.0], [44.4, 2218.0], [44.5, 2218.0], [44.6, 2218.0], [44.7, 2218.0], [44.8, 2218.0], [44.9, 2218.0], [45.0, 2218.0], [45.1, 2218.0], [45.2, 2218.0], [45.3, 2218.0], [45.4, 2218.0], [45.5, 2218.0], [45.6, 2218.0], [45.7, 2218.0], [45.8, 2218.0], [45.9, 2218.0], [46.0, 2243.0], [46.1, 2243.0], [46.2, 2243.0], [46.3, 2243.0], [46.4, 2243.0], [46.5, 2243.0], [46.6, 2243.0], [46.7, 2243.0], [46.8, 2243.0], [46.9, 2243.0], [47.0, 2255.0], [47.1, 2255.0], [47.2, 2255.0], [47.3, 2255.0], [47.4, 2255.0], [47.5, 2255.0], [47.6, 2255.0], [47.7, 2255.0], [47.8, 2255.0], [47.9, 2255.0], [48.0, 2295.0], [48.1, 2295.0], [48.2, 2295.0], [48.3, 2295.0], [48.4, 2295.0], [48.5, 2295.0], [48.6, 2295.0], [48.7, 2295.0], [48.8, 2295.0], [48.9, 2295.0], [49.0, 2403.0], [49.1, 2403.0], [49.2, 2403.0], [49.3, 2403.0], [49.4, 2403.0], [49.5, 2403.0], [49.6, 2403.0], [49.7, 2403.0], [49.8, 2403.0], [49.9, 2403.0], [50.0, 2414.0], [50.1, 2414.0], [50.2, 2414.0], [50.3, 2414.0], [50.4, 2414.0], [50.5, 2414.0], [50.6, 2414.0], [50.7, 2414.0], [50.8, 2414.0], [50.9, 2414.0], [51.0, 2478.0], [51.1, 2478.0], [51.2, 2478.0], [51.3, 2478.0], [51.4, 2478.0], [51.5, 2478.0], [51.6, 2478.0], [51.7, 2478.0], [51.8, 2478.0], [51.9, 2478.0], [52.0, 2490.0], [52.1, 2490.0], [52.2, 2490.0], [52.3, 2490.0], [52.4, 2490.0], [52.5, 2490.0], [52.6, 2490.0], [52.7, 2490.0], [52.8, 2490.0], [52.9, 2490.0], [53.0, 2493.0], [53.1, 2493.0], [53.2, 2493.0], [53.3, 2493.0], [53.4, 2493.0], [53.5, 2493.0], [53.6, 2493.0], [53.7, 2493.0], [53.8, 2493.0], [53.9, 2493.0], [54.0, 2508.0], [54.1, 2508.0], [54.2, 2508.0], [54.3, 2508.0], [54.4, 2508.0], [54.5, 2508.0], [54.6, 2508.0], [54.7, 2508.0], [54.8, 2508.0], [54.9, 2508.0], [55.0, 2512.0], [55.1, 2512.0], [55.2, 2512.0], [55.3, 2512.0], [55.4, 2512.0], [55.5, 2512.0], [55.6, 2512.0], [55.7, 2512.0], [55.8, 2512.0], [55.9, 2512.0], [56.0, 2515.0], [56.1, 2515.0], [56.2, 2515.0], [56.3, 2515.0], [56.4, 2515.0], [56.5, 2515.0], [56.6, 2515.0], [56.7, 2515.0], [56.8, 2515.0], [56.9, 2515.0], [57.0, 2521.0], [57.1, 2521.0], [57.2, 2521.0], [57.3, 2521.0], [57.4, 2521.0], [57.5, 2521.0], [57.6, 2521.0], [57.7, 2521.0], [57.8, 2521.0], [57.9, 2521.0], [58.0, 2592.0], [58.1, 2592.0], [58.2, 2592.0], [58.3, 2592.0], [58.4, 2592.0], [58.5, 2592.0], [58.6, 2592.0], [58.7, 2592.0], [58.8, 2592.0], [58.9, 2592.0], [59.0, 2602.0], [59.1, 2602.0], [59.2, 2602.0], [59.3, 2602.0], [59.4, 2602.0], [59.5, 2602.0], [59.6, 2602.0], [59.7, 2602.0], [59.8, 2602.0], [59.9, 2602.0], [60.0, 2834.0], [60.1, 2834.0], [60.2, 2834.0], [60.3, 2834.0], [60.4, 2834.0], [60.5, 2834.0], [60.6, 2834.0], [60.7, 2834.0], [60.8, 2834.0], [60.9, 2834.0], [61.0, 2914.0], [61.1, 2914.0], [61.2, 2914.0], [61.3, 2914.0], [61.4, 2914.0], [61.5, 2914.0], [61.6, 2914.0], [61.7, 2914.0], [61.8, 2914.0], [61.9, 2914.0], [62.0, 2932.0], [62.1, 2932.0], [62.2, 2932.0], [62.3, 2932.0], [62.4, 2932.0], [62.5, 2932.0], [62.6, 2932.0], [62.7, 2932.0], [62.8, 2932.0], [62.9, 2932.0], [63.0, 2943.0], [63.1, 2943.0], [63.2, 2943.0], [63.3, 2943.0], [63.4, 2943.0], [63.5, 2943.0], [63.6, 2943.0], [63.7, 2943.0], [63.8, 2943.0], [63.9, 2943.0], [64.0, 2963.0], [64.1, 2963.0], [64.2, 2963.0], [64.3, 2963.0], [64.4, 2963.0], [64.5, 2963.0], [64.6, 2963.0], [64.7, 2963.0], [64.8, 2963.0], [64.9, 2963.0], [65.0, 2998.0], [65.1, 2998.0], [65.2, 2998.0], [65.3, 2998.0], [65.4, 2998.0], [65.5, 2998.0], [65.6, 2998.0], [65.7, 2998.0], [65.8, 2998.0], [65.9, 2998.0], [66.0, 3000.0], [66.1, 3000.0], [66.2, 3000.0], [66.3, 3000.0], [66.4, 3000.0], [66.5, 3000.0], [66.6, 3000.0], [66.7, 3000.0], [66.8, 3000.0], [66.9, 3000.0], [67.0, 3059.0], [67.1, 3059.0], [67.2, 3059.0], [67.3, 3059.0], [67.4, 3059.0], [67.5, 3059.0], [67.6, 3059.0], [67.7, 3059.0], [67.8, 3059.0], [67.9, 3059.0], [68.0, 3081.0], [68.1, 3081.0], [68.2, 3081.0], [68.3, 3081.0], [68.4, 3081.0], [68.5, 3081.0], [68.6, 3081.0], [68.7, 3081.0], [68.8, 3081.0], [68.9, 3081.0], [69.0, 3096.0], [69.1, 3096.0], [69.2, 3096.0], [69.3, 3096.0], [69.4, 3096.0], [69.5, 3096.0], [69.6, 3096.0], [69.7, 3096.0], [69.8, 3096.0], [69.9, 3096.0], [70.0, 3113.0], [70.1, 3113.0], [70.2, 3113.0], [70.3, 3113.0], [70.4, 3113.0], [70.5, 3113.0], [70.6, 3113.0], [70.7, 3113.0], [70.8, 3113.0], [70.9, 3113.0], [71.0, 3207.0], [71.1, 3207.0], [71.2, 3207.0], [71.3, 3207.0], [71.4, 3207.0], [71.5, 3207.0], [71.6, 3207.0], [71.7, 3207.0], [71.8, 3207.0], [71.9, 3207.0], [72.0, 3221.0], [72.1, 3221.0], [72.2, 3221.0], [72.3, 3221.0], [72.4, 3221.0], [72.5, 3221.0], [72.6, 3221.0], [72.7, 3221.0], [72.8, 3221.0], [72.9, 3221.0], [73.0, 3252.0], [73.1, 3252.0], [73.2, 3252.0], [73.3, 3252.0], [73.4, 3252.0], [73.5, 3252.0], [73.6, 3252.0], [73.7, 3252.0], [73.8, 3252.0], [73.9, 3252.0], [74.0, 3266.0], [74.1, 3266.0], [74.2, 3266.0], [74.3, 3266.0], [74.4, 3266.0], [74.5, 3266.0], [74.6, 3266.0], [74.7, 3266.0], [74.8, 3266.0], [74.9, 3266.0], [75.0, 3290.0], [75.1, 3290.0], [75.2, 3290.0], [75.3, 3290.0], [75.4, 3290.0], [75.5, 3290.0], [75.6, 3290.0], [75.7, 3290.0], [75.8, 3290.0], [75.9, 3290.0], [76.0, 3319.0], [76.1, 3319.0], [76.2, 3319.0], [76.3, 3319.0], [76.4, 3319.0], [76.5, 3319.0], [76.6, 3319.0], [76.7, 3319.0], [76.8, 3319.0], [76.9, 3319.0], [77.0, 3319.0], [77.1, 3319.0], [77.2, 3319.0], [77.3, 3319.0], [77.4, 3319.0], [77.5, 3319.0], [77.6, 3319.0], [77.7, 3319.0], [77.8, 3319.0], [77.9, 3319.0], [78.0, 3326.0], [78.1, 3326.0], [78.2, 3326.0], [78.3, 3326.0], [78.4, 3326.0], [78.5, 3326.0], [78.6, 3326.0], [78.7, 3326.0], [78.8, 3326.0], [78.9, 3326.0], [79.0, 3327.0], [79.1, 3327.0], [79.2, 3327.0], [79.3, 3327.0], [79.4, 3327.0], [79.5, 3327.0], [79.6, 3327.0], [79.7, 3327.0], [79.8, 3327.0], [79.9, 3327.0], [80.0, 3438.0], [80.1, 3438.0], [80.2, 3438.0], [80.3, 3438.0], [80.4, 3438.0], [80.5, 3438.0], [80.6, 3438.0], [80.7, 3438.0], [80.8, 3438.0], [80.9, 3438.0], [81.0, 3463.0], [81.1, 3463.0], [81.2, 3463.0], [81.3, 3463.0], [81.4, 3463.0], [81.5, 3463.0], [81.6, 3463.0], [81.7, 3463.0], [81.8, 3463.0], [81.9, 3463.0], [82.0, 3481.0], [82.1, 3481.0], [82.2, 3481.0], [82.3, 3481.0], [82.4, 3481.0], [82.5, 3481.0], [82.6, 3481.0], [82.7, 3481.0], [82.8, 3481.0], [82.9, 3481.0], [83.0, 3488.0], [83.1, 3488.0], [83.2, 3488.0], [83.3, 3488.0], [83.4, 3488.0], [83.5, 3488.0], [83.6, 3488.0], [83.7, 3488.0], [83.8, 3488.0], [83.9, 3488.0], [84.0, 3493.0], [84.1, 3493.0], [84.2, 3493.0], [84.3, 3493.0], [84.4, 3493.0], [84.5, 3493.0], [84.6, 3493.0], [84.7, 3493.0], [84.8, 3493.0], [84.9, 3493.0], [85.0, 3509.0], [85.1, 3509.0], [85.2, 3509.0], [85.3, 3509.0], [85.4, 3509.0], [85.5, 3509.0], [85.6, 3509.0], [85.7, 3509.0], [85.8, 3509.0], [85.9, 3509.0], [86.0, 3542.0], [86.1, 3542.0], [86.2, 3542.0], [86.3, 3542.0], [86.4, 3542.0], [86.5, 3542.0], [86.6, 3542.0], [86.7, 3542.0], [86.8, 3542.0], [86.9, 3542.0], [87.0, 3595.0], [87.1, 3595.0], [87.2, 3595.0], [87.3, 3595.0], [87.4, 3595.0], [87.5, 3595.0], [87.6, 3595.0], [87.7, 3595.0], [87.8, 3595.0], [87.9, 3595.0], [88.0, 3608.0], [88.1, 3608.0], [88.2, 3608.0], [88.3, 3608.0], [88.4, 3608.0], [88.5, 3608.0], [88.6, 3608.0], [88.7, 3608.0], [88.8, 3608.0], [88.9, 3608.0], [89.0, 3627.0], [89.1, 3627.0], [89.2, 3627.0], [89.3, 3627.0], [89.4, 3627.0], [89.5, 3627.0], [89.6, 3627.0], [89.7, 3627.0], [89.8, 3627.0], [89.9, 3627.0], [90.0, 3632.0], [90.1, 3632.0], [90.2, 3632.0], [90.3, 3632.0], [90.4, 3632.0], [90.5, 3632.0], [90.6, 3632.0], [90.7, 3632.0], [90.8, 3632.0], [90.9, 3632.0], [91.0, 3650.0], [91.1, 3650.0], [91.2, 3650.0], [91.3, 3650.0], [91.4, 3650.0], [91.5, 3650.0], [91.6, 3650.0], [91.7, 3650.0], [91.8, 3650.0], [91.9, 3650.0], [92.0, 3662.0], [92.1, 3662.0], [92.2, 3662.0], [92.3, 3662.0], [92.4, 3662.0], [92.5, 3662.0], [92.6, 3662.0], [92.7, 3662.0], [92.8, 3662.0], [92.9, 3662.0], [93.0, 3717.0], [93.1, 3717.0], [93.2, 3717.0], [93.3, 3717.0], [93.4, 3717.0], [93.5, 3717.0], [93.6, 3717.0], [93.7, 3717.0], [93.8, 3717.0], [93.9, 3717.0], [94.0, 3737.0], [94.1, 3737.0], [94.2, 3737.0], [94.3, 3737.0], [94.4, 3737.0], [94.5, 3737.0], [94.6, 3737.0], [94.7, 3737.0], [94.8, 3737.0], [94.9, 3737.0], [95.0, 3743.0], [95.1, 3743.0], [95.2, 3743.0], [95.3, 3743.0], [95.4, 3743.0], [95.5, 3743.0], [95.6, 3743.0], [95.7, 3743.0], [95.8, 3743.0], [95.9, 3743.0], [96.0, 3791.0], [96.1, 3791.0], [96.2, 3791.0], [96.3, 3791.0], [96.4, 3791.0], [96.5, 3791.0], [96.6, 3791.0], [96.7, 3791.0], [96.8, 3791.0], [96.9, 3791.0], [97.0, 3851.0], [97.1, 3851.0], [97.2, 3851.0], [97.3, 3851.0], [97.4, 3851.0], [97.5, 3851.0], [97.6, 3851.0], [97.7, 3851.0], [97.8, 3851.0], [97.9, 3851.0], [98.0, 3892.0], [98.1, 3892.0], [98.2, 3892.0], [98.3, 3892.0], [98.4, 3892.0], [98.5, 3892.0], [98.6, 3892.0], [98.7, 3892.0], [98.8, 3892.0], [98.9, 3892.0], [99.0, 3902.0], [99.1, 3902.0], [99.2, 3902.0], [99.3, 3902.0], [99.4, 3902.0], [99.5, 3902.0], [99.6, 3902.0], [99.7, 3902.0], [99.8, 3902.0], [99.9, 3902.0]], "isOverall": false, "label": "JDBC Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 15.0, "series": [{"data": [[1200.0, 3.0], [1300.0, 1.0], [1400.0, 7.0], [1600.0, 2.0], [1700.0, 1.0], [1800.0, 5.0], [1900.0, 7.0], [2000.0, 15.0], [2100.0, 2.0], [2200.0, 5.0], [2400.0, 5.0], [2500.0, 5.0], [2600.0, 1.0], [2800.0, 1.0], [2900.0, 5.0], [3000.0, 4.0], [3100.0, 1.0], [3300.0, 4.0], [3200.0, 5.0], [3400.0, 5.0], [3500.0, 3.0], [3700.0, 4.0], [3600.0, 5.0], [3800.0, 2.0], [3900.0, 1.0], [300.0, 1.0]], "isOverall": false, "label": "JDBC Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 88.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 11.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 88.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 50.56999999999999, "minX": 1.66989396E12, "maxY": 50.56999999999999, "series": [{"data": [[1.66989396E12, 50.56999999999999]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66989396E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 346.0, "minX": 1.0, "maxY": 3902.0, "series": [{"data": [[2.0, 3627.0], [3.0, 2167.0], [4.0, 2084.0], [5.0, 2080.0], [6.0, 2064.0], [7.0, 2058.0], [8.0, 2041.0], [9.0, 2038.0], [10.0, 2024.0], [11.0, 1966.0], [12.0, 1931.0], [13.0, 1926.0], [14.0, 1906.0], [15.0, 3791.0], [16.0, 3902.0], [17.0, 1893.0], [18.0, 1893.0], [20.0, 3535.5], [21.0, 1887.0], [22.0, 1868.0], [23.0, 3717.0], [25.0, 3871.5], [27.0, 3628.5], [28.0, 3488.0], [30.0, 3687.5], [33.0, 3438.0], [32.0, 3639.5], [35.0, 3493.0], [34.0, 3221.0], [37.0, 3266.0], [36.0, 3252.0], [39.0, 3319.0], [38.0, 3326.0], [41.0, 3059.0], [40.0, 2963.0], [43.0, 3509.0], [42.0, 3290.0], [45.0, 2998.0], [44.0, 3096.0], [47.0, 2943.0], [46.0, 3081.0], [49.0, 3481.0], [48.0, 3327.0], [51.0, 2932.0], [50.0, 3207.0], [53.0, 2914.0], [52.0, 3319.0], [55.0, 3000.0], [54.0, 2834.0], [57.0, 1608.0], [56.0, 1609.0], [59.0, 1479.0], [58.0, 3113.0], [61.0, 1425.0], [60.0, 1472.0], [63.0, 1428.5], [67.0, 1269.0], [66.0, 1478.0], [65.0, 1341.0], [64.0, 1417.0], [71.0, 2069.0], [70.0, 2075.0], [69.0, 1247.0], [68.0, 1261.0], [75.0, 2478.0], [74.0, 1900.0], [73.0, 2022.0], [72.0, 2019.0], [79.0, 2035.0], [78.0, 2255.0], [77.0, 2602.0], [76.0, 2243.0], [83.0, 2490.0], [82.0, 346.0], [81.0, 2493.0], [80.0, 2295.0], [87.0, 2515.0], [86.0, 2218.0], [85.0, 2079.0], [84.0, 2592.0], [91.0, 2061.0], [90.0, 2512.0], [89.0, 2403.0], [88.0, 2008.0], [95.0, 2508.0], [94.0, 2218.0], [93.0, 1817.0], [92.0, 2169.0], [98.0, 1979.0], [97.0, 2414.0], [96.0, 2521.0], [100.0, 1820.5], [1.0, 3650.0]], "isOverall": false, "label": "JDBC Request", "isController": false}, {"data": [[50.56999999999999, 2525.4700000000003]], "isOverall": false, "label": "JDBC Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.66989396E12, "maxY": 15.0, "series": [{"data": [[1.66989396E12, 15.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66989396E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66989396E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2525.4700000000003, "minX": 1.66989396E12, "maxY": 2525.4700000000003, "series": [{"data": [[1.66989396E12, 2525.4700000000003]], "isOverall": false, "label": "JDBC Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66989396E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2525.3000000000006, "minX": 1.66989396E12, "maxY": 2525.3000000000006, "series": [{"data": [[1.66989396E12, 2525.3000000000006]], "isOverall": false, "label": "JDBC Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66989396E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2361.219999999999, "minX": 1.66989396E12, "maxY": 2361.219999999999, "series": [{"data": [[1.66989396E12, 2361.219999999999]], "isOverall": false, "label": "JDBC Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66989396E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 346.0, "minX": 1.66989396E12, "maxY": 3902.0, "series": [{"data": [[1.66989396E12, 3902.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66989396E12, 3631.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66989396E12, 3901.9]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66989396E12, 3742.7]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66989396E12, 346.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66989396E12, 2408.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66989396E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2218.0, "minX": 22.0, "maxY": 3345.0, "series": [{"data": [[36.0, 3345.0], [42.0, 2540.0], [22.0, 2218.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 42.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2218.0, "minX": 22.0, "maxY": 3344.5, "series": [{"data": [[36.0, 3344.5], [42.0, 2539.5], [22.0, 2218.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 42.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.6698939E12, "maxY": 1.1833333333333333, "series": [{"data": [[1.6698939E12, 1.1833333333333333], [1.66989396E12, 0.48333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66989396E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66989396E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66989396E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66989396E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66989396E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66989396E12, 1.6666666666666667]], "isOverall": false, "label": "JDBC Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66989396E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66989396E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66989396E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66989396E12, "title": "Total Transactions Per Second"}},
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

