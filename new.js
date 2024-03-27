var xhr = new XMLHttpRequest();

var hwid = 'aba90fb733f20c4f916911831079ed7d1e3f5926d45c525cda02c90e507e08f2365a800cd2f29a229069954a17556d14';


var url = 'https://stickx.top/api-fluxus/?hwid=' + hwid;

xhr.open('GET', url, true);

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log('Response from API:');
        console.log(xhr.responseText);
    } else {
        console.log('Failed to retrieve data from API');
    }
};

xhr.send();