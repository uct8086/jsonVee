/**
 * @description 常用工具集合
 */

const flattenArrayToObject = function(list = [], keyField = `id`, valueField = `name`) {
    return list.reduce((acc, val) => {
        if (acc[keyField]) {
            const temp = {};
            temp[acc[keyField]] = acc[valueField];
            temp[val[keyField]] = val[valueField];
            return temp;
        }
        acc[val[keyField]] = val[valueField];
        return acc;
    }, {});
};

const countText = function(text) {
    return (text || ``).replace(/[^\x00-\xff]/gi, `aa`).length;
};
const cutText = function(text, n, suffix) {
    const r = /[^\x00-\xff]/g;
    if (text.replace(r, `aa`).length <= n) {
        return text;
    }
    const m = Math.floor(n / 2);
    for (let i = m; i < text.length; i++) {
        if (text.substr(0, i).replace(r, `aa`).length >= n) {
            return text.substr(0, i) + (suffix ? `...` : ``);
        }
    }
    return text;
};

const thousandNumber = function(x = ``) {
    return !x ? x : `${x}`.replace(/\B(?=(\d{3})+(?!\d))/g, `,`);
};

const paddingText = function(text = ``, count = 5, token = `0`, direction = `left`) {
    if (!text && text !== 0) {
        return text;
    }
    const repeatedTokens = `${token}`.repeat(count);
    const fullText = direction === `left` ? `${repeatedTokens}${text}` : `${text}${repeatedTokens}`;
    return fullText.substr(direction === `left` ? -1 * count : 0);
};
const detectEnv = () => {
    const ua = navigator.userAgent;
    let platform = '';
    if (ua.indexOf('Android') > -1) {
        platform = 'android';
    }
    if (ua.indexOf('iPhone') > -1) {
        platform = 'ios';
    }
    const isWeChat = /MicroMessenger/i.test(ua);
    const isMobileQQ = /\/[\w. ]+QQ\//i.test(ua);
    const isQZone = /Qzone/i.test(ua);
    const isQQBrowser = !isWeChat && !isMobileQQ && /\/[\w. ]+MQQBrowser\//i.test(ua);
    return {
        isWeChat,
        isMobileQQ,
        isQZone,
        isQQBrowser,
        platform
    };
};
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};
const getCostText = (cost = 0) => {
    let costText;
    if (cost < 5) {
        costText = 5;
    } else if (cost < 10) {
        costText = 10;
    } else if (cost < 20) {
        costText = 20;
    } else if (cost < 30) {
        costText = 30;
    } else if (cost < 50) {
        costText = 50;
    } else if (cost < 100) {
        costText = 100;
    } else if (cost < 200) {
        costText = 200;
    } else {
        costText = '200+';
    }
    return costText;
};
const groupList = (list = [], size = 0) => {
    let page = 0;
    const resList = [];
    if (!list.length || size < 1) {
        return list;
    }
    while (page > -1) {
        const tempList = list.slice(size * page, size * (page + 1));
        if (tempList.length < size) {
            page = -1;
        } else {
            page += 1;
        }
        if (tempList.length) {
            resList.push(tempList);
        }
    }
    return resList;
};

export {
    flattenArrayToObject,
    countText,
    cutText,
    thousandNumber,
    paddingText,
    detectEnv,
    getCookie,
    getCostText,
    groupList
};