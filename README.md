# Разработка тестового фреймворка для интернет-магазина

# Установка пакетов:
- npm install -D @playwright/test
- npx playwright install

# Запуск тестов в chrome и firefox:
- npx playwright test
# только chrome:
- npx playwright test --project=chromium
# в Headed режиме
- npx playwright test --headed
