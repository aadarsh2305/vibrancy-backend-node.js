const multer = require('multer');
const {
    topicsPostCreate,
    topicsPostalldata

} = require('./topics.controller');

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


function topicsRoutes(app) {

    app.post("/topics-post-create", upload.array('topicsimages', 4 ), (req, res) => {
        const fileData = req.files;

        const topicImage = fileData[0].path;
        const topicCoverImage = fileData[1].path;

        console.log(topicImage);
        console.log(topicCoverImage);
        topicsPostCreate(topicImage,topicCoverImage,req, res);
    });


    app.post("/topics-post-all-data",(req, res) => {
       
        topicsPostalldata(req, res);
    });

}

module.exports = {
    topicsRoutes,
};