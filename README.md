# How to run the project

### Create a .env file in the backend directory that has

```bash
PORT=5000
MONGODB_URI="<your_mongodb_uri>"
SECRET_JWT_KEY="<your_secret_jwt_Token>"
```

### Make the script executable

```bash
chmod +x script.sh
```

### Execute it

```bash
./script.sh
```

### In your browser open the Vite local link

example:

```bash
  VITE v6.0.3  ready in 319 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
Connected to MongoDB!
Database selected: BookInventory
Server is running on http://localhost:5000
```

### Here the backend is running on port 5000 and frontend on port 5173, So use http://localhost:5173/ not the other link
