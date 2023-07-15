import { insertservice, loginservice } from "../services/user.services";
import { Request, Response } from "express";

/******************************** LOGIN FUNCTION**************************************/

const insertcontroller = async (req: Request, res: Response) => {
    try {
        const flag = await insertservice(req, res);
        res.send({
            "user register": flag
        });
    }
    catch (err) {
        res.status(500).send("Internal Server error !!")
    }
}

/******************************** LOGIN FUNCTION**************************************/

const logincontroller = async (req: Request, res: Response) => {
    try {
        const flag = await loginservice(req, res);
        res.send({
            "loggedin": flag
        });
    }
    catch (err) {
        res.status(500).send("Internal Server error !!")
    }
}

export { insertcontroller, logincontroller };