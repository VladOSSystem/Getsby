import React from 'react';
import Layout from '../components/layout';
const Int = () => {
    return (
        <Layout>
        <h1 className="d-flex justify-content-center">Integralność danych</h1>
            
      <div className="sentry">
      <div><p>W zarządzaniu danymi zachowanie ich integralności gwarantuje, że cyfrowe informacje nie ulegną uszkodzeniu a dostęp do nich mogą uzyskiwać lub je modyfikować wyłącznie osoby do tego upoważnione. Integralność polega na zachowaniu spójności, dokładności i wiarygodności danych w całym ich cyklu życia, a także zabezpieczeniu ich tak, żeby nie zostały zmienione, dodane lub usunięte w nieautoryzowany sposób. Zachowanie integralności danych (a zwłaszcza tzw. master data) ma krytyczne znaczenie dla ich właściciela.</p>
        <p><span id="more-9660" /></p>
        <p><strong>Jak zapewnić integralność danych?</strong></p>
        <p>Aby zachować integralność danych (<em>data integrity</em>), nie należy zmieniać ich w trakcie przesyłania oraz robić wszystko, żeby nie mogły zostać zmienione przez nieupoważnioną osobę lub aplikację. Wdrażanie takich rozwiązań, jak kontrola dostępu użytkowników czy kontrola wersji oprogramowania – mają na celu monitoring i zapobieganie błędnym zmianom lub przypadkowemu usunięciu autoryzowanych użytkowników. Inne metody sprawdzania integralności to dodawanie sum kontrolnych lub kryptograficznych sum kontrolnych.</p>
        <div id="attachment_9661" style={{maxWidth: '310px'}} className="wp-caption alignright"><a href="http://it-filolog.pl/wp-content/uploads/2017/05/źr.-Zephyr.png" rel="lightbox[9660]"><img className="size-medium wp-image-9661" src="http://it-filolog.pl/wp-content/uploads/2017/05/źr.-Zephyr-300x300.png" alt="" width={300} height={300} srcSet="http://it-filolog.pl/wp-content/uploads/2017/05/źr.-Zephyr-300x300.png 300w, http://it-filolog.pl/wp-content/uploads/2017/05/źr.-Zephyr-150x150.png 150w, http://it-filolog.pl/wp-content/uploads/2017/05/źr.-Zephyr-768x768.png 768w, http://it-filolog.pl/wp-content/uploads/2017/05/źr.-Zephyr-1024x1024.png 1024w, http://it-filolog.pl/wp-content/uploads/2017/05/źr.-Zephyr-185x185.png 185w, http://it-filolog.pl/wp-content/uploads/2017/05/źr.-Zephyr.png 1200w" sizes="(max-width: 300px) 100vw, 300px" /></a><p className="wp-caption-text">źr. Zephyr</p></div>
        <h6><span style={{color: '#003300'}}>Integralność danych polega na zagwarantowaniu im:</span></h6>
        <ul>
          <li>kompletności,</li>
          <li>wiarygodności,</li>
          <li>spójności,</li>
          <li>dokładności.</li>
        </ul>
        <p>Środki używane do zarządzania siecią mające zapewniać integralność danych obejmują: procedury zarządzania systemem dokumentacji, parametry i działania związane z utrzymaniem oraz tworzeniem planów odzyskiwania danych po awarii w przypadku zdarzeń, takich jak: awarie zasilania, awaria serwera lub cyberataki. Jeśli dane ulegną uszkodzeniu, konieczne jest udostępnienie kopii zapasowych oraz dodatkowych zasobów w celu przywrócenia do prawidłowego stanu danych, których naruszenie dotyczyło. Spójność, dokładność i wiarygodność danych mogą być też narażone na zagrożenia środowiskowe, takie jak ciepło lub kurz. Dlatego należy również podejmować działania, które zapewnią integralność poprzez kontrolę fizycznego środowiska połączeń terminali i serwerów.</p>
        <div id="attachment_9662" style={{maxWidth: '310px'}} className="wp-caption alignleft"><a href="http://it-filolog.pl/wp-content/uploads/2017/05/źr.-IDC.jpg" rel="lightbox[9660]"><img className="size-medium wp-image-9662" src="http://it-filolog.pl/wp-content/uploads/2017/05/źr.-IDC-300x223.jpg" alt="" width={300} height={223} srcSet="http://it-filolog.pl/wp-content/uploads/2017/05/źr.-IDC-300x223.jpg 300w, http://it-filolog.pl/wp-content/uploads/2017/05/źr.-IDC.jpg 631w" sizes="(max-width: 300px) 100vw, 300px" /></a><p className="wp-caption-text">źr. IDC</p></div>
        <p>Zmiany w danych mogą powstawać także w wyniku zdarzeń innych niż spowodowanych działaniami ludzkimi, na przykład w wyniku impulsu elektromagnetycznego (EMP) lub awarii serwera. W celu ochrony integralności danych w środowisku fizycznym, zalecane jest utrzymywanie i zabezpieczanie nośników transmisyjnych (takich jak kable i złącza) tak, aby nie mogły zostać one wykorzystane przez osoby niepowołane. Trzeba też zabezpieczać sprzęt i nośniki danych przed przepięciami, wyładowaniami elektrostatycznymi i magnesami.</p>
      </div>
    </div>
        </Layout>
    );
}

export default Int;
