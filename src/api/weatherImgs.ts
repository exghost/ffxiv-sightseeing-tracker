import data from 'db/weather_img';


export const getWeatherImg = (weather: string): string => {
    let weatherImgs = data.weatherImgs.filter((weatherImg) => weatherImg.name === weather);

    if(!weatherImgs.length) return '';

    let imgPaths = weatherImgs.map((weatherImg) => weatherImg.imgPath);

    return imgPaths[0];
}