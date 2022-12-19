import DbConnection from "./config/database";
import {ENVIRONMENT} from "./config/vars";
import server from "./config/websocket";

const dbConnection = new DbConnection();

(async () => {
    await dbConnection.connectToDb()
    server.listen(ENVIRONMENT.PORT, () => console.log(`Server started Successfully on PORT ${ENVIRONMENT.PORT}`))
})()

