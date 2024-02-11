// Header.jsx
import banking from "../../images/banking.png";
import complaince from "../../images/compliance.png"

const MilestoneContainer = () => {
    return (
        <div className="p-10">
            <div className="p-4">
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 lg:w- md:rounded-none md:rounded-s-lg" src={banking} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Enhanced Online Retail Banking UI/UX Project with React</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The project focused on enhancing the user interface and user experience of an online retail banking platform using React. Key responsibilities included upgrading libraries, providing solutions for architectural challenges, creating dynamic architecture, designing the Work Breakdown Structure (WBS), establishing timelines, supporting deployment, managing incident reports, guiding vendor development, and ensuring strict adherence to code quality standards.</p>
                    </div>
                </a>
            </div>
            <div className="p-4">
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={complaince} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Experienced Project Manager and Scrum Master Specializing in Incident and Root Cause Management</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Eexperience in project management, specializing in Incident and Root Cause management and React frontend development, I bring a blend of technical proficiency and agile leadership. Certified as a Scrum Master, I emphasize effective team collaboration and adaptability. My background in banking and insurance equips me with a deep understanding of regulatory frameworks and fintech trends in the Asian region.</p>
                    </div>
                </a>
            </div>
        </div>
    );
};



export default MilestoneContainer;
