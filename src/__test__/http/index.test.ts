import axios from 'axios';
import { vi } from 'vitest';
import { fetchWeatherData } from '@/services/http';

describe('Test to check fetch to API', () => {
  it('should return data when API call resolve ok', async () => {
    const mockResponse = {
      data: {
        main: {
          temp: 100,
          humidity: 100,
          feels_like: 100,
          pressure: 100,
        },
        weather: [{ main: 'Clear', icon: '01d', description: 'Clear sky' }],
        name: 'London',
        wind: { speed: 100 },
        visibility: 100,
        dt: 1651234567,
        sys: { sunrise: 1651234000, sunset: 1651278000 },
      },
    };

    axios.get = vi.fn().mockResolvedValue(mockResponse);

    const weatherData = await fetchWeatherData('Tokyo');

    expect(weatherData).toEqual({
      temperature: 100,
      conditions: 'Clear',
      humidity: 100,
      cityName: 'London',
      wind: 100,
      iconCode: '01d',
      description: 'Clear sky',
      feelsLike: 100,
      visibility: 100,
      pressure: 100,
      timeStamp: 1651234567,
      sunrise: 1651234000,
      sunset: 1651278000,
      isSuccessful: true,
    });
  });

  it('should return default values when API call fails', async () => {
    axios.get = vi.fn().mockRejectedValue(new Error('API error'));

    const weatherData = await fetchWeatherData('InvalidCity');

    expect(weatherData).toEqual({
      temperature: 0,
      conditions: '',
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
  });
});
