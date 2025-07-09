document.addEventListener('DOMContentLoaded', ()=>{
    const button=document.querySelector(".item");
    const buttonone=document.querySelector(".item-1");
    const buttontwo=document.querySelector(".item-2");
    const buttonthree=document.querySelector(".item-3");
    const buttonfour=document.querySelector(".item-4");
    const buttonfive=document.querySelector(".item-5");
    const buttonsix=document.querySelector(".item-6");
    const buttonseven=document.querySelector(".item-7");
    const buttoneight=document.querySelector(".item-8");
    const buttonnine=document.querySelector(".item-9");
    const buttonten=document.querySelector(".item-10");
    const buttoneleven=document.querySelector(".item-11");
    const buttontwelve=document.querySelector(".item-12");
    const buttonthirteen=document.querySelector(".item-13");
    const buttonfourteen=document.querySelector(".item-14");
    const buttonfifteen=document.querySelector(".item-15");
    const buttonsixteen=document.querySelector(".item-16");
    const buttonseventeen=document.querySelector(".item-17");
    const buttoneighteen=document.querySelector(".item-18");
    const buttonninteen=document.querySelector(".item-19");

    const area=document.querySelector(".calarea");
    // const button=document.querySelector(".item");
    // const button=document.querySelector(".item");
    button.addEventListener('click',()=>{
        console.log('success');
        area.textContent='';
        

    })
    buttonone.addEventListener('click',()=>{
        console.log('success');
        area.textContent+=buttonone.textContent;
    })
    buttontwo.addEventListener('click',()=>{
        console.log('success');
        area.textContent=area.textContent.slice(0,-1);
    })
    buttonthree.addEventListener('click',()=>{
        console.log('success');
        area.textContent+=buttonthree.textContent;
    })
    buttonfour.addEventListener('click',()=>{
        console.log('success')
        area.textContent+=buttonfour.textContent;
    })
    buttonfive.addEventListener('click',()=>{
        console.log('success');
        area.textContent+=buttonfive.textContent;
    })
    buttonsix.addEventListener('click',()=>{
        console.log('success')
        area.textContent+=buttonsix.textContent;   
    })
    buttonseven.addEventListener('click',()=>{
        console.log('success');
        area.textContent+=buttonseven.textContent;
    })
    buttoneight.addEventListener('click',()=>{
        console.log('success');
        area.textContent+=buttoneight.textContent;
    })
    buttonnine.addEventListener('click',()=>{
        console.log('success');
        area.textContent+=buttonnine.textContent;
    })
    buttonten.addEventListener('click',()=>{
        console.log('success');
        area.textContent+=buttonten.textContent;
    })
    buttoneleven.addEventListener('click',()=>{
        console.log('success');
        area.textContent+=buttoneleven.textContent;
    })
    buttontwelve.addEventListener('click',()=>{
        console.log('success');
        area.textContent+=buttontwelve.textContent;
    })
    buttonthirteen.addEventListener('click',()=>{
        console.log('success');
        area.textContent+=buttonthirteen.textContent;
    })
    buttonfourteen.addEventListener('click',()=>{
        console.log('success');
        area.textContent+=buttonfourteen.textContent;
    })
    buttonfifteen.addEventListener('click',()=>{
        console.log('success');
        area.textContent+=buttonfifteen.textContent;
    })
    buttonsixteen.addEventListener('click',()=>{
        console.log('success');
        area.textContent+=buttonsixteen.textContent;
    })
    buttonseventeen.addEventListener('click',()=>{
        console.log('success');
        area.textContent+=buttonseventeen.textContent;
    })
    buttoneighteen.addEventListener('click',()=>{
        console.log('success');
        area.textContent+=buttoneighteen.textContent;
    })
    buttonninteen.addEventListener('click',()=>{
        console.log('success');
        try {
            area.textContent = eval(area.textContent);
        } catch (e) {
            area.textContent = "Error";
        }
    })
});