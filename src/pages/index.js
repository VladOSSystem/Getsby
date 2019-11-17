import React from 'react';
import Layout from '../components/layout';
import {Table, Container} from 'react-bootstrap';
const Index = () => {
    return (
        <Layout>
        <h1 className="d-flex justify-content-center">Inne systemy baz danych</h1>
            <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>#</th>
                <th>Systemy baz danych</th>
                <th>Typ</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Apache Derb</td>
                <td>znaczenie historyczne</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Corel Paradox</td>
                <td>komercyjny</td>
            </tr>
                <tr>
                <td>3</td>
                <td>Jacob</td>
                <td>Thornton</td>
            </tr>
            
            <tr>
            <td>4</td>
            <td>dBase</td>
            <td>znaczenie historyczne</td>
        </tr>
        
        <tr>
        <td>5</td>
        <td>FileMaker</td>
        <td>komercyjny</td>
    </tr>

    <tr>
    <td>6</td>
    <td>Microsoft Access</td>
    <td>komercyjny Microsoft</td>
</tr>

<tr>
<td>7</td>
<td>SQL</td>
<td>komercyjny</td>
</tr>

<tr>
<td>8</td>
<td>MySQL</td>
<td>otwarty i komercyjny</td>
</tr>

<tr>
<td>9</td>
<td>PostgreSQL</td>
<td>otwarty</td>
</tr>

<tr>
<td>10</td>
<td>PHP + MySQL</td>
<td>najczęściej w Internecie</td>
</tr>

<tr>
<td>11</td>
<td>Oracle</td>
<td>duże, transakcyjne bazy</td>
</tr>
            </tbody>
        </Table>
        </Layout>
    );
}

export default Index;
