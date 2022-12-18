import * as Stretchy from "stretchy";

const shadowRoot = document.body.attachShadow({ mode: "open" });
const element = document.getElementById("el") as HTMLElement;

//
// selectors
//
Stretchy.selectors.base = "textarea";
Stretchy.selectors.filter = ".foo, .foo *";

//
// active
//
Stretchy.active = false;

//
// init()
//
Stretchy.init();
Stretchy.init(document.documentElement);
Stretchy.init(shadowRoot);

//
// resize()
//
Stretchy.resize(element);
// @ts-expect-error
Stretchy.resize(shadowRoot);

//
// resizes()
//
Stretchy.resizes(element);
// @ts-expect-error
Stretchy.resizes(shadowRoot);

//
// resizeAll()
//
Stretchy.resizeAll();
Stretchy.resizeAll(element);
Stretchy.resizeAll(element, document.body);
Stretchy.resizeAll(element, shadowRoot);

Stretchy.resizeAll([element]);
Stretchy.resizeAll([element], document.body);
Stretchy.resizeAll([element], shadowRoot);

Stretchy.resizeAll("textarea");
Stretchy.resizeAll("textarea", document.body);
Stretchy.resizeAll("textarea", shadowRoot);
