let template = "";

/* pilih template */

function selectTemplate(img) {
  template = img.src;

  document.querySelectorAll(".template img").forEach((i) => {
    i.style.border = "2px solid transparent";
  });

  img.style.border = "3px solid red";
}

/* preview kartu */

function previewCard() {
  document.getElementById("preview").style.display = "block";

  document.getElementById("sekolahCard").innerText =
    document.getElementById("sekolah").value;

  document.getElementById("alamatCard").innerText =
    document.getElementById("alamat").value;

  document.getElementById("namaCard").innerText =
    document.getElementById("nama").value;

  document.getElementById("nisnCard").innerText =
    document.getElementById("nisn").value;

  document.getElementById("masaCard").innerText =
    "Berlaku Sampai : " + document.getElementById("masa").value;

  /* pasang template */

  if (template) {
    document.getElementById("card").style.backgroundImage =
      "url('" + template + "')";
    document.getElementById("card").style.backgroundSize = "cover";
  }

  /* QR CODE */

  document.getElementById("qrCard").innerHTML = "";

  new QRCode(document.getElementById("qrCard"), {
    text: document.getElementById("nisn").value,
    width: 60,
    height: 60,
  });

  /* logo */

  const logoFile = document.getElementById("logo").files[0];

  if (logoFile) {
    const reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById("logoCard").src = e.target.result;
    };

    reader.readAsDataURL(logoFile);
  }

  /* foto siswa */

  const fotoFile = document.getElementById("foto").files[0];

  if (fotoFile) {
    const reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById("fotoCard").src = e.target.result;
    };

    reader.readAsDataURL(fotoFile);
  }
}

/* download kartu */

function downloadCard(){

html2canvas(document.getElementById("card")).then(canvas=>{

const image = canvas.toDataURL("image/png");

/* simpan di browser */
localStorage.setItem("kartuPelajar", image);

/* redirect ke linkvertise */
window.location.href="https://link-hub.net/1314520/prpEIO50wHST";

});

}

function openGuide(){

document.getElementById("guidePopup").style.display="block";

}

function closeGuide(){

document.getElementById("guidePopup").style.display="none";

}

