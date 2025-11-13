---
icon: pen-to-square
date: 2025-10-16 10:30:00.00 -3
category:
  - aula
  - unidade3
order: 23
---

# LCD com ESP 32

```c++
//YWROBOT
//Compatible with the Arduino IDE 1.0
//Library version:1.1
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27,16,2);  // set the LCD address to 0x27 for a 16 chars and 2 line display

void setup()
{
  lcd.init();                      // initialize the lcd 
  // Print a message to the LCD.
  lcd.backlight();
  lcd.setCursor(3,0);
  lcd.print("Hello, world!");
  lcd.setCursor(0,1);
  lcd.print("Ywrobot Arduino!");
}


void loop()
{
}

```

## Pinout no ESP

![Esquema](./img/esp32/ESP32-DOIT-DEV-KIT-v1-pinout-mischianti.png)


## Ligação

[^LCD]

![Ligação](https://i0.wp.com/randomnerdtutorials.com/wp-content/uploads/2018/07/esp32_LCD_bb.png?resize=768%2C382&quality=100&strip=all&ssl=1)

[^LCD]: How to Use I2C LCD with ESP32 on Arduino IDE (ESP8266 compatible) [https://randomnerdtutorials.com/esp32-esp8266-i2c-lcd-arduino-ide/](https://randomnerdtutorials.com/esp32-esp8266-i2c-lcd-arduino-ide/)