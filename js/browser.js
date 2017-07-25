var time=30;
mymask=$('<div id="mask"></div>');
mybrowserpic=$('<div style="position:absolute;left:50%;margin-left:-225px;padding:10px;background-color:#fff"></div>');
mybrowserbtn=$('<a id="tip" href="http://browsehappy.com" target="_blank" style=" margin-left:-36px;">马上跳转 30秒</a>');
mybrowserbtn.css(
    {
        display:'block',
        position:'absolute',
        left:'380px',
        top:'305px',
        width:'120px',
        height:'25px',
        lineHeight:'25px',
        backgroundColor:'#303d4d',
        color:'#f1f2f6',
        textAlign:'center',
    });
mymask.css(
    {
        padding:'250px',
        backgroundColor:'#000',
        opacity:'0.90',
        filter:'alpha(opacity=90)',
        'left':0, 'top':0,
        'width':'100%',
        'height': $(window).height() + $(document).scrollTop(),
        'z-index':11111,
        'position':'fixed',
        'overflow':'hidden'}
    );
$('body').append(mymask);
$('#mask').append(mybrowserpic);
mybrowserpic.append($('<img src="http://www.unihi.cn/images/browser.jpg">'));
mybrowserpic.append(mybrowserbtn);
setTimeout(function(){
    window.location.href='http://browsehappy.com';
},1000*30);
setInterval(function(){
    time=time-1;
    mymask.hide();
    mybrowserbtn.text('马上跳转 '+time+'秒');
    mymask.show();
},1000);
