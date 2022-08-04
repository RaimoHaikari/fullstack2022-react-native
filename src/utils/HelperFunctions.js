export const formatNumber = (num) => {

    if(num < 1000)
        return '' + num;

    const x = Math.round(num / 100)  / 10;

    return `${x}K`;
    
}