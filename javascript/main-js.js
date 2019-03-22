$(document).ready(function () {

    $('#inversion').keyup(function (event) {

        if (event.which >= 37 && event.which <= 40) {
            event.preventDefault();
        }

        $(this).val(function (index, value) {
            return value
                .replace(/\D/g, "")
                .replace(/([0-9])([0-9]{2})$/, '$1.$2')
                //.replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");
        });

        $("#calculate").click(function () {
            var inversion = $("#inversion").val();
            var time = $("#time").val();
            var interes = 0.05;

            var ganancia = inversion * (interes * (time / 365));
            console.log(inversion);
            $("#results").text(ganancia.toString() + "$");
        });
    });
});
