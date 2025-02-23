This Frida script hooks into the `NSURL URLWithString:` method in iOS applications to intercept and log all URL requests being created. 



- Captures every call to `NSURL URLWithString:`
- Logs the URL string before it's processed
- Logs the returned `NSURL` object

- Monitor all URLs an app is trying to access
- Analyze external communications for security assessments
- Identify hardcoded URLs in the app's logic




Outputs:

NSURL URLWithString called with URL: https://example.com/api
NSURL URLWithString returned: https://example.com/api


This helps in analyzing how the app constructs and interacts with URLs dynamically.  

Usage:

frida -U -p <app-PID> -l URLs-catcher.js

Researcher:
Abdulrahman AL-Hakami





