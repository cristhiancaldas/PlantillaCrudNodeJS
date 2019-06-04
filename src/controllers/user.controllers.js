const UserBean = require('../models/user.models');
const userController = {};

userController.lstIndex = async (req, res) => {
    const user = await UserBean.find();
    res.render("user/indexUser", {
        user
    });
};

userController.addUser = async (req, res) => {
    const user = new UserBean(req.body);
    await user.save();
    res.redirect('/');
};

userController.userByid = async (req, res) => {
    const user = await UserBean.findById(req.params.id);
    res.render("user/editUser", {
        user
    });
};

userController.updateUser = async (req, res) => {
    const id = req.params.id;
    await UserBean.updateOne({
        _id: id
    }, req.body);

    res.redirect('/');
};

userController.deleteUser = async (req, res) => {
    let id = req.params.id;
    await UserBean.deleteOne({
        _id: id
    }); 
    res.redirect('/');
};

module.exports = userController;