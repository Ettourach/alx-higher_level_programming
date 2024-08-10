$(document).ready(function () {
const url = 'https://www.fourtonfish.com/hellosalut/hello/?';
function fetchTranslation () {
const langCode = $('#language_code').val();
$.get(url + $.param({ lang: langCode }), function (data) {
$('#hello').text(data.hello);
});  
$('#btn_translate').click(fetchTranslation);
$('#language_code').keypress(function (event) {
if (event.which === 13) {
fetchTranslation();
}
});
});


