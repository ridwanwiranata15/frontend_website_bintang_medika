function ShowDoctor(){
    const doctors = document.querySelectorAll("#doctor")
    doctors.forEach(function(doctor){
        doctor.classList.toggle("miss");
    })
}



$(document).ready(function(){
    $("#submit").click(function(){
        const inputs = document.querySelectorAll("form input");
        const Dokter = {
            nama: inputs[0].value,
            spesialis:inputs[1].value,
            nomorTelepon:inputs[2].value,
            email:inputs[3].value,
            alamat:inputs[4].value
        }
        console.log(Dokter);
    })
})

function UpdateDokter(id){
    const doctors = document.querySelectorAll("table tr[data-id='"+id+"'] td")

    const dokterUpdate = {
        nama: doctors[1].textContent,
        spesialis:doctors[2].textContent,
        nomorTelepon:doctors[3].textContent,
        email:doctors[4].textContent,
        alamat:doctors[5].textContent
    }
    const inputUpdates = document.querySelectorAll(".modal-doctor-update-content-content input");
    inputUpdates[0].value = dokterUpdate.nama
    inputUpdates[1].value = dokterUpdate.spesialis
    inputUpdates[2].value = dokterUpdate.nomorTelepon
    inputUpdates[3].value = dokterUpdate.email
    inputUpdates[4].value = dokterUpdate.alamat
    $(document).ready(function(){
        $('.modal-doctor-update').show();
    })
}

function hideModalUpdate(){
    $(document).ready(function(){
        $('.modal-doctor-update').hide();
    })
}
function ShowModalCreateDoctor(){
    $(document).ready(function(){
        $('.modal-doctor').show();
    })
}

function hideModalCreate(){
    $(document).ready(function(){
        $('.modal-doctor').hide();
    })
}