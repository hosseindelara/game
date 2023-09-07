const City = require('./models')
exports.createCity = async (req, res, next) => {
    const {
        Name,
        enName,
        stateID,
        description,
        status,
        userIdCreator,
        userIdApprover,

    } = req.body
    try {
        await City.cityValidation({
            Name,
            enName,
            stateID,
            description,
            status,
            userIdCreator,
            userIdApprover,
        })
        await City.create({
            Name,
            enName,
            stateID,
            description,
            status,
            userIdCreator,
            userIdApprover,
        });
        res.status(201).json({
            message: "ثبت شهر موفقیت آمیز بود"
        });
    } catch (error) {
        if (error) {
            if (error.details) res.status(400).json(error.details.map(item => item.message));
            res.status(400).json(error);
        }
        next();
    }

}
exports.getAllCity = async (req, res, next) => {

    try {
        const citys = await City.find({
            status: "2"
        }).sort({
            createdAt: "desc",
        });
        if (citys) {
            res.status(200).json(citys);
        } else {
            res.status(400).json('هیچ شهری فعالی وجود ندارد');
        }
    } catch (error) {
        if (error) {
            if (error.details) res.status(400).json(error.details.map(item => item.message));
            res.status(400).json(error);
        }
        next();
    }


}
exports.getstateID = async (req, res, next) => {

    try {
        const citys = await City.find({
            status: "2",
            stateID: req.params.id
        }).sort({
            createdAt: "desc",
        });
        if (citys) {
            res.status(200).json(citys);
        } else {
            res.status(400).json('هیچ شهری فعالی وجود ندارد');
        }
    } catch (error) {
        if (error) {
            if (error.details) res.status(400).json(error.details.map(item => item.message));
            res.status(400).json(error);
        }
        // next();
    }
}

exports.getCityId = async (req, res, next) => {
    try {
        const item = await City.findOne({
           
            _id: req.params.id
        });
        if (!item) {
            res.status(400).send({error:' شهر فعالی با این شناسه وجود ندارد'});
           
        }
        res.status(200).json(item);
    } catch (error) {
                 res.status(400).json('شناسه نامعتبر است');
        next();
    }
}