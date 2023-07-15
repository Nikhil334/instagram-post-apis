import  express  from "express";
import dotenv from 'dotenv';
import { sqlize,dbconnection } from "./config/conn";
import  post_router  from "./routes/user.post.route";
import  router  from "./routes/user.route";
import comment_router from "./routes/user.comments..routes";
const app = express();
dotenv.config();
const port = process.env.PORT;
dbconnection();
 
app.use(express.json());
app.use('/',router);
app.use('/',post_router);
app.use('/',comment_router);
app.use('/post/',post_router);
app.use('/comment/',comment_router);


app.listen(port,()=>{
    console.log(`I m at the port no ${port}`);
  })

