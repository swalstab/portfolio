import "./Impressum.css";

function Impressum() {
  return (
    <main className="impressum">
      <section>
        <div className="container--impressum ">
          <h2 className="heading-secondary">Impressum</h2>

          <h3 className="heading-tertiary">Angaben gemäß § 5 DDG</h3>
          <p>
            Stefanie Walstab
            <br />
            Hettnerstraße 4
            <br />
            01069 Dresden
          </p>
          <p className="margin-bottom-md">
            E-Mail: info.swalstab(at)gmail.com
            <br />
            Internet:{" "}
            <a href="https://swalstab.netlify.app/">swalstab.netlify.app</a>
          </p>

          <h3 className="heading-tertiary">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
          </h3>
          <p className="margin-bottom-md">
            Stefanie Walstab
            <br />
            (Anschrift wie oben)
          </p>

          <h3 className="heading-tertiary">Haftungsausschluss:</h3>
          <h4 className="heading-quaternary">Haftung für Inhalte</h4>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich
            gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            <br />
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese
            Inhalte umgehend entfernen.
          </p>
          <h4 className="heading-quaternary">Haftung für Links</h4>
          <p>
            Meine Website enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
            Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
            Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            <br />
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich
            derartige Links umgehend entfernen.
          </p>
          <h4 className="heading-quaternary">Urheberrecht</h4>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
            <br />
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte
            ich um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
          </p>

          {/* 
          
<h1>Impressum</h1><p>Angaben gemäß § 5 DDG</p><p>Max Muster - Musterberuf<br> 
c/o Beispielbüro<br> 
Musterweg<br> 
12345 Musterstadt <br> 
</p><p> <strong>Vertreten durch: </strong><br>
Max Muster<br>
</p><p><strong>Kontakt:</strong> <br>
Telefon: 01234-789456<br>
Fax: 1234-56789<br>
E-Mail: <a href='mailto:max@muster.de'>max@muster.de</a></br></p><p><strong>Umsatzsteuer-ID: </strong> <br>
Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: Musterustid.<br><br>
<strong>Wirtschafts-ID: </strong><br>
Musterwirtschaftsid<br>
</p>

<p><strong>Aufsichtsbehörde:</strong><br>
Musteraufsicht Musterstadt<br></p><p><strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong><br>
Max Muster <br> 
Musterweg<br> 
12345 Musterstadt <br></p> 

<p><strong>Haftungsausschluss: </strong><br><br>
<strong>Haftung für Inhalte</strong><br><br>
Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br><br><strong>Haftung für Links</strong><br><br>
Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br><br><strong>Urheberrecht</strong><br><br>
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p><br> 
Erstellt mit dem <a href="https://impressum-generator.de" rel="dofollow">Impressum-Generator</a> von WebsiteWissen.com, dem Ratgeber für <a href="https://websitewissen.com/website-erstellen" rel="dofollow">Website-Erstellung</a>, <a href="https://websitewissen.com/homepage-baukasten-vergleich" rel="dofollow">Homepage-Baukästen</a> und <a href="https://websitewissen.com/shopsysteme-vergleich" rel="dofollow">Shopsysteme</a>. Rechtstext von der <a href="https://www.kanzlei-hasselbach.de/" rel="dofollow">Kanzlei Hasselbach</a>. 

 

          */}
        </div>
      </section>
    </main>
  );
}

export default Impressum;
