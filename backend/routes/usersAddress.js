import expess from "express"
import { updateUserAndAddress } from "../controllers/userAddressControllers.js"
const router=expess.Router()


router.route("/usersAddress").post(updateUserAndAddress);

export default router