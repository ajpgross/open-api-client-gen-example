# To utilize this demo
1. Head into petstore_frontend\petes_pets
2. Run `npm install`
3. Go to frontend_client_lib\out 
4. Run `npm install`
5. Head back into petstore_frontend\petes_pets
6. Run `ng serve` (global installation of Angular CLI required)

# To make your own Angular REST client library
`docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli:v5.1.1 generate -i https://petstore3.swagger.io/api/v3/openapi.json -g typescript-angular -o local/out --additional-properties=npmName=petstore-client --additional-properties=npmVersion=1.0.0 --additional-properties=withInterfaces=true`

...and then run `npm install` and `npm run build --prod` from the out folder. See the Pete's pets angular app.module.ts and available-pets-autogenerated-client.component.ts for examples on how to hook it up.

See https://openapi-generator.tech/ for more generator options. To test it out locally, you can do `npm install path_to_where_your_library_was_spat_out/dist` to create a symlink.


