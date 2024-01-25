# Simple Node Express Hello World App

# Steps :
```
  git clone https://github.com/eMahtab/node-express-hello-world
  cd node-express-hello-world
  npm install
  npm start

  Configure Nginx -
  location / {
          proxy_pass  http://localhost:3000;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }

  Go to localhost:3000

```
