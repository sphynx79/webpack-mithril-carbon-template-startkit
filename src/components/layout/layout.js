// src/components/layout/layout.js

import "./layout.scss"
import Header from "components/header/header.js"
import ProductSwitcher from "components/product-switcher/product-switcher.js"
import Menu from "components/menu/menu.js"

class Layout {
    constructor() {
        this._componentName = this.constructor.name
    }

    view({ attrs, state }) {
        // prettier-ignore
        return m("layout", [
                m(Header),
                m(ProductSwitcher),
                m(Menu),
                m(attrs.index)
        ])
    }

    oncreate({ attrs, state }) {
        if (process.env.NODE_ENV !== "production") {
            let logStateAttrs = {
                attrs: attrs,
                state: state,
            }
            console.log(`Component: ${this._componentName}`, logStateAttrs)
        }
    }
}

export default Layout
