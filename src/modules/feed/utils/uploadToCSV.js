const csv = require("csvtojson");

function uploadToCSV(csvStr) {
    csv({
        noheader: true,
        output: "csv",
    })
        .fromString(csvStr)
        .then((csvRow) => {
            return csvRow;
            // console.log(csvRow); // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
        });
}

module.exports = {
    uploadToCSV,
};
