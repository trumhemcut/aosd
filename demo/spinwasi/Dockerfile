FROM scratch

COPY target/spin-http-js.wasm target/spin-http-js.wasm
COPY spin.toml spin.toml
 
ENTRYPOINT [ "target/spin-http-js.wasm" ]