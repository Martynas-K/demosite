import React, {Component} from 'react';
import styles from '../styles/scss/Weather.module.scss';
import axios from 'axios';
import weatherTypes from '../data/weatherTypes'

class Weather extends Component {
    state = {
        forecasts: [ ],
        currentCondition: ''
    };

    componentDidMount() {
        axios.get('https://api.meteo.lt/v1/places/kaunas/forecasts/long-term')
            .then(res => {
                this.setState({
                    forecasts: res.data.forecastTimestamps.slice(0, 10),
                });
            }).then(() =>
                {this.setState({
                    currentCondition: this.state.forecasts[0].conditionCode
                })}
            )
    }

    currentCondition = (condition, obj) => {
        return obj.sunny.type.includes(condition) ? obj.sunny.url
             : obj.rainy.type.includes(condition) ? obj.rainy.url
             : obj.snowy.url
    };

    render() {
        console.log('Current weather condition:', this.state.currentCondition);

        return (
            <div className={styles.weatherWrapper}>
                <img className={styles.weatherImg}
                     src={this.currentCondition(this.state.currentCondition, weatherTypes)}/>
            </div>
        );
    }
}

export default Weather;