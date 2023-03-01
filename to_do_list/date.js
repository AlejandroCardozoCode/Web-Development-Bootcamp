exports.getDate = function () {

    let today = new Date();
    return today.toLocaleDateString("en-US", { weekday: "long" });

}
