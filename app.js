// Ogólne zmienne - do dodawania nowych punktów w html oraz do obliczenia drogi
let point=1;
let sum=0;

// Funkcja dodająca nowy punkt 
function add(){
    // Utworzenie elementu span, dodanie do niego tekstu i pojawienie się go w aplikacji
    // Liczba porządkowa i X
    let lp = document.createElement('span');
    let lpText = document.createTextNode(point + '. X: ');
    lp.appendChild(lpText);
    document.body.appendChild(lp);
    // Utworzenie inputa pod współrzędną X
    let inputBoxX = document.createElement("input");
    inputBoxX.setAttribute('id', `pointX_${point}`);
    inputBoxX.setAttribute('type', 'text');
    document.body.appendChild(inputBoxX);
    // Utworzenie span'a z napisem Y:
    let Y = document.createElement('span');
    let YText = document.createTextNode(' Y: ');
    Y.appendChild(YText);
    document.body.appendChild(Y);
    // Utworzenie inputa pod wpółrzędną Y
    let inputBoxY = document.createElement("input");
    inputBoxY.setAttribute('id', `pointY_${point}`);
    inputBoxY.setAttribute('type', 'text');
    document.body.appendChild(inputBoxY);
    // Reszta
    let br = document.createElement("br");
    document.body.appendChild(br);
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
                sum+=path;
                final.push(array[next]);
                array.splice(next, 1);
                path = 99999999;
    }
    document.write('Całkowita długość drogi (bez powrotu do punktu startowego): ' + sum);
    document.write('<br>');
    let finalLength = final.length - 1;
    wholewayX = final[finalLength][0] - final[0][0];
    wholewayY = final[finalLength][1] - final[0][1];
    let wholeWay = Math.sqrt(wholewayX * wholewayX + wholewayY * wholewayY) + sum;
    document.write('Całkowita długość drogi (wraz z powrotem do punktu startowego): ' + wholeWay);
    document.write('<br>');
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




