// css main link to load  the CSS files from
const URl = gettingURI();
console.log(URl);
const cssLink = URl+'css/themes/';

// events to listen to any cahnge that might happen
$("#code_text_area").on("input", function() {Init()});
$("#language").on("change", function() {Init()});
$("#theme").on("change", function() {Init()});

// to initialize the prcessess of styling the code when any change happen to any of the inputs
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


// in case there is no code, this will appear
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

// to color the code and add it into the code area after styling
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

// event to listen to when the Copy HTML button is clicked
$("#copyHtml").on("click",function() {
    CopyHTML();
})

// to copy HTML code to the dashboard
function CopyHTML() {
    let htmlCode = $("#code_area").html();
    let HiddenInput = $("#hiddenToCopy");
    HiddenInput.val(htmlCode);
    // HiddenInput.select();

    var textBox = document.getElementById("hiddenToCopy");
    textBox.select();
    document.execCommand("copy");

    // document.execCommand("Copy");

    console.log("coppied");
}

// getting the current URL we are in
function gettingURI() {
    let current = window.location.href;
    let check =  current.substring(0, current.lastIndexOf('/')+1);
    return check;
}
