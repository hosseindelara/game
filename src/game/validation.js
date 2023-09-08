const Joi = require('joi');
exports.schema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(60)
        .required().label('نام بازی')
        .messages({
            'string.base': `نام بازی باید به شکل رشته باشد`,
            'string.empty': `نام بازی نمی تواند خالی باشد`,
            'string.min': `"نام بازی باید بیشتر از 1 کارکتر باشد`,
            'string.max': `"نام بازی باید کوچکتر از 60 کارکتر باشد`,
            'any.required': 'نام بازی اجباری است'
        }),

    description: Joi.string()
        .min(5)
        .max(1000).label('توضیحات بازی')
        .messages({
            'string.base': `توضیحات بازی باید به شکل رشته باشد`,
            'string.empty': `توضیحات بازی نمی تواند خالی باشد`,
            'string.min': `"توضیحات بازی باید بیشتر از 5 کارکتر باشد`,
            'string.max': `"توضیحات بازی باید کوچکتر از 1000 کارکتر باشد`,
        }),

    guideline: Joi.string()
        .min(10)
        .max(5000).label('راهنمای بازی')
        .messages({
            'string.base': `راهنمای بازی باید به شکل رشته باشد`,
            'string.empty': `راهنمای بازی نمی تواند خالی باشد`,
            'string.min': `"راهنمای بازی باید بیشتر از 5 کارکتر باشد`,
            'string.max': `"راهنمای بازی باید کوچکتر از 5000 کارکتر باشد`,
        }),
    numberuser: Joi.number()
        .min(1)
        .max(100).label('تعداد افراد بازی')
        .messages({
            'number.base': `تعداد افراد بازی باید به شکل عدد باشد`,
            'number.empty': `تعداد افراد بازی نمی تواند خالی باشد`,
            'number.min': `"تعداد افراد بازی باید بیشتر از 0  باشد`,
            'number.max': `"تعداد افراد بازی باید کوچکتر از 100 باشد`,
        }),
    createDate: Joi.date().required().label('تاریخ ایجاد بازی')
        .messages({
            'number.base': `تاریخ ایجاد بازی باید به شکل عدد باشد`,
            'number.empty': `تاریخ ایجاد بازی نمی تواند خالی باشد`,
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
        .required().label('وضعیت بازی')
        .messages({
            'string.base': `وضعیت بازی باید به شکل عدد باشد`,
            'string.empty': `وضعیت بازی نمی تواند خالی باشد`,
            'number.max': 'وضعیت بازی باید کوچکتر از دو باشد',
            'number.min': 'وضعیت بازی باید بزرگتر از صفر باشد',
            'any.required': 'وضعیت بازی اجباری است'
        }),
        img: Joi.any().label('عکس بازی')
        // .messages({
        //     'string.base': `وضعیت بازی باید به شکل عدد باشد`,
        //     'string.empty': `وضعیت بازی نمی تواند خالی باشد`,
        //     'number.max': 'وضعیت بازی باید کوچکتر از دو باشد',
        //     'number.min': 'وضعیت بازی باید بزرگتر از صفر باشد',
        //     'any.required': 'وضعیت بازی اجباری است'
        // }),


})