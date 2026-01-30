import express from "express"
import {protect} from "../middleware/authMiddle.js"
import { getUserData, storeRecentSearchedCities } from "../controllers/userController.js";

const userRouter= express.Router();

userRouter.get('/',protect , getUserData)
userRouter.get('/store-recent-search',protect , storeRecentSearchedCities);

export default userRouter;