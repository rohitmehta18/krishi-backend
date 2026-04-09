# Krishi Backend

Node.js/Express middleware between the ESP32 device and the Flutter app.

## Setup

```bash
cd krishi_backend
npm install
npm start
```

Dev mode (auto-restart):
```bash
npm run dev
```

## Endpoints

| Method | Endpoint   | Description                        |
|--------|------------|------------------------------------|
| GET    | /api/data  | Returns live sensor data as JSON   |
| GET    | /api/on    | Sends ON command to ESP (pump on)  |
| GET    | /api/off   | Sends OFF command to ESP (pump off)|

## Sample Response — /api/data

```json
{
  "temperature": "32.5",
  "humidity": "68",
  "moisture": "54",
  "waterLevel": "78"
}
```

## Error Response (ESP unreachable)

```json
{ "error": "Device not connected" }
```

## Config

Edit `src/config/esp.config.js` to change the ESP IP or timeout:

```js
ESP_BASE_URL: 'http://192.168.4.1'
TIMEOUT_MS: 5000
```

## Parser

`src/utils/parser.js` uses regex to extract values from the ESP HTML page.
If your ESP outputs different labels, update the patterns there.
