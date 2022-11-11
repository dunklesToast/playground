docker run --rm -p 13133:13133 -p 14250:14250 -p 14268:14268 \
      -p 55678-55679:55678-55679 -p 55681:55681 -p 4317:4317 -p 8888:8888 -p 9411:9411 \
      --name otelcol otel/opentelemetry-collector \
