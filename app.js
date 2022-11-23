const shareButtons = document.querySelectorAll('.tile-share-button')
const shareButtons2 = document.querySelectorAll('.share-button')

console.log(shareButtons)

async function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)

    try {
       await navigator.clipboard.writeText(link)
       alert("Bağlantı kopyalandı: "  + link)

    } catch (err) {
        console.error(err)
    }

}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))
shareButtons2.forEach(shareButton => shareButton.addEventListener('click', copyText))