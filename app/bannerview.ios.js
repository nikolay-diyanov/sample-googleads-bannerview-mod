function createBanner(args) {
    var bannerView = GADBannerView.alloc().initWithAdSize(kGADAdSizeSmartBannerPortrait);
    return bannerView;
}

function loadBanner(placeholder) {
    bannerView = placeholder.ios;
    bannerView.adUnitID = "ca-app-pub-3940256099942544/2934735716";
    bannerView.strongDelegateRef = bannerView.delegate = GADBannerViewDelegateImpl.new();
    bannerView.rootViewController = placeholder.page;
    var request = GADRequest.request();
    request.testDevices = [kGADSimulatorID];
    bannerView.loadRequest(request);
}

var GADBannerViewDelegateImpl = (function (_super) {
    __extends(GADBannerViewDelegateImpl, _super);
    function GADBannerViewDelegateImpl() {
        _super.apply(this, arguments);
    }
    GADBannerViewDelegateImpl.prototype.adViewWillLeaveApplication = function (bannerView) {
        // do sth as the user is leaving the app, because of a clicked ad
        console.log("Leaving the app, bye bye!");
    };
    GADBannerViewDelegateImpl.ObjCProtocols = [GADBannerViewDelegate];
    return GADBannerViewDelegateImpl;
})(NSObject);

exports.createBanner = createBanner;
exports.loadBanner = loadBanner;
