const multer = require('multer');
const {
     socialPostCreate,
     socialPostalldata

} = require('./social.controller');

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


function socialRoutes(app) {

    app.post("/social-post-create", upload.array('images',2), (req, res) => {
        const fileData = req.files;

        const profileImage = fileData[0].path;

        const postImage = fileData[1].path;

        socialPostCreate(profileImage,postImage,req, res);
    });

    app.get("/social-post-all-data",(req, res) => {
       
        socialPostalldata(req, res);
    });

}

module.exports = {
    socialRoutes,
};