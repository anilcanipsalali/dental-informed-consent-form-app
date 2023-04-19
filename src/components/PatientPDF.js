import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
} from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
});

const PDFstyles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 13,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Roboto",
  },
  date: {
    fontSize: 12,
    marginBottom: 5,
    alignSelf: "flex-end",
    fontFamily: "Roboto",
    width: 150,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  signatureText: {
    textAlign: "right",
    marginRight: 100,
    fontFamily: "Roboto",
    fontSize: 14,
  },
  signature: {
    width: 200,
    height: 100,
    marginBottom: 50,
    alignSelf: "flex-end",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PatientPDF = ({ patient }) => {
  return (
    <Document>
      <Page size="A4">
        <Text style={PDFstyles.header} fixed>
          Onam Formu
        </Text>
        <Text style={PDFstyles.text}>Adı Soyadı: </Text>
        <Text style={PDFstyles.text}>TCKN: </Text>
        <Text style={PDFstyles.text}>Yaşı: </Text>
        <Text style={PDFstyles.text}>E-Posta Adresi: </Text>
        <Text style={PDFstyles.text}>Ev Adresi: </Text>z
        <Text style={PDFstyles.text}>Ebeveyn Adı Soyadı: </Text>
        <Text style={PDFstyles.text}>Ebeveyn Telefon Numarası: </Text>
        <Text style={PDFstyles.text}>Diş Prosedürü: </Text>
        <Text style={PDFstyles.text}>Alerjisi Var Mı?: </Text>
        <Text style={PDFstyles.text}>Alerjisi: </Text>
        <Text style={PDFstyles.text}>İlaç Tedavisi Görüyor Mu?: </Text>
        <Text style={PDFstyles.text}>İlaç Tedavisi: </Text>
        <Text style={PDFstyles.text}>Tıbbi Durumu Var Mı?: </Text>
        <Text style={PDFstyles.text}>Tıbbi Durumu: </Text>
        <Text style={PDFstyles.date}>20/04/2023</Text>
        <Text style={PDFstyles.signatureText}>İmza:</Text>
        <Image
          style={PDFstyles.signature}
          src={patient.signature}
        />
        <Text
          style={PDFstyles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default PatientPDF;
