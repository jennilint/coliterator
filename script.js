var numberOfCombinations = 21

        function showTwoColors(){
            for (i = 0; i < numberOfCombinations*2; i++) {
                document.getElementsByClassName("colorBlock")[i].style.height = "60px"
                document.getElementsByClassName("colorBlock")[i].style.display = "block"
            }
            for (i = 0; i < numberOfCombinations; i++) {
                document.getElementsByClassName("colorBlock2")[i].style.display = "none"
                document.getElementsByClassName("colorBlock3")[i].style.display = "none"
                document.getElementsByClassName("colorBlock4")[i].style.display = "none"
            };
        }

        function showThreeColors(){
            for (i = 0; i < numberOfCombinations*2; i++) {
                document.getElementsByClassName("colorBlock")[i].style.height = "40px"
                document.getElementsByClassName("colorBlock")[i].style.display = "block"
            }
            for (i = 0; i < numberOfCombinations; i++) {
                document.getElementsByClassName("colorBlock2")[i].style.height = "40px"
                document.getElementsByClassName("colorBlock2")[i].style.display = "block"
                document.getElementsByClassName("colorBlock3")[i].style.display = "none"
                document.getElementsByClassName("colorBlock4")[i].style.display = "none"
            };
        }

        function showFourColors(){
            for (i = 0; i < numberOfCombinations*2; i++) {
                document.getElementsByClassName("colorBlock")[i].style.height = "30px"
                document.getElementsByClassName("colorBlock")[i].style.display = "block"
            }
            for (i = 0; i < numberOfCombinations; i++) {
                document.getElementsByClassName("colorBlock2")[i].style.display = "block"
                document.getElementsByClassName("colorBlock2")[i].style.height = "30px"
                document.getElementsByClassName("colorBlock3")[i].style.display = "block"
                document.getElementsByClassName("colorBlock3")[i].style.height = "30px"
                document.getElementsByClassName("colorBlock4")[i].style.display = "none" 
            };
        }

        function showFiveColors(){
            for (i = 0; i < numberOfCombinations*2; i++) {
                document.getElementsByClassName("colorBlock")[i].style.height = "24px"
                document.getElementsByClassName("colorBlock")[i].style.display = "block"
            }
            for (i = 0; i < numberOfCombinations; i++) {
                document.getElementsByClassName("colorBlock2")[i].style.display = "block"
                document.getElementsByClassName("colorBlock2")[i].style.height = "24px"
                document.getElementsByClassName("colorBlock3")[i].style.display = "block"
                document.getElementsByClassName("colorBlock3")[i].style.height = "24px"
                document.getElementsByClassName("colorBlock4")[i].style.display = "block"
                document.getElementsByClassName("colorBlock4")[i].style.height = "24px"
            };
        }

         function random_color() {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var randomColor = "rgb(" + r + "," + g + "," + b + ")";
            return randomColor
        };

        var combinations = [];
        function changeColorBlock() { 
            for (i = 0; i < numberOfCombinations; i++) {
                var combination = [];
                for (j = 0; j < 5; j++) {
                    color = random_color()
                    combination.push(color)
                    document.getElementById("colorBlock" + [i] + "." + [j]).style.backgroundColor = color;
                };
                combinations.push(combination);
                combination = [];
            };
            
        };

        function clearOutlines() {
            for (i = 0; i < numberOfCombinations; i++) {
                document.getElementById("combination" + i).style.outline = "none";
            };
        };

        //DOES NOT WORK!!
        function rgbToHex(values){
            var r = values[0]
            var g = values[1]
            var b = values[2]
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        };

        function displayChosenCombination(number) {

            //OUTLINES
            clearOutlines()
            document.getElementById("combination" + number).style.outline = "5px solid yellow";

            //SHOW HIDDEN DISPLAY LETTERS AND CHANGE COLORS
            document.getElementById("displayLetterContainer").style.display = "block";
            document.getElementById("displayLetterContainer").style.backgroundColor = combinations[number][0]
            if (numberOfColors == 5){
                document.getElementById("displayTextHeader").style.color = combinations[number][1] 
                document.getElementById("displayTextHeader2").style.color = combinations[number][2] 
                document.getElementById("displayTextBody").style.color = combinations[number][3] 
            }
            else if (numberOfColors == 4) {
                document.getElementById("displayTextHeader").style.color = combinations[number][1] 
                document.getElementById("displayTextHeader2").style.color = combinations[number][2] 
                document.getElementById("displayTextBody").style.color = combinations[number][3] 
            }
            else if (numberOfColors == 3){
                document.getElementById("displayTextHeader").style.color = combinations[number][1] 
                document.getElementById("displayTextHeader2").style.color = combinations[number][2] 
                document.getElementById("displayTextBody").style.color = combinations[number][2] 
            }
            else {
                document.getElementById("displayTextHeader").style.color = combinations[number][1] 
                document.getElementById("displayTextHeader2").style.color = combinations[number][1] 
                document.getElementById("displayTextBody").style.color = combinations[number][1] 
            };
            

            //ASSIGN COLORS TO DISPLAY BLOCKS
            document.getElementById("displayColorBlock0").style.backgroundColor = combinations[number][0];
            document.getElementById("displayColorBlock1").style.backgroundColor = combinations[number][1];
            document.getElementById("displayColorBlock2").style.backgroundColor = combinations[number][2];
            document.getElementById("displayColorBlock3").style.backgroundColor = combinations[number][3];
            document.getElementById("displayColorBlock4").style.backgroundColor = combinations[number][4];
            
            //DISPLAY SIZE, GRADIENTS AND COLOR VALUE TEXT
            for (i = 0; i < 5; i++) {
                document.getElementsByClassName("colorValue")[i].innerHTML = "";
                document.getElementsByClassName("colorValueBlock")[i].style.display = "none";
                document.getElementsByClassName("singleValueContainer")[i].style.display = "none";
            };
            if (numberOfColors == 5) {
                document.getElementById("displayGradientCombination").style.backgroundImage = "linear-gradient(0.25turn," + combinations[number][0] + "," + combinations[number][1] + "," + combinations[number][2] + "," + combinations[number][3] + "," + combinations[number][4] + ")";
                for (i = 0; i < 5; i++) {
                    var removeRgbStringStart = combinations[number][i].replace("rgb(", "");
                    var removeRgbStringEnd = removeRgbStringStart.replace(")", "");
                    var splitRgbString = removeRgbStringEnd.split(",");
                    document.getElementById("colorValue" + i).innerHTML = "R: " + splitRgbString[0] + "<br>G: " + splitRgbString[1] +  "<br>B: " + splitRgbString[2];
                    document.getElementById("colorValueBlock" + i).style.display = "block";
                    document.getElementById("colorValueBlock" + i).style.backgroundColor = combinations[number][i];
                    document.getElementsByClassName("singleValueContainer")[i].style.display = "block";  
                };
                document.getElementById("displayColorBlock2").style.display = "block"
                document.getElementById("displayColorBlock3").style.display = "block"
                document.getElementById("displayColorBlock4").style.display = "block"

                //DISPLAY BLOCK SIZE
                for (i = 0; i < 2; i++) {
                document.getElementsByClassName("displayBlock")[i].style.width = 350 / 5 + "px"
                };
                for (i = 0; i < 3; i++) {
                    document.getElementsByClassName("displayBlock2")[i].style.width = 350 / 5 + "px"
                };
            }
            else if (numberOfColors == 4) {
                document.getElementById("displayGradientCombination").style.backgroundImage = "linear-gradient(0.25turn," + combinations[number][0] + "," + combinations[number][1] + "," + combinations[number][2] + "," + combinations[number][3] + ")";
                for (i = 0; i < 4; i++) {
                    var removeRgbStringStart = combinations[number][i].replace("rgb(", "");
                    var removeRgbStringEnd = removeRgbStringStart.replace(")", "");
                    var splitRgbString = removeRgbStringEnd.split(",");
                    document.getElementById("colorValue" + i).innerHTML = "R: " + splitRgbString[0] + "<br>G: " + splitRgbString[1] +  "<br>B: " + splitRgbString[2];
                    document.getElementById("colorValueBlock" + i).style.display = "block";
                    document.getElementById("colorValueBlock" + i).style.backgroundColor = combinations[number][i];
                    document.getElementsByClassName("singleValueContainer")[i].style.display = "block";   
                };
                document.getElementById("displayColorBlock2").style.display = "block"
                document.getElementById("displayColorBlock3").style.display = "block"
                document.getElementById("displayColorBlock4").style.display = "none"
                //DISPLAY BLOCK SIZE
                for (i = 0; i < 2; i++) {
                document.getElementsByClassName("displayBlock")[i].style.width = 350 / 4 + "px"
                };
                for (i = 0; i < 3; i++) {
                    document.getElementsByClassName("displayBlock2")[i].style.width = 350 / 4 + "px"
                };
            }
            else if (numberOfColors == 3) {
                document.getElementById("displayGradientCombination").style.backgroundImage = "linear-gradient(0.25turn," + combinations[number][0] + "," + combinations[number][1] + "," + combinations[number][2] + ")";
                for (i = 0; i < 3; i++) {
                    var removeRgbStringStart = combinations[number][i].replace("rgb(", "");
                    var removeRgbStringEnd = removeRgbStringStart.replace(")", "");
                    var splitRgbString = removeRgbStringEnd.split(",");
                    document.getElementById("colorValue" + i).innerHTML = "R: " + splitRgbString[0] + "<br>G: " + splitRgbString[1] +  "<br>B: " + splitRgbString[2];
                    document.getElementById("colorValueBlock" + i).style.display = "block";
                    document.getElementById("colorValueBlock" + i).style.backgroundColor = combinations[number][i];
                    document.getElementsByClassName("singleValueContainer")[i].style.display = "block";
                };
                document.getElementById("displayColorBlock2").style.display = "block"
                document.getElementById("displayColorBlock3").style.display = "none"
                document.getElementById("displayColorBlock4").style.display = "none"
                //DISPLAY BLOCK SIZE
                for (i = 0; i < 2; i++) {
                document.getElementsByClassName("displayBlock")[i].style.width = 350 / 3 + "px"
                };
                for (i = 0; i < 3; i++) {
                    document.getElementsByClassName("displayBlock2")[i].style.width = 350 / 3 + "px"
                };
            }
            else {
                document.getElementById("displayGradientCombination").style.backgroundImage = "linear-gradient(0.25turn," + combinations[number][0] + "," + combinations[number][1] + ")";
                for (i = 0; i < 2; i++) {
                    var removeRgbStringStart = combinations[number][i].replace("rgb(", "");
                    var removeRgbStringEnd = removeRgbStringStart.replace(")", "");
                    var splitRgbString = removeRgbStringEnd.split(",");
                    //var hexValue = rgbToHex(splitRgbString)
                    document.getElementById("colorValue" + i).innerHTML = "R: " + splitRgbString[0] + "<br>G: " + splitRgbString[1] +  "<br>B: " + splitRgbString[2];
                    document.getElementById("colorValueBlock" + i).style.display = "block";
                    document.getElementById("colorValueBlock" + i).style.backgroundColor = combinations[number][i];
                    document.getElementsByClassName("singleValueContainer")[i].style.display = "block";
                };
                document.getElementById("displayColorBlock2").style.display = "none"
                document.getElementById("displayColorBlock3").style.display = "none"
                document.getElementById("displayColorBlock4").style.display = "none"
                //DISPLAY BLOCK SIZE
                for (i = 0; i < 2; i++) {
                document.getElementsByClassName("displayBlock")[i].style.width = 350 / 2 + "px"
                };
                for (i = 0; i < 3; i++) {
                    document.getElementsByClassName("displayBlock2")[i].style.width = 350 / 2 + "px"
                };
            }

            //document.getElementById("displayLetterContainer").style.backgroundColor = combinations[number][0]
            //document.getElementById("displayLetter").style.fill = combinations[number][1] 
        };

        

        function displayChosenCombinations(){
            for (i = 0; i < 5; i++) {
                document.getElementsByClassName("singleValueContainer")[i].style.display = "none";
            };
            for (i = 0; i < numberOfCombinations; i++) {
                document.getElementById("combination" + i).addEventListener("click", displayChosenCombination.bind(event, i), false);
            };
        };

        function changeButtonColors() {
            for (i = 0; i < 4; i++) {
            document.getElementById("button" + i).style.backgroundColor = "white"
            }
            if (numberOfColors == 5) {
                document.getElementById("button3").style.backgroundColor = "gray"
            }
            else if (numberOfColors == 4) {
                document.getElementById("button2").style.backgroundColor = "gray"
            }
            else if (numberOfColors == 3) {
                document.getElementById("button1").style.backgroundColor = "gray"
            }
            else {
                document.getElementById("button0").style.backgroundColor = "gray"
            }    
        };
        

        numberOfColors = 2
        document.getElementById("button0").addEventListener("click", function(){showTwoColors(); numberOfColors = 2; changeButtonColors();})
        document.getElementById("button1").addEventListener("click", function(){showThreeColors(); numberOfColors = 3; changeButtonColors();})
        document.getElementById("button2").addEventListener("click", function(){showFourColors(); numberOfColors = 4; changeButtonColors();})
        document.getElementById("button3").addEventListener("click", function(){showFiveColors(); numberOfColors = 5; changeButtonColors();})

        document.getElementById("button4").addEventListener("click", function(){combinations = []; changeColorBlock(); displayChosenCombinations()})
        
        //BACKGROUND COLOR FUNCTIONS
        function changeBackgroundColorToWhite(){
                document.body.style.backgroundColor = "white"
                document.getElementById("headerText").style.color = "black"
                document.getElementById("sideContainer").style.outline = "1px solid black"
                document.getElementById("content").style.outline = "1px solid black"
                document.getElementById("header").style.outline = "1px solid black"
                document.getElementById("footer").style.outline = "1px solid black"
                for (i = 0; i < 5; i++) {
                    document.getElementsByClassName("colorValue")[i].style.color = "black"
                }
                for (i = 0; i < 2; i++) {
                    document.getElementsByClassName("optionsHeader")[i].style.color = "black"
                }
                for (i = 0; i < 2; i++) {
                    document.getElementsByClassName("footerLink")[i].style.color = "black"
                }
        };

        function changeBackgroundColorToGray(){
                document.body.style.backgroundColor = "gray"
                document.getElementById("headerText").style.color = "black"
                document.getElementById("sideContainer").style.outline = "1px solid black"
                document.getElementById("content").style.outline = "1px solid black"
                document.getElementById("header").style.outline = "1px solid black"
                document.getElementById("footer").style.outline = "1px solid black"
                for (i = 0; i < 5; i++) {
                    document.getElementsByClassName("colorValue")[i].style.color = "black"
                }
                for (i = 0; i < 2; i++) {
                    document.getElementsByClassName("optionsHeader")[i].style.color = "black"
                }
                for (i = 0; i < 2; i++) {
                    document.getElementsByClassName("footerLink")[i].style.color = "black"
                }
        };

        function changeBackgroundColorToBeige(){
                document.body.style.backgroundColor = "beige"
                document.getElementById("headerText").style.color = "black"
                document.getElementById("sideContainer").style.outline = "1px solid black"
                document.getElementById("content").style.outline = "1px solid black"
                document.getElementById("header").style.outline = "1px solid black"
                document.getElementById("footer").style.outline = "1px solid black"
                for (i = 0; i < 5; i++) {
                    document.getElementsByClassName("colorValue")[i].style.color = "black"
                }
                for (i = 0; i < 2; i++) {
                    document.getElementsByClassName("optionsHeader")[i].style.color = "black"
                }
                for (i = 0; i < 2; i++) {
                    document.getElementsByClassName("footerLink")[i].style.color = "black"
                }
        };

        function changeBackgroundColorToBlack(){
                document.body.style.backgroundColor = "black"
                document.getElementById("headerText").style.color = "white"
                document.getElementById("sideContainer").style.outline = "1px solid white"
                document.getElementById("content").style.outline = "1px solid white"
                document.getElementById("header").style.outline = "1px solid white"
                document.getElementById("footer").style.outline = "1px solid white"
                for (i = 0; i < 5; i++) {
                    document.getElementsByClassName("colorValue")[i].style.color = "white"
                }
                for (i = 0; i < 2; i++) {
                    document.getElementsByClassName("optionsHeader")[i].style.color = "white"
                }
                for (i = 0; i < 2; i++) {
                    document.getElementsByClassName("footerLink")[i].style.color = "white"
                }
        };

        //BACKGROUND COLOR BUTTONS

        document.getElementById("button5").addEventListener("click", function(){changeBackgroundColorToWhite()})
        document.getElementById("button6").addEventListener("click", function(){changeBackgroundColorToGray()})
        document.getElementById("button7").addEventListener("click", function(){changeBackgroundColorToBeige()})
        document.getElementById("button8").addEventListener("click", function(){changeBackgroundColorToBlack()})
        
        displayChosenCombinations()
        changeColorBlock()
