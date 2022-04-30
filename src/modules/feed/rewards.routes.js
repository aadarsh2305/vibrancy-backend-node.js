const multer = require('multer');
const {
     rewardsCreate,
     getsrewards

} = require('./rewards.controller');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null, file.fieldname + '-' + uniqueSuffix)
        cb(null, Date.now() + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}


const upload = multer(
    {
        storage: storage,
        limits: {
            fileSize: 1024 * 1024 * 50
        },
        fileFilter: fileFilter

    }
)


function rewardsRoutes(app) {

    app.post("/rewards-create", upload.single('imagesurl'), (req, res) => {
        const fileData = req.file.path;
        rewardsCreate(fileData,req, res);
    });

    app.get("/gets-rewards",(req, res) => {
       
        getsrewards(req, res);
    });

}

module.exports = {
    rewardsRoutes,
};