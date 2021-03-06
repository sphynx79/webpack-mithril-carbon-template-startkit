// src/components/menu/menu.js

import "./menu.scss"
import { NavigationMenu } from "carbon-components"

class Menu {
    constructor() {
        this._componentName = this.constructor.name
    }

    view(vnode) {
        // prettier-ignore
        return m(".bx--navigation[id='navigation-menu-3pc63950tgj'][hidden][data-navigation-menu='']",
                  [
                    m("div.bx--navigation-section", 
                      m("ul.bx--navigation-items",
                        [
                          m("li.bx--navigation-item.bx--navigation-item--icon", 
                            m("a.bx--navigation-link[href='javascript:void(0)']",
                              [
                                m("div.bx--navigation-icon", 
                                  m("svg[width='20'][height='20'][xmlns='http://www.w3.org/2000/svg'][viewBox='0 0 32 32'][aria-hidden='true']", 
                                    m("path[d='M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z']")
                                  )
                                ),
                                "Item link"
                              ]
                            )
                          ),
                          m("li.bx--navigation-item.bx--navigation-item--icon", 
                            m("a.bx--navigation-link[href='javascript:void(0)']",
                              [
                                m("div.bx--navigation-icon", 
                                  m("svg[width='20'][height='20'][xmlns='http://www.w3.org/2000/svg'][viewBox='0 0 32 32'][aria-hidden='true']", 
                                    m("path[d='M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z']")
                                  )
                                ),
                                "Item link"
                              ]
                            )
                          )
                        ]
                      )
                    ),
                    m("div.bx--navigation-section", 
                      m("ul.bx--navigation-items",
                        [
                          m("li.bx--navigation-item.bx--navigation-item--active.bx--navigation-item--icon", 
                            m("a.bx--navigation-link[href='javascript:void(0)']",
                              [
                                m("div.bx--navigation-icon", 
                                  m("svg[width='20'][height='20'][xmlns='http://www.w3.org/2000/svg'][viewBox='0 0 32 32'][aria-hidden='true']", 
                                    m("path[d='M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z']")
                                  )
                                ),
                                "Item link"
                              ]
                            )
                          ),
                          m("li.bx--navigation-item.bx--navigation-item--icon", 
                            m("a.bx--navigation-link[href='javascript:void(0)']",
                              [
                                m("div.bx--navigation-icon", 
                                  m("svg[width='20'][height='20'][xmlns='http://www.w3.org/2000/svg'][viewBox='0 0 32 32'][aria-hidden='true']", 
                                    m("path[d='M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z']")
                                  )
                                ),
                                "Item link"
                              ]
                            )
                          ),
                          m("li.bx--navigation-item.bx--navigation-item--icon", 
                            m("a.bx--navigation-link[href='javascript:void(0)']",
                              [
                                m("div.bx--navigation-icon", 
                                  m("svg[width='20'][height='20'][xmlns='http://www.w3.org/2000/svg'][viewBox='0 0 32 32'][aria-hidden='true']", 
                                    m("path[d='M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z']")
                                  )
                                ),
                                "Item link"
                              ]
                            )
                          ),
                          m("li.bx--navigation-item.bx--navigation-item--icon", 
                            m("div.bx--navigation__category",
                              [
                                m("button.bx--navigation__category-toggle[aria-haspopup='true'][aria-expanded='false'][aria-controls='category-1-menu']",
                                  [
                                    m("div.bx--navigation-icon", 
                                      m("svg[aria-hidden='true'][width='20'][height='20'][xmlns='http://www.w3.org/2000/svg'][viewBox='0 0 32 32']", 
                                        m("path[d='M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z']")
                                      )
                                    ),
                                    m("div.bx--navigation__category-title",
                                      [
                                        "L1 category",
                                        m("svg[aria-hidden='true'][width='20'][height='20'][xmlns='http://www.w3.org/2000/svg'][viewBox='0 0 32 32']", 
                                          m("path[d='M16 22L6 12l1.414-1.414L16 19.172l8.586-8.586L26 12 16 22z']")
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                m("ul.bx--navigation__category-items[id='category-1-menu'][role='menu']",
                                  [
                                    m("li.bx--navigation__category-item", 
                                      m("a.bx--navigation-link[href='javascript:void(0)'][role='menuitem']", 
                                        "Nested link"
                                      )
                                    ),
                                    m("li.bx--navigation__category-item.bx--navigation__category-item--active", 
                                      m("a.bx--navigation-link[href='javascript:void(0)'][role='menuitem']", 
                                        "Nested link"
                                      )
                                    ),
                                    m("li.bx--navigation__category-item", 
                                      m("a.bx--navigation-link[href='javascript:void(0)'][role='menuitem']", 
                                        "Nested link"
                                      )
                                    )
                                  ]
                                )
                              ]
                            )
                          )
                        ]
                      )
                    )
                  ]
                )
    }

    oncreate(vnode) {
        NavigationMenu.init()
        if (process.env.NODE_ENV !== "production") {
            let logStateAttrs = {
                attrs: vnode.attrs,
                state: vnode.state,
            }
            console.log(`Component: ${this._componentName}`, logStateAttrs)
        }
    }
}

export default Menu
