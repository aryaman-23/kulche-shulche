import Head from 'next/head';
import { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    // Load necessary JS files dynamically
    const script1 = document.createElement('script');
    script1.src = '/assets/js/lib/bootstrap.bundle.min.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
    script2.type = 'module';
    script2.async = true;
    document.body.appendChild(script2);

    const script3 = document.createElement('script');
    script3.src = '/assets/js/plugins/splide/splide.min.js';
    script3.async = true;
    document.body.appendChild(script3);

    const script4 = document.createElement('script');
    script4.src = '/assets/js/base.js';
    script4.async = true;
    document.body.appendChild(script4);

    // The core Firebase JS SDK is always required and must be listed first 
    const script5 = document.createElement('script');
    script5.src = 'https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js';
    script5.type = 'module';
    script5.async = true;
    document.body.appendChild(script5);

    // <!-- TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries -->
    const script6 = document.createElement('script');
    script6.src = 'https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js';
    script6.type = 'module';
    script6.async = true;

    document.body.appendChild(script6);
    const script7 = document.createElement('script');
    script7.src = 'https://www.gstatic.com/firebasejs/11.3.1/firebase-messaging.js';
    script7.type = 'module';
    script7.async = true;
    document.body.appendChild(script7);

    // Push Notification and Location Service
    const script8 = document.createElement('script');
    script8.src = '/assets/js/lib/app.js';
    script8.async = true;
    document.body.appendChild(script8);

    // Firbase Notification Service Store Token ()
    const script9 = document.createElement('script');
    script9.src = '/assets/js/lib/register_notification.js';
    script9.async = true;
    document.body.appendChild(script9);

    return () => {
      // Cleanup the scripts when the component unmounts
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
      document.body.removeChild(script4);
    };
  }, []);

  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#000000" />
        <title>Kulche Shulche</title>
        <meta name="description" content="Kulche Shulche" />
        <meta name="keywords" content="cafe, resturant, kulche, mobile, html, responsive" />
        <link rel="icon" type="image/png" href="/assets/img/favicon.png" sizes="32x32" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/icon/192x192.png" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="manifest" href="manifest.json" />
      </Head>

      <div id="loader">
        <img src="/assets/img/loading-icon.png" alt="icon" className="loading-icon" />
      </div>

      <div className="appHeader no-border transparent position-absolute">
        <div className="left">
          <a href="#" className="headerButton goBack">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </a>
        </div>
        <div className="pageTitle"></div>
        <div className="right"></div>
      </div>

      <div id="appCapsule">
        <div className="section mt-2 text-center">
          <h1>Log in</h1>
          <h4>Fill the form to log in</h4>
        </div>
        <div className="section mb-5 p-2">
          <form action="">
            <div className="card">
              <div className="card-body pb-1">
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="email1">E-mail</label>
                    <input type="email" className="form-control" id="email1" placeholder="Your e-mail" />
                    <i className="clear-input">
                      <ion-icon name="close-circle"></ion-icon>
                    </i>
                  </div>
                </div>
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="password1">Password</label>
                    <input type="password" className="form-control" id="password1" autoComplete="off" placeholder="Your password" />
                    <i className="clear-input">
                      <ion-icon name="close-circle"></ion-icon>
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-links mt-2">
              <div>
                <a href="app-register.html">Register Now</a>
              </div>
              <div><a href="app-forgot-password.html" className="text-muted">Forgot Password?</a></div>
            </div>
            <div className="form-button-group transparent">
              <button type="submit" className="btn btn-primary btn-block btn-lg">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
