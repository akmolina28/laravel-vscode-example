# laravel-vscode-example
Laravel starter project pre-configured for VSCode (WSL2)

Requires Docker for Windows (WSL2)

1. Clone

```
$ git clone https://github.com/akmolina28/laravel-vscode-example

$ cd laravel-vscode-example
```

2. Install Composer packages (including Sail)

```
$ docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
```

3. Start Sail

```
$ ./vendor/bin/sail up -d
```

4. Build

```
$ cp .env.example .env
$ sail artisan migrate
$ sail npm install
```

5. Open VSCode

```
code .
```

6. From the command palette (ctrl+shift+p) run "Run Test Task" and open the APP_URL
