class EventHandler {
    constructor() {
        this.elements = []
        this.v = new Validator()
    }

    attachListeners(element, eventType) {
        let ch = element.children;

        for (let i = 0; i < ch.length; i++) {

            if (ch[i].nodeName === 'INPUT') {
                ch[i].addEventListener(eventType, this.v.validate)
                this.elements.push(ch[i])
            }

            //Calling self if element has children
            if (ch[i].children.length > 0)
                this.attachListeners(ch[i], eventType)
        }
    }
}