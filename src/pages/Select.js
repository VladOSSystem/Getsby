import React from 'react';
import Layout from '../components/layout';
const Warunki = () => {
    return(
        <Layout>
        <h1 className="d-flex justify-content-center">Obliczanie wyrażeń w instrukcjach SELECT</h1>
            
      <div id="ja-content">
      <div id="ja-pathway">
      </div>
      <h2 className="contentheading">
        Grupowanie danych i funkcje grupujące	</h2>
      <div className="article-tools">
       
      </div>
      <div className="article-content">
        <p className="MsoNormal">W tym odcinku poznasz funkcje grupujące i dwie nowe klauzule instrukcji <span className="kodprogramu"><span className="czerwony">SELECT</span></span> — <span className="kodprogramu"><span className="czerwony">GROUP BY</span></span> i <span className="kodprogramu"><span className="czerwony">HAVING</span></span>. Nauczysz się też grupować dane, czyli łączyć wiele wierszy w jeden.</p>
        <p className="Wskazwka">Grupowanie danych polega na łączeniu wielu wierszy w jeden. W najprostszym przypadku łączy się wszystkie wiersze tabeli w jedną grupę, ale możliwe jest też ich podzielenie pomiędzy wiele grup. Wtedy podstawą zaklasyfikowania wiersza do danej grupy jest wartość jednej z kolumn lub wynik wyrażenia.</p>
        <h2>Funkcje grupujące</h2>
        <p className="MsoNormal">Funkcje, które zwracają jedną wartość obliczoną na podstawie przekazanego zbioru parametrów, nazywamy funkcjami grupującymi. W każdym serwerze baz danych, w tym w MySQL-u, zaimplementowano najważniejsze i najczęściej używane funkcje tego typu — minimum, maksimum, średnią, sumę itd.</p>
        <p className="Wskazwka">Specyfika języka SQL powoduje, że łatwiej jest najpierw wytłumaczyć, jak korzystać z funkcji grupujących, a dopiero później — jak grupować dane.</p>
        <p className="MsoNormal">Wiesz już, że parametrem wywołania funkcji grupujących nie są pojedyncze wartości, ale grupy (zbiory) wartości i że dzięki tym funkcjom uzyskujemy pojedynczy wynik obliczony na podstawie wielu argumentów. Na przykład możemy w tabeli policzyć wiersze spełniające określone kryteria lub możemy wyliczyć wartość średnią dla wszystkich wartości z wybranej kolumny. Użycie tych funkcji zwykle związane jest z operacją na wskazanych kolumnach (na których wykonywane są obliczenia), a jako wynik zwracany jest tylko jeden wiersz.</p>
        <p className="MsoNormal"><span className="pogrubienie"><span className="zielony">Charakterystyczną cechą funkcji grupujących jest operowanie na zbiorach, a nie pojedynczych wartościach</span></span>. Dzięki temu otrzymane w wyniku grupowania dane mogą być użyte jako argumenty ich wywołania. Jeżeli wszystkie wiersze tabeli są połączone w jedną grupę, funkcja grupująca będzie wywołana tylko raz, w innym przypadku zostanie wywołana dla każdej grupy. Funkcje grupujące zwracają pojedyncze (skalarne) wartości, więc wywołuje się je w klauzuli <span className="kodprogramu"><span className="czerwony">SELECT</span></span>, tak jak wcześniej poznane funkcje systemowe.</p>
        <h3>Funkcja COUNT()</h3>
        <p className="MsoNormal">Pierwszą funkcją agregującą, którą chcę dokładnie omówić, jest funkcja <span className="kodprogramu"><span className="czerwony">COUNT()</span></span>. Funkcja ta zlicza w przekazanym zbiorze wartości wystąpienia różne od <span className="kodprogramu"><span className="czerwony">NULL</span></span>, chyba że jako argumentu użyto znaku <span className="kodprogramu"><span className="czerwony">*</span></span> (gwiazdka) — takie wywołanie funkcji spowoduje zliczenie wszystkich wierszy, łącznie z duplikatami i wartościami <span className="kodprogramu"><span className="czerwony">NULL</span></span>. Argumentem funkcji mogą być liczby, daty, znaki i ciągi znaków (listing 6.1).</p>
        <p className="Wskazwka">Jeśli chcemy znać liczbę wierszy zwróconych przez zapytanie, najprościej jest użyć funkcji <span className="kodprogramu"><span className="czerwony">COUNT(*)</span></span>. Są dwa powody, dla których warto tak wywołać funkcję <span className="kodprogramu"><span className="czerwony">COUNT()</span></span> do tego celu. Po pierwsze, pozwalamy optymalizatorowi bazy danych wybrać kolumnę do wykonywania obliczeń, co czasem nieznacznie podnosi wydajność zapytania, po drugie, nie musimy się martwić o wartości <span className="kodprogramu"><span className="czerwony">Null</span></span> zawarte w kolumnie oraz o to, czy kolumna o podanej nazwie w ogóle istnieje.</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.1.</span> Zapytanie zwracające liczbę klientów</p>
        <p className="Listing">SELECT COUNT(*) as 'Liczba klientów'</p>
        <p className="Listing">FROM customer;</p>
        <p className="Listing">+-----------------+</p>
        <p className="Listing">| Liczba klientów |</p>
        <p className="Listing">+-----------------+</p>
        <p className="Listing">| 16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+-----------------+</p>
        <p className="MsoNormal">Jak widać, zapytanie zwróciło jedną wartość wyliczoną przez funkcję grupującą <span className="kodprogramu"><span className="czerwony">COUNT()</span></span> na zbiorze równym zawartości tabeli <span className="wyrnienie"><span className="niebieski">item</span></span>. Gdybyśmy chcieli policzyć imiona i nazwiska klientów, otrzymalibyśmy nieco inny wynik. Wywołanie funkcji w postaci <span className="kodprogramu"><span className="czerwony">COUNT(</span></span> <span className="kodprogramuwyrnienie"><span className="czerwony">nazwa kolumny</span></span><span className="kodprogramu"><span className="czerwony">)</span></span> nie uwzględnia pól z wartościami <span className="kodprogramu"><span className="czerwony">Null</span> </span>. Fakt, że wiersze z wartością <span className="kodprogramu"><span className="czerwony">Null</span></span> nie są zliczane, może być przydatny, gdy wartość <span className="kodprogramu"><span className="czerwony">Null</span></span> oznacza coś szczególnego lub gdy chcemy sprawdzić, czy w bazie nie brakuje istotnych informacji (listing 6.2).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.2.</span> Funkcja COUNT() wywołana dla dwóch różnych zbiorów — raz dla nazwisk, raz dla imion klientów. Jak widać, jedna osoba nie podała nam imienia.</p>
        <p className="Listing">SELECT COUNT(fname), COUNT(lname)</p>
        <p className="Listing"><span lang="EN-US">FROM customer;</span></p>
        <p className="Listing"><span lang="EN-US">+--------------+--------------+</span></p>
        <p className="Listing"><span lang="EN-US">| COUNT(fname) | COUNT(lname) |</span></p>
        <p className="Listing">+--------------+--------------+</p>
        <p className="Listing">| 15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+--------------+--------------+</p>
        <p className="MsoNormal">Jeżeli chcemy policzyć unikatowe wystąpienia wartości, wystarczy wykorzystać wiedzę z wcześniejszych odcinków kursu i właściwie użyć słowa kluczowego <span className="kodprogramu"><span className="czerwony">DISTINCT</span></span> (listing 6.3).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.3.</span> Zapytanie zwracające liczbę miast, w których mieszkają nasi klienci — w pierwszej kolumnie to samo miasto liczone jest tyle razy, ilu mieszka w nim klientów, w drugiej kolumnie każde miasto policzone jest tylko raz</p>
        <p className="Listing"><span lang="EN-US">SELECT COUNT(town), COUNT(DISTINCT(town))</span></p>
        <p className="Listing"><span lang="EN-US">FROM customer;</span></p>
        <p className="Listing"><span lang="EN-US">+-------------+-----------------------+</span></p>
        <p className="Listing"><span lang="EN-US">| COUNT(town) | COUNT(DISTINCT(town)) |</span></p>
        <p className="Listing">+-------------+-----------------------+</p>
        <p className="Listing">| 15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+-------------+-----------------------+</p>
        <p className="Wskazwka">Domyślnie funkcje grupujące nie eliminują powtarzających się wierszy, co odpowiada użyciu kwalifikatora <span className="kodprogramu"><span className="czerwony">All</span></span> jako pierwszego argumentu wywołania. Jeżeli chcemy ograniczyć dziedzinę funkcji do unikatowych wartości wierszy, należy zastosować kwalifikator <span className="kodprogramu"><span className="czerwony">DISTINCT</span></span>.</p>
        <h3>Funkcja SUM()</h3>
        <p className="MsoNormal">Za pomocą funkcji <span className="kodprogramu"><span className="czerwony">SUM()</span></span> dodawane są wszystkie wartości rekordów wybranych w zapytaniu i zwracany jest pojedynczy wynik. W przeciwieństwie do funkcji <span className="kodprogramu"><span className="czerwony">COUNT()</span></span>, która działa dla wszystkich typów danych, argumentami funkcji <span className="kodprogramu"><span className="czerwony">SUM()</span></span> mogą być wyłącznie liczby. Funkcja <span className="kodprogramu"><span className="czerwony">SUM()</span></span>, tak jak inne funkcje grupujące, nie uwzględnia wartości <span className="kodprogramu"><span className="czerwony">Null</span></span> (listing 6.4).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.4.</span> Zapytanie zwracające liczbę wszystkich towarów w magazynie</p>
        <p className="Listing"><span lang="EN-US">SELECT SUM(quantity) </span></p>
        <p className="Listing"><span lang="EN-US">FROM stock;</span></p>
        <p className="Listing">+---------------+</p>
        <p className="Listing">| SUM(quantity) |</p>
        <p className="Listing">+---------------+</p>
        <p className="Listing">| 52&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+---------------+</p>
        <p className="MsoNormal">Oczywiście, zbiór argumentów wywołania funkcji grupujących możemy ograniczać za pomocą wcześniej omówionej klauzuli <span className="kodprogramu"><span className="czerwony">WHERE</span></span> (listing 6.5).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.5.</span> Liczba drewnianych puzzli — ponieważ nazwy towarów przechowywane są w innej tabeli niż stany magazynowe, konieczne było użycie klauzuli JOIN</p>
        <p className="Listing"><span lang="EN-US">SELECT SUM(quantity) </span></p>
        <p className="Listing"><span lang="EN-US">FROM stock</span></p>
        <p className="Listing"><span lang="EN-US">INNER JOIN item USING (item_id)</span></p>
        <p className="Listing"><span lang="EN-US">WHERE description ='Wood Puzzle';</span></p>
        <p className="Listing"><span lang="EN-US">+---------------+</span></p>
        <p className="Listing"><span lang="EN-US">| SUM(quantity) |</span></p>
        <p className="Listing">+---------------+</p>
        <p className="Listing">| 12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+---------------+</p>
        <p className="Wskazwka">W języku SQL mamy jeszcze jedną możliwość ograniczania zbioru argumentów funkcji grupujących. Zamiast wywoływać taką funkcję raz dla całej tabeli (albo, jak w ostatnim przykładzie, dla wybranych wierszy), można pogrupować dane i wywołać funkcję grupującą dla każdej grupy. Ten sposób przedstawiony jest w dalszej części odcinka.</p>
        <h3>Funkcja AVG()</h3>
        <p className="MsoNormal">W wyniku działania funkcji <span className="kodprogramu"><span className="czerwony">AVG()</span></span> zwracana jest wartość średnia dla podanych wyrażeń. Wiersze przechowujące wartość <span className="kodprogramu"><span className="czerwony">Null</span></span> nie są uwzględniane. Argumentami funkcji <span className="kodprogramu"><span className="czerwony">AVG()</span></span> muszą być dane liczbowe. Aby na przykład obliczyć średnie ceny sprzedaży i zakupu towarów, napiszemy (listing 6.6):</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.6.</span> Średnia cena wszystkich kupionych i sprzedawanych towarów</p>
        <p className="Listing"><span lang="EN-US">SELECT AVG (cost_price), AVG (sell_price)</span></p>
        <p className="Listing"><span lang="EN-US">FROM item;</span></p>
        <p className="Listing"><span lang="EN-US">+------------------+------------------+</span></p>
        <p className="Listing"><span lang="EN-US">| AVG (cost_price) | AVG (sell_price) |</span></p>
        <p className="Listing">+------------------+------------------+</p>
        <p className="Listing">| 7.249091&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 10.435455&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+------------------+------------------+</p>
        <p className="MsoNormal">Wynikiem funkcji grupujących są pojedyncze liczby. Język SQL jako język przeznaczony do operacji na zbiorach danych początkowo nie umożliwiał definiowania zmiennych. Ostatnio prawie wszystkie serwery baz danych obsługują zmienne, ale wiele operacji, które w proceduralnych językach programowania wymagały ich użycia, w SQL możemy wykonać bez zadeklarowania choćby jednej zmiennej (listing 6.7).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.7.</span> Zapytanie zwracające różnicę pomiędzy średnią ceną zakupu a średnią ceną sprzedaży towarów</p>
        <p className="Listing"><span lang="EN-US">SELECT AVG (sell_price) - AVG (cost_price)</span></p>
        <p className="Listing"><span lang="EN-US">FROM item;</span></p>
        <p className="Listing"><span lang="EN-US">+-------------------------------------+</span></p>
        <p className="Listing"><span lang="EN-US">| AVG (sell_price) - AVG (cost_price) |</span></p>
        <p className="Listing">+-------------------------------------+</p>
        <p className="Listing">| 3.186364&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+-------------------------------------+</p>
        <p className="MsoNormal">To ważne, więc jeszcze raz przypomnę, <span className="wyrnienieipogrubienie"><span className="granatowy">że wszystkie funkcje grupujące, z wyjątkiem funkcji </span></span><span className="kodprogramupogrubienie"><span className="czerwony">COUNT (*)</span></span><span className="wyrnienieipogrubienie"><span className="granatowy">, ignorują wartości </span></span><span className="kodprogramupogrubienie"><span className="czerwony">Null</span></span>. Czyli średnia zbioru {'{'}5,5{'}'} wynosi 5, średnia zbioru {'{'}5,5,0{'}'} wynosi 3,33, ale średnia zbioru (5,5, Null{'}'} równa się 5.</p>
        <h3>Funkcje MIN() i MAX()</h3>
        <p className="MsoNormal">Funkcja <span className="kodprogramu"><span className="czerwony">MIN()</span></span> służy do znajdowania wartości najmniejszej w zbiorze wartości, a funkcja <span className="kodprogramu"><span className="czerwony">MAX()</span></span> — największej. Obie funkcje, podobnie jak funkcja <span className="kodprogramu"><span className="czerwony">COUNT()</span></span>, mogą być użyte dla różnych typów danych.</p>
        <p className="MsoNormal">Za pomocą funkcji <span className="kodprogramu"><span className="czerwony">MAX()</span></span> można znaleźć największy łańcuch danych, najnowszą datę (lub najodleglejszą w przyszłości) oraz największą liczbę w zestawieniu. W wyniku działania funkcji <span className="kodprogramu"><span className="czerwony">MIN()</span></span> można znaleźć odpowiednio wartości najmniejsze. Aby znaleźć datę pierwszej operacji naszej firmy, możemy skorzystać z instrukcji pokazanej na listingu 6.8.</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.8. </span>Data pierwszego zamówienia</p>
        <p className="Listing"><span lang="EN-US">SELECT MIN(date_placed)</span></p>
        <p className="Listing"><span lang="EN-US">FROM orderinfo;</span></p>
        <p className="Listing">+------------------+</p>
        <p className="Listing">| MIN(date_placed) |</p>
        <p className="Listing">+------------------+</p>
        <p className="Listing">| 2000-03-13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+------------------+</p>
        <p className="MsoNormal">Kolejny przykład pokazuje, jak odczytać informację o największej marży, z którą sprzedajemy towary (listing 6.9).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.9.</span> Przykład wywołania funkcji grupującej na danych będących wynikiem wcześniejszych obliczeń, lecz nieodczytanych bezpośrednio z tabeli</p>
        <p className="Listing"><span lang="EN-US">SELECT MAX(sell_price - cost_price) </span></p>
        <p className="Listing"><span lang="EN-US">FROM item;</span></p>
        <p className="Listing"><span lang="EN-US">+------------------------------+</span></p>
        <p className="Listing"><span lang="EN-US">| MAX(sell_price - cost_price) |</span></p>
        <p className="Listing">+------------------------------+</p>
        <p className="Listing">| 6.72&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+------------------------------+</p>
        <p className="MsoNormal">W rezultacie znaleźliśmy wartość najwyższej marży, ale nadal nie wiemy, który towar sprzedajemy z takim zyskiem. Próba dodania do klauzuli <span className="kodprogramu"><span className="czerwony">SELECT</span></span> nazw towarów oczywiście skończy się błędem (listing 6.10).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.10.</span> Funkcja grupująca zwraca jedną wartość (pierwsza kolumna wyniku miałaby jedno pole), a nazwy towarów są odczytywane bezpośrednio z tabeli, zatem druga kolumna wyniku musiałaby mieć wiele pól</p>
        <p className="Listing"><span lang="EN-US">SELECT MAX(sell_price - cost_price), description&nbsp; </span></p>
        <p className="Listing"><span lang="EN-US">FROM item;</span></p>
        <p className="Listing"><span lang="EN-US">ERROR 1140 (42000): Mixing of GROUP columns (MIN(),MAX(),COUNT(),...) with no GROUP columns is illegal if there is no GROUP BY clause</span></p>
        <p className="MsoNormal">Rozwiązanie tego problemu zostanie przedstawione przy okazji opisywania klauzuli <span className="kodprogramu"><span className="czerwony">GROUP BY</span></span> w dalszej części tego odcinka.</p>
        <p className="Wskazwka">Instrukcja <span className="kodprogramu"><span className="czerwony">SELECT</span></span> musi zwracać dane w postaci tabelarycznej — czasami jest to po prostu tabela złożona z jednej kolumny i jednego wiersza.</p>
        <h3>Funkcja STDDEV_POP()</h3>
        <p className="MsoNormal">Funkcja <span className="kodprogramu"><span className="czerwony">STDDEV_POP()</span></span> wyznacza odchylenie standardowe zbioru. Wiersze przechowujące wartość <span className="kodprogramu"><span className="czerwony">Null</span></span> nie są uwzględniane. Argumentami funkcji muszą być dane liczbowe. Aby wyznaczyć odchylenie standardowe dla cen zakupu wszystkich towarów, napiszemy (listing 6.11):</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.11.</span> Funkcja STDDEV w MySQL-u jest zaimplementowana w celu poprawienia kompatybilności z serwerami Oracle; aby obliczyć odchylenie standardowe, należy zatem używać funkcji STDDEV_POP()</p>
        <p className="Listing"><span lang="EN-US">SELECT STDDEV_POP(cost_price)</span></p>
        <p className="Listing"><span lang="EN-US">FROM item;</span></p>
        <p className="Listing"><span lang="EN-US">+------------------------+</span></p>
        <p className="Listing"><span lang="EN-US">| STDDEV_POP(cost_price) |</span></p>
        <p className="Listing">+------------------------+</p>
        <p className="Listing">| 6.278899 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</p>
        <p className="Listing">+------------------------+</p>
        <h3>Funkcja VARIANCE()</h3>
        <p className="MsoNormal">Funkcja <span className="kodprogramu"><span className="czerwony">VARIANCE()</span></span> wyznacza wariancje zbioru. Wiersze przechowujące wartość <span className="kodprogramu"><span className="czerwony">Null</span></span> nie są uwzględniane. Argumentami funkcji muszą być dane liczbowe. Aby obliczyć wariancje ceny sprzedaży, należy wykonać instrukcję (listing 6.12):</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.12.</span> MySQL ma wbudowane najważniejsze funkcje statystyczne</p>
        <p className="Listing"><span lang="EN-US">SELECT VARIANCE(sell_price)</span></p>
        <p className="Listing"><span lang="EN-US">FROM item;</span></p>
        <p className="Listing"><span lang="EN-US">+----------------------+</span></p>
        <p className="Listing"><span lang="EN-US">| VARIANCE(sell_price) |</span></p>
        <p className="Listing"><span lang="EN-US">+----------------------+</span></p>
        <p className="Listing"><span lang="EN-US">| 75.666534&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</span></p>
        <p className="Listing"><span lang="EN-US">+----------------------+</span></p>
        <h3><span lang="EN-US">Funkcja GROUP_CONCAT()</span></h3>
        <p className="MsoNormal">Funkcja <span className="kodprogramu"><span className="czerwony">GROUP_CONCAT()</span></span> w przeciwieństwie do pozostałych funkcji grupujących zwraca dane tekstowe, a nie liczbowe. Jej działanie jest bardzo proste — łączy w jeden ciąg znaków przekazane argumenty wywołania. Poniższy przykład pokazuje, jak przygotować listę imion klientów (listing 6.13).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.13.</span> Często musimy połączyć przechowywane w różnych polach dane tekstowe — w MySQL-u może to za nas zrobić funkcja GROUP_CONCAT(). Jej rozbudowana składnia pozwala na sortowanie danych i określenie symbolu separatora</p>
        <p className="Listing"><span lang="EN-US">SELECT GROUP_CONCAT(DISTINCT fname ORDER BY fname)</span></p>
        <p className="Listing"><span lang="EN-US">FROM customer;</span></p>
        <p className="Listing"><span lang="EN-US">+-------------------------------------------------------------------------------+</span></p>
        <p className="Listing"><span lang="EN-US">| GROUP_CONCAT(DISTINCT fname ORDER BY fname)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span></p>
        <p className="Listing"><span lang="EN-US">+-------------------------------------------------------------------------------+</span></p>
        <p className="Listing"><span lang="EN-US">| Adrian,Alex,Andrew,Anna,Bill,Christine,Dave,David,Jenny,Laura,Mike,Neil,Richard,Simon|</span></p>
        <p className="Listing">+-------------------------------------------------------------------------------+</p>
        <h2>Grupowanie danych</h2>
        <p className="MsoNormal">Do tej pory wywoływaliśmy funkcje grupujące raz dla całych tabel lub ich fragmentów. Klauzula <span className="kodprogramu"><span className="czerwony">GROUP BY</span></span> umożliwia grupowanie wyników względem zawartości wybranych kolumn. W wyniku jej działania uzyskujemy podział wierszy tablicy na dowolne grupy. W pewnym sensie jej działanie jest podobne do działania operatora <span className="kodprogramu"><span className="czerwony">DISTINCT</span></span>, ponieważ po jej zastosowaniu zwracany jest pojedynczy wynik dla każdej grupy (listing 6.14).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.14.</span> Klauzula GROUP BY użyta do wyeliminowania duplikatów — skoro dane są grupowane według identyfikatorów osób, czyli zamówienia złożone przez tę samą osobę dodawane są do jednej grupy, to w wyniku nie może pojawić się kilka razy ten sam identyfikator klienta</p>
        <p className="Listing"><span lang="EN-US">SELECT customer_id</span></p>
        <p className="Listing"><span lang="EN-US">FROM orderinfo</span></p>
        <p className="Listing"><span lang="EN-US">GROUP BY customer_id;</span></p>
        <p className="Listing">+-------------+</p>
        <p className="Listing">| customer_id |</p>
        <p className="Listing">+-------------+</p>
        <p className="Listing">| 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+-------------+</p>
        <p className="MsoNormal">Jeżeli jednak w zapytaniu użyjemy jednocześnie funkcji grupującej, to ta funkcja zostanie wywołana niezależnie dla każdej grupy zdefiniowanej w klauzuli <span className="kodprogramu"><span className="czerwony">GROUP BY</span></span>. W bazie <span className="wyrnienie"><span className="niebieski">test</span></span> informacje o zamówieniach przechowywane są w tabeli <span className="wyrnienie"><span className="niebieski">orderinfo</span></span>, a poszczególne pozycje zamówienia — w tabeli <span className="wyrnienie"><span className="niebieski">orderline</span></span> (dzięki temu w ramach każdego zamówienia klient może kupić dowolną liczbę najróżniejszych towarów). Pierwsze zapytanie (listing 6.15) zwraca liczbę wszystkich sprzedanych towarów, drugie (listing 6.16) rozbija tę liczbę na poszczególne zamówienia.</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.15.</span> Ogólna liczba sprzedanych towarów</p>
        <p className="Listing">SELECT SUM(quantity)</p>
        <p className="Listing"><span lang="EN-US">FROM orderline;</span></p>
        <p className="Listing"><span lang="EN-US">+---------------+</span></p>
        <p className="Listing"><span lang="EN-US">| SUM(quantity) |</span></p>
        <p className="Listing"><span lang="EN-US">+---------------+</span></p>
        <p className="Listing"><span lang="EN-US">| 15&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</span></p>
        <p className="Listing"><span lang="EN-US">+---------------+</span></p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.16. </span>Liczba towarów sprzedanych w ramach poszczególnych zamówień</p>
        <p className="Listing"><span lang="EN-US">SELECT SUM(quantity)</span></p>
        <p className="Listing"><span lang="EN-US">FROM orderline</span></p>
        <p className="Listing"><span lang="EN-US">GROUP BY orderinfo_id;</span></p>
        <p className="Listing">+---------------+</p>
        <p className="Listing">| SUM(quantity) |</p>
        <p className="Listing">+---------------+</p>
        <p className="Listing">| 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+---------------+</p>
        <p className="MsoNormal">Świetnie, ale w drugim wyniku wyraźnie brakuje informacji o tym, w ramach którego z zamówień sprzedano tyle a tyle towarów. Wcześniej próbowaliśmy dodać dane tego typu do klauzuli <span className="kodprogramu"><span className="czerwony">SELECT</span></span> i skończyło się to błędem. Czy klauzula <span className="kodprogramu"><span className="czerwony">GROUP BY</span></span> coś zmieniła? (listing 6.17).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.17.</span> Ta instrukcja SELECT jest jak najbardziej poprawna — przecież dane zostały pogrupowane według wartości orderinfo_id, a następnie dla każdej grupy była wywołana funkcja grupująca</p>
        <p className="Listing"><span lang="EN-US">SELECT orderinfo_id, SUM(quantity)</span></p>
        <p className="Listing"><span lang="EN-US">FROM orderline</span></p>
        <p className="Listing"><span lang="EN-US">GROUP BY orderinfo_id;</span></p>
        <p className="Listing">+--------------+---------------+</p>
        <p className="Listing">| orderinfo_id | SUM(quantity) |</p>
        <p className="Listing">+--------------+---------------+</p>
        <p className="Listing">| 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+--------------+---------------+</p>
        <p className="Wskazwka">Zapamiętaj — jeżeli w klauzuli <span className="kodprogramu"><span className="czerwony">SELECT</span></span> występują dowolne funkcje grupujące, to wszystkie nazwy kolumn i wyrażenia, które <span className="pogrubienie"><span className="zielony">NIE SĄ</span></span> argumentami tych funkcji, muszą być wymienione w klauzuli <span className="kodprogramu"><span className="czerwony">GROUP BY</span></span>. Innymi słowy, w takich zapytaniach w klauzuli <span className="kodprogramu"><span className="czerwony">SELECT</span></span> mogą występować tylko i wyłącznie wyrażenia, które są wymienione w klauzuli <span className="kodprogramu"><span className="czerwony">GROUP BY</span></span>, chyba że są one argumentami dowolnej funkcji agregującej.</p>
        <p className="MsoNormal">Jak wiemy, język SQL umożliwia, poprzez zastosowanie klauzuli <span className="kodprogramu"><span className="czerwony">ORDER BY</span></span>, porządkowanie wyników zapytania. Możliwe jest też sortowanie wyników na podstawie wyniku funkcji grupujących (listing 6.18).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.18.</span> Uporządkowany wynik poprzedniego zapytania</p>
        <p className="Listing">SELECT orderinfo_id, SUM(quantity)</p>
        <p className="Listing"><span lang="EN-US">FROM orderline</span></p>
        <p className="Listing"><span lang="EN-US">GROUP BY orderinfo_id</span></p>
        <p className="Listing"><span lang="EN-US">ORDER BY SUM(quantity) DESC;</span></p>
        <p className="Listing"><span lang="EN-US">+--------------+---------------+</span></p>
        <p className="Listing"><span lang="EN-US">| orderinfo_id | SUM(quantity) |</span></p>
        <p className="Listing"><span lang="EN-US">+--------------+---------------+</span></p>
        <p className="Listing"><span lang="EN-US">| 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;|</span></p>
        <p className="Listing"><span lang="EN-US">| 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</span></p>
        <p className="Listing"><span lang="EN-US">| 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</span></p>
        <p className="Listing"><span lang="EN-US">| 4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</span></p>
        <p className="Listing"><span lang="EN-US">| 5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</span></p>
        <p className="Listing"><span lang="EN-US">+--------------+---------------+</span></p>
        <p className="MsoNormal"><span lang="EN-US">W zapytaniach grupujących dane możemy używać klauzuli </span><span className="kodprogramu"><span className="czerwony" lang="EN-US">WHERE</span></span><span lang="EN-US"> tak samo jak klauzuli </span><span className="kodprogramu"><span className="czerwony" lang="EN-US">ORDER BY</span></span> <span lang="EN-US">. </span>W ten sposób ograniczymy liczbę wierszy, jeszcze zanim będą one dzielone na grupy i podgrupy. Przy stosowaniu klauzuli <span className="kodprogramu"><span className="czerwony">WHERE</span></span> łącznie z <span className="kodprogramu"><span className="czerwony">GROUP BY</span></span> najpierw realizowane jest ograniczenie wynikające z kryteriów w klauzuli <span className="kodprogramu"><span className="czerwony">WHERE</span></span>. Następnie wybrane rekordy są grupowane i powstaje ostateczny wynik zapytania (listing 6.19).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.19.</span> Wynik poprzedniego zapytania ograniczony do zamówień z pierwszej połowy 2000 roku</p>
        <p className="Listing"><span lang="EN-US">SELECT orderinfo_id, SUM(quantity)</span></p>
        <p className="Listing"><span lang="EN-US">FROM orderline </span></p>
        <p className="Listing"><span lang="EN-US">JOIN orderinfo USING (orderinfo_id)</span></p>
        <p className="Listing"><span lang="EN-US">WHERE date_placed BETWEEN '2000-01-01' AND '2000-06-31'</span></p>
        <p className="Listing"><span lang="EN-US">GROUP BY orderinfo_id</span></p>
        <p className="Listing"><span lang="EN-US">ORDER BY SUM(quantity) DESC;</span></p>
        <p className="Listing">+--------------+---------------+</p>
        <p className="Listing">| orderinfo_id | SUM(quantity) |</p>
        <p className="Listing">+--------------+---------------+</p>
        <p className="Listing">| 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 3&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</p>
        <p className="Listing">+--------------+---------------+</p>
        <p className="MsoNormal">Otrzymane w ten sposób grupy wierszy możemy dalej dzielić na podgrupy. Wymieniając w klauzuli <span className="kodprogramu"><span className="czerwony">GROUP BY</span></span> wiele wyrażeń, podzielimy zbiór wierszy na grupy wyznaczone pierwszym wyrażeniem, grupy te podzielimy na podgrupy na podstawie wartości drugiego wyrażenia itd. (listing 6.20).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.20.</span> Liczba towarów kupionych przez poszczególnych klientów w ramach poszczególnych zamówień</p>
        <p className="Listing"><span lang="EN-US">SELECT fname, orderinfo_id, SUM(quantity)</span></p>
        <p className="Listing"><span lang="EN-US">FROM orderline </span></p>
        <p className="Listing"><span lang="EN-US">JOIN orderinfo USING (orderinfo_id)</span></p>
        <p className="Listing"><span lang="EN-US">JOIN customer USING (customer_id)</span></p>
        <p className="Listing"><span lang="EN-US">GROUP BY fname, orderinfo_id</span></p>
        <p className="Listing"><span lang="EN-US">ORDER BY fname;</span></p>
        <p className="Listing"><span lang="EN-US">+-------+--------------+---------------+</span></p>
        <p className="Listing"><span lang="EN-US">| fname | orderinfo_id | SUM(quantity) |</span></p>
        <p className="Listing"><span lang="EN-US">+-------+--------------+---------------+</span></p>
        <p className="Listing"><span lang="EN-US">| Alex&nbsp; | 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</span></p>
        <p className="Listing"><span lang="EN-US">| Anna &nbsp;| 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</span></p>
        <p className="Listing"><span lang="EN-US">| Anna&nbsp; | 5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</span></p>
        <p className="Listing"><span lang="EN-US">| David | 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</span></p>
        <p className="Listing"><span lang="EN-US">| Laura | 4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</span></p>
        <p className="Listing">+-------+--------------+---------------+</p>
        <h3>Operator ROLLUP</h3>
        <p className="MsoNormal">Jeżeli dane są grupowane według wartości kilku kolumn, to, jak pokazały poprzednie przykłady, kolejność ich występowania w klauzuli <span className="kodprogramu"><span className="czerwony">GROUP BY</span></span> wyznacza podział na grupy i podgrupy. Jeżeli tych grup i podgrup jest niewiele, użytkownicy potrafią samodzielnie wyliczyć brakujące podsumowania, w tym przypadku sumy cen wszystkich towarów dla poszczególnych grup. Możemy jednak dodać do wyniku zapytania takie sumy pośrednie — służy do tego operator <span className="kodprogramu"><span className="czerwony">ROLLUP</span></span>. Jego działanie prześledzimy najpierw na bardzo prostym przykładzie (listing 6.21).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.21.</span> Pierwsze zapytanie zwraca liczbę sprzedanych egzemplarzy każdego towaru, drugie zawiera dodatkowy wiersz z podsumowaniem sprzedaży wszystkich towarów</p>
        <p className="Listing"><span lang="EN-US">SELECT i.description, SUM(o.quantity)</span></p>
        <p className="Listing"><span lang="EN-US">FROM item AS i</span></p>
        <p className="Listing"><span lang="EN-US">JOIN orderline AS O USING (item_id)</span></p>
        <p className="Listing"><span lang="EN-US">GROUP BY i.description;</span></p>
        <p className="Listing"><span lang="EN-US">+---------------+-----------------+</span></p>
        <p className="Listing"><span lang="EN-US">| description&nbsp;&nbsp; | SUM(o.quantity) |</span></p>
        <p className="Listing"><span lang="EN-US">+---------------+-----------------+</span></p>
        <p className="Listing"><span lang="EN-US">| Carrier Bag&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 |</span></p>
        <p className="Listing"><span lang="EN-US">| Fan Large&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 |</span></p>
        <p className="Listing"><span lang="EN-US">| Linux CD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 |</span></p>
        <p className="Listing"><span lang="EN-US">| Picture Frame |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 |</span></p>
        <p className="Listing"><span lang="EN-US">| Roman Coin&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 |</span></p>
        <p className="Listing"><span lang="EN-US">| Rubik Cube&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 |</span></p>
        <p className="Listing"><span lang="EN-US">| Tissues&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 |</span></p>
        <p className="Listing"><span lang="EN-US">| Wood Puzzle&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 |</span></p>
        <p className="Listing"><span lang="EN-US">+---------------+-----------------+ </span></p>
        <p className="Listing"><span lang="EN-US">&nbsp;</span></p>
        <p className="Listing"><span lang="EN-US">SELECT i.description, SUM(o.quantity)</span></p>
        <p className="Listing"><span lang="EN-US">FROM item AS i</span></p>
        <p className="Listing"><span lang="EN-US">JOIN orderline AS O USING (item_id)</span></p>
        <p className="Listing"><span lang="EN-US">GROUP BY i.description</span></p>
        <p className="Listing"><span lang="EN-US">WITH ROLLUP;</span></p>
        <p className="Listing"><span lang="EN-US">+---------------+-----------------+</span></p>
        <p className="Listing"><span lang="EN-US">| description&nbsp;&nbsp; | SUM(o.quantity) |</span></p>
        <p className="Listing"><span lang="EN-US">+---------------+-----------------+</span></p>
        <p className="Listing"><span lang="EN-US">| Carrier Bag&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 |</span></p>
        <p className="Listing"><span lang="EN-US">| Fan Large&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 |</span></p>
        <p className="Listing"><span lang="EN-US">| Linux CD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;1 |</span></p>
        <p className="Listing"><span lang="EN-US">| Picture Frame |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 |</span></p>
        <p className="Listing"><span lang="EN-US">| Roman Coin&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 |</span></p>
        <p className="Listing"><span lang="EN-US">| Rubik Cube&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 |</span></p>
        <p className="Listing"><span lang="EN-US">| Tissues&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 |</span></p>
        <p className="Listing">| Wood Puzzle&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 |</p>
        <p className="Listing">| NULL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15 |</p>
        <p className="Listing">+---------------+-----------------+</p>
        <p className="MsoNormal">Operator <span className="kodprogramu"><span className="czerwony">ROLLUP</span></span> jest szczególnie przydatny w zapytaniach grupujących dane według wartości kilku kolumn — w takim przypadku zwróci on dodatkowy wiersz z podsumowaniem dla każdej grupy wartości (listing 6.22).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.22.</span> Zapytanie zwracające informacje o liczbie różnych towarów kupionych przez poszczególnych klientów. Dodatkowe wiersze z całkowitą sumą towarów kupionych przez klientów oraz całkowitym podsumowaniem sprzedaży zostały dodane przez operator ROLLUP</p>
        <p className="Listing"><span lang="EN-US">SELECT oi.customer_id, i.description, SUM(o.quantity)</span></p>
        <p className="Listing"><span lang="EN-US">FROM item AS i</span></p>
        <p className="Listing"><span lang="EN-US">JOIN orderline AS O USING (item_id)</span></p>
        <p className="Listing"><span lang="EN-US">JOIN orderinfo AS oi USING (orderinfo_id)</span></p>
        <p className="Listing"><span lang="EN-US">GROUP BY oi.customer_id, i.description</span></p>
        <p className="Listing"><span lang="EN-US">WITH ROLLUP;</span></p>
        <p className="Listing"><span lang="EN-US">+-------------+---------------+-----------------+</span></p>
        <p className="Listing"><span lang="EN-US">| customer_id | description&nbsp;&nbsp; | SUM(o.quantity) |</span></p>
        <p className="Listing"><span lang="EN-US">+-------------+---------------+-----------------+</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 | Fan Large&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 |</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 | Roman Coin&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 |</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 | Tissues&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 |</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 | NULL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 |</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8 | Carrier Bag&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 |</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8 | Fan Large&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 |</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8 | Linux CD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 |</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8 | Tissues&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 |</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8 | Wood Puzzle&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 |</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;8 | NULL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8 |</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 13 | Picture Frame |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 |</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 13 | NULL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 |</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15 | Rubik Cube&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 |</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15 | Wood Puzzle&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 |</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15 | NULL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 |</span></p>
        <p className="Listing"><span lang="EN-US">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NULL | NULL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15 |</span></p>
        <p className="Listing">+-------------+---------------+-----------------+</p>
        <h3>Klauzula HAVING</h3>
        <p className="MsoNormal">Język SQL dostarcza jeszcze jedną metodę filtrowania wyników zapytań — jeżeli grupujemy wyniki (a więc używamy klauzuli <span className="kodprogramu"><span className="czerwony">GROUP BY</span></span>), możemy sprawdzić, czy te grupy wierszy spełniają jakiś warunek. Wiesz już, że po zastosowaniu klauzuli <span className="kodprogramu"><span className="czerwony">WHERE</span></span> wyniki zapytania najpierw są filtrowane, a potem grupowane. Klauzula <span className="kodprogramu"><span className="czerwony">HAVING</span></span>, tak jak <span className="kodprogramu"><span className="czerwony">WHERE</span></span>, umożliwia określenie testu logicznego, ale w jej przypadku będzie on zastosowany do grup, a nie pojedynczych wierszy. <span className="wyrnienieipogrubienie"><span className="granatowy">Testy logiczne zawarte w klauzuli </span></span><span className="kodprogramupogrubienie"><span className="czerwony">HAVING</span></span><span className="wyrnienieipogrubienie"><span className="granatowy"> wykonywane są na całych grupach, a nie na pojedynczych rekordach</span></span>. Tak więc klauzula ta służy do wybierania interesujących nas grup, a klauzula <span className="kodprogramu"><span className="czerwony">WHERE</span></span> — interesujących nas wierszy. Warunek umieszczony w klauzuli HAVING wyrażony jest za pomocą dowolnej funkcji grupowej (listing 6.23).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.23.</span> Informacje o zamówieniach, których wartość przekroczyła 30. Iloczyn quantity*sell_price jest wyliczany dla każdego sprzedanego towaru, a następnie wyliczana jest suma wartości dla każdej grupy, czyli w tym przypadku dla każdego zamówienia. Na końcu klauzula HAVING usuwa z wyniku te grupy (zamówienia), których wartość nie przekroczyła 30</p>
        <p className="Listing"><span lang="EN-US">SELECT orderinfo_id, SUM(quantity*sell_price)</span></p>
        <p className="Listing"><span lang="EN-US">FROM orderinfo JOIN orderline USING (orderinfo_id)</span></p>
        <p className="Listing"><span lang="EN-US">JOIN item USING (item_id)</span></p>
        <p className="Listing"><span lang="EN-US">GROUP BY orderinfo_id</span></p>
        <p className="Listing"><span lang="EN-US">HAVING&nbsp; SUM(quantity*sell_price)&gt; 30;</span></p>
        <p className="Listing"><span lang="EN-US">+--------------+--------------------------+</span></p>
        <p className="Listing"><span lang="EN-US">| orderinfo_id | SUM(quantity*sell_price) |</span></p>
        <p className="Listing">+--------------+--------------------------+</p>
        <p className="Listing">| 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 69.83&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 33.44&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+--------------+--------------------------+</p>
        <p className="MsoNormal">Klauzule <span className="kodprogramu"><span className="czerwony">HAVING</span> </span> i <span className="kodprogramu"><span className="czerwony">WHERE</span></span> mogą wystąpić w tym samym zapytaniu — w takim przypadku najpierw będzie zastosowany test z klauzuli <span className="kodprogramu"><span className="czerwony">WHERE</span></span>, a następnie — z klauzuli <span className="kodprogramu"><span className="czerwony">HAVING</span></span> (listing 6.24).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.24.</span> Wyniki poprzedniego zamówienia ograniczone do zamówień złożonych w pierwszej połowie 2000 roku</p>
        <p className="Listing"><span lang="EN-US">SELECT orderinfo_id, SUM(quantity*sell_price)</span></p>
        <p className="Listing"><span lang="EN-US">FROM orderinfo JOIN orderline USING (orderinfo_id)</span></p>
        <p className="Listing"><span lang="EN-US">JOIN item USING (item_id)</span></p>
        <p className="Listing"><span lang="EN-US">&nbsp;&nbsp;&nbsp; WHERE date_placed BETWEEN '2000-01-01' AND '2000-06-31'</span></p>
        <p className="Listing"><span lang="EN-US">&nbsp;&nbsp;&nbsp; GROUP BY orderinfo_id</span></p>
        <p className="Listing"><span lang="EN-US">&nbsp;&nbsp;&nbsp; HAVING SUM(quantity*sell_price)&gt; 30;</span></p>
        <p className="Listing"><span lang="EN-US">+--------------+--------------------------+</span></p>
        <p className="Listing"><span lang="EN-US">| orderinfo_id | SUM(quantity*sell_price) |</span></p>
        <p className="Listing">+--------------+--------------------------+</p>
        <p className="Listing">| 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 69.83&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+--------------+--------------------------+</p>
        <p className="MsoNormal">Zapisanie w klauzuli <span className="kodprogramu"><span className="czerwony">HAVING</span></span> warunku, który jest sprawdzany na poziomie wierszy, nie jest błędem składniowym (czyli MySQL prawidłowo zinterpretuje i wykona takie zapytanie), ale taka instrukcja jest nie tylko nieelegancka i nieczytelna, ale również może być dłużej wykonywana (listing 6.25).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.25.</span> Klauzula HAVING użyta do wybierania wierszy</p>
        <p className="Listing"><span lang="EN-US">SELECT item_id, SUM(quantity*sell_price)</span></p>
        <p className="Listing"><span lang="EN-US">FROM orderinfo JOIN orderline USING (orderinfo_id)</span></p>
        <p className="Listing"><span lang="EN-US">JOIN item USING (item_id)</span></p>
        <p className="Listing"><span lang="EN-US">GROUP BY item_id</span></p>
        <p className="Listing"><span lang="EN-US">HAVING item_id IN (1,2,3,4);</span></p>
        <p className="Listing"><span lang="EN-US">+---------+--------------------------+</span></p>
        <p className="Listing"><span lang="EN-US">| item_id | SUM(quantity*sell_price) |</span></p>
        <p className="Listing">+---------+--------------------------+</p>
        <p className="Listing">| 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 65.85&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 11.49&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 2.49&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 11.97&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+---------+--------------------------+</p>
        <p className="MsoNormal">W takim przypadku należy zastosować klauzulę <span className="kodprogramu"><span className="czerwony">WHERE</span></span> (listing 6.26).</p>
        <p className="MsoNormal"><span className="pogrubienie">Listing 6.26.</span> Funkcjonalnie takie same, ale czytelniejsze i szybsze rozwiązanie</p>
        <p className="Listing"><span lang="EN-US">SELECT item_id, SUM(quantity*sell_price)</span></p>
        <p className="Listing"><span lang="EN-US">FROM orderinfo JOIN orderline USING (orderinfo_id)</span></p>
        <p className="Listing"><span lang="EN-US">JOIN item USING (item_id)</span></p>
        <p className="Listing"><span lang="EN-US">WHERE item_id IN (1,2,3,4)</span></p>
        <p className="Listing"><span lang="EN-US">GROUP BY item_id;</span></p>
        <p className="Listing"><span lang="EN-US">+---------+--------------------------+</span></p>
        <p className="Listing"><span lang="EN-US">| item_id | SUM(quantity*sell_price) |</span></p>
        <p className="Listing">+---------+--------------------------+</p>
        <p className="Listing">| 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 65.85&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 11.49&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">| 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 2.49&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</p>
        <p className="Listing">| 4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 11.97&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</p>
        <p className="Listing">+---------+--------------------------+</p>
        <h2>Kolejność wykonywania klauzuli zapytań</h2>
        <p className="MsoNormal">Skoro poznałeś wszystkie klauzule instrukcji <span className="kodprogramu"><span className="czerwony">SELECT</span></span>, powinieneś wiedzieć, kiedy są one wykonywane przez serwery bazodanowe. Logiczna kolejność wykonywania zapytania zawierającego omówione dotychczas klauzule jest następująca:</p>
        <p style={{marginLeft: '18.0pt', textIndent: '-18.0pt'}} className="MsoNormal">1.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Jako pierwsza wykonywana jest klauzula <span className="kodprogramu"><span className="czerwony">FROM</span></span>. Jeżeli zapytanie odwołuje się do wielu tabel, są one kolejno ze sobą złączane.</p>
        <p style={{marginLeft: '18.0pt', textIndent: '-18.0pt'}} className="MsoNormal">2.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Otrzymany w ten sposób zbiór pośredni jest filtrowany na podstawie warunku logicznego umieszczonego w klauzuli <span className="kodprogramu"><span className="czerwony">WHERE</span></span>. Tylko te wiersze, dla których jest on prawdziwy, trafiają do kolejnego zbioru pośredniego.</p>
        <p style={{marginLeft: '18.0pt', textIndent: '-18.0pt'}} className="MsoNormal">3.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Następnie wykonywana jest klauzula <span className="kodprogramu"><span className="czerwony">GROUP BY</span></span>, czyli grupowane są tylko przefiltrowane wiersze.</p>
        <p style={{marginLeft: '18.0pt', textIndent: '-18.0pt'}} className="MsoNormal">4.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Utworzone grupy są filtrowane poprzez porównanie ich z warunkiem umieszczonym w klauzuli <span className="kodprogramu"><span className="czerwony">HAVING</span></span>.</p>
        <p style={{marginLeft: '18.0pt', textIndent: '-18.0pt'}} className="MsoNormal">5.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Wybrane w poprzednim punkcie wiersze są zwracane, czyli wykonywana jest klauzula<span className="kodprogramu"><span className="czerwony"> SELECT</span></span>.</p>
        <p style={{marginLeft: '18.0pt', textIndent: '-18.0pt'}} className="MsoNormal">6.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Następnie wiersze są sortowane, czyli wykonywana jest klauzula <span className="kodprogramu"><span className="czerwony">ORDER BY</span></span>.</p>
        <p style={{marginLeft: '18.0pt', textIndent: '-18.0pt'}} className="MsoNormal">7.<span style={{font: '7.0pt "Times New Roman"'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>Na końcu liczba wierszy wyniku zapytania jest ograniczana podczas wykonywania klauzuli <span className="kodprogramu"><span className="czerwony">LIMIT</span></span>.</p>
      </div>
      <span className="article_separator">&nbsp;</span>
    
    </div>
        </Layout>
    );
}

export default Warunki;


