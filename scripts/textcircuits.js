
            var start = function() {
                String.prototype.replaceAll = function(search, replacement) {
                    var target = this;
                    return target.split(search).join(replacement);
                };
                var text=document.getElementById("text");
                var code=document.getElementById("code");
                var timer=document.getElementById("timer");
                var timerTime = timer.value;
                code.innerHTML = "";
                var totalText=text.value.split("\n");
                for (var i=0;i<totalText.length;i++) {
                    totalText[i] = totalText[i].split("");
                }
                var resultHTML="";
                for (var i=0;i<totalText.length;i++) {
                    resultHTML += "<span class='row' id='r"+i+"'>";
                    for (var j=0;j<totalText[i].length;j++) {
                        if (totalText[i][j]==" ") {
                            totalText[i][j]="&nbsp;";
                        }
                        if (totalText[i][j]=="S") {
                            resultHTML += "<span onclick=\"if (document.getElementById('"+i+"r"+j+"').on==true) {document.getElementById('"+i+"r"+j+"').on = false;} else {document.getElementById('"+i+"r"+j+"').on = true;}\" class='"+totalText[i][j]+"' id='" + i + "r" + j + "'>"+totalText[i][j]+"</span>";
                        } else if (totalText[i][j]=="P") {
                            resultHTML += "<span onmousedown=\"document.getElementById('"+i+"r"+j+"').on=true\" onmouseup=\"document.getElementById('"+i+"r"+j+"').on=false\" class='"+totalText[i][j]+"' id='" + i + "r" + j + "'>"+totalText[i][j]+"</span>";
                        } else {
                            resultHTML += "<span class='"+totalText[i][j]+"' id='" + i+"r"+j + "'>"+totalText[i][j]+"</span>";
                        }
                    }
                    resultHTML += "</span><br/>";
                }
                var updates = []
                code.innerHTML = resultHTML;
                for (var row=0;row<document.getElementsByClassName("row").length;row++) {
                    var B = document.getElementsByClassName("B");
                    var S = document.getElementsByClassName("S");
                    var P = document.getElementsByClassName("P");
                    var L = document.getElementsByClassName("L");
                    var M = document.getElementsByClassName("M");
                    var T = document.getElementsByClassName("T");
                    var X = document.getElementsByClassName("X");
                    var A = document.getElementsByClassName("A");
                    var not = document.getElementsByClassName("!");
                    var wireH = document.getElementsByClassName("-");
                    var wireV = document.getElementsByClassName("|");
                    var wireU = document.getElementsByClassName(":");
                    var wireL = document.getElementsByClassName("=");
                    var cross = document.getElementsByClassName("+");
                    var ready = true;
                    for (var i=0;i<T.length;i++) {T[i].lit=false;}
                    for (var i=0;i<wireH.length;i++) {wireH[i].lit=false;}
                    for (var i=0;i<wireV.length;i++) {wireV[i].lit=false;}
                    for (var i=0;i<wireL.length;i++) {wireL[i].lit=false;}
                    for (var i=0;i<wireU.length;i++) {wireU[i].lit=false;}
                    updates[row] = function() {
                        for (var i=0;i<B.length;i++) {
                            if (document.getElementById(parseInt(B[i].id)+"r"+(parseInt(B[i].id.split("r")[1])+1)).textContent=="-" && document.getElementById(parseInt(B[i].id)+"r"+(parseInt(B[i].id.split("r")[1])+1)).lit!==true) {
                                document.getElementById(parseInt(B[i].id)+"r"+(parseInt(B[i].id.split("r")[1])+1)).lit=true;
                            }
                        }
                        for (var i=0;i<wireV.length;i++) {
                            if (document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])-1))!==null) {
                                if (document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])-1)).textContent=="-" && document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])-1)).lit == true) {
                                    wireV[i].lit=true;
                                }
                            }
                            if (document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])+1))!==null) {
                                if ((document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])+1)).textContent=="-" || document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])+1)).textContent=="S" || document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])+1)).textContent=="L") && wireV[i].lit==true && document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])+1)).lit!==true) {
                                    document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])+1)).lit=true;
                                }
                                if ((document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])+1)).textContent=="-" || document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])+1)).textContent=="S" || document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])+1)).textContent=="L") && wireV[i].lit==false) {
                                    document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])+1)).lit=false;
                                }
                            }
                            if (document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])-1))!==null) {
                                if ((document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])-1)).textContent=="=" || document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])-1)).textContent=="S" || document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])-1)).textContent=="L") && wireV[i].lit==true && document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])-1)).lit!==true) {
                                    document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])-1)).lit=true;
                                }
                                if ((document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])-1)).textContent=="=" || document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])-1)).textContent=="S" || document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])-1)).textContent=="L") && wireV[i].lit==false) {
                                    document.getElementById(parseInt(wireV[i].id)+"r"+(parseInt(wireV[i].id.split("r")[1])-1)).lit=false;
                                }
                            }
                            if (document.getElementById((parseInt(wireV[i].id)+1)+"r"+(parseInt(wireV[i].id.split("r")[1])))!==null) {
                                if ((document.getElementById((parseInt(wireV[i].id)+1)+"r"+(parseInt(wireV[i].id.split("r")[1]))).textContent=="|") && wireV[i].lit==true && document.getElementById((parseInt(wireV[i].id)+1)+"r"+(parseInt(wireV[i].id.split("r")[1]))).lit!==true) {
                                    document.getElementById((parseInt(wireV[i].id)+1)+"r"+(parseInt(wireV[i].id.split("r")[1]))).lit=true;
                                }
                                if ((document.getElementById((parseInt(wireV[i].id)+1)+"r"+(parseInt(wireV[i].id.split("r")[1]))).textContent=="|") && wireV[i].lit==false) {
                                    document.getElementById((parseInt(wireV[i].id)+1)+"r"+(parseInt(wireV[i].id.split("r")[1]))).lit=false;
                                }
                            }
                            if (wireV[i].lit==true) {
                                wireV[i].style.color="yellow";
                            } else {
                                wireV[i].style.color="black";
                            }
                        }
                        for (var i=0;i<wireH.length;i++) {
                            if (document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1))!==null) {
                                if ((document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent=="-" || document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent=="S" || document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent=="P" || document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent=="T" || document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent=="L" || document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent=="|" || document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent==":" || document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent=="!") && wireH[i].lit==true && document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).lit!==true) {
                                    document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).lit=true;
                                }
                                if ((document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent=="-" || document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent=="S" || document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent=="L" || document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent=="P" || document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent=="T" || document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent=="|" || document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent==":" || document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).textContent=="!") && wireH[i].lit==false) {
                                    document.getElementById(parseInt(wireH[i].id)+"r"+(parseInt(wireH[i].id.split("r")[1])+1)).lit=false;
                                }
                            }
                            if (wireH[i].lit==true) {
                                wireH[i].style.color="yellow";
                            } else {
                                wireH[i].style.color="black";
                            }
                        }
                        for (var i=0;i<cross.length;i++) {
                            if (document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])+1))!==null &&document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])-1))!==null) {
                                if ((document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])+1)).textContent=="-" && document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])-1)).textContent=="-") && document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])+1)).lit!==true && document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])-1)).lit==true) {
                                    document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])+1)).lit=true;
                                }
                                if ((document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])+1)).textContent=="-" && document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])-1)).textContent=="-") && document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])-1)).lit==false) {
                                    document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])+1)).lit=false;
                                }
                            }
                            if (document.getElementById((parseInt(cross[i].id)+1)+"r"+(parseInt(cross[i].id.split("r")[1])))!==null &&document.getElementById((parseInt(cross[i].id)-1)+"r"+(parseInt(cross[i].id.split("r")[1])))!==null) {
                                if ((document.getElementById((parseInt(cross[i].id)+1)+"r"+(parseInt(cross[i].id.split("r")[1]))).textContent=="|" && document.getElementById((parseInt(cross[i].id)-1)+"r"+(parseInt(cross[i].id.split("r")[1]))).textContent=="|") && document.getElementById((parseInt(cross[i].id)-1)+"r"+(parseInt(cross[i].id.split("r")[1]))).lit!==false) {
                                    document.getElementById((parseInt(cross[i].id)+1)+"r"+(parseInt(cross[i].id.split("r")[1]))).lit=true;
                                }
                                if ((document.getElementById((parseInt(cross[i].id)+1)+"r"+(parseInt(cross[i].id.split("r")[1]))).textContent=="|" && document.getElementById((parseInt(cross[i].id)-1)+"r"+(parseInt(cross[i].id.split("r")[1]))).textContent=="|") && document.getElementById((parseInt(cross[i].id)-1)+"r"+(parseInt(cross[i].id.split("r")[1]))).lit!==true) {
                                    document.getElementById((parseInt(cross[i].id)+1)+"r"+(parseInt(cross[i].id.split("r")[1]))).lit=false;
                                }
                            }
                            if (document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])-1))!==null &&document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])+1))!==null) {
                                if ((document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])-1)).textContent=="=" && document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])+1)).textContent=="=") && document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])+1)).lit==true) {
                                    document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])-1)).lit=true;
                                }
                                if ((document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])-1)).textContent=="=" && document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])+1)).textContent=="=") && document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])+1)).lit==false) {
                                    document.getElementById(parseInt(cross[i].id)+"r"+(parseInt(cross[i].id.split("r")[1])-1)).lit=false;
                                }
                            }
                            if (document.getElementById((parseInt(cross[i].id)-1)+"r"+(parseInt(cross[i].id.split("r")[1])))!==null &&document.getElementById((parseInt(cross[i].id)+1)+"r"+(parseInt(cross[i].id.split("r")[1])))!==null) {
                                if ((document.getElementById((parseInt(cross[i].id)-1)+"r"+(parseInt(cross[i].id.split("r")[1]))).textContent==":" && document.getElementById((parseInt(cross[i].id)+1)+"r"+(parseInt(cross[i].id.split("r")[1]))).textContent==":") && document.getElementById((parseInt(cross[i].id)-1)+"r"+(parseInt(cross[i].id.split("r")[1]))).lit!==true && document.getElementById((parseInt(cross[i].id)+1)+"r"+(parseInt(cross[i].id.split("r")[1]))).lit!==false) {
                                    document.getElementById((parseInt(cross[i].id)-1)+"r"+(parseInt(cross[i].id.split("r")[1]))).lit=true;
                                }
                                if ((document.getElementById((parseInt(cross[i].id)-1)+"r"+(parseInt(cross[i].id.split("r")[1]))).textContent==":" && document.getElementById((parseInt(cross[i].id)+1)+"r"+(parseInt(cross[i].id.split("r")[1]))).textContent==":") && document.getElementById((parseInt(cross[i].id)+1)+"r"+(parseInt(cross[i].id.split("r")[1]))).lit!==true) {
                                    document.getElementById((parseInt(cross[i].id)-1)+"r"+(parseInt(cross[i].id.split("r")[1]))).lit=false;
                                }
                            }
                            cross[i].lit=true;
                            if (cross[i].lit==true) {
                                cross[i].style.color="orange";
                            } else {
                                cross[i].style.color="black";
                            }
                        }
                        for (var i=0;i<not.length;i++) {
                            if (document.getElementById(parseInt(not[i].id)+"r"+(parseInt(not[i].id.split("r")[1])+1))!==null) {
                                if ((document.getElementById(parseInt(not[i].id)+"r"+(parseInt(not[i].id.split("r")[1])+1)).textContent=="-" || document.getElementById(parseInt(not[i].id)+"r"+(parseInt(not[i].id.split("r")[1])+1)).textContent=="S" || document.getElementById(parseInt(not[i].id)+"r"+(parseInt(not[i].id.split("r")[1])+1)).textContent=="L" || document.getElementById(parseInt(not[i].id)+"r"+(parseInt(not[i].id.split("r")[1])+1)).textContent=="|" || document.getElementById(parseInt(not[i].id)+"r"+(parseInt(not[i].id.split("r")[1])+1)).textContent==":") && not[i].lit!==true) {
                                    document.getElementById(parseInt(not[i].id)+"r"+(parseInt(not[i].id.split("r")[1])+1)).lit=true;
                                }
                                if ((document.getElementById(parseInt(not[i].id)+"r"+(parseInt(not[i].id.split("r")[1])+1)).textContent=="-" || document.getElementById(parseInt(not[i].id)+"r"+(parseInt(not[i].id.split("r")[1])+1)).textContent=="S" || document.getElementById(parseInt(not[i].id)+"r"+(parseInt(not[i].id.split("r")[1])+1)).textContent=="L" || document.getElementById(parseInt(not[i].id)+"r"+(parseInt(not[i].id.split("r")[1])+1)).textContent=="|" || document.getElementById(parseInt(not[i].id)+"r"+(parseInt(not[i].id.split("r")[1])+1)).textContent==":") && not[i].lit==true) {
                                    document.getElementById(parseInt(not[i].id)+"r"+(parseInt(not[i].id.split("r")[1])+1)).lit=false;
                                }
                            }
                            if (not[i].lit==true) {
                                not[i].style.color="green";
                            } else {
                                not[i].style.color="red";
                            }
                        }
                        for (var i=0;i<wireL.length;i++) {
                            if (document.getElementById(parseInt(wireL[i].id)+"r"+(parseInt(wireL[i].id.split("r")[1])-1))!==null) {
                                if ((document.getElementById(parseInt(wireL[i].id)+"r"+(parseInt(wireL[i].id.split("r")[1])-1)).textContent=="=" || document.getElementById(parseInt(wireL[i].id)+"r"+(parseInt(wireL[i].id.split("r")[1])-1)).textContent=="S" || document.getElementById(parseInt(wireL[i].id)+"r"+(parseInt(wireL[i].id.split("r")[1])-1)).textContent=="L" || document.getElementById(parseInt(wireL[i].id)+"r"+(parseInt(wireL[i].id.split("r")[1])-1)).textContent=="|" || document.getElementById(parseInt(wireL[i].id)+"r"+(parseInt(wireL[i].id.split("r")[1])-1)).textContent==":") && wireL[i].lit==true && document.getElementById(parseInt(wireL[i].id)+"r"+(parseInt(wireL[i].id.split("r")[1])-1)).lit!==true) {
                                    document.getElementById(parseInt(wireL[i].id)+"r"+(parseInt(wireL[i].id.split("r")[1])-1)).lit=true;
                                }
                                if ((document.getElementById(parseInt(wireL[i].id)+"r"+(parseInt(wireL[i].id.split("r")[1])-1)).textContent=="=" || document.getElementById(parseInt(wireL[i].id)+"r"+(parseInt(wireL[i].id.split("r")[1])-1)).textContent=="S" || document.getElementById(parseInt(wireL[i].id)+"r"+(parseInt(wireL[i].id.split("r")[1])-1)).textContent=="L" || document.getElementById(parseInt(wireL[i].id)+"r"+(parseInt(wireL[i].id.split("r")[1])-1)).textContent=="|" || document.getElementById(parseInt(wireL[i].id)+"r"+(parseInt(wireL[i].id.split("r")[1])-1)).textContent==":") && wireL[i].lit==false) {
                                    document.getElementById(parseInt(wireL[i].id)+"r"+(parseInt(wireL[i].id.split("r")[1])-1)).lit=false;
                                }
                            }
                            if (wireL[i].lit==true) {
                                wireL[i].style.color="yellow";
                            } else {
                                wireL[i].style.color="black";
                            }
                        }
                        for (var i=0;i<wireU.length;i++) {
                            if (document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])-1))!==null) {
                                if (document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])-1)).textContent=="-" && document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])-1)).lit == true) {
                                    wireU[i].lit=true;
                                }
                            }
                            if (document.getElementById((parseInt(wireU[i].id)+1)+"r"+(parseInt(wireU[i].id.split("r")[1])))!==null) {
                                if (document.getElementById((parseInt(wireU[i].id)+1)+"r"+(parseInt(wireU[i].id.split("r")[1]))).textContent==":" && document.getElementById((parseInt(wireU[i].id)+1)+"r"+(parseInt(wireU[i].id.split("r")[1]))).lit == true) {
                                    wireU[i].lit=true;
                                }
                            }
                            if (document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])+1))!==null) {
                                if ((document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])+1)).textContent=="-" || document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])+1)).textContent=="S" || document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])+1)).textContent=="L") && wireU[i].lit==true && document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])+1)).lit!==true) {
                                    document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])+1)).lit=true;
                                }
                                if ((document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])+1)).textContent=="-" || document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])+1)).textContent=="S" || document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])+1)).textContent=="L") && wireU[i].lit==false) {
                                    document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])+1)).lit=false;
                                }
                            }
                            if (document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])-1))!==null) {
                                if ((document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])-1)).textContent=="=" || document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])-1)).textContent=="S" || document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])-1)).textContent=="L") && wireU[i].lit==true && document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])-1)).lit!==true) {
                                    document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])-1)).lit=true;
                                }
                                if ((document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])-1)).textContent=="=" || document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])-1)).textContent=="S" || document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])-1)).textContent=="L") && wireU[i].lit==false) {
                                    document.getElementById(parseInt(wireU[i].id)+"r"+(parseInt(wireU[i].id.split("r")[1])-1)).lit=false;
                                }
                            }
                            if (document.getElementById((parseInt(wireU[i].id)-1)+"r"+(parseInt(wireU[i].id.split("r")[1])))!==null) {
                                if ((document.getElementById((parseInt(wireU[i].id)-1)+"r"+(parseInt(wireU[i].id.split("r")[1]))).textContent==":") && wireU[i].lit==true && document.getElementById((parseInt(wireU[i].id)-1)+"r"+(parseInt(wireU[i].id.split("r")[1]))).lit!==true) {
                                    document.getElementById((parseInt(wireU[i].id)-1)+"r"+(parseInt(wireU[i].id.split("r")[1]))).lit=true;
                                }
                                if ((document.getElementById((parseInt(wireU[i].id)-1)+"r"+(parseInt(wireU[i].id.split("r")[1]))).textContent==":") && wireU[i].lit==false) {
                                    document.getElementById((parseInt(wireU[i].id)-1)+"r"+(parseInt(wireU[i].id.split("r")[1]))).lit=false;
                                }
                            }
                            if (wireU[i].lit==true) {
                                wireU[i].style.color="yellow";
                            } else {
                                wireU[i].style.color="black";
                            }
                        }
                        for (var i=0;i<S.length;i++) {
                            if (document.getElementById(parseInt(S[i].id)+"r"+(parseInt(S[i].id.split("r")[1])+1))!==null) {
                                if (document.getElementById(parseInt(S[i].id)+"r"+(parseInt(S[i].id.split("r")[1])+1)).textContent=="-" && document.getElementById(parseInt(S[i].id)+"r"+(parseInt(S[i].id.split("r")[1])+1)).lit!==true && S[i].lit==true && S[i].on==true) {
                                    document.getElementById(parseInt(S[i].id)+"r"+(parseInt(S[i].id.split("r")[1])+1)).lit=true;
                                }
                                if (document.getElementById(parseInt(S[i].id)+"r"+(parseInt(S[i].id.split("r")[1])+1)).textContent=="-" && (S[i].lit==false || S[i].on==false)) {
                                    document.getElementById(parseInt(S[i].id)+"r"+(parseInt(S[i].id.split("r")[1])+1)).lit=false;
                                }
                            }
                            S[i].style.cursor = "pointer";
                            if (S[i].lit==true) {
                                S[i].style.color="green";
                            } else {
                                S[i].style.color="black";
                            }
                        }
                        for (var i=0;i<M.length;i++) {
                            if (document.getElementById(parseInt(M[i].id)+"r"+(parseInt(M[i].id.split("r")[1])+1))!==null&&(document.getElementById(parseInt(M[i].id)+1)+"r"+(parseInt(M[i].id.split("r")[1])))!==null&&(document.getElementById(parseInt(M[i].id)-1)+"r"+(parseInt(M[i].id.split("r")[1])))!==null) {
                                if (document.getElementById((parseInt(M[i].id)-1)+"r"+(parseInt(M[i].id.split("r")[1]))).lit==true && document.getElementById((parseInt(M[i].id))+"r"+(parseInt(M[i].id.split("r")[1])-1)).lit==true) {
                                    M[i].on=true;
                                }
                                if (document.getElementById((parseInt(M[i].id)-1)+"r"+(parseInt(M[i].id.split("r")[1]))).lit==true && document.getElementById((parseInt(M[i].id))+"r"+(parseInt(M[i].id.split("r")[1])-1)).lit==false) {
                                    M[i].on=false;
                                }
                                if (M[i].on==true) {document.getElementById(parseInt(M[i].id)+"r"+(parseInt(M[i].id.split("r")[1])+1)).lit=true;} else {document.getElementById(parseInt(M[i].id)+"r"+(parseInt(M[i].id.split("r")[1])+1)).lit=false;}
                            }
                            M[i].style.color="orange";
                        }
                        for (var i=0;i<T.length;i++) {
                            if (document.getElementById(parseInt(T[i].id)+"r"+(parseInt(T[i].id.split("r")[1])+1))!==null) {
                                if ((document.getElementById(parseInt(T[i].id)+"r"+(parseInt(T[i].id.split("r")[1])+1)).textContent=="-" || document.getElementById(parseInt(T[i].id)+"r"+(parseInt(T[i].id.split("r")[1])+1)).textContent=="T") && T[i].lit==true && document.getElementById(parseInt(T[i].id)+"r"+(parseInt(T[i].id.split("r")[1])+1)).lit!==true && T[i].on==true) {
                                    eval("window.setTimeout(function() {document.getElementById('"+parseInt(T[i].id)+"r"+(parseInt(+T[i].id.split("r")[1])+1)+"').lit=true;},50);");
                                }
                                if ((document.getElementById(parseInt(T[i].id)+"r"+(parseInt(T[i].id.split("r")[1])+1)).textContent=="-" || document.getElementById(parseInt(T[i].id)+"r"+(parseInt(T[i].id.split("r")[1])+1)).textContent=="T") && T[i].lit==false && T[i].on==true) {
                                    document.getElementById(parseInt(T[i].id)+"r"+(parseInt(T[i].id.split("r")[1])+1)).lit=false;
                                    T[i].on=false;
                                }
                                if (T[i].lit==true) {
                                    T[i].on=true;
                                }
                            }
                            T[i].style.color="orange";
                            if (T[i].lit==true) {
                                T[i].style.color="red";
                            }
                        }
                        for (var i=0;i<X.length;i++) {
                            if (document.getElementById(parseInt(X[i].id)+"r"+(parseInt(X[i].id.split("r")[1])+1))!==null && document.getElementById(parseInt(X[i].id)+"r"+(parseInt(X[i].id.split("r")[1])-1))!==null && document.getElementById((parseInt(X[i].id)-1)+"r"+(parseInt(X[i].id.split("r")[1])))!==null) {
                                if ((document.getElementById((parseInt(X[i].id)-1)+"r"+(parseInt(X[i].id.split("r")[1]))).lit)==false && (document.getElementById((parseInt(X[i].id))+"r"+(parseInt(X[i].id.split("r")[1])-1)).lit)==true) {
                                    document.getElementById(parseInt(X[i].id)+"r"+(parseInt(X[i].id.split("r")[1])+1)).lit=true;
                                }
                                if ((document.getElementById((parseInt(X[i].id)-1)+"r"+(parseInt(X[i].id.split("r")[1]))).lit)==true && (document.getElementById((parseInt(X[i].id))+"r"+(parseInt(X[i].id.split("r")[1])-1)).lit)==false) {
                                    document.getElementById(parseInt(X[i].id)+"r"+(parseInt(X[i].id.split("r")[1])+1)).lit=true;
                                }
                                if ((document.getElementById((parseInt(X[i].id)-1)+"r"+(parseInt(X[i].id.split("r")[1]))).lit)==null && (document.getElementById((parseInt(X[i].id))+"r"+(parseInt(X[i].id.split("r")[1])-1)).lit)==false) {
                                    document.getElementById(parseInt(X[i].id)+"r"+(parseInt(X[i].id.split("r")[1])+1)).lit=false;
                                }
                                if ((document.getElementById((parseInt(X[i].id)-1)+"r"+(parseInt(X[i].id.split("r")[1]))).lit)==false && (document.getElementById((parseInt(X[i].id))+"r"+(parseInt(X[i].id.split("r")[1])-1)).lit)==null) {
                                    document.getElementById(parseInt(X[i].id)+"r"+(parseInt(X[i].id.split("r")[1])+1)).lit=false;
                                }
                                if ((document.getElementById((parseInt(X[i].id))+"r"+(parseInt(X[i].id.split("r")[1])-1)).lit)==null && (document.getElementById((parseInt(X[i].id)-1)+"r"+(parseInt(X[i].id.split("r")[1]))).lit)==null) {
                                    document.getElementById(parseInt(X[i].id)+"r"+(parseInt(X[i].id.split("r")[1])+1)).lit=false;
                                }
                                if ((document.getElementById((parseInt(X[i].id))+"r"+(parseInt(X[i].id.split("r")[1])-1)).lit)==false && (document.getElementById((parseInt(X[i].id)-1)+"r"+(parseInt(X[i].id.split("r")[1]))).lit)==false) {
                                    document.getElementById(parseInt(X[i].id)+"r"+(parseInt(X[i].id.split("r")[1])+1)).lit=false;
                                }
                                if ((document.getElementById((parseInt(X[i].id))+"r"+(parseInt(X[i].id.split("r")[1])-1)).lit)==true && (document.getElementById((parseInt(X[i].id)-1)+"r"+(parseInt(X[i].id.split("r")[1]))).lit)==true) {
                                    document.getElementById(parseInt(X[i].id)+"r"+(parseInt(X[i].id.split("r")[1])+1)).lit=false;
                                }
                            }
                            X[i].style.color="orange";
                        }
                        for (var i=0;i<A.length;i++) {
                            if (document.getElementById(parseInt(A[i].id)+"r"+(parseInt(A[i].id.split("r")[1])+1))!==null && document.getElementById(parseInt(A[i].id)+"r"+(parseInt(A[i].id.split("r")[1])-1))!==null && document.getElementById((parseInt(A[i].id)-1)+"r"+(parseInt(A[i].id.split("r")[1])))!==null) {
                                if (document.getElementById((parseInt(A[i].id)-1)+"r"+(parseInt(A[i].id.split("r")[1]))).lit==true && document.getElementById((parseInt(A[i].id))+"r"+(parseInt(A[i].id.split("r")[1])-1)).lit==true) {
                                    document.getElementById(parseInt(A[i].id)+"r"+(parseInt(A[i].id.split("r")[1])+1)).lit=true;
                                } else {
                                    document.getElementById(parseInt(A[i].id)+"r"+(parseInt(A[i].id.split("r")[1])+1)).lit=false;
                                }
                            }
                            A[i].style.color="orange";
                        }
                        for (var i=0;i<P.length;i++) {
                            if (document.getElementById(parseInt(P[i].id)+"r"+(parseInt(P[i].id.split("r")[1])+1))!==null) {
                                if (document.getElementById(parseInt(P[i].id)+"r"+(parseInt(P[i].id.split("r")[1])+1)).textContent=="-" && document.getElementById(parseInt(P[i].id)+"r"+(parseInt(P[i].id.split("r")[1])+1)).lit!==true && P[i].lit==true && P[i].on==true) {
                                    document.getElementById(parseInt(P[i].id)+"r"+(parseInt(P[i].id.split("r")[1])+1)).lit=true;
                                }
                                if (document.getElementById(parseInt(P[i].id)+"r"+(parseInt(P[i].id.split("r")[1])+1)).textContent=="-" && (P[i].lit==false || P[i].on==false)) {
                                    document.getElementById(parseInt(P[i].id)+"r"+(parseInt(P[i].id.split("r")[1])+1)).lit=false;
                                }
                            }
                            P[i].style.cursor = "pointer";
                            if (P[i].lit==true) {
                                P[i].style.color="green";
                            } else {
                                P[i].style.color="black";
                            }
                        }
                        for (var i=0;i<L.length;i++) {
                            if (L[i].lit==true) {
                                L[i].style.color="green";
                            } else {
                                L[i].style.color="black";
                            }
                        }
                        ready = true;
                    }
                    window.setInterval(updates[row],timerTime);
                }
            }
            start();