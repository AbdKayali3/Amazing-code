$(document).ready(function() {
    // css main link to load  the CSS files from
    const URl = gettingURI();
    console.log(URl);
    const cssLink = URl+'css/themes/';

    let isChange = false;

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
            // InlineColors();
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
    function ColorCode(originalCode,lang = "java", theme = "all-hallows-eve") {
        console.log(lang);

        let highlighted = '';
        highlighted += '';
        // highlighted += '<link rel="stylesheet" href="'+cssLink+theme+'.css">';
        highlighted += '<pre>';
        highlighted += '<div class="in-pre-header" style="height:15px;border-radius:10px 10px 0 0;font-size:10px;text-align:center;">';
        highlighted += 'Script.js';
        highlighted += '<span class="circle-1" style="position:absolute;top:5px;left:10px;width:5px;height:5px;background:red;border-radius:50%;"></span>';
        highlighted += '<span class="circle-2" style="position:absolute;top:5px;left:20px;width:5px;height:5px;background:orange;border-radius:50%;"></span>';
        highlighted += '<span class="circle-3" style="position:absolute;top:5px;left:30px;width:5px;height:5px;background:gray;border-radius:50%;"></span>';
        highlighted += '</div>';
        highlighted += '<code data-language="'+lang+'">';
        highlighted += originalCode;
        highlighted += '</code>';
        highlighted += '<div class="in-pre-header in-pre-footer" style="height:15px;border-radius:0 0 10px 10px">';
        highlighted += '<span class="language-footer" style="position:absolute;bottom:0;left:10px;font-size:9px;">JavaScript</span>';
        highlighted += '<span class="language-footer" style="position:absolute;bottom:0;right:10px;font-size:9px;"><a href="https://abdkayali3.github.io/Amazing-code/">©info</a></span>';
        highlighted += '</div>';
        highlighted += '</pre>';

        $("#code_area").html("");
        $("#code_area").append(highlighted);
        Rainbow.color();
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






    const themes = [
        {
            theme:"all-hallows-eve",
            data: [
                {name: "pre",value: {'border-radius':"10px",}},
                {name: "pre",value: {'display':"inline-block",}},
                {name: "pre",value: {'width':"auto",}},
                {name: "pre",value: {'position':"relative",}},
                {name: "pre",value: {'max-width':"1200px",}},
                {name: "pre",value: {'min-width':"600px",}},
                // {name: "pre",value: {'color':"#fff",}},
                {name: "pre",value: {'margin':"0px",}},
                {name: "pre",value: {'padding':"0",}},
                {name: "pre",value: {'padding-top':"0",}},
                {name: "pre",value: {'word-wrap':"break-word",}},
                {name: "pre",value: {'font-size':"14px",}},
                {name: "pre",value: {'margin-bottom':"20px",}},
                {name: "pre",value: {'background':"#0b1022",}},
                {name: "pre",value: {'color':"#fff",}},
                {name: ".in-pre-header",value: {'background':"#1c1c43",}},
                {name: "pre .comment",value: {'color':"#727272",}},
                {name: "pre .constant",value: {'color':"#d8fa3c",}},
                {name: "pre .storage",value: {'color':"#fbde2d",}},
                {name: "pre .string, pre .comment.docstring",value: {'color':"#61ce3c",}},
                {name: "pre .string.regexp, pre .support.tag.script, pre .support.tag.style",value: {'color':"#fff",}},
                {name: "pre .keyword, pre .selector",value: {'color':"#fbde2d",}},
                {name: "pre .entity",value: {'color':"#ff6400",}},
                {name: "pre .support",value: {'color':"#8da6ce",}},
                {name: "pre .variable.global, pre .variable.class, pre .variable.instance",value: {'color':"#ff6400",}},
                {name: "[data-language='c'] .function.call, .lang-c .function.call, .language-c .function.call",value: {'color':"#8da6ce",}},
            ]
        },
        {
            theme:"ss23",
            data: [
                {name: "sdsd",value: "sadasd"},
                {name: "sdsd",value: "sadasd"},
                {name: "sdsd",value: "sadasd"},
            ]
        }
    ];



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