$(document).ready(() => {
    $('#saveServicesBtn').click(() => {
        let servicesJson = $('#services').val().trim();
        localStorage.setItem('services', servicesJson);        
    });

    $('#saveEmployeesBtn').click(() => {
        let employeesJson = $('#employees').val().trim();
        localStorage.setItem('employees', employeesJson);
    });
    
});