import React from 'react';
import Layout from '../components/layout';
const Distinct = () => {
    return (
        <div>
        <Layout>
        <h1 className="d-flex justify-content-center">Oreratory LIKE, BETWEEN, IN</h1>
        <div className="sql">
        <br />
        <hr className="hr-orange" />
        <div className="clearfix">
        
        </div>
        <br />
        <h2>The SQL WHERE BETWEEN syntax</h2>
        <br />
        The general syntax is:
        <br />
        <pre className="prettyprint linenums lang-sql run code-hscroll"><ol className="linenums"><li className="L0"><span className="kwd">SELECT</span><span className="pln"> column-names</span></li><li className="L1"><span className="pln">{"  "}</span><span className="kwd">FROM</span><span className="pln"> table-name</span></li><li className="L2"><span className="pln"> </span><span className="kwd">WHERE</span><span className="pln"> column-name </span><span className="kwd">BETWEEN</span><span className="pln"> value1 </span><span className="kwd">AND</span><span className="pln"> value2</span></li></ol></pre>
        <br /><br />
        <hr className="hr-orange" />
        <div className="hidden-sm" style={{position: 'relative'}}>
          <table className="table-model hidden-xs" style={{zIndex: 10, position: 'absolute', top: '0px', right: '20px'}}>
            </table>
        </div>
        <br />
        <h2>SQL WHERE BETWEEN Examples</h2>
        <br /><br /><br />
        <b>Problem</b>: List all products between $10 and $20
        <pre className="prettyprint linenums lang-sql run code-hscroll"><ol className="linenums"><li className="L0"><span className="kwd">SELECT</span><span className="pln"> Id</span><span className="pun">,</span><span className="pln"> ProductName</span><span className="pun">,</span><span className="pln"> UnitPrice</span></li><li className="L1"><span className="pln">{"  "}</span><span className="kwd">FROM</span><span className="pln"> Product</span></li><li className="L2"><span className="pln"> </span><span className="kwd">WHERE</span><span className="pln"> UnitPrice </span><span className="kwd">BETWEEN</span><span className="pln"> </span><span className="lit">10</span><span className="pln"> </span><span className="kwd">AND</span><span className="pln"> </span><span className="lit">20</span></li><li className="L3"><span className="pln"> </span><span className="kwd">ORDER</span><span className="pln"> </span><span className="kwd">BY</span><span className="pln"> UnitPrice</span></li></ol></pre>
        <br /><br />
        <b>Results:</b> 29 records.
        <br /><br />
        <br /><br />
        <table className="table table-striped table-condensed" style={{width: '70%'}}>
          <tbody>
            <tr>
              <th>Id</th>
              <th>ProductName</th>
              <th>UnitPrice</th>
            </tr>
            <tr>
              <td>3</td>
              <td>Aniseed Syrup</td>
              <td>10.00</td>
            </tr>
            <tr>
              <td>21</td>
              <td>Sir Rodney's Scones</td>
              <td>10.00</td>
            </tr>
            <tr>
              <td>74</td>
              <td>Longlife Tofu</td>
              <td>10.00</td>
            </tr>
            <tr>
              <td>46</td>
              <td>Spegesild</td>
              <td>12.00</td>
            </tr>
            <tr>
              <td>31</td>
              <td>Gorgonzola Telino</td>
              <td>12.50</td>
            </tr>
            <tr>
              <td colSpan={3}><img src="/Images/ellipsis.png" /></td>
            </tr>
          </tbody>
        </table>
        <br /><br />
        <hr className="hr-orange" />
        <div className="hidden-sm" style={{position: 'relative'}}>
          <table className="table-model hidden-xs" style={{zIndex: 10, position: 'absolute', top: '0px', right: '20px'}}>
            </table>
        </div>
        <br />
        <br />
        <b>Problem</b>: List all products not between $10 and $100 sorted by price.
        <pre className="prettyprint linenums lang-sql run code-hscroll"><ol className="linenums"><li className="L0"><span className="kwd">SELECT</span><span className="pln"> Id</span><span className="pun">,</span><span className="pln"> ProductName</span><span className="pun">,</span><span className="pln"> UnitPrice</span></li><li className="L1"><span className="pln">{"  "}</span><span className="kwd">FROM</span><span className="pln"> Product</span></li><li className="L2"><span className="pln"> </span><span className="kwd">WHERE</span><span className="pln"> UnitPrice </span><span className="kwd">NOT</span><span className="pln"> </span><span className="kwd">BETWEEN</span><span className="pln"> </span><span className="lit">5</span><span className="pln"> </span><span className="kwd">AND</span><span className="pln"> </span><span className="lit">100</span></li><li className="L3"><span className="pln"> </span><span className="kwd">ORDER</span><span className="pln"> </span><span className="kwd">BY</span><span className="pln"> UnitPrice</span></li></ol></pre>
        <br /><br />
        <b>Results:</b> 4 records.
        <br /><br />
        <br /><br />
        <table className="table table-striped table-condensed" style={{width: '70%'}}>
          <tbody><tr>
              <th>Id</th>
              <th>ProductName</th>
              <th>UnitPrice</th>
            </tr>
            <tr>
              <td>33</td>
              <td>Geitost</td>
              <td>2.50</td>
            </tr>
            <tr>
              <td>24</td>
              <td>Guaraná Fantástica</td>
              <td>4.50</td>
            </tr>
            <tr>
              <td>29</td>
              <td>Thüringer Rostbratwurst</td>
              <td>123.79</td>
            </tr>
            <tr>
              <td>38</td>
              <td>Côte de Blaye</td>
              <td>263.50</td>
            </tr>
          </tbody></table>
        <hr className="hr-orange" />
        <div className="hidden-sm" style={{position: 'relative'}}>
          <table className="table-model hidden-xs" style={{zIndex: 10, position: 'absolute', top: '0px', right: '20px'}}>
            </table>
        </div>
        <br />
        <br />
        <b>Problem</b>: Get the number of orders and amount sold between Jan 1, 2013 and Jan 31, 2013.
        <pre className="prettyprint linenums lang-sql run code-hscroll"><ol className="linenums"><li className="L0"><span className="kwd">SELECT</span><span className="pln"> COUNT</span><span className="pun">(</span><span className="pln">Id</span><span className="pun">),</span><span className="pln"> SUM</span><span className="pun">(</span><span className="pln">TotalAmount</span><span className="pun">)</span></li><li className="L1"><span className="pln">{"  "}</span><span className="kwd">FROM</span><span className="pln"> </span><span className="pun">[</span><span className="kwd">Order</span><span className="pun">]</span></li><li className="L2"><span className="pln"> </span><span className="kwd">WHERE</span><span className="pln"> OrderDate </span><span className="kwd">BETWEEN</span><span className="pln"> </span><span className="str">'1/1/2013'</span><span className="pln"> </span><span className="kwd">AND</span><span className="pln"> </span><span className="str">'1/31/2013'</span></li></ol></pre>
        <br /><br />
        <b>Results:</b> 
        <br /><br />
        <br /><br />
        <table className="table table-striped table-condensed" style={{width: '40%'}}>
          <tbody><tr>
              <th>Count</th>
              <th>TotalAmount</th>
            </tr>
            <tr>
              <td>33</td>
              <td>66692.80</td>
            </tr>
          </tbody></table>
        <br />
        <hr className="hr-orange" />
        <br />
      </div>
        </Layout>

        </div>
    );
}

export default Distinct;
