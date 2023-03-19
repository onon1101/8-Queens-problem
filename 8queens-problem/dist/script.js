$(document).ready(function () {
    const redBox = document.querySelector('.second .sensor-1');
    const blueBox = document.querySelector('.second .sensor-2');
    const TimeDelay = 500;
    let blueIndex = 0;
    let redIndex = 0;
    let PositionY = 0;
    let temp = 0;

    function loop() {

        if (blueIndex == redIndex) {//第一行

            if (PositionY == 416) {
                line = 0;
                PositionY = 0;
            }

            let LastPosition;

            if (redIndex == 0) { LastPosition = 0; }
            else { LastPosition = (redIndex - 1) * 50; }

            redBox.animate([
                { transform: `translate(${LastPosition}px,${PositionY}px)` },
                { transform: `translate(${redIndex * 50}px, ${PositionY}px)` }
            ],
                {
                    duration: TimeDelay - 200,
                    fill: "forwards",
                    easing: "ease-in-out",
                }
            );
        }

        let LastPosition;
        if (blueIndex == 0) {
            LastPosition = 0;
            temp = 0;
        }
        else {
            LastPosition = temp * 50;
            temp = blueIndex;

        }


        blueBox.animate([
            { transform: `translate(${LastPosition}px,${PositionY}px)` },
            { transform: `translate(${blueIndex * 50}px, ${PositionY}px)` }
        ], {
            duration: TimeDelay - 200,
            fill: "forwards",
            easing: "ease-in-out",
        });

        if (++blueIndex > 6) {
            clearInterval(myTimer);

            setTimeout(function () {
                myTimer = setInterval(function () { loop() }, TimeDelay);
            }, 500);
            if (redIndex == 6) {
                redIndex = 0;
                blueIndex = 0;
                PositionY += 52;
            }

            else {
                blueIndex = redIndex + 1;
                redIndex = redIndex + 1;
            }
        }
    }

    myTimer = setInterval(function () { loop() }, TimeDelay); //第二個的部分

    const blueBox_1 = document.querySelector('.first .sensor-2');

    let blueIndex_1 = 0;
    let PositionY_1 = 0;
    let temp_1 = 0;

    function loop_1() {

        let LastPosition_1;
        if (PositionY_1 == 416) {
            PositionY_1 = 0;
        }

        LastPosition_1 = temp_1 * 50;
        temp_1 = blueIndex_1;


        blueBox_1.animate([
            { transform: `translate(${LastPosition_1}px,${PositionY_1}px)` },
            { transform: `translate(${blueIndex_1 * 50}px, ${PositionY_1}px)` }
        ], {
            duration: TimeDelay - 200,
            fill: "forwards",
            easing: "ease-in-out",
        });

        if (++blueIndex_1 > 6) {
            clearInterval(myTimer_1);

            setTimeout(function () {
                myTimer_1 = setInterval(function () { loop_1() }, TimeDelay);
            }, 500);
            blueIndex_1 = -1;
            PositionY_1 += 52;
        }
    }

    myTimer_1 = setInterval(function () { loop_1() }, TimeDelay); //第二個的部分

    function third() {
        const redBox = document.querySelector('.third .sensor-1');
        const blueBox = document.querySelector('.third .sensor-2');
        let blueIndex = 0;
        let redIndex = 0;
        let PositionY = 0;
        let temp = 0;
        function loop() {

            if (blueIndex == redIndex) {//第一行

                if (PositionY == 400) {
                    PositionY = 0;
                }

                let LastPosition;

                if (redIndex == 0) { LastPosition = 0; }
                else { LastPosition = (redIndex - 1) * 52; }

                redBox.animate([
                    { transform: `translate(${PositionY}px,${LastPosition}px)` },
                    { transform: `translate(${PositionY}px, ${redIndex * 52}px)` }
                ],
                    {
                        duration: TimeDelay - 200,
                        fill: "forwards",
                        easing: "ease-in-out",
                    }
                );
            }

            let LastPosition;
            if (blueIndex == 0) {
                LastPosition = 0;
                temp = 0;
            }
            else {
                LastPosition = temp * 52;
                temp = blueIndex;

            }
            //PositionY
            blueBox.animate([
                { transform: `translate(${PositionY}px,${LastPosition}px)` },
                { transform: `translate(${PositionY}px, ${blueIndex * 52}px)` }
            ], {
                duration: TimeDelay - 200,
                fill: "forwards",
                easing: "ease-in-out",
            });

            if (++blueIndex > 6) {
                clearInterval(myTimer_3);

                setTimeout(function () {
                    myTimer_3 = setInterval(function () { loop() }, TimeDelay);
                }, 500);
                // console.log(PositionY);

                if (redIndex == 6) {
                    redIndex = 0;
                    blueIndex = 0;
                    PositionY += 50;
                }

                else {
                    blueIndex = redIndex + 1;
                    redIndex = redIndex + 1;
                }
            }
        }

        myTimer_3 = setInterval(function () { loop() }, TimeDelay); //第二個的部分

    }

    third();
    function fourth() {
        const redBox = document.querySelector('.fourth .sensor-1');
        const blueBox = document.querySelector('.fourth .sensor-2');


        let blueIndexX = 0;
        let blueIndexY = 1;
        let redIndexX = 0;
        let redIndexY = 1;
        let LastPosition_RedBox = [redIndexX, redIndexY];
        let LastPosition_BlueBox = [blueIndexX, blueIndexY];

        function loop_4() {
            if (redIndexY >= 8) {
                blueIndexX = 0;
                blueIndexY = 1;
                redIndexX = 0;
                redIndexY = 1;
            }

            // console.log(redIndexY);
            redBox.animate([
                { transform: `translate(${LastPosition_RedBox[0]}px,${LastPosition_RedBox[1]}px)` },
                { transform: `translate(${redIndexX * 50}px, ${redIndexY * 52}px)` }
            ],
                {
                    duration: TimeDelay - 200,
                    fill: "forwards",
                    easing: "ease-in-out",
                }
            );

            LastPosition_RedBox = [redIndexX * 50, redIndexY * 52];


            blueIndexX += 1;
            blueIndexY -= 1;

            blueBox.animate([
                { transform: `translate(${LastPosition_BlueBox[0]}px,${LastPosition_BlueBox[1]}px)` },
                { transform: `translate(${blueIndexX * 50}px, ${blueIndexY * 52}px)` }
            ], {
                duration: TimeDelay - 200,
                fill: "forwards",
                easing: "ease-in-out",
            });

            LastPosition_BlueBox = [blueIndexX * 50, blueIndexY * 52];

            // console.log(blueIndexX);
            if (blueIndexY <= 0 || blueIndexX >= 7) {
                clearInterval(myTimer_4);

                setTimeout(function () {
                    myTimer_4 = setInterval(function () { loop_4() }, TimeDelay);
                }, 500);

                if (redIndexX >= 6) {
                    redIndexY += 1;
                    redIndexX = 0;
                    blueIndexX = 0;
                    blueIndexY = redIndexY;
                }
                else {

                    redIndexX += 1;
                    // console.log(redIndexY);
                    blueIndexX = redIndexX;
                    blueIndexY = redIndexY;
                }
                if (blueIndexX >= 7) {
                    // redIndexY += 1;
                    // redIndexX = 0;
                    blueIndexX = 0;
                    blueIndexY = redIndexY;
                }

                // blueIndexX = 1;
            }
        }

        myTimer_4 = setInterval(function () { loop_4() }, TimeDelay); //第二個的部分

    }


    fourth();

    function fifth() {
        const redBox = document.querySelector('.fifth .sensor-1');
        const blueBox = document.querySelector('.fifth .sensor-2');


        let blueIndexX = -1;
        let blueIndexY = 0;
        let redIndexX = 0;
        let redIndexY = 0;
        let LastPosition_RedBox = [redIndexX, redIndexY];
        let LastPosition_BlueBox = [blueIndexX, blueIndexY];

        function loop_5() {
            if (redIndexY >= 7) {
                blueIndexX = -1;
                blueIndexY = 0;
                redIndexX = 0;
                redIndexY = 0;
            }

            // console.log(redIndexY);
            redBox.animate([
                { transform: `translate(${LastPosition_RedBox[0]}px,${LastPosition_RedBox[1]}px)` },
                { transform: `translate(${redIndexX * 50}px, ${redIndexY * 52}px)` }
            ],
                {
                    duration: TimeDelay - 200,
                    fill: "forwards",
                    easing: "ease-in-out",
                }
            );

            LastPosition_RedBox = [redIndexX * 50, redIndexY * 52];


            blueIndexX += 1;
            blueIndexY += 1;

            blueBox.animate([
                { transform: `translate(${LastPosition_BlueBox[0]}px,${LastPosition_BlueBox[1]}px)` },
                { transform: `translate(${blueIndexX * 50}px, ${blueIndexY * 52}px)` }
            ], {
                duration: TimeDelay - 200,
                fill: "forwards",
                easing: "ease-in-out",
            });

            LastPosition_BlueBox = [blueIndexX * 50, blueIndexY * 52];

           console.log(redIndexX);
            if (blueIndexY >= 7 || blueIndexX >= 6) {
                clearInterval(myTimer_5);

                setTimeout(function () {
                    myTimer_5 = setInterval(function () { loop_5() }, TimeDelay);
                }, 500);

                if (redIndexX >= 6) {
                    redIndexY += 1;
                    redIndexX = 0;
                    blueIndexX = redIndexX - 1;
                    blueIndexY = redIndexY;
                }
                else {

                    redIndexX += 1;
                    // console.log(redIndexY);
                    blueIndexX = redIndexX - 1;
                    blueIndexY = redIndexY;
                }
                if (blueIndexX >= 6) {
                    // redIndexY += 1;
                    // redIndexX = 0;
                    blueIndexX = redIndexX - 1;
                    blueIndexY = redIndexY;
                }

                // blueIndexX = 1;
            }
        }

        myTimer_5 = setInterval(function () { loop_5() }, TimeDelay); //第二個的部分

    }


    fifth();


  $(".fa-brands").click(function () {
        window.location.href = "https://tjhsieh.github.io/c/dm/dm2023s/";
    })

    $(".check-1-4, .check-2-2, .check-3-7, .check-4-3,.check-5-6, .check-6-8, .check-7-5, .check-8-1").addClass("fa-solid fa-chess-rook");
    // let OutputText = '';
    // for(let i=0;i<7;i++){
    //   OutputText+=`$$p(${i},j)$$`
    //   $(".first .output").text(OutputText);
    // }


})
