// src/components/index/index.js

import "./index.scss"
// import SampleComponent from "components/sample-component/sample-component.js"

class Index {
    constructor() {
        this._componentName = this.constructor.name
    }

    view(vnode) {
        // prettier-ignore
        return m("div.bx--content.bx--grid",
                  [
                    m("h1.bx--type-heading-01", 
                      "Heading"
                    ),
                    m("h2.bx--type-heading-01", 
                      "Sub-section"
                    ),
                    m("p.bx--type-body-short-02", 
                      "Elit odit veritatis repudiandae laboriosam amet. Dolore doloribus ut obcaecati harum ad Expedita hic atque quas\
                        repellat et sed Tempore similique laudantium autem quam commodi, temporibus. Minus voluptates reiciendis adipisci."
                    ),
                    m("h3.bx--type-productive-heading-03", 
                      "Tertiary section"
                    ),
                    m("p", 
                      "Adipisicing eius ea est ducimus nihil Sit modi quisquam tempore asperiores at Culpa omnis quasi a rem sapiente,\
                        illo Omnis aut maiores magnam perspiciatis at, rerum? Esse ullam veritatis debitis."
                    ),
                    m("h2", 
                      "Sub-section"
                    ),
                    m("p", 
                      "Elit odit veritatis repudiandae laboriosam amet. Dolore doloribus ut obcaecati harum ad Expedita hic atque quas\
                        repellat et sed Tempore similique laudantium autem quam commodi, temporibus. Minus voluptates reiciendis adipisci."
                    ),
                    m("h3.bx--type-expressive-heading-03", 
                      "Tertiary section"
                    ),
                    m("p", 
                      "Adipisicing eius ea est ducimus nihil Sit modi quisquam tempore asperiores at Culpa omnis quasi a rem sapiente,\
                        illo Omnis aut maiores magnam perspiciatis at, rerum? Esse ullam veritatis debitis."
                    ),
                    m("h2.bx--type-expressive-heading-02", 
                      "Sub-section"
                    ),
                    m("p", 
                      "Elit odit veritatis repudiandae laboriosam amet. Dolore doloribus ut obcaecati harum ad Expedita hic atque quas\
                        repellat et sed Tempore similique laudantium autem quam commodi, temporibus. Minus voluptates reiciendis adipisci."
                    ),
                    m("p", 
                      "Elit odit veritatis repudiandae laboriosam amet. Dolore doloribus ut obcaecati harum ad Expedita hic atque quas\
                        repellat et sed Tempore similique laudantium autem quam commodi, temporibus. Minus voluptates reiciendis adipisci."
                    ),
                    m("h3.bx--type-productive-heading-03", 
                      "Tertiary section"
                    ),
                    m("p", 
                      "Adipisicing eius ea est ducimus nihil Sit modi quisquam tempore asperiores at Culpa omnis quasi a rem sapiente,\
                        illo Omnis aut maiores magnam perspiciatis at, rerum? Esse ullam veritatis debitis."
                    ),
                    m("h2.bx--type-expressive-heading-02", 
                      "Sub-section"
                    ),
                    m("p", 
                      "Elit odit veritatis repudiandae laboriosam amet. Dolore doloribus ut obcaecati harum ad Expedita hic atque quas\
                        repellat et sed Tempore similique laudantium autem quam commodi, temporibus. Minus voluptates reiciendis adipisci."
                    ),
                    m("p", 
                      "Elit odit veritatis repudiandae laboriosam amet. Dolore doloribus ut obcaecati harum ad Expedita hic atque quas\
                        repellat et sed Tempore similique laudantium autem quam commodi, temporibus. Minus voluptates reiciendis adipisci."
                    ),
                    m("h3.bx--type-productive-heading-03", 
                      "Tertiary section"
                    ),
                    m("p", 
                      "Adipisicing eius ea est ducimus nihil Sit modi quisquam tempore asperiores at Culpa omnis quasi a rem sapiente,\
                        illo Omnis aut maiores magnam perspiciatis at, rerum? Esse ullam veritatis debitis."
                    ),
                    m("h2.bx--type-productive-heading-02", 
                      "Sub-section"
                    ),
                    m("p", 
                      "Elit odit veritatis repudiandae laboriosam amet. Dolore doloribus ut obcaecati harum ad Expedita hic atque quas\
                        repellat et sed Tempore similique laudantium autem quam commodi, temporibus. Minus voluptates reiciendis adipisci."
                    ),
                    m("p", 
                      "Elit odit veritatis repudiandae laboriosam amet. Dolore doloribus ut obcaecati harum ad Expedita hic atque quas\
                        repellat et sed Tempore similique laudantium autem quam commodi, temporibus. Minus voluptates reiciendis adipisci."
                    ),
                    m("h3.bx--type-productive-heading-03", 
                      "Tertiary section"
                    ),
                    m("p", 
                      "Adipisicing eius ea est ducimus nihil Sit modi quisquam tempore asperiores at Culpa omnis quasi a rem sapiente,\
                        illo Omnis aut maiores magnam perspiciatis at, rerum? Esse ullam veritatis debitis."
                    ),
                    m("h2.bx--type-heading-02", 
                      "Sub-section"
                    ),
                    m("p", 
                      "Elit odit veritatis repudiandae laboriosam amet. Dolore doloribus ut obcaecati harum ad Expedita hic atque quas\
                        repellat et sed Tempore similique laudantium autem quam commodi, temporibus. Minus voluptates reiciendis adipisci."
                    ),
                    m("p", 
                      "Elit odit veritatis repudiandae laboriosam amet. Dolore doloribus ut obcaecati harum ad Expedita hic atque quas\
                        repellat et sed Tempore similique laudantium autem quam commodi, temporibus. Minus voluptates reiciendis adipisci."
                    ),
                    m("h3.bx--type-productive-heading-03", 
                      "Tertiary section"
                    ),
                    m("p", 
                      "Adipisicing eius ea est ducimus nihil Sit modi quisquam tempore asperiores at Culpa omnis quasi a rem sapiente,\
                        illo Omnis aut maiores magnam perspiciatis at, rerum? Esse ullam veritatis debitis."
                    ),
                    m("h2.bx--type-productive-heading-02", 
                      "Sub-section"
                    ),
                    m("p.bx--type-body-long-02", 
                      "Elit odit veritatis repudiandae laboriosam amet. Dolore doloribus ut obcaecati harum ad Expedita hic atque quas\
                        repellat et sed Tempore similique laudantium autem quam commodi, temporibus. Minus voluptates reiciendis adipisci.\
                        Elit odit veritatis repudiandae laboriosam amet. Dolore doloribus ut obcaecati harum ad Expedita hic atque quas\
                        repellat et sed Tempore similique laudantium autem quam commodi, temporibus. Minus voluptates reiciendis adipisci."
                    ),
                    m("h3.bx--type-productive-heading-03", 
                      "Tertiary section"
                    ),
                    m("p.bx--type-body-short-02", 
                      "Adipisicing eius ea est ducimus nihil Sit modi quisquam tempore asperiores at Culpa omnis quasi a rem sapiente,\
                        illo Omnis aut maiores magnam perspiciatis at, rerum? Esse ullam veritatis debitis."
                    )
                  ]
)
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

export default Index
