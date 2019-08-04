const eh = new EventHandler()

eh.attachListeners(document.getElementById('myForm'), 'keyup')

console.log('Elements with attached validator')
console.log(eh.elements)