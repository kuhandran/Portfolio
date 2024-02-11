// Header.jsx
import "./HeaderPage.css";

function downloadPdf() {
  // Replace 'pdf_filename.pdf' with the actual name of your PDF file
  const pdfUrl = 'http://'+ window.location.hostname + ':'  + window.location.port + '/Resources/KuhandranResume2024.pdf';
  
  fetch(pdfUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      // Create a URL for the blob
      const url = window.URL.createObjectURL(new Blob([blob]));
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      // Set the filename for the PDF
      link.setAttribute('download', 'your_pdf_filename.pdf');
      // Append the link to the body
      document.body.appendChild(link);
      // Trigger the download
      link.click();
      // Cleanup
      link.parentNode.removeChild(link);
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
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
