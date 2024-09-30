import expess from "express"
import { updateUserAndAddress } from "../controllers/userAddressControllers.js"
const router=expess.Router()


router.route("/register").post(updateUserAndAddress);

export default router