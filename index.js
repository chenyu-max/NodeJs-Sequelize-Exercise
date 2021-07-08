require("./init");

const stuServ = require("./services/studentService");
stuServ.getStudents().then((r) => {
    console.log(r);
});

// const {addAdmin} = require('./services/adminService');
// addAdmin({
//     loginId: 'admin',
//     loginPwd: '123456'
// });
