import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { useIntl } from 'react-intl';
import dayjs from 'dayjs';
import { fetchWeatherData } from '@/services/http/index.ts';
import { Head } from '@/common/components';
import { formatTimestamp } from '@/utils/date';
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
  const currenTime = dayjs().format('HH:mm');
  const getCountryData = async (city: string) => {
    const data = await fetchWeatherData(city);
    setWeatherData(data);
  };
  const { formatMessage } = useIntl();

  useEffect(() => {
    getCountryData(country);
  }, [country]);

  return (
    <>
      <Head onCitySelect={setCountry} />
      <div className="weather-card">
        {weatherData && (
          <>
            <div>
              <Card
                title={weatherData.cityName}
                extra={`${formatMessage({ id: 'currentTime' })}${currenTime}`}
                bordered={false}
                style={{ width: 300 }}
              >
                <div className="main-section">
                  <div className="weather-summary">
                    <div className="summary-header">
                      <div className="weather-text">{formatMessage({ id: 'currentTime' })}</div>
                      <div>{currenTime}</div>
                    </div>
                    <div>
                      <hr className="divider" />
                    </div>
                    <div className="main-summary">
                      <div className="weather-icon">{/*<img src={weatherIcon} alt="Weather Icon" />*/}</div>
                      <div>
                        <div className="main-temp">{Math.floor(weatherData.temperature)}°C</div>
                      </div>
                      <div className="summary-details">
                        <div className="summary-conditions">{weatherData.conditions}</div>
                        <div>
                          {formatMessage({ id: 'feelsLike' })} {Math.floor(weatherData.feelsLike)}°C
                        </div>
                      </div>
                    </div>
                    <div className="summary-footer">
                      <div>{weatherData.description}</div>
                    </div>
                  </div>
                </div>
              </Card>
              <div className="weather-details">
                <div className="details">{formatMessage({ id: 'details' })}</div>
                <div className="weather-element">
                  <div className="element-image">{/*<img src={temperature_icon} alt="weather element" />*/}</div>
                  <div className="element-details">
                    <div className="element-name">{formatMessage({ id: 'temperature' })}</div>
                    <div className="element-value">{Math.floor(weatherData.temperature)}°C</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="weather-element">
                  <div className="element-image">{/*<img src={humidity_icon} alt="weather element" />*/}</div>
                  <div className="element-details">
                    <div className="element-name">{formatMessage({ id: 'humidity' })}</div>
                    <div className="element-value">{weatherData.humidity}%</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="weather-element">
                  <div className="element-image">{/*<img src={weatherIcon} alt="weather element" />*/}</div>
                  <div className="element-details">
                    <div className="element-name">{formatMessage({ id: 'conditions' })}</div>
                    <div className="element-value">{weatherData.conditions}</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="weather-element">
                  <div className="element-image">{/*<img src={wind_icon} alt="weather element" />*/}</div>
                  <div className="element-details">
                    <div className="element-name">{formatMessage({ id: 'wind' })}</div>
                    <div className="element-value">{Math.floor(weatherData.wind)} km/h</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="weather-element">
                  <div className="element-image">{/*<img src={pressure_icon} alt="weather element" />*/}</div>
                  <div className="element-details">
                    <div className="element-name">{formatMessage({ id: 'pressure' })}</div>
                    <div className="element-value">{weatherData.pressure} hPa</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="weather-element">
                  <div className="element-image">{/*<img src={sunrise_icon} alt="weather element" />*/}</div>
                  <div className="element-details">
                    <div className="element-name">{formatMessage({ id: 'sunrise' })}</div>
                    <div className="element-value">{formatTimestamp(weatherData.sunrise)}</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="weather-element">
                  <div className="element-image">{/*<img src={sunset_icon} alt="weather element" />*/}</div>
                  <div className="element-details">
                    <div className="element-name">{formatMessage({ id: 'sunset' })}</div>
                    <div className="element-value">{formatTimestamp(weatherData.sunset)}</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
                <div className="weather-element">
                  <div className="element-image">{/*<img src={visibility_icon} alt="weather element" />*/}</div>
                  <div className="element-details">
                    <div className="element-name">{formatMessage({ id: 'visibility' })}</div>
                    <div className="element-value">{Math.floor(weatherData.visibility / 1000)} km</div>
                  </div>
                </div>
                <div className="divider-section">
                  <hr className="element-divider" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default WeatherCard;
