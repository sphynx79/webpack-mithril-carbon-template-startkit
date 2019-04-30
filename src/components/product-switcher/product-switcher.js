// src/components/header/header.js

import "./product-switcher.scss"
import { ProductSwitcher } from "carbon-components"
import { OverflowMenu } from "carbon-components"
import { Search } from "carbon-components"

class ProductSwitcherPanel {
    constructor() {
        this._componentName = this.constructor.name
    }

    view(vnode) {
        // prettier-ignore
        return m("aside.bx--panel--overlay[id='switcher-1ujwq1lk8gp'][data-product-switcher='']", 
                  m("div.bx--product-switcher",
                    [
                      m("div.bx--product-switcher__search", 
                        m("div.bx--form-item", 
                          m(".bx--search.bx--search--sm.bx--search--shell[data-search=''][role='search']",
                            [
                              m("label.bx--label[id='search-input-label-1'][for='search__input-1']", 
                                "Search"
                              ),
                              m("input.bx--search-input[type='text'][role='search'][id='search__input-1'][placeholder='Search all products'][aria-labelledby='search-input-label-2']"),
                              m("svg.bx--search-magnifier[width='16'][height='16'][viewBox='0 0 16 16']", 
                                m("path[d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm4.936-1.27l4.563 4.557-.707.708-4.563-4.558a6.5 6.5 0 1 1 .707-.707z'][fill-rule='nonzero']")
                              ),
                              m("button.bx--search-close.bx--search-close--hidden[title='Clear search input'][aria-label='Clear search input']", 
                                m("svg[width='16'][height='16'][viewBox='0 0 16 16'][xmlns='http://www.w3.org/2000/svg']", 
                                  m("path[d='M8 6.586L5.879 4.464 4.464 5.88 6.586 8l-2.122 2.121 1.415 1.415L8 9.414l2.121 2.122 1.415-1.415L9.414 8l2.122-2.121-1.415-1.415L8 6.586zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z'][fill-rule='evenodd']")
                                )
                              )
                            ]
                          )
                        )
                      ),
                      m("p.bx--product-switcher__subheader", 
                        "My Products"
                      ),
                      m("ul.bx--product-switcher__product-list",
                        [
                          m("li.bx--product-list__item",
                            [
                              m("a.bx--product-link[tabindex='0'][href='javascript:void(0)']",
                                [
                                  m("div.bx--product-switcher__icon", 
                                    m("svg[width='20'][height='20'][xmlns='http://www.w3.org/2000/svg'][viewBox='0 0 32 32'][aria-hidden='true']", 
                                      m("path[d='M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z']")
                                    )
                                  ),
                                  m("span.bx--product-link__name", 
                                    "My Product"
                                  )
                                ]
                              ),
                              m(".bx--overflow-menu[data-overflow-menu=''][tabindex='0'][aria-label='Overflow menu description']",
                                [
                                  m("svg[width='3'][height='15'][viewBox='0 0 3 15']", 
                                    m("path[d='M0 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0M0 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0M0 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0']")
                                  ),
                                  m("ul.bx--overflow-menu-options.bx--overflow-menu--flip[tabindex='-1'][data-floating-menu-direction='bottom']",
                                    [
                                      m("li.bx--overflow-menu-options__option.bx--overflow__item", 
                                        m("button.bx--overflow-menu-options__btn[title='Option 1'][data-floating-menu-primary-focus='']", 
                                          "Option 1"
                                        )
                                      ),
                                      m("li.bx--overflow-menu-options__option", 
                                        m("button.bx--overflow-menu-options__btn", 
                                          "Option 2"
                                        )
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          m("li.bx--product-list__item",
                            [
                              m("a.bx--product-link[tabindex='0'][href='javascript:void(0)']",
                                [
                                  m("div.bx--product-switcher__icon", 
                                    m("svg[width='20'][height='20'][xmlns='http://www.w3.org/2000/svg'][viewBox='0 0 32 32'][aria-hidden='true']", 
                                      m("path[d='M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z']")
                                    )
                                  ),
                                  m("span.bx--product-link__name", 
                                    "My Product 2"
                                  )
                                ]
                              ),
                              m(".bx--overflow-menu[data-overflow-menu=''][tabindex='0'][aria-label='Overflow menu description']",
                                [
                                  m("svg[width='3'][height='15'][viewBox='0 0 3 15']", 
                                    m("path[d='M0 1.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0M0 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0M0 13.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 1 1-3 0']")
                                  ),
                                  m("ul.bx--overflow-menu-options.bx--overflow-menu--flip[tabindex='-1'][data-floating-menu-direction='bottom']",
                                    [
                                      m("li.bx--overflow-menu-options__option.bx--overflow__item", 
                                        m("button.bx--overflow-menu-options__btn[title='Option 1'][data-floating-menu-primary-focus='']", 
                                          "Option 1"
                                        )
                                      ),
                                      m("li.bx--overflow-menu-options__option", 
                                        m("button.bx--overflow-menu-options__btn", 
                                          "Option 2"
                                        )
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      m("div.bx--product-switcher__item", 
                        m("button.bx--product-switcher__all-btn[aria-label='Show All Applications'][tabindex='0']", 
                          "View all products"
                        )
                      )
                    ]
                  )
                )
    }

    oncreate(vnode) {
        ProductSwitcher.init()
        OverflowMenu.init()
        Search.init()
        if (process.env.NODE_ENV !== "production") {
            let logStateAttrs = {
                attrs: vnode.attrs,
                state: vnode.state,
            }
            console.log(`Component: ${this._componentName}`, logStateAttrs)
        }
    }
}

export default ProductSwitcherPanel
