function modaljadwaldokter(){
   $(document).ready(function(){
        $('#jadwal_dokter').show();
   })
}

function lostModalSchedule(){
    $(document).ready(function(){
        $('#jadwal_dokter').hide();
   })
}

function UpdateScheduleDoctor(id){
    $("#updateJadwalDokter").show();

    const Schedule = document.querySelectorAll("table tbody tr[data-id='"+id+"'] td")
    
    const shceduleDoctor = {
        'nama dokter':Schedule[1].textContent,
        'hari kerja' :Schedule[2].textContent,
        'jam masuk'  :Schedule[3].textContent,
        'jam keluar' :Schedule[4].textContent
    }

    const InputUpdateSchedule = document.querySelectorAll("#updateJadwalDokter input");

    InputUpdateSchedule[0].value = shceduleDoctor["nama dokter"]
    InputUpdateSchedule[1].value = shceduleDoctor["hari kerja"]
    InputUpdateSchedule[2].value = shceduleDoctor["jam masuk"]
    InputUpdateSchedule[3].value = shceduleDoctor["jam keluar"]
}

function lostModalUpdateSchedule(){
    $("#updateJadwalDokter").hide();
}