# Azure Open Source Day demo

## Pre-requisites


## .NET + Wasi

This is a demo of running .NET on Wasi. It is a simple console application that reads a file and prints the contents to the console.

```
dotnet new console -o dotnetwasi && cd dotnetwasi
dotnet add package wasi.sdk
dotnet build
dotnet run
```

Build & run Docker image

```
docker buildx build --platform=wasi/wasm -t aosd/dotnetwasi .
docker run --rm --runtime=io.containerd.wasmtime.v1 --platform=wasi/wasm aosd/dotnetwasi:latest
```

## WASI with spin

Create a project with spin
```bash
# Choose TypeScript
spin new
npm install && npm run build
spin up
```

Build Docker image
```
docker buildx build --platform=wasi/wasm -t aosd/spinwasi .
docker run --rm -p 3000:80 --runtime=io.containerd.spin.v1 --platform=wasi/wasm aosd/spinwasi:latest
```

Tag & push to ACR
```
az acr login --name wasiacr
docker tag aosd/spinwasi wasiacr.azurecr.io/spinwasi
docker push wasiacr.azurecr.io/spinwasi
```

Deploy the app on AKS (see more here https://learn.microsoft.com/en-us/azure/aks/use-wasi-node-pools)
```
kubectl apply -f deploy.yaml
```

## Bartholomew app

Run with Docker

```
docker buildx build --platform=wasi/wasm -t aosd/bartholomew .
docker run --rm -p 3000:80 --runtime=io.containerd.spin.v1 --platform=wasi/wasm aosd/bartholomew:latest
```

Tag & push to ACR
```
az acr login --name wasiacr
docker tag aosd/bartholomew wasiacr.azurecr.io/bartholomew
docker push wasiacr.azurecr.io/bartholomew
```

Deploy the app on AKS (see more here https://learn.microsoft.com/en-us/azure/aks/use-wasi-node-pools)
```
kubectl apply -f deploy.yaml
```
