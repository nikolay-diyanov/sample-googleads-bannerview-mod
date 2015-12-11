var vmModule = require("./main-view-model");
var bannerModule = require("./bannerview");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;

    var placeholder = page.getViewById("bannerView");
    bannerModule.loadBanner(placeholder);
}

function creatingView(args) {
    args.view = bannerModule.createBanner(args);
}

exports.pageLoaded = pageLoaded;
exports.creatingView = creatingView;
