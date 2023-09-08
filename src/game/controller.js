const Game = require('./models')
exports.createGame = async (req, res, next) => {
    const {
        name,
        description,
        guideline,
        numberuser,
        createDate,
        userIdCreator,
        userIdApprover,
        status,
        img,

    } = req.body
    try {
        await Game.gameValidation({
            name,
            description,
            guideline,
            numberuser,
            createDate,
            userIdCreator,
            userIdApprover,
            status,
            img,
        })
        await Game.create({
            name,
            description,
            guideline,
            numberuser,
            createDate,
            userIdCreator,
            userIdApprover,
            status,
            img,
        });
        res.status(201).json({
            message: "ثبت بازی موفقیت آمیز بود"
        });
    } catch (error) {
        if (error) {
            if (error.details) res.status(400).json(error.details.map(item => item.message));
            res.status(400).json(error);
        }
        next();
    }

}
exports.getAllGame = async (req, res, next) => {

    try {
        const games = await Game.find().sort({
            createDate: "desc",
        });
        if (games) {
            res.status(200).json(games);
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


exports.getGameId = async (req, res, next) => {
    try {
        const item = await Game.findOne({

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