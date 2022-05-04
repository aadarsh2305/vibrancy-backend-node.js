const { send } = require('express/lib/response');
const multer = require('multer');
const {
    eventPostCreate,
    eventPostalldata

} = require('./events.controller');

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


function eventsRoutes(app) {

    app.post("/events-post-create", upload.array('images',2), (req, res) => {
        
        const fileData              = req.files;
        const backgroundImagePath   = fileData[0].path;
        const companyLogo           = fileData[1].path;

        eventPostCreate(backgroundImagePath,companyLogo,req, res);
        //res.send("okk");
    });

    app.get("/events-post-all-data",(req, res) => {     
        eventPostalldata(req, res);
    });
}

module.exports = {
    eventsRoutes,
};