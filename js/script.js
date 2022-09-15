const cssLink = 'css/themes/';

$("#code_text_area").on("input", function() {Init()});
$("#language").on("change", function() {Init()});
$("#theme").on("change", function() {Init()});

function Init() {
    let originalCode = $("#code_text_area").val();
    console.log(originalCode);

    let lang = $("#language").val();

    let theme = $("#theme").val();

    if(originalCode != "") {
        ColorCode(originalCode, lang, theme);
    } else {
        EmptyCode();
    }
}


function EmptyCode() {
    const DefaultHTML = `
    <div class="code_header"></div>
    <div id="code_body" class="code_body">
        <br>
        <br>
        <h5 class="text-placehoder text-center p-5"> <i class="fa-solid fa-wand-sparkles fa-2x"></i> <br><br> A wizzard will do some magic and show you a colorfull code in here</h5>
    </div>
    <div class="code_footer">
    </div>
    `;
    $("#code_area").html(DefaultHTML);
}

function ColorCode(originalCode,lang = "java", theme = "all-hallows-eve") {
    console.log(lang);

    let highlighted = '';
    highlighted += '';
    highlighted += '<link rel="stylesheet" href="'+cssLink+theme+'.css">';
    highlighted += '<pre><code data-language="'+lang+'">';
    highlighted += originalCode;
    highlighted += '</code></pre>';

    $("#code_area").html(highlighted);
    Rainbow.color();

}