// Kartlara tıklandığında ilgili sesi çalan fonksiyon
function sesCal(sesYolu) {
    let ses = new Audio(sesYolu);
    ses.play().catch(error => {
        console.log("Ses çalma hatası:", error);
    });
}
