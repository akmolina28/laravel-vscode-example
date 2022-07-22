# laravel-vscode-example
Laravel starter project pre-configured for VSCode (WSL2)

Requires Docker for Windows (WSL2)

1. Clone

```
$ git clone https://github.com/akmolina28/laravel-vscode-example

$ cd laravel-vscode-example
```

2. Create .env file, edit as desired

```
$ cp .env.example .env
$ nano .env
```

3. Install Composer packages (including Sail)

```
$ docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
```

4. Start Sail

```
$ ./vendor/bin/sail up -d
```

5. Finish Laravel Setup

```
$ sail artisan migrate
$ sail artisan key:generate
$ sail npm install
```

6. Open VSCode

```
code .
```

7. From the command palette (ctrl+shift+p) run "Run Test Task" and open the APP_URL

8. Install recommended extensions
