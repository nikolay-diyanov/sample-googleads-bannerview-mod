function createBanner(args) {
	var bannerView = new com.google.android.gms.ads.AdView(args.object._context);
	bannerView.setAdSize(com.google.android.gms.ads.AdSize.SMART_BANNER);
	
	return bannerView;
}

function loadBanner(placeholder) {
	bannerView = placeholder.android;
    bannerView.setAdUnitId("ca-app-pub-3940256099942544/6300978111");
    
    var MyAdListener = com.google.android.gms.ads.AdListener.extend(
    {
        onAdLeftApplication: function() {
            // do sth as the user is leaving the app, because of a clicked ad
            console.log("Leaving the app, bye bye!");
        }
    });
    var listener = new MyAdListener();
    bannerView.setAdListener(listener);
    
    var adRequest = new com.google.android.gms.ads.AdRequest.Builder();
    adRequest.addTestDevice(com.google.android.gms.ads.AdRequest.DEVICE_ID_EMULATOR);
    var requestBuild = adRequest.build();
    bannerView.loadAd(requestBuild);
}

exports.createBanner = createBanner;
exports.loadBanner = loadBanner;
