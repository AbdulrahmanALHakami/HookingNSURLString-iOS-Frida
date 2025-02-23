//Create by : Abdulrahman AL-Hakami



if (ObjC.available) {
    var NSURL = ObjC.classes.NSURL;
    
    // Hook into the class method `URLWithString:` of NSURL
    Interceptor.attach(NSURL["+ URLWithString:"].implementation, {
        onEnter: function (args) {
            var urlString = new ObjC.Object(args[2]);  // Retrieve the URL string argument
            console.log("NSURL URLWithString called with URL: " + urlString.toString());
        },
        onLeave: function (retval) {
            console.log("NSURL URLWithString returned: " + new ObjC.Object(retval).toString());
        }
    });
} else {
    console.log("Objective-C Runtime is not available!");
}
//Abdulrahman AL-Hakami