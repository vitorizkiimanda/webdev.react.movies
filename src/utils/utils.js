import moment from "moment";
import "moment/min/locales";
import "moment-timezone";

export const formatDate = (rawDate) => {
    // input 2020-12-16
    // ouput Dec 16, 2020
    return moment(rawDate).tz("Asia/Jakarta").format("MMM DD, YYYY");
};
