$(document).ready(function () {

    $("#message").hide();

    $('#inversion').keyup(function (event) {

        if (event.which >= 37 && event.which <= 40) {
            event.preventDefault();
        }

        $(this).val(function (index, value) {
            return value
                .replace(/\D/g, "")
                .replace(/([0-9])([0-9]{2})$/, '$1.$2')
                .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");
        });
    });

    $("#interes").focusin(function () {
        $("#message").show();
    });

    $("#interes").focusout(function () {
        $("#message").hide();
    });

    $("#calculate").click(function () {
        var time = $("#time").val();
        var inversion = $("#inversion").val().replace(/,/g, ''),
            asANumber = +inversion;
        var interes = $("#interes").val();

        var ganancia = inversion * ((interes / 100) * (time / 365));

        $("#results").text("$" + parseFloat(ganancia.toString().match(/^\d+(?:\.\d{0,2})?/)));
    });
});
