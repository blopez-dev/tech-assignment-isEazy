import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { useIntl } from 'react-intl';
import dayjs from 'dayjs';
import { fetchWeatherData } from '@/services/http/index.ts';
import { Head } from '@/common/components';
import formatTimestamp from '@/utils/date';
import sunny from '@/assets/weather-icons/sunny.png';
import clouds from '@/assets/weather-icons/clouds.png';
import rain from '@/assets/weather-icons/rain.png';
import storm from '@/assets/weather-icons/storm.png';
import wind from '@/assets/weather-icons/wind.png';
import humidity from '@/assets/weather-icons/humidity.png';
import temperature from '@/assets/weather-icons/temperature.png';
import visibility from '@/assets/weather-icons/visibility.png';
import presure from '@/assets/weather-icons/pressure.png';
import { WeatherCardContainer } from './weather.styles';
interface WeatherData {
  temperature: number;
  conditions: string;
  humidity: number;
  cityName: string;
  wind: number;
  iconCode: string;
  description: string;
  feelsLike: number;
  visibility: number;
  pressure: number;
  timeStamp: number;
  sunrise: number;
  sunset: number;
  isSuccessful: boolean;
}

const WeatherCard: React.FC = () => {
  const [country, setCountry] = useState<string>('london');
  const [weatherData, setWeatherData] = useState<WeatherData>({
    conditions: '',
    temperature: 0,
    humidity: 0,
    cityName: '',
    wind: 0,
    iconCode: '',
    description: '',
    feelsLike: 0,
    visibility: 0,
    pressure: 0,
    timeStamp: 0,
    sunrise: 0,
    sunset: 0,
    isSuccessful: false,
  });
  const [iconWeather, setIcon] = useState<string>(sunny);
  const currenTime = dayjs().format('HH:mm');
  const getWeatherIcon = (iconCode: string) => {
    if (iconCode.includes('01', 0)) setIcon(sunny);
    if (
      iconCode.includes('02') ||
      iconCode.includes('03', 0) ||
      iconCode.includes('04', 0) ||
      iconCode.includes('05', 0)
    )
      setIcon(clouds);
    if (
      iconCode.includes('13', 0) ||
      iconCode.includes('18', 0) ||
      iconCode.includes('26', 0) ||
      iconCode.includes('29', 0) ||
      iconCode.includes('39', 0)
    )
      setIcon(rain);
    if (
      iconCode.includes('41', 0) ||
      iconCode.includes('16', 0) ||
      iconCode.includes('17', 0) ||
      iconCode.includes('29', 0) ||
      iconCode.includes('39', 0) ||
      iconCode.includes('40', 0)
    )
      setIcon(storm);
    if (iconCode.includes('32', 0)) setIcon(wind);
  };
  const getCountryData = async (city: string) => {
    const data = await fetchWeatherData(city);
    getWeatherIcon(data.iconCode);
    setWeatherData(data);
  };
  const { formatMessage } = useIntl();

  useEffect(() => {
    getCountryData(country);
  }, [country]);

  return (
    <>
      <Head onCitySelect={setCountry} />
      <WeatherCardContainer>
        {weatherData && (
          <>
            <Card
              title={`${formatMessage({ id: 'currentTime' })}${currenTime}`}
              bordered={false}
              className="current__weather current__weather--basic"
            >
              <div className="main-section">
                <div className="weather-summary">
                  <div className="current__weather--city">
                    <p>{weatherData.cityName}</p>
                    <span>{currenTime}</span>
                  </div>
                  <hr className="divider" />
                  <div className="current__weather--details">
                    <div className="current__weather--icon">{<img src={iconWeather} alt="Weather Icon" />}</div>
                    <div className="current__weather--temperature">{Math.floor(weatherData.temperature)}°C</div>
                    <div className="current__weather--details--conditions">
                      <div className="current__weather--conditions">{weatherData.conditions}</div>
                      <div>
                        {formatMessage({ id: 'feelsLike' })} {Math.floor(weatherData.feelsLike)}°C
                      </div>
                    </div>
                  </div>
                  <div className="current__weather--footer">{weatherData.description}</div>
                </div>
              </div>
            </Card>
            <Card
              title={`${formatMessage({ id: 'weatherSummary' })}`}
              bordered={false}
              className="current__weather current__weather--summary"
            >
              <div className="current__weather--summary--details">
                <div className="details">{formatMessage({ id: 'details' })}</div>
                <div className="current__weather--summary--element">
                  <div className="current__weather--summary--image">
                    {<img src={temperature} alt="weather element" />}
                  </div>
                  <div className="current__weather--summary--element--details">
                    <div className="name">{formatMessage({ id: 'temperature' })}</div>
                    <div className="value">{Math.floor(weatherData.temperature)}°C</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="current__weather--summary--element">
                  <div className="current__weather--summary--image">{<img src={humidity} alt="weather element" />}</div>
                  <div className="current__weather--summary--element--details">
                    <div className="name">{formatMessage({ id: 'humidity' })}</div>
                    <div className="value">{weatherData.humidity}%</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="current__weather--summary--element">
                  <div className="current__weather--summary--image">
                    {<img src={iconWeather} alt="weather element" />}
                  </div>
                  <div className="current__weather--summary--element--details">
                    <div className="name">{formatMessage({ id: 'conditions' })}</div>
                    <div className="value">{weatherData.conditions}</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="current__weather--summary--element">
                  <div className="current__weather--summary--image">{<img src={wind} alt="weather element" />}</div>
                  <div className="element-details">
                    <div className="element-name">{formatMessage({ id: 'wind' })}</div>
                    <div className="element-value">{Math.floor(weatherData.wind)} km/h</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="current__weather--summary--element">
                  <div className="current__weather--summary--image">{<img src={presure} alt="weather element" />}</div>
                  <div className="current__weather--summary--element--details">
                    <div className="name">{formatMessage({ id: 'pressure' })}</div>
                    <div className="value">{weatherData.pressure} hPa</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="current__weather--summary--element">
                  <div className="current__weather--summary--image">{<img src={sunny} alt="weather element" />}</div>
                  <div className="current__weather--summary--element--details">
                    <div className="name">{formatMessage({ id: 'sunrise' })}</div>
                    <div className="value">{formatTimestamp(weatherData.sunrise)}</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="current__weather--summary--element">
                  <div className="current__weather--summary--image">
                    {<img src={sunny} alt="current__weather--summary--image" />}
                  </div>
                  <div className="current__weather--summary--element--details">
                    <div className="name">{formatMessage({ id: 'sunset' })}</div>
                    <div className="value">{formatTimestamp(weatherData.sunset)}</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="current__weather--summary--element">
                  <div className="current__weather--summary--image">
                    {<img src={visibility} alt="weather element" />}
                  </div>
                  <div className="current__weather--summary--element--details">
                    <div className="name">{formatMessage({ id: 'visibility' })}</div>
                    <div className="value">{Math.floor(weatherData.visibility / 1000)} km</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
              </div>
            </Card>
          </>
        )}
      </WeatherCardContainer>
    </>
  );
};

export default WeatherCard;
