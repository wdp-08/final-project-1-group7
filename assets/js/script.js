
$(document).ready(function () {
  $(".carousel").carousel({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
})


function simpan() {
  let table = document.getElementById("myTable");
  let row = table.insertRow();
  let nama = document.getElementById("nama").value;
  let nik = document.getElementById("nik").value;
  let domisili = document.getElementById("domisili").value;
  let email = document.getElementById("email").value;
  let nohp = document.getElementById("nohp").value;
  let link = document.getElementById("link").value;
  row.insertCell(0).innerHTML = "Nama";
  row.insertCell(1).innerHTML = nama;
  row = table.insertRow();
  row.insertCell(0).innerHTML = "NIK";
  row.insertCell(1).innerHTML = nik;
  row = table.insertRow();
  row.insertCell(0).innerHTML = "Domisili";
  row.insertCell(1).innerHTML = domisili;
  row = table.insertRow();
  row.insertCell(0).innerHTML = "Email";
  row.insertCell(1).innerHTML = email;
  row = table.insertRow();
  row.insertCell(0).innerHTML = "No Hp";
  row.insertCell(1).innerHTML = nohp;
  row = table.insertRow();
  row.insertCell(0).innerHTML = "Link";
  row.insertCell(1).innerHTML = link;
  row = table.insertRow();
  saveData(nama, nik, domisili, email, nohp, link);
}

function saveData(nama, nik, domisili, nohp, link) {
  let data = {"name": nama, "nik": nik, "domisili" : domisili, "email" : email, "nohp" : nohp, "link" : link};
  localStorage.setItem("myData", JSON.stringify(data));
}


// // Validasi Data
function validasiData() {
  let nominal = document.getElementById("nominal").value;
  let penting = document.getElementById("penting").value;

  if (nominal == "") {
    alert ("Masukkan Nominal");
    return false;
  }

  if (penting == "") {
    alert ("Masukkan Kepentingan Peminjaman");
    return false;
  }

  return true;

}


function showProfile() {
  let profileSaya;
  if (localStorage.getItem("profileSaya") == null) {
    profileSaya = [];
  } else {
    profileSaya = JSON.parse(localStorage.getItem("profileSaya"));
  }

  let nama = document.getElementById("nama"); nama.innerHTML = nama;
  let nik = document.getElementById("nik"); nik.innerHTML = nik;
  let dom = document.getElementById("dom"); dom.innerHTML = dom;

}

function showPengajuan() { 
    let pengajuanCredit;
    if (localStorage.getItem("pengajuanCredit") == null) {
      pengajuanCredit = [];
    } else {
      pengajuanCredit = JSON.parse(localStorage.getItem("pengajuanCredit"));
    }

    let table = document.getElementById("data-pengajuan");
    table.innerHTML= '';

    pengajuanCredit.forEach(function (element, index){
      table.innerHTML += `
      <tr>
          <td>${element.nominal}</td>
          <td>${element.penting}</td>
          <td>${element.pinjam}</td>
          <td>${element.bayar}</td>
          <td id="status">Diproses</td>
          <td>
          <button onclick="deletePengajuan(${index})" class="btn btn-danger">Delete</button>
          </td>
      </tr>`
      
    });
}

document.onload = showPengajuan();

function ajukanCredit(){
  if (validasiData() == true) {
    let nominal = document.getElementById("nominal").value;
    let penting = document.getElementById("penting").value;
    let pinjam = document.getElementById("pinjam").value;
    let bayar = document.getElementById("bayar").value;

    let pengajuanCredit;
    if (localStorage.getItem("pengajuanCredit") == null){
        pengajuanCredit = [];
    } else {
      pengajuanCredit = JSON.parse(localStorage.getItem("pengajuanCredit"))
    }

    pengajuanCredit.push({
      nominal : nominal,
      penting : penting,
      pinjam : pinjam,
      bayar : bayar
    });

    localStorage.setItem("pengajuanCredit", JSON.stringify(pengajuanCredit));
    showPengajuan();
    document.getElementById("nominal").value="";
    document.getElementById("penting").value="";
    document.getElementById("pinjam").value="";
    document.getElementById("bayar").value="";

  }
  
}

function deletePengajuan(index){
  let pengajuanCredit;
  if (localStorage.getItem("pengajuanCredit") == null) {
      pengajuanCredit = [];
  } else{
      pengajuanCredit = JSON.parse(localStorage.getItem("pengajuanCredit"))
  }

  pengajuanCredit.splice(index, 1);
  localStorage.setItem("pengajuanCredit", JSON.stringify(pengajuanCredit))
  showPengajuan();

}
