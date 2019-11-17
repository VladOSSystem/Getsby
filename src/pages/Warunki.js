import React from 'react';
import Layout from '../components/layout';
const Warunki = () => {
    return (
        <Layout>
        <h1 className="d-flex justify-content-center">Instrukcja warunkowa</h1>
        <div className="post-content">
        <header>
        </header>
        <p>Instrukcja warunkowa to po prostu rozgałęzienie w działaniu programu (ang. if = jeżeli). W zależności od tego, czy warunek zawarty w instrukcji jest prawdziwy lub fałszywy, wykonane zostają inne instrukcje. Klauzula <code>else</code> jest opcjonalna, to znaczy nie musi koniecznie wystąpić – zależy to od nas i rozpatrywanego problemu. Składnia w pseudokodzie:</p> <pre><code className="cpp"> if (warunek_logiczny)<br /> {"{"}<br />{"    "}[instrukcje jeśli warunek_logiczny prawdziwy];<br /> {"}"}<br /> else<br /> {"{"}<br />{"    "}[instrukcje jeśli warunek_logiczny fałszywy];<br /> {"}"} </code></pre>
        <p>Rozważmy przykład bankomatu. Aby móc dokonać transakcji, użytkownik musi podać poprawny numer PIN. Sprawdzenia poprawności możemy dokonać instrukcją warunkową – załóżmy, że poprawny numer PIN to 1945:</p> <pre><code className="cpp"> if (PIN == 1945)<br /> {"{"}<br />{"    "}cout &lt;&lt; "Poprawny PIN" &lt;&lt; endl;<br /> {"}"}<br /> else<br /> {"{"}<br />{"    "}cout &lt;&lt; "Niepoprawny nr PIN!" &lt;&lt; endl;<br /> {"}"} </code></pre>
        <p>Zwróć uwagę na operator porównania <code>==</code>, będący podwójnym znakiem równości (w odróżnieniu od operatora przypisania wartości, który jest pojedynczy <code>=</code>). Pamiętaj, żeby nie umieszczać średnika w linii z nagłówkiem <code>if</code>, gdyż wówczas kompilator potraktuje średnik jako pustą instrukcję, zaś linie wewnątrz klamer wykonają się zawsze, niezależnie od warunku!</p> <pre><code className="cpp"> if (PIN == 1945); //średnik zmienił działanie instrukcji!<br /> {"{"}<br />{"    "}cout &lt;&lt; "Poprawny PIN" &lt;&lt; endl; // Ups, ta linia zawsze się wykona!<br /> {"}"} </code></pre>
        <p>Warunki mogą być złożone, zaś łącznikami są operatory: <code>&amp;&amp;</code>, <code>||</code>. Można także zanegować warunek z użyciem operatora <code>!</code>. Rozważmy przykład logowania do systemu operacyjnego:</p> <pre><code className="cpp"> if (login == "admin" &amp;&amp; haslo == "admin")<br /> {"{"}<br />{"     "}cout &lt;&lt; "Poprawny PIN" &lt;&lt; endl;<br /> {"}"} </code></pre>
        <p>Lub inna sytuacja - wprowadzanie w konsoli odpowiedzi na pytanie testowe, pisząc małą lub dużą literą. Operator OR <code>||</code> nadaje się idealnie, gdyż zarówno odpowiedź pisana tak: <code>a</code> jak i tak: <code>A</code> powinna zostać uznana za prawidłową.</p> <pre><code className="cpp"> if (odp == "a" || odp == "A")<br /> {"{"}<br />{"    "}cout &lt;&lt; "Poprawna odpowiedź, zdobywasz punkt!" &lt;&lt; endl;<br /> {"}"}<br /> else<br /> {"{"}<br />{"    "}cout &lt;&lt; "Błąd, nie zdobywasz punktu!" &lt;&lt; endl;<br /> {"}"} </code></pre>
        <p>Zauważmy, że oba warunki zamknięte są w nawiasie. Można także zapisać każdy warunek w osobnym nawiasie (o ile całość również zamkniemy najbardziej zewnętrzym nawiasem):</p> <pre><code className="cpp">if ((login == "admin") &amp;&amp; (haslo == "tajnehaslo"))</code></pre> <pre><code className="cpp">if ((odp == "a") || (odp == "A"))</code></pre>
        <h3>Operatory logiczne</h3>
        <p>Działanie operatorów logicznych <code>&amp;&amp;</code>, <code>||</code> dla dwóch warunków oraz negacja z użyciem operatora zaprzeczenia <code>!</code>:
        </p><p> <img src="https://miroslawzelent.pl/posts/and-or-negacja.jpg" className="img-responsive center-block" alt="Operatory &&, ||, !" />
        </p><p>Konkluzja jest prosta: operator AND <code>&amp;&amp;</code> zwraca wartość "prawda" <code>1</code>, tylko jeżeli oba warunki były prawdziwe (pomyśl o logowaniu - system "wpuszcza nas" tylko jeżeli zarówno login jak i hasło były prawidłowe (prawdziwe). Uwaga: w C++ obowiązuje konwencja, iż każda wartość liczbowa różna od zera odpowiada wartości <code>true</code>, a wartością liczbową odpowiadającą <code>false</code> jest tylko zero.</p>
        <p>Operator OR <code>||</code> daje wartość prawda, jeżeli przynajmniej jeden warunek były prawdziwy (na przykład sytuacja z podaniem małej lub dużej litery jako odpowiedzi w quizie).</p>
        <p>Negacja <code>!</code> (zgodnie ze swoją nazwą) zawsze zmienia wartość logiczną na przeciwną (prawda zmienia się na fałsz, zaś fałsz na prawdę). </p>
        <p>Uwaga - instrukcje warunkowe można zagnieżdżać, zatem po klauzuli <code>else</code> może pojawić się kolejna instrukcja warunkowa <code>if</code>. Po jeszcze więcej informacji odsyłam do <a href="https://miroslawzelent.pl/kurs-c++/instrukcja-warunkowa-if/" className="und" target="_blank">tego odcinka</a> kursu video (tak naprawdę artykuł ten stanowi pomocne notatki do tego odcinka).</p>
      </div>
            
        </Layout>
    );
}

export default Warunki;
