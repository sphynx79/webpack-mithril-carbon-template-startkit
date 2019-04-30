// src/init/routes.js

import Layout from "components/layout/layout.js"
import SplashLoader from "components/pages/splash-loader.js"
import Index from "components/pages/index.js"
import MaintenancePage from "components/pages/maintenance-page.js"

// m.route.prefix("")

const $root = document.getElementById("app")

m.route($root, "/index", {
    "/splash": {
        render: function() {
            return m(Layout, m(SplashLoader))
        },
    },
    "/index": {
        onmatch() {
            // Show Loader until the promise has been resolved or rejected.
            m.render($root, m(SplashLoader))

            return new Promise((resolve /*, reject*/) => {
                //Fetch all necessary data here
                setTimeout(function() {
                    resolve()
                }, 2000)
            }).catch((/* e */) => {
                // In case of server error we can show the maintenance page.
                return MaintenancePage
            })
        },
        render(vnode) {
            if (typeof vnode.tag === "function") {
                //If onmatch returns a component or a promise that resolves to a component, comes here.
                return vnode
            }
            return m(Layout, {
                index: Index,
            })
        },
    },
})
