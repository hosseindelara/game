const Joi = require('joi');
exports.schema = Joi.object({
    Name: Joi.string()
        .min(2)
        .max(50)
        .required().label('نام شهر')
        .messages({
            'string.base': `نام شهر باید به شکل رشته باشد`,
            'string.empty': `نام شهر نمی تواند خالی باشد`,
            'string.min': `"نام شهر باید بیشتر از 1 کارکتر باشد`,
            'string.max': `"نام شهر باید کوچکتر از 50 کارکتر باشد`,
            'any.required': 'نام شهر اجباری است'
        }),

    enName: Joi.string()
        .min(3)
        .max(50)
        .required().label('نام انگلیسی شهر')
        .pattern(new RegExp('^[a-zA-Z]{3,50}$'))
        .messages({
            'string.base': `نام انگلیسی شهر باید به شکل رشته باشد`,
            'string.empty': `نام انگلیسی شهر نمی تواند خالی باشد`,
            'string.min': `"نام انگلیسی شهر باید بیشتر از 3 کارکتر باشد`,
            'string.max': `"نام انگلیسی شهر باید کوچکتر از 50 کارکتر باشد`,
            'string.pattern.base': `نام انگلیسی شهر باید کارکتر انگلیسی باشد`,
            'any.required': 'نام شهر انگلیسی اجباری است'
        }),
    stateID: Joi.string()
        .required().label('شناسه استان')
        .messages({
            'string.base': `ایدی استان باید به شکل رشته باشد`,
            'string.empty': `ایدی استان نمی تواند خالی باشد`,
            'any.required': 'ایدی استان  اجباری است'
        }),
    description: Joi.string()
        .min(3)
        .max(1000).label('توضیحات شهر')
        .messages({
            'string.base': `توضیحات شهر باید به شکل رشته باشد`,
            'string.empty': `توضیحات شهر نمی تواند خالی باشد`,
            'string.min': `"توضیحات شهر باید بیشتر از 3 کارکتر باشد`,
            'string.max': `"توضیحات شهر باید کوچکتر از 1000 کارکتر باشد`,
        }),
    status: Joi.number()
        .min(1)
        .max(2)
        .required().label('وضعیت شهر')
        .messages({
            'string.base': `وضعیت شهر باید به شکل عدد باشد`,
            'string.empty': `وضعیت شهر نمی تواند خالی باشد`,
            'number.max': 'وضعیت شهر باید کوچکتر از دو باشد',
            'number.min': 'وضعیت شهر باید بزرگتر از یک باشد',
            'any.required': 'وضعیت شهر اجباری است'
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

})