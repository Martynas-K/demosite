const weatherTypes = {
    sunny: {
        type: ['clear', 'isolated-clouds', 'scattered-clouds', 'na'],
        url: require('../images/sunglasses.svg')
    },
    rainy: {
        type: ['overcast', 'light-rain', 'moderate-rain', 'heavy-rain', 'fog'],
        url: require('../images/umbrella.svg')
    },
    snowy: {
        type: ['sleet', 'light-snow', 'moderate-snow', 'heavy-snow'],
        url: require('../images/snowflake.svg')
    }
};

export default weatherTypes;