

//var c ={c1:document.getElementById("card1"),c2:document.getElementById("card2"),
//c3:document.getElementById("card3"),c4:document.getElementById("card4"),c5:document.getElementById("card5")}
var c = document.getElementsByClassName("card");
var need_1 =0,need_2=0,need_3=0,need_4=0,chance=1,quit=0,together=0,doit=0,don_t=0,need_5=0,the_chance=0,need_6=0;
var time_now=0;
var fail=0;
var choose_card = [0,0,0,0,0];
var what_card = [0,0,0,0,0];//这是在说每一处目前放的是什么牌，0是没有
var best_time_to_complete = parseInt(localStorage.getItem('time_complete'+choose), 10);
var _fail = 0;
_fail = parseInt(localStorage.getItem("fail"+choose), 10);
_fail=_fail+1;
localStorage.setItem('fail'+choose, _fail.toString());
in_card_num=all_card_num;
document.getElementById("b").addEventListener("click",go("click"));
document.getElementById("bigx").addEventListener("click",x_is_chosen);
document.getElementById("the_a").addEventListener("click",a_is_chosen);
document.getElementById("the_b").addEventListener("click",b_is_chosen);

for(let ii=0;ii<5;ii++){
    c[ii].addEventListener("click" , function(){
    if (choose_card[ii]==0){
        choose_card = [0,0,0,0,0];
        c[0].style.borderColor = "aliceblue";
        c[1].style.borderColor = "aliceblue";
        c[2].style.borderColor = "aliceblue";
        c[3].style.borderColor = "aliceblue";
        c[4].style.borderColor = "aliceblue";
        choose_card[ii]=choose_card[ii]+1;
        c[ii].style.borderColor = "red";//这一段就不要动了
    }else{choose_card[ii]=0;c[ii].style.borderColor = "aliceblue";
        if(what_card[ii]==13||what_card[ii]==15||what_card[ii]==16||what_card[ii]==17||
            what_card[ii]==18||what_card[ii]==20||what_card[ii]==21||what_card[ii]==22||what_card[ii]==24) {
            doit=do_it_spe(what_card[ii],ii);//do_it为执行卡牌的函数。
            if(doit==0){drop(ii);}else{alert("这张卡牌需要一个对象！");}
        }
    }
    //c[i].src = "picture/empty.png";
    
    //此处写卡牌功能
    });
}
setInterval (wrong,5000);
setInterval (genxinshuliang,100);

function genxinshuliang(){
    document.getElementById("shengyucards").innerHTML = "牌库中剩余卡牌："+in_card_num+"/"+all_card_num;
    
}
function wrong(){
    console.log(what_card);
}

setInterval (nem,100);
function nem(){
    xab[0]= Math.round(xab[0]);
    xab[1]= Math.round(xab[1]);
    xab[2]= Math.round(xab[2]);//四舍五入一下
    document.getElementById("big_x_position").innerHTML = "X="+xab[0];
    document.getElementById("int_a").innerHTML = "a="+xab[1];
    document.getElementById("int_b").innerHTML = "b="+xab[2];
}
function a_is_chosen(){
    console.log("a被点击了");
    
    /*if(together==1 && chance>1){
        for(i=0;i<5;i++){if(choose_card[i]!=0){need_5=i;}}
        for(iu=chance;iu>0;iu--){
            a_is_chosen_with(need_5);
            b_is_chosen_with(need_5);
        }
        chance=1;
        together=0;
        choose_card = [0,0,0,0,0];
        c[0].style.borderColor = "aliceblue";
        c[1].style.borderColor = "aliceblue";
        c[2].style.borderColor = "aliceblue";
        c[3].style.borderColor = "aliceblue";
        c[4].style.borderColor = "aliceblue";//初始化一下
        console.log("a现在是"+xab[1]);
        drop[need_5];
        return;
    }*/
    //if(together==1 && chance==1){together=0;don_t=1;b_is_chosen();}

    doit=0;
    for(i=0;i<5;i++){
        if(choose_card[i]!=0){
            if(together==1){console.log("在a_is_chosen处,together==1");the_chance=chance;together=0;don_t=1;
                            b_is_chosen();don_t=0;chance=the_chance;}
            doit=do_it(what_card[i],1,i);
            console.log("a_is_chosen:return的值是"+doit);
            
            if(doit==0){drop(i);}else{
                if(what_card[i]!=0){alert("这张卡牌不能以a为对象!");}else{alert("你这是在做什么？");}
            }
            break;
        }
    }
    console.log("a现在是"+xab[1]);
    return;
}
function b_is_chosen(){
    console.log("b被点击了");
    /*if(together==1 && chance>1){
        for(i=0;i<5;i++){if(choose_card[i]!=0){need_5=i;}}
        for(iu=chance;iu>0;iu--){
            a_is_chosen_with(need_5);
            b_is_chosen_with(need_5);
        }
        chance=1;
        together=0;
        choose_card = [0,0,0,0,0];
        c[0].style.borderColor = "aliceblue";
        c[1].style.borderColor = "aliceblue";
        c[2].style.borderColor = "aliceblue";
        c[3].style.borderColor = "aliceblue";
        c[4].style.borderColor = "aliceblue";//初始化一下
        console.log("b现在是"+xab[1]);
        drop[need_5];
        return;

        
    }*/
    //if(together==1 && chance==1){together=0;don_t=1;a_is_chosen();}
    
    doit=0;
    for(i=0;i<5;i++){
        if(choose_card[i]!=0){
            doit=do_it(what_card[i],2,i);
            console.log("b_is_chosen:return的值是"+doit);
            if(together==1){console.log("在b_is_chosen处,together==1");the_chance=chance;together=0;don_t=1;
            a_is_chosen();don_t=0;chance=the_chance;}
            if(doit==0){drop(i);}else{
                if(what_card[i]!=0){alert("这张卡牌不能以b为对象!");}else{alert("你这是在做什么？");}
            }
            break;
        }
    }
    console.log("b现在是"+xab[2]);
    return;
}
function x_is_chosen(){
    console.log("x被点击了");
    for(i=0;i<5;i++){
        if(choose_card[i]!=0){
            if(what_card[i]==11){
                if(blue_type==0){
                    xab[0]=xab[0]+(xab[1]+plusplus);
                }else{
                    xab[0]=xab[0]-(xab[1]+plusplus);
                }
                drop(i);
                break;
            }
            if(what_card[i]==23){
                if(blue_type==0){
                    xab[0]=xab[0]-(xab[1]+plusplus);
                }else{
                    xab[0]=xab[0]+(xab[1]+plusplus);
                }
                drop(i);
                break;
            }
            if(what_card[i]==12){
                if(red_type==0){
                    xab[0]=xab[0]*(xab[2]+plusplus);
                }else{
                    xab[0]=xab[0]/(xab[2]+plusplus);
                }
                drop(i);
                break;
            }
            if(what_card[i]==24){
                if(red_type==0){
                    xab[0]=xab[0]/(xab[2]+plusplus);
                }else{
                    xab[0]=xab[0]*(xab[2]+plusplus);
                }
                drop(i);
                break;
            }
            if(what_card[i]!=0){alert("这张卡牌不能以x作为对象!");}
            if(what_card[i]==0){alert("你这是在做什么？");}
        }
    }
    return;
}
/*function a_is_chosen_with(night){
    do_it(what_card[night],1,night);
    return;
}
function b_is_chosen_with(night){
    do_it(what_card[night],1,night);
    return;
}*/
function time_plus_1ms(){
    time_now = time_now+0.1;
    //time_now=Math.round(time_now);
    document.getElementById("used_time").innerHTML = "快速通关计时器:"+time_now.toFixed(1)+"s";
    return;
}

function drop(po){
    if(don_t==1){don_t=0;return;}//don_t几乎可以理解为一张免死金牌
    c[po].src = "picture/empty.jpg";
    what_card[po]=0;
    
    c[po].style.borderColor="aliceblue";console.log("已弃牌："+po);
    return;
}
//以下为“新回合”按钮功能
//以下为每回合起始摸牌函数
time_now = 0;
function go(){
    setInterval(time_plus_1ms,100);
    if(counter=="on"){
        console.log("计时器显示");
    }else{
        document.getElementById("used_time").style.display = "none";
        console.log("计时器隐藏");
    }
    
    if(need_time==1){
        setInterval(refresh_time,1000);
        need_time=0;
    }
    chance=1;
    together=0;
    choose_card = [0,0,0,0,0];
    c[0].style.borderColor = "aliceblue";
    c[1].style.borderColor = "aliceblue";
    c[2].style.borderColor = "aliceblue";
    c[3].style.borderColor = "aliceblue";
    c[4].style.borderColor = "aliceblue";
    if(xab[0]>=target_x_min && xab[0]<=target_x_max){
        console.log(time_now);
        console.log(best_time_to_complete);
        if(time_now<best_time_to_complete){
            localStorage.setItem('complete'+choose, "1");
            localStorage.setItem('time_complete'+choose, time_now.toString());
            document.getElementById("used_time").innerHTML = "你的时间已保存。";
            alert("目标已达成，剩余"+in_card_num+"张牌。"+"达成新纪录!"+ time_now.toFixed(1)+"s");
            
            window.location.href = "function_cards_main_theme.html";
            now.stop;
        
        }else{alert("目标已达成，剩余"+in_card_num+"张牌。");

        window.location.href = "function_cards_main_theme.html";
        now.stop;}
        
        
    }else{if(quit==1){
        alert("受一张卡牌的影响，你必须全数弃牌。");
        for(qu=0;qu<5;qu++){
            c[qu].src = "picture/empty.png";what_card[qu]=0;
        }
        quit=0;
    }//是否全部弃牌？
    
    for(p=0;p<=4;p++){
        if(what_card[p] == 0){
            have_a_card(p);
        }
    }
    return;}
    return;
}
function have_a_card(pos){
    if(in_card_num==0){
        //_fail=_fail+1;
        //localStorage.setItem('fail'+choose, _fail.toString());
        //_fail=_fail-1;
        alert("牌库已经空了！即将返回主页面。");
        window.location.href = "function_cards_main_theme.html";
        now.stop;
//判断是否已经无法抽牌
    }
    need_1=numrandom();//取随机数
    need_2=0;
    
    for(w=1;w<=25;w++){
        if(need_1>need_2 && need_1<=need_2+possibility[w]){c[pos].src = "picture/"+w+".png";what_card[pos]=w;
        if(card_trick==0){in_card_num=in_card_num-1;}
        if(card_trick==1){in_card_num=in_card_num-(1+plusplus);}
        
        
        console.log("有图片被改变了,抽到了"+w);break;}
        //如果在区间内，就改变图片以及what_card值，并break
        
        need_2 = need_2+possibility[w];
    }
    return;
}
    //好的，总算抽牌了
function wenhao_back(ob){
    console.log("wenhao_back被调用  ob是"+ob+"what_card是"+what_card);
        for(p=0;p<=4;p++){
            if(what_card[p] == 0 ){
                if(ob==1){c[p].src = "picture/11.png" ;what_card[p]=11;break;}
                if(ob==2){c[p].src = "picture/12.png" ;what_card[p]=12;break;}
            }
        }
        return;
}
function wenhao_back_at(ob){
    console.log("wenhao_back_at被调用  ob是"+ob+"what_card是"+what_card);
        for(p=0;p<=4;p++){
            if(what_card[p] == 0 ){
                if(ob==1){c[p].src = "picture/23.png" ;what_card[p]=23;break;}
                if(ob==2){c[p].src = "picture/24.png" ;what_card[p]=24;break;}
            }
        }
        return;
}
function achoose1(){
    console.log("正在发挥作用的是achoose1,chance="+chance);
    if(together==0){
        //c[the_position].src = "picture/11.png";
        //what_card[the_position]=11;
        //chance=chance-1;
        for(ad=chance;ad>0;ad--){
            wenhao_back(1);
        }
        return;
    }
    
    
    if(together==1){
        together=0;
        //chance=chance-1;
        for(ad=chance;ad>0;ad--){
        wenhao_back(1);wenhao_back(2);
        }
        return;
    }
    
    
}
function bchoose1(){
    console.log("正在发挥作用的是bchoose1,chance="+chance);
    if(together==0){
        //c[the_position].src = "picture/11.png";
        //what_card[the_position]=11;
        //chance=chance-1;
        for(ad=chance;ad>0;ad--){
            wenhao_back(2);
        }
        return;
    }
    
    
    if(together==1){
        together=0;
        //chance=chance-1;
        for(ad=chance;ad>0;ad--){
        wenhao_back(2);wenhao_back(1);
        }
        return;
    }
}
function you_have_fill(fi){
    console.log("you_have_fill被调用,fi是"+fi);
    if(fi==1){
        wenhao_back(1);
        wenhao_back(1);
        wenhao_back(1);
        wenhao_back(1);
        wenhao_back(1);
        quit=1;
    }
    if(fi==2){
        wenhao_back(2);
        wenhao_back(2);
        wenhao_back(2);
        wenhao_back(2);
        wenhao_back(2);
        quit=1;
    }
    return;
}






//完成普通牌行为
//object应该是1，2！0-x  1-a  2-b  来自xab[]  千万不能是0 此处是以a,b为对象的卡牌
function do_it(card_code,object,get_i){
    console.log("正在执行的是"+card_code+",作用对象是"+object+"chance是"
    +chance+"red_type是"+red_type+",blue_type是"+blue_type);
    if(card_code==1){
        console.log("正在发挥作用的是"+card_code);
            for(ad=chance;ad>0;ad--){
        if(blue_type==0){(xab[object])=(xab[object])+(1+plusplus);}
        if(blue_type==1){(xab[object])=(xab[object])-(1+plusplus);}}
        chance = 1;
        return 0;
    }
    if(card_code==2){
        console.log("正在发挥作用的是"+card_code);
            for(ad=chance;ad>0;ad--){
        if( red_type==0 ){(xab[object])=((xab[object])*(2+plusplus));}
        if(red_type==1){(xab[object])=((xab[object])/(2+plusplus));}}
        chance=1;
        return 0;
    }
    if(card_code==3){
        console.log("正在发挥作用的是"+card_code);
            for(ad=chance;ad>0;ad--){
        (xab[object])=((xab[object])*(2+plusplus));
        drop(get_i);don_t=1;
        wenhao_back_at(object);}//
        chance=1;
        return 0;
    }
    if(card_code==4){console.log("正在发挥作用的是"+card_code);
            for(ad=chance;ad>0;ad--){
        console.log("ad是"+ad);
        if(blue_type==0){(xab[object])=(xab[object])+(3+plusplus);}
        if(blue_type==1){(xab[object])=(xab[object])-(3+plusplus);}}
        chance=1;
        return 0;
    }
    if(card_code==5){console.log("正在发挥作用的是"+card_code);
            for(ad=chance;ad>0;ad--){
        if(red_type==0){(xab[object])=((xab[object])*(3+plusplus));}
        if(red_type==1){(xab[object])=((xab[object])/(3+plusplus));}}
        chance=1;
        return 0;
    }
    if(card_code==6){console.log("正在发挥作用的是"+card_code);
            for(ad=chance;ad>0;ad--){
        if(blue_type==0){(xab[object])=(xab[object])+(5+plusplus);}
        if(blue_type==1){(xab[object])=(xab[object])-(5+plusplus);}}
        chance=1;
        return 0;
    }
    if(card_code==7){console.log("正在发挥作用的是"+card_code);
            for(ad=chance;ad>0;ad--){
        if(red_type==0){(xab[object])=((xab[object])*(5+plusplus));}
        if(red_type==1){(xab[object])=((xab[object])/(5+plusplus));}}
        chance=1;
        return 0;
    }
    if(card_code==8){console.log("正在发挥作用的是"+card_code);
            for(ad=chance;ad>0;ad--){
        if(blue_type==0){(xab[object])=(xab[object])+(10+plusplus);}
        if(blue_type==1){(xab[object])=(xab[object])-(10+plusplus);}}
        chance=1;
        return 0;
    }
    if(card_code==9){console.log("正在发挥作用的是"+card_code);
            for(ad=chance;ad>0;ad--){
        if(red_type==0){(xab[object])=((xab[object])*(10+plusplus));}
        if(red_type==1){(xab[object])=((xab[object])/(10+plusplus));}}
        chance=1;
        return 0;
    }
    if(card_code==10){console.log("正在发挥作用的是"+card_code);
        drop(get_i);don_t=1;//这里需要先弃牌，然后加一个don_t才有用吧......
        if(object==1){achoose1(get_i);}else{bchoose1(get_i);}
        chance=1;
        return 0;
    }
    if(card_code==11){console.log("正在发挥作用的是"+card_code);
            for(ad=chance;ad>0;ad--){
        if(blue_type==0){(xab[object])=(xab[object])+(xab[1]+plusplus);}
        if(blue_type==1){(xab[object])=(xab[object])-(xab[1]+plusplus);}}
        chance=1;return 0;}
    if(card_code==12){console.log("正在发挥作用的是"+card_code);
            for(ad=chance;ad>0;ad--){
        if(red_type==0){(xab[object])=((xab[object])*(xab[2]+plusplus));}
        if(red_type==1){(xab[object])=((xab[object])/(xab[2]+plusplus));}}
        chance=1;return 0;}
    if(card_code==13){return 1;}
    if(card_code==14){
        if(together==1){alert("对于这张卡牌,to:不起作用。");}
        drop(get_i);don_t=1;
        you_have_fill(object);//1或2
        chance=1;
        return 0;
    }
    if(card_code==15){return 1;}
    if(card_code==16){return 1;}
    if(card_code==17){return 1;}
    if(card_code==18){return 1;}
    if(card_code==19){console.log("正在发挥作用的是"+card_code);
            for(ad=chance;ad>0;ad--){
        need_3=(xab[object]);
        for(q=1;q<2+(plusplus);q++){(xab[object])=((xab[object])*need_3);}}
        chance=1;
        return 0;
    }
    if(card_code==20){return 1;}
    if(card_code==21){return 1;}
    if(card_code==22){return 1;}
    if(card_code==23){console.log("正在发挥作用的是"+card_code);
            for(ad=chance;ad>0;ad--){
        if(blue_type==0){(xab[object])=(xab[object])-(xab[1]+plusplus);}
        if(blue_type==1){(xab[object])=(xab[object])+(xab[1]+plusplus);}}
        chance=1;return 0;}
    if(card_code==24){console.log("正在发挥作用的是"+card_code);
        for(ad=chance;ad>0;ad--){
    if(red_type==0){(xab[object])=((xab[object])/(xab[2]+plusplus));}
    if(red_type==1){(xab[object])=((xab[object])*(xab[2]+plusplus));}}
    chance=1;return 0;}
    if(card_code==25){
        if(object==1){xab[1]=xab[0];}
        if(object==2){xab[2]=xab[0];}
        return 0;
    }
    if(card_code==26){return 1;}
    if(card_code==27){return 1;}
    if(card_code==28){return 1;}
}


//完成特殊牌行为
function do_it_spe(card_code,get_the_position){
    console.log("正在执行的是"+card_code+"这是一张没有对象的牌,chance是"+chance);
    doit=0;
    if(card_code==13){console.log("正在发挥作用的是"+card_code);//13号牌是无中生有
        drop(get_the_position);don_t=1;
            for(ad=chance;ad>0;ad--){
        need_4 = 2+(plusplus);
        for(q=0;q<5;q++){
            if(what_card[q]==0){
                if(need_4>0){need_4=need_4-1;have_a_card(q);}
            }
        }}
        chance=1;
        return 0;
    }
    if(card_code==15){//15号牌是chance+1
        console.log("正在发挥作用的是"+card_code);
            for(ad=chance;ad>0;ad--){
        chance=chance+(1+plusplus);
        }
        return 0;
        
    }
    if(card_code==16){//16号是交换a,b,没有问题
        console.log("正在发挥作用的是"+card_code);
            for(ad=chance;ad>0;ad--){
        change_a_b=xab[1];
        xab[1]=xab[2];
        xab[2]=change_a_b;
        }
        chance=1;
    return 0;
    }
    if(card_code==17){together=1;return 0;}//together还得补上！
    if(card_code==18){console.log("正在发挥作用的是"+card_code);//18号是紫色对号
            for(adq=chance;adq>0;adq--){
        reverse_blue();
        reverse_red();
    }chance=1;
    return 0;
    }
    if(card_code==20){console.log("正在发挥作用的是"+card_code);//20号是红色叉号
            for(adq=chance;adq>0;adq--){
        
        reverse_red();}
        chance=1;
    return 0;
    }
    if(card_code==21){console.log("正在发挥作用的是"+card_code);//21号是蓝色叉号
            for(adq=chance;adq>0;adq--){
        
        reverse_blue();}
        chance=1;
    return 0;
    }
    if(card_code==22){console.log("正在发挥作用的是"+card_code);
            for(adq=chance;adq>0;adq--){
        
        plusplus=plusplus+1;}
        chance=1;
    return 0;
    }
    return 1;//如果以上都没能触发，说明执行不成功！
}



function reverse_blue(){
    console.log("blue属性反转");
    if(blue_type==0){blue_type=1;}
    else{blue_type=0;}
    if(together==1){together = 0;reverse_red();}
    return;
}
function reverse_red(){
    console.log("red属性反转");
    if(red_type==0){red_type=1;}
    else{red_type=0;}
    if(together==1){together = 0;reverse_blue();}
    return;
}

function refresh_time(){
    need_6 = 1;
    if(time_trick==1){need_6 = 1 + plusplus;}
    game_time=game_time-need_6;
    if(game_time<=0 && fail==0){fail=1;_fail=_fail+1;
        localStorage.setItem('fail'+choose, _fail.toString());_fail=_fail-1;alert("时间耗尽!即将返回标题页面......");window.location.href = "function_cards_main_theme.html";now.stop;}
    document.getElementById("the_time").innerHTML = "剩余时间：" + game_time;
}

setInterval(change_back_color,100);
function change_back_color(){
    if(blue_type==0 && red_type==0){document.getElementById("the_logo").style.color = "rgb(0,0,0)";
    document.getElementById("cardarea").style.backgroundColor = "rgb(169,169,169)";
    }
    if(blue_type==1 && red_type==0){document.getElementById("the_logo").style.color = "rgb(0,191,255)";
    document.getElementById("cardarea").style.backgroundColor = "rgb(0,191,255)";
    }
    if(blue_type==1 && red_type==1){document.getElementById("the_logo").style.color = "rgb(153,50,204)";
    document.getElementById("cardarea").style.backgroundColor = "rgb(153,50,204)";
    }
    if(blue_type==0 && red_type==1){document.getElementById("the_logo").style.color = "rgb(255,99,71)";
    document.getElementById("cardarea").style.backgroundColor = "rgb(255,99,71)";
    }
}
setInterval(new_plusplus,100);
function new_plusplus(){
    document.getElementById("the_plusplus").innerHTML = "增值："+ plusplus;
}




