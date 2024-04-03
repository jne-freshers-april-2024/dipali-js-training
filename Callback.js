//
function fetchData(callback)
{
    setTimeout(function(){
        data="Data from server";
        callback(data);
    }, 1000);
}

function processData(data)
{
    console.log("Processing Data:",data.toUpperCase());
}

fetchData(processData);

function add(data)
{
    console.log("Concate",data+10);
}

fetchData(add);