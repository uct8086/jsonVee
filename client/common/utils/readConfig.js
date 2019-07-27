
const config2obj = function(cfg) {
    let url = cfg.url || "";
    let dataListKey = cfg.dataListKey || "";
    let cacheTime = cfg.cacheTime || 3;
    let fnSort = cfg.fnSort;
    let fnFilter = cfg.fnFilter;
    
    return new Promise((resolve,reject) => {

        if (url == "") {
            reject(new Error("empty url!"));
        }

        let str = url.split("?")[0];
        str = str.replace("//qzonestyle.gtimg.cn/qzone/qzactStatics/qbrowser/data/","");
        let arr = str.split("/");
        let strcallback = "";

        if (2 == arr.length){
            var arrFileNmae =  arr[1].split(".");
            strcallback =  "callback_" + arr[0]  + "_" + arrFileNmae[0]; 
        } else {
            reject(new Error("url error, cannot resolve callback function name"));
        }

        window[strcallback] = function(data) {
            if(dataListKey != ""){
                data = data[dataListKey];
            }
            let newData = data;
            if(data instanceof Array) {
                if(typeof(fnSort) == "function"){
                    data.sort(fnSort);
                }

                if(typeof(fnFilter) == "function"){
                    newData = data.filter(fnFilter)
                }

            }

            resolve(newData);
        }

        let script = document.createElement("script");
        script.type = "text/javascript";

        cacheTime = cacheTime * 60;
        if (-1 == url.indexOf("?")) {
            url += "?max_age=" + parseInt(cacheTime,10);
        }else {
            url += "&max_age=" + parseInt(cacheTime,10);
        }

        script.src = url;

        script.onerror = function() {
            reject(new Error("read config failed"))
        }

        script.onload = function () {
			script.onload = null
			if (script.parentNode) {
				script.parentNode.removeChild(script)
			}
			window[strcallback] = null
        }

        document.getElementsByTagName('head')[0].appendChild(script)
    })
}

export default config2obj;
