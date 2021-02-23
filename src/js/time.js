/*
 * @Author: your name
 * @Date: 2021-02-22 14:46:32
 * @LastEditTime: 2021-02-22 15:18:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \XS\src\js\time.js
 */
export function dateFormat() {
    
    const date = new Date();
    const d = date.toLocaleString('chinese', {
        hour12: false, year: 'numeric', month: '2-digit', day: '2-digit',
        hour: 'numeric', minute: 'numeric', second: 'numeric'
    });
    const dateArr = d.split(' ');
    const baseDate = dateArr[0].split('/');
    return {
        time:`${baseDate[0]}-${baseDate[1]}-${baseDate[2]}  ${dateArr[1]}`,
        week:weakEnum(date.getDay())
    }
}

function weakEnum(day) {
    switch (day) {
        case 0:
            return '星期天';
        case 1:
            return '星期一';
        case 2:
            return '星期二';
        case 3:
            return '星期三';
        case 4:
            return '星期四';
        case 5:
            return '星期五';
        case 6:
            return '星期六';
    }
}
