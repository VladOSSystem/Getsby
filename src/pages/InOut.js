import React from 'react';
import Layout from '../components/layout';
const Warunki = () => {
    return (
        <Layout>
        <h1 className="d-flex justify-content-center">INSTRUKCJE WEJŚCIA/WYJŚCIA</h1>
        <div className="post-content">
        <header>
        </header>
        <p>Zmienna to niejako "szufladka" w pamięci, w której przechowujemy dane określonego typu. Na przykład liczbę całkowitą, rzeczywistą, napis (łańcuch), lub wartość logiczną. Zmienną w C++ definiujemy używając następującego schematu: <code>typ_zmiennej nazwa;</code> Na przykład możemy zapisać coś takiego: <code>int liczba;</code></p>
        <p>Taki zapis to informacja dla kompilatora: zarezerwuj w pamięci miejsce o nazwie "liczba", gdzie będzie przechowywana liczba całkowita. Od tego momentu wszędzie gdzie kompilator napotka słowo "liczba", będzie w domyśle pracował na tym obszarze pamięci. Poznajmy teraz typy zmiennych wbudowane w C++.</p> 
        <ul className="circled">
          <li><code>int</code>  4 bajty, zakres: -2147483648 .. 2147483647</li>
          <li><code>unsigned int</code>  4 bajty, zakres: 0 .. 4294967295</li>
          <li><code>long</code>  4 bajty, zakres: -2147483648 .. 2147483647</li>
          <li><code>unsigned long</code>  4 bajty, zakres: 0 .. 4294967295</li>
          <li><code>long long</code>  8 bajtów, zakres: -9223372036854775808 .. 9223372036854775807</li>
          <li><code>unsigned long long</code>  8 bajtów, zakres: 0 .. 18446744073709551615</li>
          <li><code>float</code>  4 bajty, zakres: 3.4e +/- 38</li>
          <li><code>double</code>  8 bajtów, zakres: 1.7e +/- 308</li>
          <li><code>long double</code>  8 bajtów, zakres: 1.7e +/- 308</li>
          <li><code>bool</code>  1 bajt, true / false</li>
          <li><code>char</code>  1 bajt, zakres: -128 .. 127</li>
          <li><code>unsigned char</code>  1 bajt, zakres: 0 .. 255</li>
          <li><code>short</code>  2 bajty, zakres: -32768 .. 32767</li>
          <li><code>unsigned short</code>  2 bajty, zakres: 0 .. 65535</li>
        </ul>
        <h3>Zapis naukowy liczb</h3>
        <p>A cóż to za dziwny, matematyczny zapis wielkich liczb znalazł się na liście powyżej? Mowa o zapisie z użyciem litery <code>e</code>? Otóż jest to tzw. zapis naukowy, w którym <code>e</code> oznacza exponent, czyli wykładnik. I stąd <code>e+</code> oznacza przesunięcie przecinka o zadaną liczbę miejsc w prawo... zaś <code>e-</code> oznacza przesunięcie go o zadaną liczbę miejsc w lewo. I tak na przykład <code>2.3e+2</code> to inaczej liczba <code>230</code>, zaś <code>2.3e-3</code> to inaczej <code>0.0023</code>. Proste, prawda?</p>
        <h3>Słowo kluczowe unsigned</h3>
        <p>Przy niektórych typach zmiennych zauważamy także obecność słowa kluczowego <code>unsigned</code> co oznacza z angielskiego "bez znaku". W praktyce chodzi o to,  iż całą dostępną pamięć (wyrażoną w bajtach) przeznaczamy na zapis liczby dodatniej. Weźmy na przykład zmienną typu <code>char</code>, zajmującą w pamięci komputera 1 bajt, czyli osiem bitów. Na ośmiu bitach możemy zapisać maksymalnie 256 liczb (od 0 do 255). Standardowo jednak cały zakres dzielimy na pół, aby móc obsłużyć liczby ujemne - i stąd ostateczny zakres typu <code>char</code> to -128..127 (na końcu jest 127, a nie 128 gdyż jeden slot zużyliśmy dla wartości zero). Dopisanie słowa kluczowego <code>unsigned</code> powoduje porzucenie wartości ujemnych, po to aby cały zakres 1 bajta można było przeznaczyć na wartości 0..255.</p>
        <h3>Zasięg (widoczność) zmiennych</h3>
        <p>W naszych pierwszych aplikacjach, tworzyć będziemy każdą zmienną jako tzw. zmienną globalną, to znaczy widzianą w całym programie. Zatem deklaracje zmiennych umieszczać będziemy pomiędzy <code>using namespace std;</code> a rozpoczęciem funkcji głównej <code>int main()</code>. Gdyby zmienną zapisać wewnątrz klamer jakiejś funkcji, to byłaby widoczna tylko pomiędzy tymi klamrami (tzw. zmienna lokalna). Póki co nie musisz sobie jeszcze zawracać głowy zasięgami widoczności zmiennych - bardzo wiele na ten temat zostanie powiedziane przy okazji tworzenia tzw. własnych funkcji. To wtedy zasięgi zmiennych rzeczywiście mają zastosowanie - nasze pierwsze programy posiadać będą tylko jedną funkcję główną <code>int main()</code> - miejsce deklaracji nie jest wówczas bardzo istotne.</p>
        <pre><code className="cpp">#include &lt;iostream&gt;<br /><br />{"\n"}using namespace std;<br /><br />{"\n"}int liczba;{"  "}//tutaj wstawimy zmienne globalne<br />{"\n"}string imie; //uzywane w pierwszych programach<br /><br />{"\n"}int main()<br />{"\n"}{"{"}<br />{"\n"}{"   "}cout &lt;&lt; "Hello world!" &lt;&lt; endl;<br /><br />{"\n"}{"   "}return 0;<br />{"\n"}{"}"}</code></pre>
        <p>W liniach z definicjami zmiennych użyto także na końcu tzw. komentarza – jest to tekst poprzedzony znakami: <code>//</code>. Komentarze są ignorowane przez kompilator – wstawiamy je tylko dla naszej informacji, aby wiedzieć co robi dana zmienna czy funkcja. Łatwiej wtedy wrócić do własnego kodu po upływie dłuższego czasu (własny kod szybko się zapomina - po pewnym czasie mamy autentyczne wrażenie, że napisał go ktoś inny). Edytor oznacza komentarze szarym kolorem, aby dodatkowo wizualnie podkreślić, iż nie biorą one udziału w wykonaniu programu.</p>
        <h3>Nadawanie wartości zmiennej</h3>
        <p>Przypisanie początkowej wartości do zmiennej to inaczej tzw. inicjalizacja (inicjować znaczy "wzbudzać", "rozpoczynać", "czynić pełnowartościowym"). Zmiennej możemy nadawać wartość już na etapie tworzenia:</p><p>
        </p><pre><code className="cpp">string imie="Jan";<br />{"\n"}int x = 67; // x to liczba cukierków<br />{"\n"}int y = 31; // y to liczba uczniow{"\n"}</code></pre>
        <p>lub wewnątrz funkcji <code>main()</code>, lecz po wcześniejszym zadeklarowaniu jej typu w sposób już nam znany. Uwaga! Każda definicja zmiennej jest jednocześnie deklaracją (ale nie odwrotnie).</p>
        <pre><code className="cpp">#include &lt;iostream&gt;<br /><br />{"\n"}using namespace std;<br /><br />{"\n"}int liczba;{"  "}//deklaracja<br />{"\n"}string imie="Robert"; //definicja<br /><br />{"\n"}int main()<br />{"\n"}{"{"}<br />{"\n"}{"   "}liczba = 42; //inicjalizacja (poprzedzona deklaracją)<br /><br />{"\n"}{"   "}return 0;<br />{"\n"}{"}"}</code></pre>
        <h3>Instrukcje wejścia/wyjścia</h3>
        <p>W zmiennych przechowujemy dane wprowadzane przez użytkownika. Aby wczytać do zmiennej wartość podaną z klawiatury, używamy instrukcji wejścia/wyjścia. Na przykład aby pobrać imię użytkownika:</p>
        <pre><code className="cpp">#include &lt;iostream&gt;<br /><br />{"\n"}using namespace std;<br /><br />{"\n"}string imie;<br /><br />{"\n"}int main()<br />{"\n"}{"{"}<br />{"\n"}{"   "}cout &lt;&lt; endl &lt;&lt; "Podaj imie: ";<br />{"\n"}{"   "}cin &gt;&gt; imie;<br /><br />{"\n"}{"   "}cout &lt;&lt; "Podano imie:" &lt;&lt; imie;<br /><br />{"   "}return 0;<br />{"\n"}{"}"}</code></pre>
        <p>Analogicznie wczytujemy liczbę, wystarczy jedynie zmienić typ danych deklarowanej zmiennej na liczbowy.</p>
      </div>
            
        </Layout>
    );
}

export default Warunki;
