const Joi = require('joi');
exports.schema = Joi.object({
    gameID: Joi.string()
        .min(2)
        .max(25)
        .required().label('شناسه بازی')
        .messages({
            'string.base': `شناسه بازی باید به شکل رشته باشد`,
            'string.empty': `شناسه بازی نمی تواند خالی باشد`,
            'string.min': `"شناسه بازی بیشتر از 1 کارکتر باشد`,
            'string.max': `"شناسه بازی باید کوچکتر از 60 کارکتر باشد`,
            'any.required': 'شناسه بازی اجباری است'
        }),
    name: Joi.string()
        .min(2)
        .max(60)
        .required().label('نام نقش')
        .messages({
            'string.base': `نام نقش باید به شکل رشته باشد`,
            'string.empty': `نام نقش نمی تواند خالی باشد`,
            'string.min': `"نام نقش باید بیشتر از 1 کارکتر باشد`,
            'string.max': `"نام نقش باید کوچکتر از 60 کارکتر باشد`,
            'any.required': 'نام نقش اجباری است'
        }),

    description: Joi.string()
        .min(5)
        .max(1000).label('توضیحات نقش')
        .messages({
            'string.base': `توضیحات نقش باید به شکل رشته باشد`,
            'string.empty': `توضیحات نقش نمی تواند خالی باشد`,
            'string.min': `"توضیحات نقش باید بیشتر از 5 کارکتر باشد`,
            'string.max': `"توضیحات نقش باید کوچکتر از 1000 کارکتر باشد`,
        }),

    Auxiliary: Joi.string()
        .min(10)
        .max(5000).label('راهنمای نقش')
        .messages({
            'string.base': `راهنمای نقش باید به شکل رشته باشد`,
            'string.empty': `راهنمای نقش نمی تواند خالی باشد`,
            'string.min': `"راهنمای نقش باید بیشتر از 5 کارکتر باشد`,
            'string.max': `"راهنمای نقش باید کوچکتر از 5000 کارکتر باشد`,
        }),
    numberuser: Joi.number()
        .min(1)
        .max(100).label('تعداد افراد نقش')
        .messages({
            'number.base': `تعداد افراد نقش باید به شکل عدد باشد`,
            'number.empty': `تعداد افراد نقش نمی تواند خالی باشد`,
            'number.min': `"تعداد افراد نقش باید بیشتر از 0  باشد`,
            'number.max': `"تعداد افراد نقش باید کوچکتر از 100 باشد`,
        }),
    SameRolesId: Joi.array().label('هم نقش ها')
        // .messages({
        //     'number.base': `تعداد افراد نقش باید به شکل عدد باشد`,
        //     'number.empty': `تعداد افراد نقش نمی تواند خالی باشد`,
        //     'number.min': `"تعداد افراد نقش باید بیشتر از 0  باشد`,
        //     'number.max': `"تعداد افراد نقش باید کوچکتر از 100 باشد`,
        // }),
        ,
    createDate: Joi.date().required().label('تاریخ ایجاد نقش')
        .messages({
            'number.base': `تاریخ ایجاد نقش باید به شکل عدد باشد`,
            'number.empty': `تاریخ ایجاد نقش نمی تواند خالی باشد`,
            'any.required': 'تاریخ ایجاد اجباری است'
        }),
    userIdCreator: Joi.string()
        .required().label('شناسه کاربر ثبت کننده')
        .messages({
            'string.base': `شناسه کاربر ثبت کننده باید به شکل رشته باشد`,
            'string.empty': `شناسه کاربر ثبت کننده نمی تواند خالی باشد`,
            'any.required': 'شناسه کاربر ثبت کننده اجباری است'
        }),
    userIdApprover: Joi.string()
        .required().label('شناسه کاربر تایید کننده')
        .messages({
            'string.base': `شناسه کاربر تایید کننده باید به شکل رشته باشد`,
            'string.empty': `شناسه کاربر تایید کننده نمی تواند خالی باشد`,
            'any.required': 'شناسه کاربر تایید کننده اجباری است'
        }),
    status: Joi.number()
        .min(1)
        .max(2)
        .required().label('وضعیت نقش')
        .messages({
            'string.base': `وضعیت نقش باید به شکل عدد باشد`,
            'string.empty': `وضعیت نقش نمی تواند خالی باشد`,
            'number.max': 'وضعیت نقش باید کوچکتر از دو باشد',
            'number.min': 'وضعیت نقش باید بزرگتر از صفر باشد',
            'any.required': 'وضعیت نقش اجباری است'
        }),
    img: Joi.any().label('عکس نقش')
    // .messages({
    //     'string.base': `وضعیت نقش باید به شکل عدد باشد`,
    //     'string.empty': `وضعیت نقش نمی تواند خالی باشد`,
    //     'number.max': 'وضعیت نقش باید کوچکتر از دو باشد',
    //     'number.min': 'وضعیت نقش باید بزرگتر از صفر باشد',
    //     'any.required': 'وضعیت نقش اجباری است'
    // }),


})