const modal = document.querySelector("dialog")
const btn = document.querySelector("button")
const btnClose = document.querySelector("dialog button")

btn.onclick = function () {
    modal.showModal()
}

btnClose.onclick = function () {
    modal.close()
}