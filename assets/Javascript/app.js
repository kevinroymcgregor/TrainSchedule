const firebaseConfig = {
    apiKey: "AIzaSyBPoeAn238Qr5rDPw_AAR3Xjq7Xw39H5d8",
    authDomain: "my-awesome-project-7a13c.firebaseapp.com",
    databaseURL: "https://my-awesome-project-7a13c.firebaseio.com",
    projectId: "my-awesome-project-7a13c",
    storageBucket: "my-awesome-project-7a13c.appspot.com",
    messagingSenderId: "606433210034",
    appId: "1:606433210034:web:40685c442a0f351e"
};

firebase.initializeApp(firebaseConfig);

const DB = firebase.database();

let tName;
let destination;
let startTime;
let frequency;

$('#submit').on('click', function(){
    event.preventDefault();
    tName = $('#tName').val().trim();
    destination = $('#Destination').val().trim();
    startTime = $('#startTime').val().trim();
    frequency = $('#frequency').val().trim();
    console.log(tName);
    console.log(destination);
    console.log(startTime);
    console.log(frequency);
    DB.ref().push({
        tName: tName,
        destination: destination,
        startTime: startTime,
        frequency: frequency
    });
    $("input[type=text], input[type=time], input[type=number]").val("");
});

DB.ref().on('child_added', function(snapshot){
    // console.log(snapshot.val());
    const tRow = $('<tr>');
    const data1 = $('<td>');
    $(data1).text(snapshot.val().tName);
    tRow.append(data1);
    const data2 = $('<td>');
    $(data2).text(snapshot.val().destination);
    tRow.append(data2);
    const data3 = $('<td>');
    $(data3).text(snapshot.val().frequency);
    tRow.append(data3);
    // const data4 = $('<td>');
    // $(data4).text(snapshot.val().);
    // tRow.append(data4);
    $('tbody').append(tRow);
})