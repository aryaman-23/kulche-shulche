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
            {/* <!-- App Header --> */}
            <div className="appHeader no-border transparent position-absolute">
                <div className="left">
                    <a href="#" className="headerButton goBack">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </a>
                </div>
                <div className="pageTitle">Tables</div>
                <div className="right">
                    <a href="#" className="headerButton" data-bs-toggle="modal" data-bs-target="#actionSheetForm">
                        <ion-icon name="add-outline"></ion-icon>
                    </a>
                </div>
            </div>
            {/* <!-- * App Header --> */}
            {/* <!-- Form Action Sheet --> */}
            <div class="modal fade action-sheet" id="actionSheetForm" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add New Table</h5>
                        </div>
                        <div class="modal-body">
                            <div class="action-sheet-content">

                                <form>
                                    <div class="form-group basic">
                                        <label class="label">Table Number</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon1">#</span>
                                            <input type="text" class="form-control" placeholder="Enter table number" value="1"/>
                                        </div>
                                        <div class="input-info">Enter the Number of the table you want to add.</div>
                                    </div>


                                    <div class="form-group basic">
                                        <button type="button" class="btn btn-primary btn-block btn-lg"
                                            data-bs-dismiss="modal">Add</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- * Form Action Sheet --> */}
            {/* Main Area */}
            <div id="appCapsule">
                <div class="row">
                    <div class="col-4 mb-2">
                        <div class="bill-box">
                            <div class="img-wrapper">
                                <img src="assets/img/sample/brand/1.jpg" alt="img" class="image-block imaged w48" />
                            </div>
                            <div class="price">Table1</div>
                            <p>Table Description : G.Floor/F.Floor/Top Floor</p>
                            <a href="#" class="btn btn-primary btn-block btn-sm">Add Order</a>
                        </div>
                    </div>
                    <div class="col-4 mb-2">
                        <div class="bill-box">
                            <div class="img-wrapper">
                                <img src="assets/img/sample/brand/1.jpg" alt="img" class="image-block imaged w48" />
                            </div>
                            <div class="price">Table1</div>
                            <p>Table Description : G.Floor/F.Floor/Top Floor</p>
                            <a href="#" class="btn btn-primary btn-block btn-sm">Add Order</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* * Main Area */}
            {/* <!-- App Bottom Menu --> */}
            <div class="appBottomMenu">
                <a href="index-2.html" class="item">
                    <div class="col">
                        <ion-icon name="pie-chart-outline"></ion-icon>
                        <strong>Overview</strong>
                    </div>
                </a>
                <a href="app-pages.html" class="item">
                    <div class="col">
                        <ion-icon name="document-text-outline"></ion-icon>
                        <strong>Pages</strong>
                    </div>
                </a>
                <a href="app-components.html" class="item">
                    <div class="col">
                        <ion-icon name="apps-outline"></ion-icon>
                        <strong>Components</strong>
                    </div>
                </a>
                <a href="app-cards.html" class="item">
                    <div class="col">
                        <ion-icon name="card-outline"></ion-icon>
                        <strong>My Cards</strong>
                    </div>
                </a>
                <a href="app-settings.html" class="item">
                    <div class="col">
                        <ion-icon name="settings-outline"></ion-icon>
                        <strong>Settings</strong>
                    </div>
                </a>
            </div>
            {/* <!-- * App Bottom Menu --> */}
        </>
    );
}
