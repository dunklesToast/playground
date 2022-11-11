docker run --rm -p 5555:80 -v $(pwd)/page.conf:/etc/nginx/sites/page.conf -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf nginx:alpine
