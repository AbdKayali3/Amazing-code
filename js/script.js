$(document).ready(function() {
    // css main link to load  the CSS files from
    const URl = gettingURI();
    console.log(URl);
    const cssLink = URl+'css/themes/';

    let isChange = false;
    let scriptName = "Script.js";

    // events to listen to any cahnge that might happen
    $("#code_text_area").on("input", function() {Init()});
    $("#language").on("change", function() {Init()});
    $("#theme").on("change", function() {Init()});
    $("#isHeader").on("change", function() {Init()});
    $("#scriptName").on("change", function() {Init()});

    // to initialize the prcessess of styling the code when any change happen to any of the inputs
    function Init() {
        let originalCode = $("#code_text_area").val();
        // console.log(originalCode);

        // get what the user choose from the language, theme, header, script name, and line numbers
        let lang = $("#language").val();
        let theme = $("#theme").val();
        let isHeader = parseInt($("#isHeader").val());
        let scriptName = $("#scriptName").val();

        if(originalCode != "") {
            ColorCode(originalCode, lang, theme, isHeader, scriptName);
            isChange = true;
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
    function ColorCode(originalCode,lang = "java", theme = "all-hallows-eve", isHeader = false, scriptName = "") {
        console.log(lang);

        let highlighted = '';

        highlighted += '<pre>';

        // if the user choose to have a header and a footer
        if(isHeader) {
            highlighted += '<span class="in-pre-additions pre-header">';
            highlighted += scriptName;
            highlighted += '<span class="circle-1"></span>';
            highlighted += '<span class="circle-2"></span>';
            highlighted += '<span class="circle-3"></span>';
            highlighted += '</span>';
        }
        highlighted += '<code data-language="'+lang+'">';
        highlighted += originalCode;
        highlighted += '</code>';

        // if the user choose to have a header and a footer
        if(isHeader) {
            highlighted += '<span class="in-pre-additions pre-footer">';
            highlighted += '<span class="language-footer" >JavaScript</span>';
            highlighted += '<span class="language-footer info-footer"><a href="https://abdkayali3.github.io/Amazing-code/">©info</a></span>';
            highlighted += '</span>';
        }
        highlighted += '</pre>';


        // appending the <pre> (code section) 
        $("#code_area").html("");
        $("#code_area").append(highlighted);

        // style it
        Rainbow.color();

        // a work around to trigger an event that will appened your theme inline styles to the appended <pre>
        $("#code_text_area").blur();
        $("#code_text_area").focus();
        
    }

    // event to listen to when the Copy HTML button is clicked
    $("#copyHtml").on("click",function() {
        CopyHTML();
    })

    // to copy HTML code to the dashboard
    function CopyHTML() {
        let htmlCode = $("#code_area").html();
        let HiddenInput = $("#hiddenToCopy");

        // replace <code> with <span> becasue some texteditors don't like it for securityt reasons
        htmlCode = ReplaceNow(htmlCode, "<code", "<span");
        htmlCode = ReplaceNow(htmlCode, "</code>", "</span>");

        //  remove some divs that are there to rtepresent the loading bar wgile the code get styled (from the original library and we don't need it or use it here)
        htmlCode = ReplaceNow(htmlCode, '<div class="preloader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>', "");

        // appened the html code to a hidden input so we can copy it like we copy any normal text to the clipboard
        HiddenInput.val(htmlCode);
        // HiddenInput.select();
        var textBox = document.getElementById("hiddenToCopy");
        textBox.select();
        document.execCommand("copy");
        console.log("coppied");
    }

    // getting the current URL we are in
    function gettingURI() {
        let current = window.location.href;
        let check =  current.substring(0, current.lastIndexOf('/')+1);
        return check;
    }






    


    // ** a depricated way to inline style the code
    // function InlineColors() {
    //     themes[0].data.forEach(element => {
    //         $(element.name).css(element.value);
    //     });
    // }



    // Work around To bind new elements
    $(document).on("change", "body", function() {
        setTimeout(changeInlineColors.bind(null, this),200);
        isChange = false;
    })

    //to change the colors by adding inline styles
    function changeInlineColors(t) {
        themes[0].data.forEach(element => {
            // $(element.name).css(element.value);
            $(t).find(element.name).css(element.value);
        });
        // $(t).find(".keyword").css({'color':'red'});
        console.log("Inline Coloring Done");
        
    }


    //to find and replace things in a string. we will use it to replace html tags when needed
    function ReplaceNow(str ,replacedFrom, replacedWith) {
        let replaced = "";

        replaced = str.replace(replacedFrom, replacedWith)

        return replaced;
    }


});






// to do list
// 1- make the name dynamic with input and the default string is Code
// 2- make the info link wihtout blue shit
// 3- add line numbers
// 4- more testing to fix the issues that are assuciated with moodel posting
// 5- add the Copy RichText functionalaty
// 6- seperate themes.js file
// 7- add instruction in the same page for moodle and docs
// 8- write in README.md the what is this, where we did tested it, how to use it, and finally what we did use
// 9- (possible) make adding the theme as as easy as adding a JSON somewhere and the code will take it and build it as a theme