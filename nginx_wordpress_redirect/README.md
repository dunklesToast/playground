### 1. Edit /etc/hosts

```
127.0.0.1 other.localmapped.de
127.0.0.1 demo.localmapped.de
```

### 2. Start NGINX
./start.sh

### 3. Test it
http://other.localmapped.de:8080 ~> redirect to google.de
http://demo.localmapped.de:8080 ~> requests basic auth

Login: demo:test
