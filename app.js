// Ogólne zmienne - do dodawania nowych punktów w html
let point=1;

// Funkcja dodająca nowy punkt 
function add(){
    document.getElementById('points').innerHTML += `<span>${point+1}. X: </span> <input type="number" id="pointX_${point}">
    <span> Y: </span> <input type="number" id="pointY_${point}"> <br>`;
    point++;
}

// Funkcja do obliczeń
function count(){
    // inicjacja tablicy na współrzędne, pobranie punktu startowego i wrzucenie go do tablicy
    let array = []; 
    let startX = document.getElementById('startX').value; 
    let startY = document.getElementById('startY').value;
    array.push([startX, startY]); 
    
    // pobranie podanych przez użytkownika współrzędnych z inputów i wrzucenie ich do tablicy
    for(c=0; c<point; c++){
        let currentPosX = document.getElementById('pointX_'+c).value;
        let currentPosY = document.getElementById('pointY_'+c).value;
        array.push([currentPosX, currentPosY]);
    }

    let path = 99999; // zmienna, która będzie porównywana, w celu znalezienia najkrótszej odległości
    let next; // zmienna, do której przypisywane będą miejsca następnej współrzędnej, która ma zostać dodana do tablicy "final"
    let final = []; // tablica, do której wrzucane są posegregowane współrzędne

    // punkt startu (pierwsza współrzędna) wrzucany jest do tablicy posegregowanych wsp.
    final.push(array[0]);
    array.splice(0, 1); // usuwana jest współrzędna, która została dodana do posegregowanych 
    let arrLength = array.length;

    for (i=0; i<arrLength; i++){ 
        
        let x1 = final[i][0];
        let y1 = final[i][1];
    
                for (j=0; j< array.length; j++){
                        
                            let x2 = array[j][0];
                            let y2 = array[j][1];
            
                            let a = x2-x1;
                            let b = y2-y1;
            
                            let pathLength = Math.sqrt (
                                a*a + b*b
                            );
            
                            // sprawdzenie czy obliczona przed chwilą odległośc pathLength jest mniejsza od poprzedniej (dla poprz. współrzędnej)
                            if(pathLength < path){
                                path = pathLength;
                                next = j;
                            }
                        
                }
                final.push(array[next]);
                array.splice(next, 1);
                path = 99999999;
    }
    
    // wypisanie odpowiedzi
    document.write('Kolejność:');
    document.write('<br>');
    for (i=0; i<final.length; i++){
        document.write(final[i]);
        document.write('<br>');
    }
    document.write(array);
    document.write(final[0]);
}




