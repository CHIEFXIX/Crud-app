const express=require('express');
const router=express.Router();
const {getAllUsers , getParticularUser ,createNewUser ,updateUser, deleteUser}= require('../controllers/user.controller.js');

//  App Routes

router.get('/',getAllUsers);
router.get('/:id', getParticularUser);
router.post('/', createNewUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports=router;