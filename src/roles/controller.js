const Roles = require('./models')
exports.createRoles = async (req, res, next) => {
    const {
        gameID,
        name,
        description,
        Auxiliary,
        numberuser,
        SameRolesId,
        createDate,
        userIdCreator,
        userIdApprover,
        status,
        img,
    } = req.body
    try {
        await Roles.rolesValidation({
            gameID,
            name,
            description,
            Auxiliary,
            numberuser,
            SameRolesId,
            createDate,
            userIdCreator,
            userIdApprover,
            status,
            img,
        })
        await Roles.create({
            gameID,
            name,
            description,
            Auxiliary,
            numberuser,
            SameRolesId,
            createDate,
            userIdCreator,
            userIdApprover,
            status,
            img,
        });
        res.status(201).json({
            message: "ثبت نقش موفقیت آمیز بود"
        });
    } catch (error) {
        if (error) {
            if (error.details) res.status(400).json(error.details.map(item => item.message));
            res.status(400).json(error);
        }
        next();
    }

}
exports.updateRoles = async (req, res, next) => {
    try {
        const {
            gameID,
            name,
            description,
            Auxiliary,
            numberuser,
            SameRolesId,
            createDate,
            userIdCreator,
            userIdApprover,
            status,
            img,
        } = req.body
        const item = await Roles.findOneAndUpdate({
            _id: req.params.id
        }, {
            gameID,
            name,
            description,
            Auxiliary,
            numberuser,
            SameRolesId,
            createDate,
            userIdCreator,
            userIdApprover,
            status,
            img,
        });
        if (!item) {
            res.status(400).send({
                error: ' بازی فعالی با این شناسه وجود ندارد'
            });

        }
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json('شناسه نامعتبر است');
        next();
    }

}
exports.getAllRolres = async (req, res, next) => {
    try {
        const Roless = await Roles.find().sort({
            createDate: "desc",
        });
        if (Roless) {
            res.status(200).json(Roless);
        } else {
            res.status(400).json('هیچ بازیی فعالی وجود ندارد');
        }
    } catch (error) {
        if (error) {
            if (error.details) res.status(400).json(error.details.map(item => item.message));
            res.status(400).json(error);
        }
        next();
    }


}
exports.getRolreId = async (req, res, next) => {
    try {
        const item = await Roles.findOne({

            _id: req.params.id
        });
        if (!item) {
            res.status(400).send({
                error: ' بازی فعالی با این شناسه وجود ندارد'
            });

        }
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json('شناسه نامعتبر است');
        next();
    }
}

exports.deleteRoles = async (req, res, next) => {
    try {
        const item = await Roles.deleteOne({

            _id: req.params.id
        });
        if (!item) {
            res.status(400).send({
                error: ' بازی فعالی با این شناسه وجود ندارد'
            });

        }
        res.status(200).json('با موفقیا حذف شد');
    } catch (error) {
        res.status(400).json('شناسه نامعتبر است');
        next();
    }
}