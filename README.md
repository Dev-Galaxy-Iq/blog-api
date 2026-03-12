# Elysia with Bun runtime
blogging website backend api built using elysia and prisma orm.



to run the app make sure to setup docker first then inside root directory run :
```
docker compose up
```

install dependencies:
```
bun install
```

push prisma schema to the postgressql db in docker :
```
bunx prisma db push
```

generate prisma client:
```
bunx prisma generate
```

now run this to start the app:
```
bun dev
```

api documentation using scalar is available at:
```
http://localhost:4000/openapi
```



TODO: define project structure here later.
