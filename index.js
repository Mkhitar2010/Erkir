function start(){
    with(document){
        let l1 = String(getElementById('left_1').value);
        let l2 = String(getElementById('left_2').value);
        let l3 = String(getElementById('left_3').value);
        let l4 = String(getElementById('left_4').value);
        let l5 = String(getElementById('left_5').value);
        let l6 = String(getElementById('left_6').value);
        let r1 = String(getElementById('right_1').value);
        let r2 = String(getElementById('right_2').value);
        let r3 = String(getElementById('right_3').value);
        let r4 = String(getElementById('right_4').value);
        let r5 = String(getElementById('right_5').value);

        let result = 0;
        let quality;

        if(l1== 'Yerevan'){
            result+=2
            getElementById('left_1').style.backgroundColor = 'green'
        }else{
            getElementById('left_1').style.backgroundColor = 'red'
        }

        
        if(l2== 'America'){
            result+=2
            getElementById('left_2').style.backgroundColor = 'green'
        }else{
            getElementById('left_2').style.backgroundColor = 'red'
        }


        if(l3== 'Pekin'){
            result+=2
            getElementById('left_3').style.backgroundColor = 'green'
        }else{
            getElementById('left_3').style.backgroundColor = 'red'
        }


        if(l4== 'Ankara'){
            result+=2
            getElementById('left_4').style.backgroundColor = 'green'
        }else{
            getElementById('left_4').style.backgroundColor = 'red'
        }

        if(l5== 'London'){
            result+=2
            getElementById('left_5').style.backgroundColor = 'green'
        }else{
            getElementById('left_5').style.backgroundColor = 'red'
        }

        if(l6== 'Madrid'){
            result+=2
            getElementById('left_6').style.backgroundColor = 'green'
        }else{
            getElementById('left_6').style.backgroundColor = 'red'
        }

        if(r1== 'Kiev'){
            result+=2
            getElementById('right_1').style.backgroundColor = 'green'
        }else{
            getElementById('right_1').style.backgroundColor = 'red'
        }

        if(r2== 'Paris'){
            result+=2
            getElementById('right_2').style.backgroundColor = 'green'
        }else{
            getElementById('right_2').style.backgroundColor = 'red'
        }



        if(r3== 'Berlin'){
            result+=2
            getElementById('right_3').style.backgroundColor = 'green'
        }else{
            getElementById('right_3').style.backgroundColor = 'red'
        }


        if(r4== 'Mexico'){
            result+=2
            getElementById('right_4').style.backgroundColor = 'green'
        }else{
            getElementById('right_4').style.backgroundColor = 'red'
        }

        if(r5== 'Ottawa'){
            result+=2
            getElementById('right_5').style.backgroundColor = 'green'
        }else{
            getElementById('right_5').style.backgroundColor = 'red'
        }       

getElementById('Answer').innerHTML = result;
getElementById('Quality').innerHTML = quality;





        
    }
}
