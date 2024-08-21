import Aboutimg from "../asserts/project photos/43/img1.jpg"
export default function About()
{
    return <section id="about" className="flex flex-col md:flex-row bg-about  py-8 w-full  ">
        <img src={Aboutimg} className="md:w-1/2 px-5 md:py-5 "/>
        <div className="md:w-1/2 flex flex-col px-5 py-5 text-2xl text-white">
           <h1 className="text-4xl font-bold text-white border-b-2 border-spacing-1 mb-5 w-[175px]">About us</h1>
           <p className="pb-2 font-light text-justify">JiffyTech is your one-stop destination for hands-on project-based learning. We offer a diverse range of projects in IoT, embedded systems, web development, and machine learning to cater to the evolving technological landscape. Our focus lies in providing comprehensive guidance, enabling students to grasp the intricacies of real-world applications. By bridging the gap between theory and practice, we empower individuals to become proficient in the latest technologies and build a strong foundation for their future careers.</p>
          
        </div>
    </section> 
}