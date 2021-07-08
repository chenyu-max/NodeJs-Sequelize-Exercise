const Mock = require("mockjs");
const result = Mock.mock({
    "datas|16": [
        {
            "id|+1": 1,
            name: "前端第 @id 期",
            openDate: "@date",
        },
    ],
}).datas;

const Class = require("../models/Class");
// 直接插入多条数据 result 是数组
Class.bulkCreate(result);
