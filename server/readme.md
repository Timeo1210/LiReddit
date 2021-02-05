entities = schema
https://www.youtube.com/watch?v=I6ypD7qv3Z8

"@mikro-orm/cli": "^4.3.2",
"@mikro-orm/core": "^4.3.2",
"@mikro-orm/migrations": "^4.3.2",
"@mikro-orm/postgresql": "^4.3.2",
"apollo-server-express": "^2.19.0",

"create:migration": "mikro-orm migration:create"

/server/src/mikro-orm.config.ts
:
import { **prod** } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

export default {
migrations: {
path: path.join(**dirname, "./migrations"),
pattern: /^[\w-]+\d+\.[tj]s$/,
},
entities: [Post, User],
dbName: "lireddit",
type: "postgresql",
debug: !**prod\_\_,
password: "postgres",
} as Parameters<typeof MikroORM.init>[0];
