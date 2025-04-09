import { Router }  from "express"
import {create, getAll, getOne, update, remove} from "../controllers/productController.js"

const  router = Router()

router.post('/create', create)
router.get('/getAll', getAll)
router.get('/getOne', getOne)
router.put('/update', update)
router.delete('/remove', remove)

export default router