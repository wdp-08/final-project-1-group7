
$(document).ready(function () {
  $(".carousel").carousel({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

function enter() {
  let fnama = document.getElementById("fnama").value;
  let fnik = document.getElementById("fnik").value;
  let femail = document.getElementById("femail").value;
  let fnohp = document.getElementById("fnohp").value;
  let flink = document.getElementById("flink").value;

  document.getElementById("name").innerHTML = fnama;
  document.getElementById("nik").innerHTML = fnik;
  document.getElementById("dom").innerHTML = fdom;
  document.getElementById("email").innerHTML = femail;
  document.getElementById("nohp").innerHTML = fnohp;
  document.getElementById("link").innerHTML = flink;
}


// // Validasi Data
function validasiData() {
  let nama = document.getElementById("nama").value;
  let nik = document.getElementById("nik").value;
  let email = document.getElementById("email").value;
  let nohp = document.getElementById("nohp").value;
  let link = document.getElementById("link").value;
  let nominal = document.getElementById("nominal").value;
  let penting = document.getElementById("penting").value;


  if (nama == ""){
    alert("Masukkan Nama");
    return false;
  }

  if (nik == ""){
    alert("Masukkan NIK");
    return false;
  }

  if (email == ""){
    alert("Masukkan Email");
    return false;
  }

  if (nohp == ""){
    alert("Masukkan No HP");
    return false;
  }

  if (link == ""){
    alert("Masukkan Link");
    return false;
  }

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
