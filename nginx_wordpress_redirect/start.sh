docker run -p 8080:80 -v $(pwd)/page.conf:/etc/nginx/conf.d/default.conf -v $(pwd)/.htpasswd:/.htpasswd nginx
