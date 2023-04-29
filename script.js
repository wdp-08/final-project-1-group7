
$(document).ready(function () {
  $(".carousel").carousel({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});


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

// function simpan() { 
//   let table = document.getElementById("crudProfile");
//   let row = table.insertRow();
//   let nama = document.getElementById("nama").value;
//   let nik = document.getElementById("nik").value;
//   let dom = document.getElementById("dom").value;
//   let email = document.getElementById("email").value;
//   let nohp = document.getElementById("nohp").value;
//   let link = document.getElementById("link").value;

//   row.insertCell(0).innerHTML = "Nama";
//   row.insertCell(1).innerHTML = nama;
//   row = table.insertRow();

//   row.insertCell(0).innerHTML = "NIK";
//   row.insertCell(1).innerHTML = nik;
//   row = table.insertRow();

//   row.insertCell(0).innerHTML = "Domisili";
//   row.insertCell(1).innerHTML = dom;
//   row = table.insertRow();

//   row.insertCell(0).innerHTML = "Email";
//   row.insertCell(1).innerHTML = email;
//   row = table.insertRow();

//   row.insertCell(0).innerHTML = "No. Hp";
//   row.insertCell(1).innerHTML = nohp;
//   row = table.insertRow();

//   row.insertCell(0).innerHTML = "Link";
//   row.insertCell(1).innerHTML = link;
//   row = table.insertRow();

//   saveProfile(nama, nik, dom, email, nohp, link);
// }

// function saveProfile(nama, nik, dom, email, nohp, link) { 
//   let profile = {"nama" : nama, "nik" : nik, "dom" : dom, "email" : email,
//   "No. Hp" : nohp, "Link" : link};
//   localStorage.setItem("crudProfile", JSON.stringify(profile));
// }


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
