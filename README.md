Getting Started
---------------

```sh
# clone it
git clone git@github.com:adaschevici/db-viewer-backend.git
cd db-viewer-backend
env GZIP=-9 tar -xvf us-census.db.tar.gz

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```
Docker Support
------
```sh
cd db-viewer-backend

# Build your docker
docker build -t express/db-viewer-backend .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8080:8080 express/db-viewer-backend
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port

```

License
-------

MIT
