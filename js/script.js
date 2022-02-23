const tomboldarkmode = document.getElementById('toggleDarkMode');

const bgwarna1 = document.getElementsByClassName('bgwarna1');
const bgwarna2 = document.getElementsByClassName('bgwarna2');
const bgwarna3 = document.getElementsByClassName('bgwarna3');
const tekswarna1 = document.getElementsByClassName('tekswarna1');
const tekswarna2 = document.getElementsByClassName('tekswarna2');
const tekswarna3 = document.getElementsByClassName('tekswarna3');
const fotoHome = document.getElementById('fotoHome');
const hiasanFooter = document.getElementById('hiasanFooter');
const cardHeader = document.getElementsByClassName('card-header');
const resumePositionTitle = document.getElementsByClassName('resume-position-title');
const resumeTimelineItem = document.getElementsByClassName('resume-timeline-item');
const resumeTimeline = document.getElementsByClassName('resume-timeline');
tomboldarkmode.addEventListener('click', function (){
    // Merubah warna background
    for(var i = 0 ; i < bgwarna1.length ; i++){
        bgwarna1[i].classList.toggle("bgwarna1light");
        bgwarna1[i].classList.toggle("bgwarna1dark");
    }
    for(var i = 0 ; i < bgwarna2.length ; i++){
        bgwarna2[i].classList.toggle("bgwarna2light");
        bgwarna2[i].classList.toggle("bgwarna2dark");
    }
    for(var i = 0 ; i < bgwarna3.length ; i++){
        bgwarna3[i].classList.toggle("bgwarna3light");
        bgwarna3[i].classList.toggle("bgwarna3dark");
    }
    // Merubah warna teks
    for(var i = 0 ; i < tekswarna1.length ; i++){
        tekswarna1[i].classList.toggle("tekswarna1light");
        tekswarna1[i].classList.toggle("tekswarna1dark");
    }
    for(var i = 0 ; i < tekswarna2.length ; i++){
        tekswarna2[i].classList.toggle("tekswarna2light");
        tekswarna2[i].classList.toggle("tekswarna2dark");
    }
    for(var i = 0 ; i < tekswarna3.length ; i++){
        tekswarna3[i].classList.toggle("tekswarna3light");
        tekswarna3[i].classList.toggle("tekswarna3dark");
    }
    // Merubah gambar
    if(fotoHome.getAttribute('src')=='img/Home/profilelight.png'){
        fotoHome.setAttribute('src','img/Home/profiledark.png');
    }else{
        fotoHome.setAttribute('src','img/Home/profilelight.png');
    }
    // Merubah Card Header
    for(var i = 0 ; i < cardHeader.length ; i++){
        cardHeader[i].classList.toggle("card-headerLight");
        cardHeader[i].classList.toggle("card-headerDark");
    }
    // Merubah resume position title
    for(var i = 0 ; i < resumePositionTitle.length ; i++){
        resumePositionTitle[i].classList.toggle("resume-position-titleLight");
        resumePositionTitle[i].classList.toggle("resume-position-titleDark");
    }
    // Merubah resume timeline item
    for(var i = 0 ; i < resumeTimelineItem.length ; i++){
        resumeTimelineItem[i].classList.toggle("resume-timeline-itemLight");
        resumeTimelineItem[i].classList.toggle("resume-timeline-itemDark");
    }
    // Merubah resume timeline
    for(var i = 0 ; i < resumeTimeline.length ; i++){
        resumeTimeline[i].classList.toggle("resume-timelineLight");
        resumeTimeline[i].classList.toggle("resume-timelineDark");
    }
    // Merubah hiasan Footer
    if(hiasanFooter.getAttribute('fill')=='#FDCA8C'){
        hiasanFooter.setAttribute('fill','#0B0B41');
    }else{
        hiasanFooter.setAttribute('fill','#FDCA8C');
    }
});