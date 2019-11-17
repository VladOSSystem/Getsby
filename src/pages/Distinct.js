import React from 'react';
import Layout from '../components/layout';
const Distinct = () => {
    return (
        <div>
        <Layout>
        
      <div className="article-content clearfix">
      <div className="above-entry-meta"></div>
      <header className="entry-header">
        <h1 className="entry-title">
          Wyróżnianie danych (DISTINCT) oraz sortowanie (ORDER BY)   		</h1>
      </header>
   
      <div className="entry-content clearfix">
        <p>Dzisiaj przeprowadzimy kolejne zapytania kierowane do bazy danych. W poprzedniej lekcji zaprezentowano klauzulę SELECT i WHERE, dzięki której można wybierać dane z z bazy.</p>
        <p>Na rozgrzewkę spróbujmy przetestować klauzulę DISTINCT. Wyobraźmy sobie sytuację, w której w tabeli mamy ok miliona rekordów. W kolumnie o nazwie „NAZWY_MIEJSCOWOSCI” wpisane są nazwy różnych miejscowości. Miejscowości te mogą się jednak powtarzać, dlatego aby w odpowiedzi otrzymać same unikatowe nazwy należy użyć własnie klauzuli DISTINCT.</p>{/* Crayon Syntax Highlighter v_2.7.2_beta */}
        <div id="crayon-5dd18bb23334b183049047" className="crayon-syntax crayon-theme-classic crayon-font-monaco crayon-os-pc print-yes notranslate" data-settings=" minimize scroll-mouseover" style={{marginTop: '12px', marginBottom: '12px', fontSize: '12px !important', lineHeight: '15px !important'}}>
          <div className="crayon-toolbar" data-settings=" mouseover overlay hide delay" style={{fontSize: '12px !important', height: '18px !important', lineHeight: '18px !important'}}><span className="crayon-title" />
            <div className="crayon-tools" style={{fontSize: '12px !important', height: '18px !important', lineHeight: '18px !important'}}><div className="crayon-button crayon-nums-button" title="Włącz/wyłącz numery linii"><div className="crayon-button-icon" /></div><div className="crayon-button crayon-plain-button" title="Włącz/wyłącz czysty kod"><div className="crayon-button-icon" /></div><div className="crayon-button crayon-wrap-button" title="Włącz/wyłącz zawijanie linii"><div className="crayon-button-icon" /></div><div className="crayon-button crayon-expand-button" title="Rozwiń kod"><div className="crayon-button-icon" /></div><div className="crayon-button crayon-copy-button" title="Kopiuj"><div className="crayon-button-icon" /></div><div className="crayon-button crayon-popup-button" title="Otwórz kod w nowym oknie"><div className="crayon-button-icon" /></div><span className="crayon-language">PgSQL</span></div></div>
          <div className="crayon-info" style={{minHeight: '16.8px !important', lineHeight: '16.8px !important'}} />
          <div className="crayon-plain-wrap"><textarea wrap="soft" className="crayon-plain print-no" data-settings="dblclick" readOnly style={{MozTabSize: 4, OTabSize: 4, WebkitTabSize: 4, tabSize: 4, fontSize: '12px !important', lineHeight: '15px !important'}} defaultValue={"SELECT DISTINCT NAZWY_MIEJSCOWOSCI FROM MIEJSCOWOSCI;"} /></div>
          <div className="crayon-main" style={{}}>
            <table className="crayon-table">
              <tbody><tr className="crayon-row">
                  <td className="crayon-nums " data-settings="show">
                    <div className="crayon-nums-content" style={{fontSize: '12px !important', lineHeight: '15px !important'}}><div className="crayon-num" data-line="crayon-5dd18bb23334b183049047-1">1</div></div>
                  </td>
                  <td className="crayon-code"><div className="crayon-pre" style={{fontSize: '12px !important', lineHeight: '15px !important', MozTabSize: 4, OTabSize: 4, WebkitTabSize: 4, tabSize: 4}}><div className="crayon-line" id="crayon-5dd18bb23334b183049047-1"><span className="crayon-st">SELECT</span><span className="crayon-h"> </span><span className="crayon-r">DISTINCT</span><span className="crayon-h"> </span>NAZWY_MIEJSCOWOSCI<span className="crayon-h"> </span><span className="crayon-st">FROM</span><span className="crayon-h"> </span>MIEJSCOWOSCI;</div></div></td>
                </tr>
              </tbody></table>
          </div>
        </div>
        {/* [Format Time: 0.0005 seconds] */}
        <p>W odpowiedzi otrzymaliśmy unikatowe nazwy miejscowości, ale jak wdać są one nieuporządkowane, dlatego aby to zrobić należy uzupełnić zapytanie.</p>{/* Crayon Syntax Highlighter v_2.7.2_beta */}
        <div id="crayon-5dd18bb233352136998788" className="crayon-syntax crayon-theme-classic crayon-font-monaco crayon-os-pc print-yes notranslate" data-settings=" minimize scroll-mouseover" style={{marginTop: '12px', marginBottom: '12px', fontSize: '12px !important', lineHeight: '15px !important'}}>
          <div className="crayon-toolbar" data-settings=" mouseover overlay hide delay" style={{fontSize: '12px !important', height: '18px !important', lineHeight: '18px !important'}}><span className="crayon-title" />
            <div className="crayon-tools" style={{fontSize: '12px !important', height: '18px !important', lineHeight: '18px !important'}}><div className="crayon-button crayon-nums-button" title="Włącz/wyłącz numery linii"><div className="crayon-button-icon" /></div><div className="crayon-button crayon-plain-button" title="Włącz/wyłącz czysty kod"><div className="crayon-button-icon" /></div><div className="crayon-button crayon-wrap-button" title="Włącz/wyłącz zawijanie linii"><div className="crayon-button-icon" /></div><div className="crayon-button crayon-expand-button" title="Rozwiń kod"><div className="crayon-button-icon" /></div><div className="crayon-button crayon-copy-button" title="Kopiuj"><div className="crayon-button-icon" /></div><div className="crayon-button crayon-popup-button" title="Otwórz kod w nowym oknie"><div className="crayon-button-icon" /></div><span className="crayon-language">MySQL</span></div></div>
          <div className="crayon-info" style={{minHeight: '16.8px !important', lineHeight: '16.8px !important'}} />
          <div className="crayon-plain-wrap"><textarea wrap="soft" className="crayon-plain print-no" data-settings="dblclick" readOnly style={{MozTabSize: 4, OTabSize: 4, WebkitTabSize: 4, tabSize: 4, fontSize: '12px !important', lineHeight: '15px !important'}} defaultValue={"SELECT DISTINCT NAZWY_MIEJSCOWOSCI FROM MIEJSCOWOSCI ORDER BY NAZWY_MIEJSCOWOSCI;"} /></div>
          <div className="crayon-main" style={{}}>
            <table className="crayon-table">
              <tbody><tr className="crayon-row">
                  <td className="crayon-nums " data-settings="show">
                    <div className="crayon-nums-content" style={{fontSize: '12px !important', lineHeight: '15px !important'}}><div className="crayon-num" data-line="crayon-5dd18bb233352136998788-1">1</div></div>
                  </td>
                  <td className="crayon-code"><div className="crayon-pre" style={{fontSize: '12px !important', lineHeight: '15px !important', MozTabSize: 4, OTabSize: 4, WebkitTabSize: 4, tabSize: 4}}><div className="crayon-line" id="crayon-5dd18bb233352136998788-1"><span className="crayon-st">SELECT</span><span className="crayon-h"> </span><span className="crayon-st">DISTINCT</span><span className="crayon-h"> </span>NAZWY_MIEJSCOWOSCI<span className="crayon-h"> </span><span className="crayon-st">FROM</span><span className="crayon-h"> </span>MIEJSCOWOSCI<span className="crayon-h"> </span><span className="crayon-st">ORDER BY</span><span className="crayon-h"> </span>NAZWY_MIEJSCOWOSCI;</div></div></td>
                </tr>
              </tbody></table>
          </div>
        </div>
        {/* [Format Time: 0.0006 seconds] */}
        <p>Jeśli w tabeli mamy oprócz nazw miejscowości jeszcze nazwę województwa, to możemy pogrupować również dane względem województw. W takim wypadku należy użyć podwójnego sortowania:</p>{/* Crayon Syntax Highlighter v_2.7.2_beta */}
        <div id="crayon-5dd18bb233355998006448" className="crayon-syntax crayon-theme-classic crayon-font-monaco crayon-os-pc print-yes notranslate" data-settings=" minimize scroll-mouseover" style={{marginTop: '12px', marginBottom: '12px', fontSize: '12px !important', lineHeight: '15px !important'}}>
          <div className="crayon-toolbar" data-settings=" mouseover overlay hide delay" style={{fontSize: '12px !important', height: '18px !important', lineHeight: '18px !important'}}><span className="crayon-title" />
            <div className="crayon-tools" style={{fontSize: '12px !important', height: '18px !important', lineHeight: '18px !important'}}><div className="crayon-button crayon-nums-button" title="Włącz/wyłącz numery linii"><div className="crayon-button-icon" /></div><div className="crayon-button crayon-plain-button" title="Włącz/wyłącz czysty kod"><div className="crayon-button-icon" /></div><div className="crayon-button crayon-wrap-button" title="Włącz/wyłącz zawijanie linii"><div className="crayon-button-icon" /></div><div className="crayon-button crayon-expand-button" title="Rozwiń kod"><div className="crayon-button-icon" /></div><div className="crayon-button crayon-copy-button" title="Kopiuj"><div className="crayon-button-icon" /></div><div className="crayon-button crayon-popup-button" title="Otwórz kod w nowym oknie"><div className="crayon-button-icon" /></div><span className="crayon-language">MySQL</span></div></div>
          <div className="crayon-info" style={{minHeight: '16.8px !important', lineHeight: '16.8px !important'}} />
          <div className="crayon-plain-wrap"><textarea wrap="soft" className="crayon-plain print-no" data-settings="dblclick" readOnly style={{MozTabSize: 4, OTabSize: 4, WebkitTabSize: 4, tabSize: 4, fontSize: '12px !important', lineHeight: '15px !important'}} defaultValue={"SELECT DISTINCT NAZWY_MIEJSCOWOSCI FROM MIEJSCOWOSCI ORDER BY NAZWY_MIEJSCOWOSCi, WOJEWODZTWA;"} /></div>
          <div className="crayon-main" style={{}}>
            <table className="crayon-table">
              <tbody><tr className="crayon-row">
                  <td className="crayon-nums " data-settings="show">
                    <div className="crayon-nums-content" style={{fontSize: '12px !important', lineHeight: '15px !important'}}><div className="crayon-num" data-line="crayon-5dd18bb233355998006448-1">1</div></div>
                  </td>
                  <td className="crayon-code"><div className="crayon-pre" style={{fontSize: '12px !important', lineHeight: '15px !important', MozTabSize: 4, OTabSize: 4, WebkitTabSize: 4, tabSize: 4}}><div className="crayon-line" id="crayon-5dd18bb233355998006448-1"><span className="crayon-st">SELECT</span><span className="crayon-h"> </span><span className="crayon-st">DISTINCT</span><span className="crayon-h"> </span>NAZWY_MIEJSCOWOSCI<span className="crayon-h"> </span><span className="crayon-st">FROM</span><span className="crayon-h"> </span>MIEJSCOWOSCI<span className="crayon-h"> </span><span className="crayon-st">ORDER BY</span><span className="crayon-h"> </span>NAZWY_MIEJSCOWOSCi,<span className="crayon-h"> </span>WOJEWODZTWA;</div></div></td>
                </tr>
              </tbody></table>
          </div>
        </div>
        {/* [Format Time: 0.0005 seconds] */}
        <p>ORDER BY umożliwia 2 rodzaje sortowania rosnące oraz malejące. Domyślne sortowanie to ASC (tzw: ascending), dlatego aby sortować on A do Z należy użyć tej klauzuli. W przypadku chęci sortowania malejącego od Z do A należy użyć DESC (z angielskiego descending). Sortowanie to podobnie wygląda w przypadku liczb tak więc rosnoco sortuje ASC a malejąco DESC.</p>
        <p>Spróbuj przećwiczyć na swojej bazie danych sortowania na polach liczbowych oraz tekstowych.</p></div>
    </div>
        </Layout>

        </div>
    );
}

export default Distinct;
