// Header.jsx
import "./HeaderPage.css";

let downloadPdf = () => {
  // Replace 'pdf_filename.pdf' with the actual name of your PDF file
  fetch('https://your-api-endpoint/.netlify/functions/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
  
  let pdfUrl="";
  if (window.location.hostname == 'localhost'){
     pdfUrl = 'http://'+ window.location.hostname + ':' + window.location.port + '/resources/resume.pdf';
  }else{
    pdfUrl = 'http://'+ window.location.hostname + '/resources/resume.pdf';
  }
  
  console.log(pdfUrl,'pdfUrl');
  window.open(pdfUrl);
}

const HeaderPage = () => {
  return (
    <div className='relative'>
      <div className="max-w-[530px] lg:max-w-[750px]">
        <h1 className="text-3xl font-bold  sm:text-4xl lg:text-5xl xl:text-6xl">Kuhandran Samudrapandiyan</h1>
        <div className='subtimax-w-[500px] mt-6 text-lg font-medium xl:max-w-lg md:text-xl 2xl:text-100 xl:leading-snug lg:text-2xltle'>Experienced in project management, React development, Scrum Master, banking, insurance, regulatory, fintech, JavaScript, Redux, Webpack.</div>
        <div className="flex flex-row justify-between px-3 py-4 sm:px-8 xl:px-12 lg:py-10">
        <button onClick={downloadPdf} className="bg-amber-200 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Download resume</button>
        </div>
      </div>
    </div>
  );
};



export default HeaderPage;
