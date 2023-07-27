function toggleAccordion(accordionHeader) {
  const accordionItem = accordionHeader.parentElement;
  accordionItem.classList.toggle('active');
}

function copyRekening(rekeningClass) {
  const rekeningElement = document.querySelector(`.${rekeningClass} .rekening-number`);
  if (!rekeningElement) {
    // Cek apakah elemen ditemukan atau tidak
    console.error('Element not found!');
    return;
  }

  const rekeningNumber = rekeningElement.dataset.rekening;
  if (!rekeningNumber) {
    // Cek apakah atribut data-rekening ada atau tidak
    console.error('Data attribute not found!');
    return;
  }

  const textArea = document.createElement('textarea');
  textArea.value = rekeningNumber;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  alert('Nomor rekening berhasil disalin!');
}
